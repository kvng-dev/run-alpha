import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const PAGE_NAMES = {
  "/": "Home",
  "/aboutus": "About Us",
  "/services": "Services",
  "/team": "Team",
  "/contact": "Contact",
  "/hedge-fund": "Hedge Fund",
  "/disclaimer": "Disclaimer",
  "/privacy-policy": "Privacy Policy",
};

const SEO = ({
  title,
  description,
  keywords = "financial strategy, hedge fund, innovation, investments, wealth management, fintech, sustainable investments, financial solutions, portfolio management",
  image = "/logos/RUN%20ALPHA%20Logo%20-%20Black%20with%20White%20Background%20-%205000x5000.png",
  logo = "/logos/run-logo.svg",
  type = "website",
  noIndex = false,
  noFollow = false,
  author = "RunAlpha",
  publishedDate,
  modifiedDate,
}) => {
  const location = useLocation();
  const baseUrl = "https://runalpha.co";

  if (!title || !description) {
    console.warn("SEO: title and description are required");
  }

  const cleanPathname =
    location.pathname === "/" ? "/" : location.pathname.replace(/\/$/, "");
  const canonicalUrl =
    cleanPathname === "/" ? `${baseUrl}/` : `${baseUrl}${cleanPathname}`;
  const fullImageUrl = image.startsWith("http") ? image : `${baseUrl}${image}`;
  const fullLogoUrl = logo.startsWith("http") ? logo : `${baseUrl}${logo}`;
  const robotsContent = `${noIndex ? "noindex" : "index"},${noFollow ? "nofollow" : "follow"}`;
  const imageType = fullImageUrl.endsWith(".png") || fullImageUrl.includes(".png") ? "image/png" : "image/jpeg";

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
    description:
      "Leading financial advisory and investment management firm in Lagos, Nigeria",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1 Uwa Close, Off Billings Way, Oregun",
      addressLocality: "Lagos",
      addressRegion: "Lagos State",
      addressCountry: "NG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "6.5885",
      longitude: "3.3606",
    },
    telephone: "+2349093717972",
    email: "hello@runalpha.co",
    image: fullImageUrl,
    sameAs: [
      "https://www.linkedin.com/company/runalpha",
      "https://twitter.com/runalpha",
      "https://www.facebook.com/profile.php?id=61581323386413",
      "https://www.instagram.com/runalpha.co/",
    ],
    serviceType: [
      "Investment Management",
      "Financial Planning",
      "Wealth Management",
      "Financial Advisory",
      "Portfolio Management",
      "Asset Management",
    ],
    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },
    openingHours: "Mo-Fr 09:00-17:00",
    priceRange: "$$",
  };

  // Website schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: "RunAlpha",
    description: "Leading financial advisory and investment management firm in Lagos, Nigeria",
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

  // Breadcrumb schema - dynamically includes current page
  const breadcrumbItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: baseUrl,
    },
  ];

  if (cleanPathname !== "/") {
    const pageName = PAGE_NAMES[cleanPathname] || title;
    breadcrumbItems.push({
      "@type": "ListItem",
      position: 2,
      name: pageName,
      item: canonicalUrl,
    });
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems,
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

      {/* Open Graph Meta Tags - ALL REQUIRED TAGS */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="RunAlpha" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:secure_url" content={fullImageUrl} />
      <meta property="og:image:type" content={imageType} />
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
      <meta name="geo.position" content="6.5885;3.3606" />
      <meta name="ICBM" content="6.5885, 3.3606" />

      {/* Theme Color */}
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />

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
