import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function LandingPage() {
  return (
    <div className="relative h-dvh w-full overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/5224-183786646.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-5 tracking-wider text-white sm:px-6 md:px-16 lg:px-28 xl:px-36"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.25 } },
        }}
      >
        <div className="max-w-4xl space-y-4 pt-16 sm:space-y-6 sm:pt-20 md:pt-24">
          {/* Accent line + label */}
          <motion.div
            className="flex items-center gap-3"
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="bg-secondary h-[2px] w-10 rounded-full" />
            <p className="font-quicksand text-secondary text-sm font-semibold tracking-widest uppercase">
              Run Alpha
            </p>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="font-quicksand max-w-[280px] text-[1.75rem] leading-[1.15] font-bold sm:max-w-xl sm:text-4xl md:max-w-3xl md:text-5xl lg:max-w-5xl lg:text-7xl"
            variants={fadeUp}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Your Reliable Family Office and{" "}
            <span className="text-secondary">Private Wealth</span>{" "}
            Partner in Nigeria
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="font-quicksand text-base font-medium text-white/80 sm:text-lg md:text-2xl"
            variants={fadeUp}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-secondary">Driven by Alpha,</span>{" "}
            Powered by Data
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Link
              to="/services"
              className="font-quicksand group mt-1 inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:border-secondary hover:bg-secondary/10 sm:mt-2 sm:gap-3 sm:px-7 sm:py-3 sm:text-base"
            >
              Explore our services
              <BsArrowRight
                className="transition-transform duration-300 group-hover:translate-x-1"
                size={18}
              />
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 sm:bottom-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div
          className="flex h-9 w-5 items-start justify-center rounded-full border-2 border-white/30 p-1"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="h-2 w-1 rounded-full bg-white/70"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
