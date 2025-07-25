import HeroSectionCard from "../ui/HeroSectionCard"
import { aboutSections, heroSectionData } from "../data/data"
import { motion } from "framer-motion"
import AboutCard from "../features/about/AboutCard"
import SEO from "../components/SEO"

const AboutUs = () => {

  return (
    <div className="w-full relative bg-[#F3F3F3]">
      <SEO
      title="About Us | Run Alpha"
      description="Run Alpha, Nigeria's data-driven investment management and financial advisory firm. Learn about our commitment to risk-adjusted returns and wealth optimization"
      url="https://runalpha.co/aboutus"
    />
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
  )
}
export default AboutUs
