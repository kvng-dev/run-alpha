import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { navLinksItems } from "../data/data";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import classNames from "classnames";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const linkVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        opacity: { duration: 0.6 },
        x: { type: "spring", stiffness: 100, damping: 25 },
        staggerChildren: index * 0.5,
        delay: index * 0.8,
      },
    }),
  };

  const linkMobileVariants = {
    hidden: { x: "50vw", opacity: 0 },
    visible: (index) => ({
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: index * 0.1, ease: "easeOut" },
    }),
    exit: {
      x: "50vw",
      opacity: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle menu state
  const toggleMenu = () => setIsOpen((prevState) => !prevState);

  return (
    <motion.nav
      className={`fixed top-0 right-0 left-0 z-49 w-full hover:cursor-none ${scrolled ? "bg-white py-4 shadow-md duration-500 ease-in-out" : "bg-transparent"}`}
    >
      <div
        className={`container mx-auto flex h-20 items-center justify-between gap-4 px-4 py-0 duration-500 ease-in-out md:gap-8 md:px-16 lg:gap-12 lg:px-28 xl:px-36`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <NavLink to={"/"} className="">
            <img
              src="/logos/run-logo.svg"
              className={`${!scrolled && "mt-3"} w-20 text-black md:w-35`}
              alt=""
              style={{
                filter: `${scrolled ? "invert(74%) sepia(59%) saturate(497%) hue-rotate(176deg) brightness(92%) contrast(100%)" : ""}`,
              }}
            />
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <motion.div
          className="hidden grow items-center gap-3 md:justify-end md:gap-3 lg:flex lg:gap-8 lg:text-[1.14rem] xl:gap-16"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.5 } }, // Stagger children
          }}
        >
          {navLinksItems.map((link, index) => (
            <motion.div
              key={link.id}
              variants={linkVariants}
              custom={index} // Pass the index to control stagger
            >
              <NavLink
                key={link.name}
                to={link.href}
                style={{ position: "relative", top: 0 }} // Added positioning to ensure it stays at the top
                className={({ isActive }) =>
                  classNames(
                    `font-quicksand hover:text-secondary transition hover:cursor-none ${scrolled ? (isActive ? "text-secondary font-bold" : "text-alpha") : ""}`,
                    {
                      "text-secondary text-base font-bold": isActive,
                      "text-white": !isActive && !scrolled,
                      "text-alpha": scrolled,
                    },
                  )
                }
              >
                {link.name}
              </NavLink>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          className={`text-gray-600 lg:hidden ${isOpen ? "hidden" : ""}`}
          onClick={toggleMenu}
        >
          <FaBars
            size={30}
            className={`${scrolled ? "text-alpha" : "text-white"}`}
          />
        </button>

        {/* Mobile Nav Menu with Animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              exit={{ x: "-100vw" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="fixed top-0 left-0 z-49 flex h-full w-[80%] flex-col items-start space-y-12 bg-gray-950 bg-cover bg-right-top p-6 pt-48 opacity-100 shadow-lg sm:w-[70%] md:w-[50%] lg:hidden"
            >
              <button
                className="absolute top-4 right-4 text-white"
                onClick={() => setIsOpen(false)}
                aria-label="Close Menu"
              >
                <RxCross2
                  size={30}
                  className={`${scrolled ? "text-alpha" : "text-white"}`}
                />
              </button>

              {/* Mobile Links */}
              {navLinksItems.map((link, index) => (
                <motion.div
                  key={link.name}
                  variants={linkMobileVariants}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  className="flex w-full justify-center"
                >
                  {
                    <NavLink
                      // key={link.name}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      style={{ position: "relative", top: 0 }} // Added positioning to ensure it stays at the top
                      className={({ isActive }) =>
                        classNames(
                          `text-alpha w-full rounded-md px-4 py-2 text-center text-[1.3rem] font-medium transition-all duration-500 hover:mx-8 hover:border-x hover:border-white hover:text-white`,
                          {
                            "font-lora mx-8 border-x-4 border-white text-white hover:cursor-pointer":
                              isActive,
                          },
                        )
                      }
                    >
                      {link.name}
                    </NavLink>
                  }
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
