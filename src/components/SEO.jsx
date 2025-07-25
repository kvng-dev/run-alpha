import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({
  title,
  description,
  keywords = "financial strategy, hedge fund, innovation, investments, wealth management, fintech, sustainable investments, financial solutions, portfolio management, investments, financial planning, wealth management, portfolio management, financial solutions, sustainable investments, corporate finance, asset management, investment strategies, financial consulting, business growth, financial technology, digital transformation, risk management, venture capital, financial advisor",
  url = "https://runalpha.co/",
  image = "/team-assets/pexels-vanessa-loring-5082960.jpg", // main image for previews
  logo = "/logos/run-logo.svg",  // logo used for structured data
  type = "website",
}) => {
 const fullImageUrl = new URL(image, url).toString();
 const fullLogoUrl = new URL(logo, url).toString();


  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* Structured Data for Google */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          url: url,
          logo: fullLogoUrl,
          name: "RunAlpha",
          sameAs: [
            "https://www.linkedin.com/company/runalpha",
            "https://twitter.com/runalpha", // optional social profiles
          ],
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
