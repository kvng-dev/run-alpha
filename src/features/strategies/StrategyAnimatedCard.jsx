import { motion } from "framer-motion";
import { FaCircle } from "react-icons/fa";
import { useNavigate } from "react-router";

// eslint-disable-next-line react/prop-types
const StrategyAnimatedCard = ({ title, description, image, index, services,disclaimerButton }) => {

  const navigate = useNavigate(); // Hook for navigation
  const handleDisclaimerClick = () => {
    navigate('/disclaimer');
  };
  return (
    <div
      className={`flex flex-col overflow-hidden w-full mx-auto  sm:flex-row relative py-12 md:py-0  gap-6 sm:gap-12 items-center h-auto md:h-full
       `}
    >
      <motion.img
        className="flex flex-col absolute top-0 right-0 -z-2 object-cover w-full h-full opacity-40"
        src={image}
        alt={title}
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black/70 -z-1" />

      <div className="flex h-full w-full lg:px-28 xl:px-36 px-4 md:px-16 py-6 sm:py-12 items-center justify-content-center rounded-md container mx-auto">

        <div className={`flex shadow-md rounded-lg flex-col max-w-5xl text-white gap-3 md:backdrop-blur-3xl sm:gap-6 h-full ${(index + 1) % 2 === 0 ? "ml-auto" : "mr-auto"} mx-0 md:p-8`}>
          <motion.h2
            className={`text-2xl sm:text-3xl md:text-5xl font-semibold font-lora underline decoration-secondary/80 mb-8 underline-offset-8 tracking-wider`}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            {title}
          </motion.h2>
          <motion.p
            dangerouslySetInnerHTML={{ __html: description }}
            className="text-lg xl:text-xl md:leading-10 font-quicksand text-justify"
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
              className="bg-secondary px-4 py-2 border-none rounded-md md:w-1/2 lg:w-1/4 font-semibold hover:bg-secondary/60 transition duration-300 ease-in-out mt-8"
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
                key={service.id} className="flex items-center gap-4">
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
