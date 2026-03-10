import { motion } from "framer-motion";

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

// eslint-disable-next-line react/prop-types
const HeroSectionCard = ({ data: { backgroundImage, description, title } }) => {
  return (
    <div
      className="relative min-h-[400px] w-full overflow-hidden bg-cover bg-center text-center sm:min-h-[50vh] md:min-h-[70vh] lg:min-h-[80vh] xl:min-h-[90vh]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      role="img"
      aria-label={`${title} - RunAlpha ${description.substring(0, 100)}`}
    >
      {/* Hidden img for Google Images indexing */}
      <img
        src={backgroundImage}
        alt={`${title} - RunAlpha investment advisory services in Lagos Nigeria`}
        className="sr-only"
        width="1200"
        height="630"
        loading="eager"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-6 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* Content */}
      <motion.div
        className="absolute inset-0 z-8 flex flex-col items-center justify-center px-6 pt-20 md:px-12 lg:px-16"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {/* Accent line */}
        <motion.div
          className="bg-secondary mb-6 h-[3px] w-12 rounded-full"
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />

        <motion.h1
          className="font-quicksand mb-6 max-w-5xl text-3xl font-extrabold text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
          variants={fadeUp}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="font-quicksand max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base md:text-lg lg:text-xl"
          variants={fadeUp}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {description}
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
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
      </motion.div>
    </div>
  );
};

export default HeroSectionCard;
