import { FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "../../utilities/animations";


// eslint-disable-next-line react/prop-types
const AboutCard = ({ title, text, imageUrl, reverse }) => (
  <div className={` ${reverse ? "flex-row-reverse bg-gray-200" : ""}  `}>
    <div className="container mx-auto items-center flex-wrap lg:flex-nowrap gap-8 lg:gap-24 mb-0 lg:px-28 xl:px-36 px-4 md:px-16 md:py-12 lg:py-24 py-8 flex">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInRight} className="min-w-1/2 space-y-3">
      <h2 className="md:text-3xl font-lora text-2xl capitalize text-alpha font-bold mb-8">{title}</h2>
      <p className="text-base xl:text-lg leading-8 font-quicksand">{text}</p>
    </motion.div>
    <div className={`${reverse ? "2xl:pr-" : "2xl:pl-"} px-0 flex items-center xl:h-[500px]`}>
      <motion.img src={imageUrl} alt={title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft} className="object-contain rounded-2xl shadow-lg mb-6" />
    </div>
    </div>
  </div>
);

export default AboutCard;
