import { Link } from "react-router-dom";
import { strategies } from "../../data/data";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

const fadeUp = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const StrategiesHomeSection = () => {
  return (
    <section className="bg-white py-20 md:py-28">
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
        {/* Section header */}
        <motion.div
          className="mb-14 text-center"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="bg-secondary h-[2px] w-8 rounded-full" />
            <span className="font-quicksand text-secondary text-sm font-semibold tracking-widest uppercase">
              What We Offer
            </span>
            <div className="bg-secondary h-[2px] w-8 rounded-full" />
          </div>
          <h2 className="font-lora text-alpha text-3xl font-bold md:text-4xl lg:text-5xl">
            Business Offerings
          </h2>
        </motion.div>

        {/* Strategy cards grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {strategies.map((strategy, index) => (
            <motion.div
              key={strategy.id}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Link
                to="/services"
                className="group relative block h-[400px] overflow-hidden rounded-2xl md:h-[450px]"
              >
                {/* Image */}
                <img
                  src={strategy.image}
                  alt={strategy.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-all duration-500 group-hover:from-black/90" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <span className="font-quicksand text-secondary mb-2 text-xs font-semibold tracking-widest uppercase">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-lora mb-2 text-2xl font-bold text-white md:text-3xl">
                    {strategy.title}
                  </h3>
                  <p className="font-quicksand mb-4 line-clamp-3 max-w-md text-sm leading-relaxed text-white/75 md:text-base">
                    {strategy.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-white transition-all duration-300 group-hover:gap-3">
                    <span className="font-quicksand">Learn more</span>
                    <BsArrowRight size={16} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default StrategiesHomeSection;
