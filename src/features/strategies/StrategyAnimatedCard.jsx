import { motion } from "framer-motion";
import { FaCircle } from "react-icons/fa";
import { useNavigate } from "react-router";

// eslint-disable-next-line react/prop-types
const StrategyAnimatedCard = ({
  title,
  description,
  image,
  index,
  services,
  disclaimerButton,
}) => {
  const navigate = useNavigate(); // Hook for navigation
  const handleDisclaimerClick = () => {
    navigate("/disclaimer");
  };
  return (
    <div
      className={`relative mx-auto flex h-auto w-full flex-col items-center gap-6 overflow-hidden py-12 sm:flex-row sm:gap-12 md:h-full md:py-0`}
    >
      <motion.img
        className="absolute top-0 right-0 -z-2 flex h-full w-full flex-col object-cover opacity-40"
        src={image}
        alt={title}
      />

      <div className="absolute top-0 left-0 -z-1 h-full w-full bg-black/70" />

      <div className="justify-content-center container mx-auto flex h-full w-full items-center rounded-md px-4 py-6 sm:py-12 md:px-16 lg:px-28 xl:px-36">
        <div
          className={`flex h-full max-w-5xl flex-col gap-3 rounded-lg text-white shadow-md sm:gap-6 md:backdrop-blur-3xl ${(index + 1) % 2 === 0 ? "ml-auto" : "mr-auto"} mx-0 md:p-8`}
        >
          <motion.h2
            className={`font-lora decoration-secondary/80 mb-8 text-2xl font-semibold tracking-wider underline underline-offset-8 sm:text-3xl md:text-5xl`}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            {title}
          </motion.h2>
          <motion.p
            dangerouslySetInnerHTML={{ __html: description }}
            className="font-quicksand text-justify text-lg md:leading-10 xl:text-xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: false }}
          />
          {disclaimerButton && (
            <motion.button
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: false }}
              onClick={handleDisclaimerClick}
              className="bg-secondary hover:bg-secondary/60 mt-8 rounded-md border-none px-4 py-2 font-semibold transition duration-300 ease-in-out md:w-1/2 lg:w-1/4"
            >
              Review Disclaimer
            </motion.button>
          )}
          {services && (
            <div className="flex flex-wrap gap-3">
              {services.map((service) => (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  viewport={{ once: false }}
                  key={service.id}
                  className="flex items-center gap-4"
                >
                  <FaCircle className="text-secondary text-xs" />
                  <p
                    dangerouslySetInnerHTML={{ __html: service.desc }}
                    className="text-base font-medium"
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StrategyAnimatedCard;
