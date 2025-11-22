import HeroSectionCard from "../ui/HeroSectionCard";
import { aboutSections, heroSectionData } from "../data/data";
import { motion } from "framer-motion";
import AboutCard from "../features/about/AboutCard";
import SEO from "../components/SEO";

const AboutUs = () => {
  return (
    <>
      <SEO
        title="About RunAlpha - Leading Investment Advisory in Lagos, Nigeria"
        description="RunAlpha is Nigeria's premier data-driven investment management and financial advisory firm. Learn about our commitment to delivering sustainable, risk-adjusted returns and wealth optimization for high-net-worth individuals."
        keywords="about runalpha, investment advisory Nigeria, wealth management Lagos, financial advisory team, data-driven investing, Nigerian investment firm"
        url="https://runalpha.co/aboutus"
        type="website"
      />

      {/* Main content wrapper */}
      <div className="relative w-full bg-[#F3F3F3]">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <HeroSectionCard data={heroSectionData.about} />
        </motion.div>

        <div className="">
          {aboutSections.map((section, index) => (
            <AboutCard key={index} {...section} reverse={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </>
  );
};
export default AboutUs;
