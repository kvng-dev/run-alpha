import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const HeroSectionCard = ({ data: { backgroundImage, description, title } }) => {
  return (
    <div
      className="relative h-[400px] w-full bg-cover bg-center text-center sm:h-[50vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 z-6 h-full w-full bg-black opacity-50" />

      {/* Content */}
      <div className="absolute top-0 left-0 z-8 flex h-full w-full flex-col items-center justify-center text-white sm:px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="font-quicksand mb-6 text-3xl font-extrabold sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            {title}
          </h1>
        </motion.div>

        <motion.p
          className="font-quicksand px-4 text-sm leading-9 sm:max-w-2xl sm:text-base md:max-w-3xl md:text-lg lg:text-xl xl:text-2xl"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
};

export default HeroSectionCard;
