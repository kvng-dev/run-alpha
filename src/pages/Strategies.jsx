import HeroSectionCard from "../ui/HeroSectionCard";
import { heroSectionData, strategiesData } from "../data/data";
import StrategyAnimatedCard from "../features/strategies/StrategyAnimatedCard";
import SEO from "../components/SEO";

function Strategies() {
  return (
    <>
      {/* ✅ FIXED: Improved SEO with better title, description, keywords, and URL */}
      <SEO
        title="Our Services - Investment & Wealth Management | RunAlpha"
        description="Explore RunAlpha's comprehensive financial services including family office management, wealth planning, asset management, and investment advisory. Data-driven strategies tailored for Nigerian investors seeking sustainable growth and portfolio optimization."
        keywords="investment services Nigeria, wealth management services, family office Lagos, asset management Nigeria, financial planning services, portfolio management, wealth advisory Nigeria"
        url="https://runalpha.co/offerings"
        type="website"
      />

      {/* ✅ HeroSectionCard contains H1 */}
      <HeroSectionCard data={heroSectionData.strategies} />

      {/* ✅ Strategy cards contain H2 headings */}
      <div className="relative w-full">
        {strategiesData.map((strategy, index) => (
          <StrategyAnimatedCard
            key={index}
            title={strategy.title}
            description={strategy.description}
            image={strategy.image}
            services={strategy.services}
            reverse={index % 2 === 0} // ✅ Fixed: Use === instead of ==
            index={index}
            disclaimerButton={strategy.disclaimerButton}
          />
        ))}
      </div>
    </>
  );
}
export default Strategies;
