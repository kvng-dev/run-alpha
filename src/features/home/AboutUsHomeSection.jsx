import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

function AboutUsHomeSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/team-assets/pexels-vanessa-loring-5082960.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />

      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-5 py-14 sm:px-6 md:px-12 md:py-28 lg:py-36"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {/* Label */}
        <motion.div
          className="mb-6 flex items-center gap-3"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="bg-secondary h-[2px] w-10 rounded-full" />
          <span className="font-quicksand text-secondary text-sm font-semibold tracking-widest uppercase">
            About Us
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="font-lora mb-6 max-w-4xl text-2xl leading-snug font-bold text-white sm:text-3xl sm:mb-10 md:text-5xl lg:text-6xl"
          variants={fadeUp}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Our family office, private wealth, and investment advisory services
          focus on delivering sustainable,{" "}
          <span className="text-secondary">risk-adjusted returns</span> through{" "}
          <span className="text-secondary">data-driven strategies.</span>
        </motion.h2>

        {/* Body */}
        <motion.p
          className="font-quicksand mb-6 max-w-3xl text-sm leading-relaxed text-white/75 sm:mb-10 sm:text-base md:text-lg"
          variants={fadeUp}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Headquartered in Lagos, Nigeria, we are one of the leading
          independent family office and investment advisory firms committed to
          delivering private wealth management, family office services, and
          investment management with the highest level of service and
          transparency. We build long-term relationships founded on mutual
          trust and respect, and we thrive on data-driven results. Whether
          it&apos;s hedge funds, family office services, financial planning, or
          private wealth management for high-net-worth individuals, our team of
          experienced professionals is dedicated to delivering exceptional
          results for our clients in Lagos and across Nigeria.
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Link
            to="/aboutus"
            className="font-quicksand group inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:border-secondary hover:bg-secondary/10 sm:gap-3 sm:px-7 sm:py-3 sm:text-base"
          >
            Read more about us
            <BsArrowRight
              className="transition-transform duration-300 group-hover:translate-x-1"
              size={18}
            />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default AboutUsHomeSection;
