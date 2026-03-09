import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const GetIntouch = () => {
  return (
    <motion.section
      className="bg-alpha relative overflow-hidden py-20 text-center text-white md:py-28"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
      }}
    >
      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/5" />
      <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white/5" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 md:px-12">
        <motion.div
          className="mb-4 flex items-center justify-center gap-3"
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="bg-secondary h-[2px] w-8 rounded-full" />
          <span className="font-quicksand text-secondary text-sm font-semibold tracking-widest uppercase">
            Contact
          </span>
          <div className="bg-secondary h-[2px] w-8 rounded-full" />
        </motion.div>

        <motion.h2
          className="font-lora mb-4 text-3xl font-bold md:text-4xl"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          className="font-quicksand mx-auto mb-8 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Find out more about private wealth management, family office services,
          and investment opportunities in Lagos. Discover how we can help you
          achieve your financial goals.
        </motion.p>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Link
            to="/contact"
            className="font-quicksand group inline-flex items-center gap-3 rounded-full border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:border-secondary hover:bg-secondary/10"
          >
            Let&apos;s talk
            <BsArrowRight
              className="transition-transform duration-300 group-hover:translate-x-1"
              size={20}
            />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default GetIntouch;
