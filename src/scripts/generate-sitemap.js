// Import required Node.js modules
import fs from "fs"; // File system module for reading/writing files
import { create } from "xmlbuilder2"; // XML builder library to create XML documents

// Set the base URL for your website
const baseUrl = "https://www.runalpha.co";
// Add your routes here eg /about, /services, /portfolio, etc.
const routes = [
  "/", // Currently only includes the homepage
  "/aboutus",
  "/offerings",
  "/team",
  "/contact",
  "/disclaimer",
  "/privacy-policy",
  "/hedge-fund",
];

// Create a new XML document with the sitemap namespace
// This creates the root <urlset> element with proper XML declaration
const urlset = create({ version: "1.0" }).ele("urlset", {
  xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9",
});

// Loop through each route and add it to the sitemap
routes.forEach((route) => {
  // Create a new <url> element for each route
  const url = urlset.ele("url");

  // Add the full URL (base + route) as the <loc> element
  url.ele("loc").txt(baseUrl + route);

  // Add the current date/time as the <lastmod> element in ISO format
  url.ele("lastmod").txt(new Date().toISOString());

  // Note: You could also add optional elements like:
  // - <changefreq>: how often the page changes (daily, weekly, monthly)
  // - <priority>: importance of this URL relative to other URLs (0.0 to 1.0)
});

// Convert the XML object to a formatted string
const xml = urlset.end({ prettyPrint: true });

// Write the XML to the sitemap.xml file in the public directory
fs.writeFileSync("../../public/sitemap.xml", xml);

// Log a success message to the console
console.log("✅ Sitemap generated successfully!");

// --- Generate robots.txt ---
const robotsTxt = `User-agent: *
Disallow:

Sitemap: ${baseUrl}/sitemap.xml
`;

// Write robots.txt to the public directory
fs.writeFileSync("../../public/robots.txt", robotsTxt);

console.log("✅ robots.txt generated successfully!");
