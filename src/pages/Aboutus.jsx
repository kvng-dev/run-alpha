import HeroSectionCard from "../ui/HeroSectionCard";
import { aboutSections, heroSectionData } from "../data/data";
import { motion } from "framer-motion";
import AboutCard from "../features/about/AboutCard";
import SEO from "../components/SEO";

const AboutUs = () => {
  return (
    <>
      <SEO
        title="About RunAlpha - Nigeria's Premier Investment Management & Financial Advisory Firm in Lagos"
        description="RunAlpha is a leading investment management and wealth advisory firm in Lagos, Nigeria. Since 2021, we've delivered data-driven portfolio strategies, risk-adjusted returns, and comprehensive wealth planning for high-net-worth individuals. Our expert team specializes in asset management, family office services, and sustainable investment solutions."
        keywords="about RunAlpha, investment management firm Lagos, financial advisory Nigeria, wealth management company Lagos, asset management Nigeria, portfolio managers Lagos, financial advisors Nigeria, investment professionals, wealth planning experts, family office Nigeria"
        url="https://runalpha.co/aboutus"
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
