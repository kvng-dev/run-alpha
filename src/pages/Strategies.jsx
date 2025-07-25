import HeroSectionCard from "../ui/HeroSectionCard"
import { heroSectionData, strategiesData, } from "../data/data"
import StrategyAnimatedCard from "../features/strategies/StrategyAnimatedCard"
import SEO from "../components/SEO"

function Strategies() {
  return (
    <div className="w-full relative">
         <SEO
        title="Offerings | Our Offerings"
        description="Run Alpha offers family office services, wealth planning, and asset management for Nigerian investors. Discover data-driven strategies built for your goals."
        url="https://runalpha.co/offerings"
      />
      <HeroSectionCard data={heroSectionData.strategies} />
      <div className="w-full">
        {strategiesData.map((strategy, index) => (
            <StrategyAnimatedCard
              key={index}
              title={strategy.title}
              description={strategy.description}
              image={strategy.image}
              services={strategy.services}
              reverse={index % 2 == 0}
              index={index} // Alternates layout
              disclaimerButton={strategy.disclaimerButton} // Show disclaimer button if true
            />

        ))}

      </div>
    </div>
  )
}

export default Strategies
