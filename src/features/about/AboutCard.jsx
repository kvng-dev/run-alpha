import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "../../utilities/animations";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const AboutCard = ({ title, text, imageUrl, reverse, linkUrl }) => (
  <div className={` ${reverse ? "flex-row-reverse bg-gray-200" : ""} `}>
    <div className="container mx-auto mb-0 flex flex-wrap items-center gap-8 px-4 py-8 md:px-16 md:py-12 lg:flex-nowrap lg:gap-24 lg:px-28 lg:py-24 xl:px-36">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInRight}
        className="min-w-1/2 space-y-3"
      >
        <h2 className="font-lora text-alpha mb-8 text-2xl font-bold capitalize md:text-3xl">
          {title}
        </h2>
        <p className="font-quicksand text-base leading-8 xl:text-lg">{text}</p>
      </motion.div>
      <div
        className={`${reverse ? "2xl:pr-" : "2xl:pl-"} flex items-center px-0 xl:h-[500px]`}
      >
        {linkUrl && (
          <Link to={linkUrl}>
            <motion.img
              src={imageUrl}
              alt={title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="mb-6 rounded-2xl object-contain shadow-lg"
            />
          </Link>
        )}
      </div>
    </div>
  </div>
);

export default AboutCard;
