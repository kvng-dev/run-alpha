import { motion } from "framer-motion";
import { FaCircle } from "react-icons/fa";
import { useNavigate } from "react-router";

const fadeUp = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

// eslint-disable-next-line react/prop-types
const StrategyAnimatedCard = ({
  title,
  description,
  image,
  index,
  services,
  disclaimerButton,
}) => {
  const navigate = useNavigate();
  const isEven = index % 2 === 0;

  return (
    <section className={isEven ? "bg-white" : "bg-gray-50"}>
      <motion.div
        className={`mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-16 md:px-12 md:py-20 lg:gap-16 lg:py-24 ${
          isEven ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
      >
        {/* Image */}
        <motion.div
          className="flex-1"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={image}
              alt={title}
              className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105 lg:h-[450px]"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="flex-1 space-y-6"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-secondary font-quicksand text-sm font-semibold tracking-widest uppercase">
            {String(index + 1).padStart(2, "0")}
          </span>

          <h2 className="font-lora text-alpha text-2xl font-bold md:text-3xl lg:text-4xl">
            {title}
          </h2>

          <div
            dangerouslySetInnerHTML={{ __html: description }}
            className="font-quicksand text-base leading-relaxed text-gray-600 lg:text-lg [&_a]:text-secondary [&_a]:underline [&_a]:underline-offset-2"
          />

          {/* Services list */}
          {services && services.length > 0 && (
            <ul className="space-y-3 pt-2">
              {services.map((service) => (
                <motion.li
                  key={service.id}
                  className="flex items-start gap-3"
                  variants={fadeUp}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <FaCircle className="text-secondary mt-2 shrink-0 text-[6px]" />
                  <div
                    dangerouslySetInnerHTML={{ __html: service.desc }}
                    className="font-quicksand text-base leading-relaxed text-gray-600 [&_span]:text-alpha [&_span]:font-semibold"
                  />
                </motion.li>
              ))}
            </ul>
          )}

          {/* Disclaimer button */}
          {disclaimerButton && (
            <motion.button
              onClick={() => navigate("/disclaimer")}
              className="bg-secondary font-quicksand mt-4 inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:brightness-110"
              variants={fadeUp}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              Review Disclaimer
            </motion.button>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default StrategyAnimatedCard;
