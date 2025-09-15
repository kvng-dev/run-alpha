import { useEffect, useRef } from "react";
import { MdLocationPin } from "react-icons/md";
import { motion } from "framer-motion";
import HeroSectionCard from "../ui/HeroSectionCard";
import { heroSectionData } from "../data/data";
import { Toaster } from "react-hot-toast";
import SEO from "../components/SEO";


function ContactUs() {
   const audioRef = useRef(null);

  useEffect(() => {
    // Play the beep sound every second
    const intervalId = setInterval(() => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="relative w-full bg-gray-200">
      <SEO
        title="Contact Us | Get In Touch"
        description="We'd love to hear from you! Reach out to Run for inquiries, consultations, or collaborations."
        url="https://runalpha.co/contact"
        type="website"
      />
      <motion.div
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
            Contact
          </h2>

          <p className="font-quicksand text-alpha mb-6 max-w-3xl md:text-lg">
            Run Alpha is based in Lagos, Nigeria. We are always happy to hear
            from you. Please reach out to us using the contact form below or
            contact us at the email address or phone number provided.
          </p>

          <div className="space-y-4 text-base">
            {/* Address */}
            <div className="space-y-4">
              <p className="text-alpha font-quicksand text-xl font-bold">
                Head Office
              </p>
              <motion.p
                className="text-alpha font-quicksand flex flex-row items-start gap-2 md:text-lg"
                whileHover={{ scale: 1.05 }}
              >
                <MdLocationPin size={25} className="text-alpha" />1 Uwa Close,
                Off Billings Way, Oregun, Lagos.
              </motion.p>
            </div>

            {/* Phone */}
            <motion.p
              className="text-alpha font-quicksand flex items-center gap-4 md:text-lg"
              whileHover={{ scale: 1.05 }}
            >
              <div className="">TEL:</div>
              <a className="" href="tel:+2349093717972">
                +234 909 371 7972
              </a>
            </motion.p>
            <motion.p
              className="text-alpha font-quicksand flex items-center gap-4 md:text-lg"
              whileHover={{ scale: 1.05 }}
            >
              <div className="">E:</div>
              <a className="underline" href="mailto:info@example.com">
                hello@runalpha.co
              </a>
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
      <div />

      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );

}

export default  ContactUs
