import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { navLinksItems } from "../data/data";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import classNames from "classnames";
import { motion, AnimatePresence, } from "framer-motion";


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
    exit: { x: "50vw", opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } },
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
  }, [])

  // Toggle menu state
  const toggleMenu = () => setIsOpen((prevState) => !prevState);

  return (
    <motion.nav
      className={`fixed z-49 w-full left-0 hover:cursor-none top-0 right-0 ${scrolled ? "bg-white shadow-md ease-in-out duration-500 py-4" : "bg-transparent"}`}
    >
      <div className={`lg:px-28 xl:px-36 px-4 md:px-16 container mx-auto flex justify-between items-center gap-4 md:gap-8 lg:gap-12 py-0 h-20 ease-in-out duration-500`}>
      {/* Logo */}
      <div className="flex items-center">
       <NavLink to={'/'} className="">
        <img
            src="/logos/run-logo.svg"
            className={`${!scrolled && 'mt-3'} text-black w-20 md:w-35 `}
            alt=""
            style={{
                filter: `${scrolled ? 'invert(74%) sepia(59%) saturate(497%) hue-rotate(176deg) brightness(92%) contrast(100%)' : ''}`
            }}
          />
       </NavLink>


      </div>

      {/* Desktop Navigation */}
      <motion.div
        className="hidden lg:flex gap-3 md:gap-3 lg:gap-8 xl:gap-16 grow md:justify-end items-center  lg:text-[1.14rem]"
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
            custom={index}  // Pass the index to control stagger
          >
             <NavLink
              key={link.name}
              to={link.href}
              style={{ position: 'relative', top: 0 }} // Added positioning to ensure it stays at the top
              className={({ isActive }) =>
                classNames(`font-quicksand hover:cursor-none hover:text-secondary transition  ${scrolled ? isActive ? "text-secondary font-bold" : "text-alpha" : ""}`, {
                  "text-secondary text-base font-bold": isActive,
                  "text-white": !isActive && !scrolled,
                  "text-alpha": scrolled,
                })
              }
            >
              {link.name}
            </NavLink>
          </motion.div>
        ))}
      </motion.div>


      {/* Mobile Menu Button */}
      <button className={`lg:hidden text-gray-600 ${isOpen ? "hidden" : ""}`} onClick={toggleMenu}>
        <FaBars size={30} className={`${scrolled ? 'text-alpha' : 'text-white'}`} />
      </button>

      {/* Mobile Nav Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "-100vw" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed top-0 left-0 w-[80%] sm:w-[70%] md:w-[50%] h-full bg-black  bg-cover bg-right-top shadow-lg lg:hidden flex items-start pt-48 flex-col space-y-12 p-6 z-49 opacity-100 bg-gray-950"
          >
            <button
              className="absolute top-4 right-4 text-white"
              onClick={() => setIsOpen(false)}
              aria-label="Close Menu"
            >
              <RxCross2 size={30} className={`${scrolled ? 'text-alpha' : 'text-white'}`} />
            </button>


            {/* Mobile Links */}
            {navLinksItems.map((link, index) => (
              <motion.div
                key={link.name}
                variants={linkMobileVariants}
                custom={index}
                initial="hidden"
                animate="visible"
                className="flex justify-center w-full"
              >

                {<NavLink
                  // key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  style={{ position: 'relative', top: 0 }} // Added positioning to ensure it stays at the top
                  className={({ isActive }) =>
                    classNames(`font-medium text-alpha text-[1.3rem] w-full py-2 px-4 rounded-md text-center hover:border-x hover:border-white hover:mx-8 transition-all duration-500 hover:text-white`, {
                      "text-white border-x-4   border-white mx-8 font-lora hover:cursor-pointer ": isActive,
                    })
                  }
                >
                  {link.name}
                </NavLink>}

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
