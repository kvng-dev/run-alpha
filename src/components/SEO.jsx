import React from "react";
import { Helmet } from "react-helmet"; 
import { useLocation } from "react-router-dom";

const SEO = ({
  title,
  description,
  keywords = "financial strategy, hedge fund, innovation, investments, wealth management, fintech, sustainable investments, financial solutions, portfolio management",
  url = "https://runalpha.co",
  image = "/team-assets/pexels-vanessa-loring-5082960.jpg",
  logo = "/logos/run-logo.svg",
  type = "website",
  noIndex = false,
  noFollow = false,
  author = "RunAlpha",
  publishedDate,
  modifiedDate,
}) => {
  const location = useLocation();

  // Ensure we have title and description
  if (!title || !description) {
    console.warn("SEO: title and description are required");
  }

  const baseUrl = url.replace(/\/$/, "");
  const cleanPathname =
    location.pathname === "/" ? "/" : location.pathname.replace(/\/$/, "");
  const canonicalUrl =
    cleanPathname === "/" ? `${baseUrl}/` : `${baseUrl}${cleanPathname}`;
  const fullImageUrl = image.startsWith("http") ? image : `${baseUrl}${image}`;
  const fullLogoUrl = logo.startsWith("http") ? logo : `${baseUrl}${logo}`;
  const robotsContent = `${noIndex ? "noindex" : "index"},${noFollow ? "nofollow" : "follow"}`;

  // Organization structured data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "@id": `${baseUrl}/#organization`,
    url: baseUrl,
    logo: {
      "@type": "ImageObject",
      url: fullLogoUrl,
      width: "512",
      height: "512",
    },
    name: "RunAlpha",
    alternateName: "Run Alpha",
    description: "Leading financial advisory and investment management firm",
    address: {
      "@type": "PostalAddress",
      addressCountry: "NG",
      addressLocality: "Lagos",
      addressRegion: "Lagos",
    },
    sameAs: [
      "https://www.linkedin.com/company/runalpha",
      "https://twitter.com/runalpha",
    ],
    serviceType: [
      "Investment Management",
      "Financial Planning",
      "Wealth Management",
      "Financial Advisory",
    ],
  };

  // Website schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: "RunAlpha",
    description: "Leading financial advisory and investment management firm",
    publisher: {
      "@id": `${baseUrl}/#organization`,
    },
    inLanguage: "en-US",
  };

  // WebPage schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: title,
    description: description,
    isPartOf: {
      "@id": `${baseUrl}/#website`,
    },
    about: {
      "@id": `${baseUrl}/#organization`,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: fullImageUrl,
      width: "1200",
      height: "630",
    },
    ...(publishedDate && { datePublished: publishedDate }),
    ...(modifiedDate && { dateModified: modifiedDate }),
    inLanguage: "en-US",
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
    ],
  };

  return (
    <Helmet>
      {/* HTML Language */}
      <html lang="en" />

      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robotsContent} />
      <meta name="author" content={author} />

      {/* Canonical Link */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="RunAlpha" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:secure_url" content={fullImageUrl} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@runalpha" />
      <meta name="twitter:creator" content="@runalpha" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content={title} />

      {/* Additional Meta Tags */}
      <meta httpEquiv="content-language" content="en" />
      <meta name="geo.region" content="NG-LA" />
      <meta name="geo.placename" content="Lagos" />

      {/* Structured Data - JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(webPageSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
