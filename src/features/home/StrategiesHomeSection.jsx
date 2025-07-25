import { Link, useNavigate } from "react-router";
import { strategies } from "../../data/data";
import { motion } from "framer-motion";


const StrategiesHomeSection = () => {
    const navigate = useNavigate();

      const handleScrollToTop = () => {
      window.scrollTo(0, 0); // Scrolls to the top of the page
      navigate("/offerings"); // Navigates to the /aboutus route
    };
  return (
    <section className="text-center bg-alpha pt-32 max-w-screen">
      <h2 className="mb-12 text-3xl md:text-4xl xl:text-5xl capitalize  mx-auto font-semibold py-2 font-lora text-white">Business Offerings</h2>

     <div className="flex flex-col">
  {strategies.map((strategy, index) => (
    <button
      onClick={handleScrollToTop}
      to={`/offerings`}
      key={strategy.id}
    >
    <motion.div
      // to={`/strategies/${strategy.id}`}
      key={index}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut", delay: index * 0.4 }}
      className="relative h-[350px] border-b border-gray-600 group hover:h-[450px] ease-in-out duration-300"
    >
      {/* Image */}
        <div className="absolute top-0 left-0 w-full h-full bg-alpha/30 md:backdrop-blur-xs z-5 group-hover:opacity-0 transition-opacity duration-300" />
          <img
          src={strategy.image}
          alt={strategy.title}
          className="object-cover object-[50%_30%] w-full h-full group-hover:opacity-100 transition-opacity duration-800"
      />
      {/* Title and Icon */}
      <div className="absolute md:top-[20%] lg:top-[30%] -top-8 right-11 lg:right-[29%] 2xl:right-[40%] md:right-[30%] flex items-end bg-opacity-30 p-4 z-10 rounded-lg lg:w-[600px] md:w-[60%] w-full">
        <div
          className="absolute rounded left-1/4 sm:left-1/3 md:left-50 top-38 md:top-[50%] md:group-hover:left-[30%] bg-alpha md:px-8 px-4 font-quicksand py-3 flex flex-col gap-4 sm:gap-8 shadow-2xl transition-all duration-1000 opacity-100 md:opacity-0 group-hover:opacity-100 items-center"
        >
         <div className="flex gap-4 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 32"><path fill="#ffca28" d="m8 16l8-8l8 8l-8 8z"/><path fill="#ffca28" d="M29.39 14.527L17.474 2.609a2.085 2.085 0 0 0-2.946 0L2.609 14.527a2.085 2.085 0 0 0 0 2.946l11.918 11.918a2.085 2.085 0 0 0 2.946 0l11.918-11.918a2.085 2.085 0 0 0 0-2.946M16 28.036L3.965 16L16 3.964L28.036 16Z"/></svg>
          <h3 className="font-semibold text-sm sm:text-base uppercase text-[#ffca28]">
            {strategy.title}
          </h3></div>
          <p className="text-white max-w-4xl text-sm md:text-base text-center">{strategy.description}</p>
        </div>
      </div>
    </motion.div>
  </button>
  ))}
</div>

    </section>
  );
};

export default StrategiesHomeSection;
