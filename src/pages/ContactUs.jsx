import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import { motion } from "framer-motion";
import HeroSectionCard from "../ui/HeroSectionCard";
import { heroSectionData } from "../data/data";
import { Toaster } from "react-hot-toast";
import SEO from "../components/SEO";

function ContactUs() {
  const audioRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  // LocalBusiness Schema for better local SEO
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "RunAlpha",
    image: "https://runalpha.co/logos/run-logo.svg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1 Uwa Close, Off Billings Way, Oregun",
      addressLocality: "Lagos",
      addressRegion: "Lagos State",
      addressCountry: "NG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "6.5885",
      longitude: "3.3606",
    },
    telephone: "+2349093717972",
    email: "hello@runalpha.co",
    url: "https://runalpha.co",
    openingHours: "Mo-Fr 09:00-17:00",
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },
  };

  return (
    <>
      <SEO
        title="Contact RunAlpha - Schedule Investment Consultation | Financial Advisory Lagos Nigeria"
        description="Contact RunAlpha's investment advisors in Lagos, Nigeria. Schedule a consultation for wealth management, portfolio analysis, and financial planning services. Located at 1 Uwa Close, Oregun, Lagos. Call +234 909 371 7972 or email hello@runalpha.co for expert investment guidance."
        keywords="contact RunAlpha Lagos, investment consultation Nigeria, financial advisor consultation Lagos, wealth management meeting Nigeria, schedule investment review, portfolio consultation Lagos, financial planning appointment Nigeria"
        url="https://runalpha.co/contact"
      />

      {/* Additional LocalBusiness Schema */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      <motion.div
        className="relative w-full bg-gray-200"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <HeroSectionCard data={heroSectionData.contact} />
      </motion.div>

      <motion.div
        className="relative flex h-auto flex-col items-center justify-center bg-[url('/maps.png')] bg-cover bg-center px-4 py-38 lg:flex-row lg:px-32"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="max-w-xl rounded-lg p-3 py-8 backdrop-blur-sm md:border md:border-gray-200 md:bg-white/50 md:p-10 md:shadow-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-alpha font-quicksand mb-4 text-2xl font-bold md:text-3xl">
            Contact Us
          </h2>

          <p className="font-quicksand text-alpha mb-6 max-w-3xl md:text-lg">
            RunAlpha is based in Lagos, Nigeria. We are always happy to hear
            from you. Please reach out to us using the contact information below
            to schedule a consultation or discuss your investment needs.
          </p>

          <div className="space-y-6 text-base">
            {/* Address Section */}
            <div className="space-y-3">
              <h3 className="text-alpha font-quicksand text-xl font-bold">
                Head Office
              </h3>
              <motion.address
                className="text-alpha font-quicksand flex flex-row items-start gap-2 not-italic md:text-lg"
                whileHover={{ scale: 1.02 }}
              >
                <MdLocationPin
                  size={25}
                  className="text-alpha mt-1 flex-shrink-0"
                />
                <span>
                  1 Uwa Close, Off Billings Way,
                  <br />
                  Oregun, Lagos, Nigeria
                </span>
              </motion.address>
            </div>

            {/* Contact Details */}
            <div className="space-y-3">
              <h3 className="text-alpha font-quicksand text-xl font-bold">
                Get In Touch
              </h3>

              <motion.p
                className="text-alpha font-quicksand flex items-center gap-4 md:text-lg"
                whileHover={{ scale: 1.02 }}
              >
                <span className="min-w-[3rem] font-semibold">Phone:</span>
                <a
                  className="transition-all hover:underline"
                  href="tel:+2349093717972"
                  aria-label="Call RunAlpha at +234 909 371 7972"
                >
                  +234 909 371 7972
                </a>
              </motion.p>

              <motion.p
                className="text-alpha font-quicksand flex items-center gap-4 md:text-lg"
                whileHover={{ scale: 1.02 }}
              >
                <span className="min-w-[3rem] font-semibold">Email:</span>
                <a
                  className="transition-all hover:text-blue-600 hover:underline"
                  href="mailto:hello@runalpha.co"
                  aria-label="Email RunAlpha at hello@runalpha.co"
                >
                  hello@runalpha.co
                </a>
              </motion.p>
            </div>

            {/* Business Hours */}
            <div className="space-y-3 border-t border-gray-300 pt-4">
              <h3 className="text-alpha font-quicksand text-xl font-bold">
                Business Hours
              </h3>
              <p className="text-alpha font-quicksand md:text-lg">
                Monday - Friday: 9:00 AM - 5:00 PM
                <br />
                Saturday - Sunday: Closed
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default ContactUs;
