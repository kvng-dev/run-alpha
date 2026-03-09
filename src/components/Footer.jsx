import Logo from "../ui/Logo";
import { Link } from "react-router";
import { navLinksItems, socials } from "../data/data";
import { motion } from "framer-motion";
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

function Footer() {
  return (
    <footer className="font-quicksand relative overflow-hidden bg-gray-950">
      {/* Background map image with overlay */}
      <div className="absolute inset-0 bg-[url('/map.jpg')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/95 to-gray-950/80" />

      <div className="relative z-10">
        {/* Main footer content */}
        <motion.div
          className="mx-auto max-w-7xl px-6 pt-16 pb-8 md:px-12 lg:px-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand column */}
            <motion.div className="space-y-6" variants={fadeUp} transition={{ duration: 0.6, ease: "easeOut" }}>
              <Logo className="h-16 w-16 md:h-20 md:w-20" src="/logos/run-logo.png" />
              <p className="max-w-xs text-sm leading-relaxed text-gray-400">
                Independent family office and private wealth management services for high-net-worth families in Nigeria.
              </p>
              {/* Social icons row */}
              <div className="flex items-center gap-3 pt-2">
                {socials.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-all duration-300 hover:border-secondary hover:text-secondary hover:shadow-[0_0_12px_rgba(255,202,40,0.25)]"
                  >
                    <link.icon size={18} />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Quick links */}
            <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: "easeOut" }}>
              <h3 className="mb-6 text-sm font-semibold tracking-widest text-white uppercase">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {navLinksItems
                  .filter((link) => link.name !== "Home")
                  .map((link) => (
                    <li key={link.id}>
                      <Link
                        to={link.href}
                        className="text-sm text-gray-400 transition-colors duration-300 hover:text-secondary"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </motion.div>

            {/* Legal links */}
            <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: "easeOut" }}>
              <h3 className="mb-6 text-sm font-semibold tracking-widest text-white uppercase">
                Legal
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/disclaimer"
                    className="text-sm text-gray-400 transition-colors duration-300 hover:text-secondary"
                  >
                    Disclaimer
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy-policy"
                    className="text-sm text-gray-400 transition-colors duration-300 hover:text-secondary"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Contact info */}
            <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: "easeOut" }}>
              <h3 className="mb-6 text-sm font-semibold tracking-widest text-white uppercase">
                Contact
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <HiOutlineLocationMarker className="mt-0.5 shrink-0 text-secondary" size={20} />
                  <span className="text-sm leading-relaxed text-gray-400">
                    1 Uwa Close, Off Billings Way,
                    <br />
                    Oregun Ikeja, Lagos, Nigeria
                  </span>
                </li>
                <li>
                  <a
                    href="mailto:hello@runalpha.co"
                    className="flex items-center gap-3 text-sm text-gray-400 transition-colors duration-300 hover:text-secondary"
                  >
                    <HiOutlineMail className="shrink-0 text-secondary" size={20} />
                    hello@runalpha.co
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+2349093717972"
                    className="flex items-center gap-3 text-sm text-gray-400 transition-colors duration-300 hover:text-secondary"
                  >
                    <HiOutlinePhone className="shrink-0 text-secondary" size={20} />
                    +234 909 371 7972
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Divider + copyright */}
          <motion.div
            className="mt-14 border-t border-gray-800 pt-8 text-center"
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-xs tracking-wide text-gray-500">
              &copy; {new Date().getFullYear()} Run Alpha. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
