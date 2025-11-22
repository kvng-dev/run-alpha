import LandingPage from "../components/LandingPage";
import StrategiesHomeSection from "../features/home/StrategiesHomeSection";
import AboutUsHomeSection from "../features/home/AboutUsHomeSection";
import StatisticsSection from "../features/home/StatisticsSection";
import GetIntouch from "../features/home/GetIntouch";
import SEO from "../components/SEO";
import BlogCarousel from "../features/home/BlogSection";
import { ExternalLink } from "lucide-react";

function Home() {
  return (
    <>
      <SEO
        title="Investment Management & Wealth Advisory in Lagos Nigeria | RunAlpha Financial Services"
        description="RunAlpha offers expert investment management, wealth planning, and financial advisory services in Lagos, Nigeria. Data-driven portfolio strategies for sustainable returns, risk management, and capital growth. Trusted by high-net-worth individuals since 2021."
        keywords="investment management Lagos Nigeria, wealth management services Nigeria, financial advisory Lagos, portfolio management Nigeria, asset management Lagos, hedge fund Nigeria, family office services, wealth planning Nigeria, capital growth strategies, risk-adjusted returns"
        url="https://runalpha.co"
      />
      <LandingPage />
      <AboutUsHomeSection />
      <StatisticsSection />
      <StrategiesHomeSection />
      <GetIntouch />
      <BlogCarousel />
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-16 lg:px-28 xl:px-36">
          <h2 className="font-lora text-alpha mb-8 text-center text-3xl font-bold">
            Investment Resources & Market Insights
          </h2>
          <p className="font-quicksand mx-auto mb-8 max-w-3xl text-center text-lg text-gray-700">
            Stay informed with insights from leading financial institutions and
            regulatory bodies. Understanding global markets and local
            regulations is crucial for successful investing in Nigeria.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* External Link 1 - CBN */}
            <a
              href="https://www.cbn.gov.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="mb-3 flex items-start justify-between">
                <h3 className="font-quicksand text-alpha text-lg font-semibold">
                  Central Bank of Nigeria
                </h3>
                <ExternalLink
                  className="text-alpha transition-transform group-hover:translate-x-1"
                  size={20}
                />
              </div>
              <p className="font-quicksand text-sm text-gray-600">
                Official monetary policy updates, forex regulations, and
                economic indicators affecting Nigerian investment markets.
              </p>
            </a>

            {/* External Link 2 - SEC Nigeria */}
            <a
              href="https://sec.gov.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="mb-3 flex items-start justify-between">
                <h3 className="font-quicksand text-alpha text-lg font-semibold">
                  Securities & Exchange Commission
                </h3>
                <ExternalLink
                  className="text-alpha transition-transform group-hover:translate-x-1"
                  size={20}
                />
              </div>
              <p className="font-quicksand text-sm text-gray-600">
                Regulatory guidelines, capital market updates, and investor
                protection information for Nigerian securities markets.
              </p>
            </a>

            {/* External Link 3 - Nigerian Exchange */}
            <a
              href="https://ngxgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="mb-3 flex items-start justify-between">
                <h3 className="font-quicksand text-alpha text-lg font-semibold">
                  Nigerian Exchange Group
                </h3>
                <ExternalLink
                  className="text-alpha transition-transform group-hover:translate-x-1"
                  size={20}
                />
              </div>
              <p className="font-quicksand text-sm text-gray-600">
                Real-time market data, listed securities, trading information,
                and investment opportunities on Nigeria's premier stock
                exchange.
              </p>
            </a>

            {/* External Link 4 - IMF Africa */}
            <a
              href="https://www.imf.org/en/Countries/NGA"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="mb-3 flex items-start justify-between">
                <h3 className="font-quicksand text-alpha text-lg font-semibold">
                  IMF Nigeria Economic Outlook
                </h3>
                <ExternalLink
                  className="text-alpha transition-transform group-hover:translate-x-1"
                  size={20}
                />
              </div>
              <p className="font-quicksand text-sm text-gray-600">
                International Monetary Fund analysis, economic forecasts, and
                policy recommendations for Nigeria's economy and investment
                climate.
              </p>
            </a>

            {/* External Link 5 - World Bank */}
            <a
              href="https://www.worldbank.org/en/country/nigeria"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="mb-3 flex items-start justify-between">
                <h3 className="font-quicksand text-alpha text-lg font-semibold">
                  World Bank Nigeria Data
                </h3>
                <ExternalLink
                  className="text-alpha transition-transform group-hover:translate-x-1"
                  size={20}
                />
              </div>
              <p className="font-quicksand text-sm text-gray-600">
                Economic indicators, development statistics, and investment
                climate assessments for informed portfolio decisions in West
                Africa.
              </p>
            </a>

            {/* External Link 6 - Bloomberg Markets */}
            <a
              href="https://www.bloomberg.com/africa"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="mb-3 flex items-start justify-between">
                <h3 className="font-quicksand text-alpha text-lg font-semibold">
                  Bloomberg Africa Markets
                </h3>
                <ExternalLink
                  className="text-alpha transition-transform group-hover:translate-x-1"
                  size={20}
                />
              </div>
              <p className="font-quicksand text-sm text-gray-600">
                Latest financial news, market analysis, and investment trends
                across African markets including Nigeria's equity and fixed
                income sectors.
              </p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
