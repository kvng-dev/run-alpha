import { useNavigate } from "react-router";
import { strategies } from "../../data/data";
import { motion } from "framer-motion";

const StrategiesHomeSection = () => {
  const navigate = useNavigate();

  const handleScrollToTop = () => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
    navigate("/offerings"); // Navigates to the /aboutus route
  };
  return (
    <section className="bg-alpha max-w-screen pt-32 text-center">
      <h2 className="font-lora mx-auto mb-12 py-2 text-3xl font-semibold text-white capitalize md:text-4xl xl:text-5xl">
        Business Offerings
      </h2>
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
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: index * 0.4,
              }}
              className="group relative h-[350px] border-b border-gray-600 duration-300 ease-in-out hover:h-[450px]"
            >
              {/* Image */}
              <div className="bg-alpha/30 absolute top-0 left-0 z-5 h-full w-full transition-opacity duration-300 group-hover:opacity-0 md:backdrop-blur-xs" />
              <img
                src={strategy.image}
                alt={strategy.title}
                className="h-full w-full object-cover object-[50%_30%] transition-opacity duration-800 group-hover:opacity-100"
              />
              {/* Title and Icon */}
              <div className="bg-opacity-30 absolute -top-8 right-11 z-10 flex w-full items-end rounded-lg p-4 md:top-[20%] md:right-[30%] md:w-[60%] lg:top-[30%] lg:right-[29%] lg:w-[600px] 2xl:right-[40%]">
                <div className="bg-alpha font-quicksand absolute top-38 left-1/4 flex flex-col items-center gap-4 rounded px-4 py-3 opacity-100 shadow-2xl transition-all duration-1000 group-hover:opacity-100 sm:left-1/3 sm:gap-8 md:top-[50%] md:left-50 md:px-8 md:opacity-0 md:group-hover:left-[30%]">
                  <div className="flex items-center gap-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 32 32"
                    >
                      <path fill="#ffca28" d="m8 16l8-8l8 8l-8 8z" />
                      <path
                        fill="#ffca28"
                        d="M29.39 14.527L17.474 2.609a2.085 2.085 0 0 0-2.946 0L2.609 14.527a2.085 2.085 0 0 0 0 2.946l11.918 11.918a2.085 2.085 0 0 0 2.946 0l11.918-11.918a2.085 2.085 0 0 0 0-2.946M16 28.036L3.965 16L16 3.964L28.036 16Z"
                      />
                    </svg>
                    <h3 className="text-sm font-semibold text-[#ffca28] uppercase sm:text-base">
                      {strategy.title}
                    </h3>
                  </div>
                  <p className="max-w-4xl text-center text-sm text-white md:text-base">
                    {strategy.description}
                  </p>
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
