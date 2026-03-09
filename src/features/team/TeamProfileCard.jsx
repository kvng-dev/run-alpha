import { motion } from "framer-motion";

const fadeUp = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

// eslint-disable-next-line react/prop-types
const ProfileCard = ({ image, name, title, quote }) => {
  return (
    <motion.div
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
      variants={fadeUp}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-64 w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-4 left-5">
          <h3 className="font-quicksand text-lg font-bold text-white">{name}</h3>
          <p className="font-quicksand text-secondary text-sm font-medium">{title}</p>
        </div>
      </div>

      {/* Quote */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <p className="font-quicksand text-sm leading-relaxed text-gray-600">
          {quote}
        </p>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
