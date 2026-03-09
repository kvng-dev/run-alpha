import HeroSectionCard from "../ui/HeroSectionCard";
import { aboutSections, heroSectionData } from "../data/data";
import { motion } from "framer-motion";
import AboutCard from "../features/about/AboutCard";
import SEO from "../components/SEO";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const whyChooseItems = [
  {
    title: "True Independence",
    text: "No conflicts of interest, no proprietary products; your success is our only agenda.",
  },
  {
    title: "Fiduciary Standard",
    text: "We are legally and ethically bound to act in your best interest.",
  },
  {
    title: "Boutique Approach",
    text: "Personalized private wealth management for high-net-worth individuals and families.",
  },
  {
    title: "Local Expertise",
    text: "Deep understanding of Nigerian markets, regulations, and family dynamics.",
  },
  {
    title: "Comprehensive Services",
    text: "From investment management to estate planning, wealth transfer, and family office solutions, we have you covered!",
  },
];

const fadeUp = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const AboutUs = () => {
  return (
    <>
      <SEO
        title="About Run Alpha | Family Office and Private Wealth Service Providers, Lagos, Nigeria"
        description="Learn about Run Alpha, Lagos's independent family office and private wealth management firm. Boutique services for high-net-worth families since 2021."
        keywords="about Run Alpha, family office Lagos Nigeria, private wealth advisor Lagos, independent wealth management Nigeria, family office services Nigeria, private wealth management firm Lagos, high-net-worth family office, estate planning Nigeria, wealth transfer Lagos, boutique wealth advisor Nigeria"
      />

      <div className="relative w-full">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <HeroSectionCard data={heroSectionData.about} />
        </motion.div>

        {/* About sections */}
        <div>
          {aboutSections.map((section, index) => (
            <AboutCard
              key={index}
              {...section}
              index={index}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>

        {/* Why Choose Run Alpha */}
        <section className="bg-alpha relative overflow-hidden py-20 text-white md:py-28">
          {/* Decorative circles */}
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/5" />
          <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white/5" />

          <motion.div
            className="relative z-10 mx-auto max-w-6xl px-6 md:px-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {/* Section header */}
            <motion.div
              className="mb-14 text-center"
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="font-quicksand text-secondary mb-4 inline-block text-sm font-semibold tracking-widest uppercase">
                Why Choose Us
              </span>
              <h2 className="font-lora mb-4 text-3xl font-bold md:text-4xl">
                Why Choose Run Alpha as Your Private Wealth Advisor in Lagos
              </h2>
              <p className="font-quicksand mx-auto max-w-3xl text-base leading-relaxed text-white/70 md:text-lg">
                As an independent family office and private wealth management firm
                in Lagos, we stand apart from traditional banks and product-driven
                advisors:
              </p>
            </motion.div>

            {/* Cards grid */}
            <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {whyChooseItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-secondary/30 hover:bg-white/10"
                  variants={fadeUp}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <div className="bg-secondary/20 mb-4 flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-300 group-hover:bg-secondary/30">
                    <FaCheck className="text-secondary text-sm" />
                  </div>
                  <h3 className="font-quicksand mb-2 text-lg font-bold">
                    {item.title}
                  </h3>
                  <p className="font-quicksand text-sm leading-relaxed text-white/70">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              className="mt-14 text-center"
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Link
                to="/contact"
                className="font-quicksand group inline-flex items-center gap-3 rounded-full border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:border-secondary hover:bg-secondary/10"
              >
                Get in touch with us
                <BsArrowRight
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  size={20}
                />
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
