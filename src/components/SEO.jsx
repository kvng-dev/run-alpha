import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const SEO = ({
  title,
  description,
  keywords = "financial strategy, hedge fund, innovation, investments, wealth management, fintech, sustainable investments, financial solutions, portfolio management, investments, financial planning, wealth management, portfolio management, financial solutions, sustainable investments, corporate finance, asset management, investment strategies, financial consulting, business growth, financial technology, digital transformation, risk management, venture capital, financial advisor",
  url = "https://runalpha.co",
  image = "/team-assets/pexels-vanessa-loring-5082960.jpg",
  logo = "/logos/run-logo.svg",
  type = "website",
  noIndex = false,
  noFollow = false,
}) => {
  const location = useLocation();

  // Remove trailing slash from base URL to avoid duplicates
  const baseUrl = url.replace(/\/$/, "");

  // Clean pathname - remove trailing slash except for root
  const cleanPathname =
    location.pathname === "/" ? "/" : location.pathname.replace(/\/$/, "");

  // Construct canonical URL properly
  const canonicalUrl =
    cleanPathname === "/" ? baseUrl : `${baseUrl}${cleanPathname}`;

  // Ensure absolute URLs for images
  const fullImageUrl = image.startsWith("http") ? image : `${baseUrl}${image}`;
  const fullLogoUrl = logo.startsWith("http") ? logo : `${baseUrl}${logo}`;

  // Construct robots meta content
  const robotsContent = `${noIndex ? "noindex" : "index"},${noFollow ? "nofollow" : "follow"}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robotsContent} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Prevent duplicate content from different URL variations */}
      <meta name="googlebot" content="index,follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="RunAlpha" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:site" content="@runalpha" />

      {/* Additional meta tags to prevent duplicates */}
      <meta httpEquiv="content-language" content="en" />
      <meta name="author" content="RunAlpha" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Structured Data for Google */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FinancialService",
          "@id": canonicalUrl,
          url: canonicalUrl,
          logo: fullLogoUrl,
          image: fullImageUrl,
          name: "RunAlpha",
          alternateName: "Run Alpha",
          description: description,
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
          areaServed: {
            "@type": "Country",
            name: "Nigeria",
          },
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
