import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { navLinksItems, socials } from "../data/data";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import classNames from "classnames";
import { motion, AnimatePresence } from "framer-motion";

const mobileMenuVariants = {
  hidden: { clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" },
  visible: {
    clipPath: "circle(150% at calc(100% - 2.5rem) 2.5rem)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)",
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
  },
};

const mobileLinkVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.35, delay: 0.2 + i * 0.07, ease: "easeOut" },
  }),
  exit: { y: -10, opacity: 0, transition: { duration: 0.15 } },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav
        className={classNames(
          "fixed top-0 right-0 left-0 z-50 w-full transition-all duration-500 ease-in-out",
          scrolled
            ? "bg-white py-2 shadow-md backdrop-blur-lg"
            : "bg-transparent py-0",
        )}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-12">
          {/* Logo */}
          <NavLink to="/" className="shrink-0">
            <img
              src="/logos/run-logo.svg"
              className={classNames(
                "w-20 transition-all duration-500 md:w-32",
                !scrolled && "mt-2",
              )}
              alt="runalpha logo"
              style={{
                filter: scrolled
                  ? "invert(74%) sepia(59%) saturate(497%) hue-rotate(176deg) brightness(92%) contrast(100%)"
                  : "",
              }}
            />
          </NavLink>

          {/* Desktop links */}
          <div className="hidden items-center gap-10 lg:flex xl:gap-14">
            {navLinksItems.map((link) => (
              <NavLink
                key={link.id}
                to={link.href}
                className={({ isActive }) =>
                  classNames(
                    "font-quicksand group relative py-1 text-[0.95rem] font-medium tracking-wide transition-colors duration-300 xl:text-base",
                    {
                      "text-secondary": isActive,
                      "text-white hover:text-secondary": !isActive && !scrolled,
                      "text-alpha hover:text-secondary": !isActive && scrolled,
                    },
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {/* Animated underline */}
                    <span
                      className={classNames(
                        "bg-secondary absolute -bottom-0.5 left-0 h-[2px] rounded-full transition-all duration-300",
                        isActive ? "w-full" : "w-0 group-hover:w-full",
                      )}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className={classNames("z-[55] lg:hidden", isOpen && "hidden")}
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <FaBars
              size={24}
              className={classNames(
                "transition-colors duration-300",
                scrolled ? "text-alpha" : "text-white",
              )}
            />
          </button>
        </div>
      </nav>

      {/* Mobile overlay — rendered outside nav so fixed positioning works correctly */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col bg-gray-950 lg:hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-6 pt-[env(safe-area-inset-top,1.5rem)] pb-4">
              <NavLink to="/" onClick={closeMenu}>
                <img
                  src="/logos/run-logo.svg"
                  className="w-20"
                  alt="runalpha logo"
                />
              </NavLink>
              <motion.button
                onClick={closeMenu}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-white transition-colors hover:border-secondary hover:text-secondary"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <RxCross2 size={20} />
              </motion.button>
            </div>

            {/* Links */}
            <nav className="flex flex-1 flex-col items-center justify-center gap-1 px-8">
              {navLinksItems.map((link, index) => (
                <motion.div
                  key={link.id}
                  variants={mobileLinkVariants}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="w-full max-w-xs"
                >
                  <NavLink
                    to={link.href}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      classNames(
                        "font-quicksand group relative block w-full py-4 text-center text-2xl font-medium tracking-wide transition-colors duration-300",
                        isActive
                          ? "text-secondary"
                          : "text-gray-300 hover:text-white",
                      )
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {link.name}
                        <span
                          className={classNames(
                            "bg-secondary absolute bottom-2 left-1/2 h-[2px] -translate-x-1/2 rounded-full transition-all duration-300",
                            isActive ? "w-12" : "w-0 group-hover:w-8",
                          )}
                        />
                      </>
                    )}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            {/* Footer: socials + email */}
            <motion.div
              className="flex flex-col items-center gap-5 px-8 pb-[max(2.5rem,env(safe-area-inset-bottom,2.5rem))]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <div className="flex items-center gap-4">
                {socials.map((s) => (
                  <a
                    key={s.id}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-all duration-300 hover:border-secondary hover:text-secondary"
                  >
                    <s.icon size={16} />
                  </a>
                ))}
              </div>
              <p className="font-quicksand text-sm text-gray-500">
                hello@runalpha.co
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
