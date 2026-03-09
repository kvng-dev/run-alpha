import { heroSectionData } from "../data/data";
import HeroSectionCard from "../ui/HeroSectionCard";
import { motion } from "framer-motion";
import TeamSection from "../features/team/TeamSection";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const fadeUp = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const teamImages = [
  {
    src: "/team-assets/tobias-mrzyk-iuqmGmst5Po-unsplash.jpg",
    alt: "RunAlpha team collaboration 1",
  },
  {
    src: "/team-assets/helena-lopes-PGnqT0rXWLs-unsplash.jpg",
    alt: "RunAlpha team collaboration 2",
  },
  {
    src: "/ninthgrid-4-RLopzTVQ8-unsplash.jpg",
    alt: "RunAlpha team collaboration 3",
  },
  {
    src: "/team-assets/chang-duong-Sj0iMtq_Z4w-unsplash.jpg",
    alt: "RunAlpha team collaboration 4",
  },
];

function Team() {
  return (
    <>
      <SEO
        title="Investment Team - Expert Financial Advisors & Portfolio Managers | RunAlpha Nigeria"
        description="Meet RunAlpha's experienced investment professionals and financial advisors in Lagos, Nigeria. Our team brings 36+ years of cumulative expertise in wealth management, portfolio management, asset allocation, and investment advisory. Certified professionals dedicated to delivering exceptional results through data-driven strategies."
        keywords="investment team Nigeria, financial advisors Lagos, portfolio managers Nigeria, wealth management experts Lagos, certified financial planners Nigeria, investment professionals Lagos, asset managers Nigeria, financial advisory team"
      />

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <HeroSectionCard data={heroSectionData.teams} />
      </motion.div>

      {/* Meet The Team */}
      <section className="bg-gray-50 py-20 md:py-28">
        <motion.div
          className="mx-auto max-w-7xl px-6 md:px-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.div
            className="mb-14 text-center"
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="font-quicksand text-secondary mb-4 inline-block text-sm font-semibold tracking-widest uppercase">
              Our People
            </span>
            <h2 className="font-lora text-alpha mb-4 text-3xl font-bold md:text-4xl">
              Meet The Team
            </h2>
            <p className="font-quicksand mx-auto max-w-2xl text-gray-600 md:text-lg">
              Our team of experienced professionals combines deep expertise in
              portfolio management, financial analysis, and wealth optimization.
            </p>
          </motion.div>

          <TeamSection />
        </motion.div>
      </section>

      {/* Join Our Team + Workplace & Culture — two-column sections */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl space-y-24 px-6 md:px-12">
          {/* Join Our Team */}
          <motion.div
            className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            <motion.div
              className="flex-1"
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="/pexels-diva-plavalaguna-6149793.jpg"
                  alt="RunAlpha team collaboration workspace"
                  className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105 lg:h-[420px]"
                  loading="lazy"
                />
              </div>
            </motion.div>
            <motion.div
              className="flex-1 space-y-5"
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="font-quicksand text-secondary text-sm font-semibold tracking-widest uppercase">
                Careers
              </span>
              <h2 className="font-lora text-alpha text-2xl font-bold md:text-3xl lg:text-4xl">
                Join Our Team
              </h2>
              <p className="font-quicksand max-w-xl text-base leading-relaxed text-gray-600 lg:text-lg">
                In order to achieve success, we rely on our most important asset:
                the collaborative effort, resourcefulness and talent of our
                employees. Our continued success is truly determined by our ability
                to attract and retain exceptional talent. We are always on the
                lookout for team-oriented individuals with a capacity to apply
                creative and scientific thinking to solve challenging problems.
                Perhaps you can join us?
              </p>
            </motion.div>
          </motion.div>

          {/* Workplace & Culture */}
          <motion.div
            className="flex flex-col items-center gap-12 lg:flex-row-reverse lg:gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            <motion.div
              className="flex-1"
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="/team-assets/annie-spratt-QckxruozjRg-unsplash.jpg"
                  alt="RunAlpha workplace culture and team environment"
                  className="h-auto w-full rounded-2xl object-cover transition-transform duration-700 hover:scale-105 lg:h-[420px]"
                  loading="lazy"
                />
              </div>
            </motion.div>
            <motion.div
              className="flex-1 space-y-5"
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="font-quicksand text-secondary text-sm font-semibold tracking-widest uppercase">
                Culture
              </span>
              <h2 className="font-lora text-alpha text-2xl font-bold md:text-3xl lg:text-4xl">
                Workplace & Culture
              </h2>
              <p className="font-quicksand max-w-xl text-base leading-relaxed text-gray-600 lg:text-lg">
                We believe that a successful and productive team is one where
                everyone feels valued and respected. Our culture values open
                communication, collaboration, and a growth mindset. We also strive
                to create a work environment that fosters a sense of belonging and
                purpose. Our focus is on providing a supportive and inclusive
                environment where employees feel comfortable expressing their
                thoughts, ideas, and concerns. As a team-oriented company, we
                believe that every member contributes to the success of our
                organization.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What We Do — full-width split */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <motion.div
          className="bg-alpha flex flex-col justify-center px-8 py-16 text-white md:px-16 lg:px-20 lg:py-24"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="font-quicksand text-secondary mb-4 inline-block text-sm font-semibold tracking-widest uppercase">
            What We Do
          </span>
          <h2 className="font-lora mb-6 text-2xl font-bold md:text-3xl">
            What We Do
          </h2>
          <p className="font-quicksand max-w-lg text-base leading-relaxed text-white/80 lg:text-lg">
            We specialize in developing innovative and sustainable investment
            solutions that help our clients achieve their financial goals. Our team
            of experts combines expertise in portfolio management, financial
            analysis, and wealth optimization. We continuously strive to improve our
            processes, technology, and communication to ensure that our clients
            receive the best possible results.
          </p>
        </motion.div>
        <motion.div
          className="relative aspect-[4/3] overflow-hidden lg:aspect-auto"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="/pexels-olly-3769021.jpg"
            alt="RunAlpha team working on investment strategies"
            loading="lazy"
          />
        </motion.div>
      </section>

      {/* Team image grid */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {teamImages.map((image, index) => (
          <motion.div
            key={index}
            className="relative aspect-[3/2] overflow-hidden"
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-110"
              loading="lazy"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* What We Offer */}
      <section className="bg-gray-50 py-20 md:py-28">
        <motion.div
          className="mx-auto max-w-3xl px-6 text-center md:px-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="font-quicksand text-secondary mb-4 inline-block text-sm font-semibold tracking-widest uppercase">
              Our Promise
            </span>
            <h2 className="font-lora text-alpha mb-6 text-2xl font-bold md:text-3xl">
              What We Offer
            </h2>
            <p className="font-quicksand text-base leading-relaxed text-gray-600 lg:text-lg">
              At{" "}
              <Link to="/" className="text-secondary hover:underline">
                RunAlpha,
              </Link>{" "}
              we strive to offer a comprehensive and transparent investment
              experience that aligns with our clients' financial goals and risk
              tolerance. We believe that by providing a safe, transparent, and
              accessible platform, we can help clients make informed decisions
              while also fostering a culture of continuous learning and growth. Our
              mission is to create a platform that empowers individuals to make
              informed decisions, while also fostering a culture of continuous
              learning and growth.
            </p>
          </motion.div>

          <motion.div
            className="mt-10"
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Link
              to="/contact"
              className="bg-alpha font-quicksand group inline-flex items-center gap-3 rounded-full px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:shadow-lg hover:brightness-110"
            >
              Get in touch
              <BsArrowRight
                className="transition-transform duration-300 group-hover:translate-x-1"
                size={20}
              />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

export default Team;
