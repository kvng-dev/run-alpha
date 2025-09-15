import { motion } from "framer-motion";
import HeroSectionCard from "../ui/HeroSectionCard";
import { heroSectionData } from "../data/data";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

const HedgeFund = () => {
  return (
    <div className="relative w-full bg-gray-200">
      <SEO
        title="Hedge Fund | Run Alpha"
        description="Our approach combines cutting-edge technology with deep financial expertise to deliver superior risk-adjusted returns for institutional and accredited investors."
        url="https://runalpha.co/hedge-fund"
        type="website"
      />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <HeroSectionCard data={heroSectionData.hedgefund} />
      </motion.div>

      <motion.div
        className="flex h-auto flex-col items-center justify-center px-4 py-38 md:px-24 lg:flex-row lg:px-32"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="font-quicksand rounded-lg border border-gray-200 p-2 py-8 backdrop-blur-sm md:bg-white/50 md:p-10 md:shadow-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-alpha font-quicksand mb-4 text-3xl font-bold">
            Hedge Fund
          </h2>

          <p className="font-quicksand text-alpha mb-6 text-lg">
            Our approach seeks to provide positive and uncorrelated long-term
            returns through active management in a historically volatile asset
            class. Run Alpha's portfolios benefit from years of development and
            integration of trading, settlement, technology, and risk management
            within one firm.
          </p>

          <h3 className="mb-2 text-2xl font-semibold">Investment Approach</h3>
          <p className="mb-4 text-lg">
            We use a combination of quantitative and qualitative tools to
            uncover independent, hard-to-find sources of return across global
            public and private markets.
          </p>

          <h3 className="mb-2 text-xl font-semibold">Core Competencies</h3>
          <ul className="mb-4 ml-6 list-disc space-y-1 text-base">
            <li>Sovereign and Quasi-Sovereign Fixed Income</li>
            <li>Local Markets</li>
            <li>Macro Investing</li>
            <li>Long/Short Equities Investing</li>
          </ul>

          <Link to="/contact" className="mt-8 flex justify-end hover:underline">
            <p className="font-semibold">📩 Contact us for more information</p>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};
export default HedgeFund;
