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
    },
    name: "RunAlpha",
    alternateName: "Run Alpha",
    description: "Leading financial advisory and investment management firm",
    address: {
      "@type": "PostalAddress",
      addressCountry: "NG",
      addressLocality: "Lagos",
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
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: fullImageUrl,
    },
    ...(publishedDate && { datePublished: publishedDate }),
    ...(modifiedDate && { dateModified: modifiedDate }),
    inLanguage: "en-US",
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robotsContent} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph - ALL required tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:secure_url" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="RunAlpha" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:site" content="@runalpha" />

      {/* Additional Meta */}
      <meta httpEquiv="content-language" content="en" />
      <meta name="author" content={author} />
      <meta name="geo.region" content="NG-LA" />
      <meta name="geo.placename" content="Lagos" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(webPageSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
