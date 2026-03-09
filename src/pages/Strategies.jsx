import { motion } from "framer-motion";
import HeroSectionCard from "../ui/HeroSectionCard";
import { heroSectionData, strategiesData } from "../data/data";
import StrategyAnimatedCard from "../features/strategies/StrategyAnimatedCard";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

function Strategies() {
  return (
    <>
      <SEO
        title="Family Office and Private Wealth Services Lagos | RunAlpha"
        description="Independent family office and private wealth management services in Lagos. Portfolio management, estate planning for high-net-worth families in Nigeria."
        keywords="family office services Lagos, private wealth management Lagos Nigeria, portfolio management Lagos, estate planning Nigeria, wealth management services Lagos, family office Nigeria, private wealth advisor Lagos, high-net-worth wealth management, succession planning Nigeria, tax planning Lagos"
      />

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <HeroSectionCard data={heroSectionData.strategies} />
      </motion.div>

      {/* Strategy cards */}
      <div className="relative w-full">
        {strategiesData.map((strategy, index) => (
          <StrategyAnimatedCard
            key={strategy.id}
            title={strategy.title}
            description={strategy.description}
            image={strategy.image}
            services={strategy.services}
            reverse={index % 2 === 0}
            index={index}
            disclaimerButton={strategy.disclaimerButton}
          />
        ))}
      </div>

      {/* CTA section */}
      <motion.section
        className="bg-alpha py-20 text-center text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-lora mb-4 text-3xl font-bold md:text-4xl">
            Ready to get started?
          </h2>
          <p className="font-quicksand mb-8 text-lg text-white/70">
            Let us help you build a comprehensive wealth management strategy tailored to your unique needs and goals.
          </p>
          <Link
            to="/contact"
            className="font-quicksand group inline-flex items-center gap-3 rounded-full border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:border-secondary hover:bg-secondary/10"
          >
            Get in touch
            <BsArrowRight
              className="transition-transform duration-300 group-hover:translate-x-1"
              size={20}
            />
          </Link>
        </div>
      </motion.section>
    </>
  );
}

export default Strategies;
