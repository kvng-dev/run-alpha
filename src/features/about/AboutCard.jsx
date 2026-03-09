import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

// eslint-disable-next-line react/prop-types
const AboutCard = ({ title, text, imageUrl, reverse, linkUrl, index = 0 }) => (
  <section className={reverse ? "bg-gray-100" : "bg-white"}>
    <motion.div
      className={`mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-16 md:px-12 md:py-20 lg:gap-16 lg:py-24 ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
      }}
    >
      {/* Text */}
      <motion.div
        className="flex-1 space-y-5"
        variants={fadeUp}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="text-secondary font-quicksand text-sm font-semibold tracking-widest uppercase">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h2 className="font-lora text-alpha text-2xl font-bold md:text-3xl lg:text-4xl">
          {title}
        </h2>
        <p className="font-quicksand max-w-xl text-base leading-relaxed text-gray-600 lg:text-lg">
          {text}
        </p>
      </motion.div>

      {/* Image */}
      {linkUrl && (
        <motion.div
          className="flex-1"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Link to={linkUrl} className="group block overflow-hidden rounded-2xl">
            <img
              src={imageUrl}
              alt={title}
              className="h-auto w-full rounded-2xl object-cover shadow-lg transition-transform duration-700 group-hover:scale-105 lg:h-[420px]"
              loading="lazy"
            />
          </Link>
        </motion.div>
      )}
    </motion.div>
  </section>
);

export default AboutCard;
