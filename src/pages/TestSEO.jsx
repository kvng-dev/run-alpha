import React, { useEffect, useState } from "react";
import SEO from "../components/SEO";

export default function TestSEO() {
  const [seoResults, setSeoResults] = useState({
    title: "",
    description: "",
    canonical: "",
    ogTags: [],
    schemas: [],
    h1Count: 0,
    h2Count: 0,
    internalLinks: 0,
  });

  useEffect(() => {
    // Run SEO checks after component mounts
    setTimeout(() => {
      const results = {
        title: document.title,
        description:
          document.querySelector('meta[name="description"]')?.content ||
          "NOT FOUND",
        canonical:
          document.querySelector('link[rel="canonical"]')?.href || "NOT FOUND",
        ogTags: Array.from(
          document.querySelectorAll('meta[property^="og:"]'),
        ).map((tag) => `${tag.getAttribute("property")}: ${tag.content}`),
        schemas: Array.from(
          document.querySelectorAll('script[type="application/ld+json"]'),
        ).map((script) => {
          try {
            const data = JSON.parse(script.textContent);
            return data["@type"] || "Unknown Schema";
          } catch {
            return "Invalid Schema";
          }
        }),
        h1Count: document.querySelectorAll("h1").length,
        h2Count: document.querySelectorAll("h2").length,
        internalLinks: document.querySelectorAll('a[href^="/"]').length,
      };
      setSeoResults(results);
    }, 500);
  }, []);

  const ResultItem = ({ label, value, expected, isGood }) => (
    <div className="border-b border-gray-200 py-4">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">{label}</h3>
          {expected && (
            <p className="mt-1 text-sm text-gray-500">Expected: {expected}</p>
          )}
          <p className="mt-2 break-words text-gray-700">
            {value || "NOT FOUND"}
          </p>
        </div>
        <span
          className={`ml-4 rounded px-3 py-1 text-sm font-semibold ${
            isGood ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          }`}
        >
          {isGood ? "✓ PASS" : "✗ FAIL"}
        </span>
      </div>
    </div>
  );

  const score = [
    seoResults.title !== "",
    seoResults.description !== "NOT FOUND",
    seoResults.canonical !== "NOT FOUND",
    seoResults.ogTags.length >= 4,
    seoResults.schemas.length >= 3,
    seoResults.h1Count === 1,
    seoResults.h2Count >= 2,
    seoResults.internalLinks >= 3,
  ].filter(Boolean).length;

  const totalTests = 8;
  const percentage = Math.round((score / totalTests) * 100);

  return (
    <>
      <SEO
        title="SEO Test Page - RunAlpha"
        description="This is a test page to verify SEO implementation is working correctly. All meta tags and structured data should be present."
        keywords="seo test, meta tags, structured data, testing"
      />

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="mx-auto max-w-4xl px-4">
          {/* Header */}
          <div className="mb-8 rounded-lg bg-white p-8 shadow-lg">
            <h1 className="mb-4 text-4xl font-bold text-gray-900">
              SEO Test Page
            </h1>
            <p className="text-xl text-gray-600">
              This page tests your SEO implementation
            </p>

            {/* Score */}
            <div className="mt-6 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
              <div className="text-center">
                <div className="mb-2 text-6xl font-bold">{percentage}%</div>
                <div className="text-xl">SEO Score</div>
                <div className="mt-2 text-sm opacity-90">
                  {score} out of {totalTests} tests passing
                </div>
              </div>
            </div>
          </div>

          {/* Test Results */}
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              Test Results
            </h2>

            <ResultItem
              label="Page Title"
              value={seoResults.title}
              expected="Should be descriptive and include keywords"
              isGood={seoResults.title !== ""}
            />

            <ResultItem
              label="Meta Description"
              value={seoResults.description}
              expected="Should be 150-160 characters"
              isGood={seoResults.description !== "NOT FOUND"}
            />

            <ResultItem
              label="Canonical URL"
              value={seoResults.canonical}
              expected="Should point to the correct page URL"
              isGood={seoResults.canonical !== "NOT FOUND"}
            />

            <ResultItem
              label="Open Graph Tags"
              value={`Found ${seoResults.ogTags.length} tags: ${seoResults.ogTags.slice(0, 3).join(", ")}${seoResults.ogTags.length > 3 ? "..." : ""}`}
              expected="Should have at least 4 tags (type, title, description, image)"
              isGood={seoResults.ogTags.length >= 4}
            />

            <ResultItem
              label="Schema.org Structured Data"
              value={`Found ${seoResults.schemas.length} schemas: ${seoResults.schemas.join(", ")}`}
              expected="Should have Organization, WebSite, WebPage schemas"
              isGood={seoResults.schemas.length >= 3}
            />

            <ResultItem
              label="H1 Heading"
              value={`Found ${seoResults.h1Count} H1 tag(s)`}
              expected="Should have exactly 1 H1 per page"
              isGood={seoResults.h1Count === 1}
            />

            <ResultItem
              label="H2 Headings"
              value={`Found ${seoResults.h2Count} H2 tag(s)`}
              expected="Should have at least 2 H2 tags"
              isGood={seoResults.h2Count >= 2}
            />

            <ResultItem
              label="Internal Links"
              value={`Found ${seoResults.internalLinks} internal link(s)`}
              expected="Should have at least 3 internal links"
              isGood={seoResults.internalLinks >= 3}
            />
          </div>

          {/* Content Sections for Testing */}
          <div className="mt-8 rounded-lg bg-white p-8 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              About This Test
            </h2>
            <p className="mb-4 text-gray-700">
              This page automatically checks your SEO implementation and
              displays the results. All tests should pass for optimal SEO
              performance.
            </p>

            <h2 className="mt-8 mb-4 text-2xl font-bold text-gray-900">
              How to Fix Issues
            </h2>
            <ul className="list-inside list-disc space-y-2 text-gray-700">
              <li>
                Make sure SEO component is imported and used on every page
              </li>
              <li>Verify react-helmet or react-helmet-async is installed</li>
              <li>
                Check that HelmetProvider wraps your app (if using async
                version)
              </li>
              <li>Ensure each page has exactly one H1 tag</li>
              <li>Add H2 tags for main content sections</li>
              <li>Include navigation with internal links</li>
            </ul>

            <h2 className="mt-8 mb-4 text-2xl font-bold text-gray-900">
              Next Steps
            </h2>
            <p className="mb-4 text-gray-700">
              After all tests pass, use these online tools to verify:
            </p>
            <ul className="list-inside list-disc space-y-2 text-gray-700">
              <li>
                Google Rich Results Test:{" "}
                <a
                  href="https://search.google.com/test/rich-results"
                  className="text-blue-600 hover:underline"
                >
                  Test your URL
                </a>
              </li>
              <li>
                Schema.org Validator:{" "}
                <a
                  href="https://validator.schema.org/"
                  className="text-blue-600 hover:underline"
                >
                  Validate schemas
                </a>
              </li>
              <li>
                Facebook Debugger:{" "}
                <a
                  href="https://developers.facebook.com/tools/debug/"
                  className="text-blue-600 hover:underline"
                >
                  Test OG tags
                </a>
              </li>
            </ul>
          </div>

          {/* View Source Button */}
          <div className="mt-8 text-center">
            <button
              onClick={() => {
                const source = document.documentElement.outerHTML;
                const blob = new Blob([source], { type: "text/html" });
                const url = URL.createObjectURL(blob);
                window.open(url, "_blank");
              }}
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              View Page Source
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
