import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router";

const GetIntouch = () => {
  return (
    <motion.div
      className="text-alpha flex flex-col items-center justify-center px-8 py-12 md:py-24 lg:py-36"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Link to={"/contact"}>
        <motion.h2
          className="font-dm-serif group mb-4 flex w-full items-center justify-center gap-4 text-2xl font-bold duration-300 ease-in-out md:gap-8 md:text-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Get In Touch{" "}
          <BsArrowRight
            className="text-base duration-300 ease-in-out group-hover:translate-x-4"
            size={25}
          />
        </motion.h2>
      </Link>

      <p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="font-quicksand mb-8 max-w-2xl text-center md:text-xl"
      >
        Find out more about investment opportunities and how we can help you
        achieve your financial goals.
      </p>
    </motion.div>
  );
};
export default GetIntouch;
