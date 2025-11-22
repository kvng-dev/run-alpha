import HeroSectionCard from "../ui/HeroSectionCard";
import { heroSectionData, strategiesData } from "../data/data";
import StrategyAnimatedCard from "../features/strategies/StrategyAnimatedCard";
import SEO from "../components/SEO";

function Strategies() {
  return (
    <>
      {/* ✅ FIXED: Improved SEO with better title, description, keywords, and URL */}
      <SEO
        title="Investment Services - Wealth Management, Portfolio Management & Financial Advisory | RunAlpha Lagos"
        description="RunAlpha offers comprehensive investment services in Lagos, Nigeria: family office management, wealth planning, asset management, portfolio optimization, and financial advisory. Customized investment strategies for high-net-worth individuals seeking capital growth, risk management, and sustainable returns through data-driven portfolio analysis."
        keywords="investment services Lagos Nigeria, wealth management services Nigeria, portfolio management Lagos, asset management services Nigeria, family office services Lagos, financial advisory services Nigeria, wealth planning Lagos, investment advisory Nigeria, capital management services"
        url="https://runalpha.co/offerings"
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
