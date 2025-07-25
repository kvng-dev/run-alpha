import { motion } from "framer-motion";
import HeroSectionCard from "../ui/HeroSectionCard";
import { heroSectionData } from "../data/data";
import { Toaster } from "react-hot-toast";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

const HedgeFund = () => {
  return (
      <div className="w-full relative bg-gray-200">

      <SEO
        title="Hedge Fund | Run Alpha"
        description="Our approach combines cutting-edge technology with deep financial expertise to deliver superior risk-adjusted returns for institutional and accredited investors."
      />
     <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <HeroSectionCard data={heroSectionData.hedgefund} />
      </motion.div>

     <motion.div
          className="h-auto px-4 md:px-24 lg:px-32 py-38 flex flex-col lg:flex-row justify-center items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="md:p-10 p-2  py-8 rounded-lg md:shadow-md md:bg-white/50 backdrop-blur-sm border border-gray-200 font-quicksand"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-alpha font-quicksand font-bold text-3xl mb-4">
              Hedge Fund
            </h2>

            <p className="font-quicksand mb-6 text-alpha text-lg">
            Our approach seeks to provide positive and uncorrelated long-term returns through active management in a historically volatile asset class. Run Alpha's portfolios benefit from years of development and integration of trading, settlement, technology, and risk management within one firm.
            </p>

            <h3 className="font-semibold text-2xl mb-2">Investment Approach</h3>
            <p className="mb-4 text-lg">
              We use a combination of quantitative and qualitative tools to uncover independent, hard-to-find sources of return across global public and private markets.
            </p>

            <h3 className="font-semibold text-xl mb-2">Core Competencies</h3>
            <ul className="list-disc ml-6 space-y-1 mb-4 text-base">
              <li>Sovereign and Quasi-Sovereign Fixed Income</li>
              <li>Local Markets</li>
              <li>Macro Investing</li>
              <li>Long/Short Equities Investing</li>
            </ul>

          <Link to='/contact' className='hover:underline flex justify-end mt-8'>
            <p className="font-semibold">📩 Contact us for more information
            </p>
          </Link>
              </motion.div>
          </motion.div>

      </div>
  )
}
export default HedgeFund
