import LandingPage from "../components/LandingPage";
import StrategiesHomeSection from "../features/home/StrategiesHomeSection";
import AboutUsHomeSection from "../features/home/AboutUsHomeSection";
import StatisticsSection from "../features/home/StatisticsSection";
import GetIntouch from "../features/home/GetIntouch";
import SEO from "../components/SEO";
import BlogCarousel from "../features/home/BlogSection";

function Home() {
  return (
    <div className="">
      <SEO
        title="Run Alpha | Driven by Alpha"
        description="Leading data-driven investment management & financial planning service in Africa. Achieve returns and wealth optimization with unique investment strategies."
      />
      <LandingPage />
      <AboutUsHomeSection />
      <StatisticsSection />
      <StrategiesHomeSection />
      <GetIntouch />
      <BlogCarousel />
    </div>
  );
}

export default Home;
