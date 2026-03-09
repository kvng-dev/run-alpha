import { motion } from "framer-motion";
import HeroSectionCard from "../ui/HeroSectionCard";
import { heroSectionData } from "../data/data";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const fadeUp = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const competencies = [
  {
    title: "Sovereign & Quasi-Sovereign Fixed Income",
    description:
      "Strategic positioning in government and quasi-government debt instruments for stable, risk-managed returns.",
  },
  {
    title: "Local Markets",
    description:
      "Deep expertise in Nigerian and African local markets, identifying undervalued opportunities.",
  },
  {
    title: "Macro Investing",
    description:
      "Top-down analysis of global macro trends to capture asymmetric risk-reward opportunities.",
  },
  {
    title: "Long/Short Equities",
    description:
      "Active equity strategies designed to generate alpha in both rising and falling markets.",
  },
];

const HedgeFund = () => {
  return (
    <>
      <SEO
        title="Hedge Fund - Alternative Investment Strategies | RunAlpha Lagos Nigeria"
        description="RunAlpha's hedge fund delivers superior risk-adjusted returns through active management, combining quantitative analysis with deep financial expertise. Sovereign fixed income, macro investing, and long/short equities strategies for institutional and accredited investors in Nigeria."
        keywords="hedge fund Nigeria, alternative investments Lagos, risk-adjusted returns Nigeria, macro investing, fixed income Nigeria, equities investing Lagos, institutional investment Nigeria, accredited investor fund"
      />

      <div className="relative w-full">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <HeroSectionCard data={heroSectionData.hedgefund} />
        </motion.div>

        {/* Main content */}
        <div className="bg-alpha/5">
          <motion.div
            className="mx-auto max-w-6xl px-6 py-20 md:px-12 lg:py-28"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
          >
            {/* Two-column intro */}
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Left: overview */}
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <span className="font-quicksand text-secondary mb-4 inline-block text-sm font-semibold tracking-widest uppercase">
                  Alternative Investments
                </span>
                <h2 className="font-lora text-alpha mb-6 text-3xl font-bold md:text-4xl">
                  Hedge Fund
                </h2>
                <p className="font-quicksand mb-6 text-lg leading-relaxed text-gray-600">
                  Our approach seeks to provide positive and uncorrelated long-term
                  returns through active management in a historically volatile asset
                  class. Run Alpha's portfolios benefit from years of development
                  and integration of trading, settlement, technology, and risk
                  management within one firm.
                </p>
                <div className="bg-alpha/5 border-l-4 border-secondary rounded-r-lg p-5">
                  <h3 className="font-lora text-alpha mb-2 text-xl font-semibold">
                    Investment Approach
                  </h3>
                  <p className="font-quicksand text-gray-600">
                    We use a combination of quantitative and qualitative tools to
                    uncover independent, hard-to-find sources of return across global
                    public and private markets.
                  </p>
                </div>
              </motion.div>

              {/* Right: core competencies grid */}
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h3 className="font-lora text-alpha mb-6 text-2xl font-semibold">
                  Core Competencies
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {competencies.map((item, index) => (
                    <motion.div
                      key={item.title}
                      className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.3 + index * 0.1,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                    >
                      <div className="bg-secondary/10 mb-3 flex h-9 w-9 items-center justify-center rounded-lg">
                        <span className="text-secondary text-sm font-bold">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h4 className="font-quicksand text-alpha mb-1 font-semibold">
                        {item.title}
                      </h4>
                      <p className="font-quicksand text-sm leading-relaxed text-gray-500">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* CTA */}
            <motion.div
              className="mt-16 text-center"
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Link
                to="/contact"
                className="bg-alpha font-quicksand group inline-flex items-center gap-3 rounded-full px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:shadow-lg hover:brightness-110"
              >
                Contact us for more information
                <BsArrowRight
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  size={20}
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HedgeFund;
