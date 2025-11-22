import LandingPage from "../components/LandingPage";
import StrategiesHomeSection from "../features/home/StrategiesHomeSection";
import AboutUsHomeSection from "../features/home/AboutUsHomeSection";
import StatisticsSection from "../features/home/StatisticsSection";
import GetIntouch from "../features/home/GetIntouch";
import SEO from "../components/SEO";
import BlogCarousel from "../features/home/BlogSection";

function Home() {
  return (
    <>
      <SEO
        title="RunAlpha - Leading Investment Advisory & Wealth Management in Lagos"
        description="Expert investment management, financial planning, and wealth advisory services. Data-driven strategies for sustainable, risk-adjusted returns. Headquartered in Lagos, Nigeria."
        keywords="investment management Nigeria, wealth management Lagos, financial advisory, hedge fund, portfolio management, fintech Nigeria"
        url="https://runalpha.co"
        type="website"
      />
      <LandingPage />
      <AboutUsHomeSection />
      <StatisticsSection />
      <StrategiesHomeSection />
      <GetIntouch />
      <BlogCarousel />
    </>
  );
}

export default Home;
