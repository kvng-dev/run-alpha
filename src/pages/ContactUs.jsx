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
    <div className="w-full relative bg-gray-200">

      <SEO
        title="Contact Us | Get In Touch"
        description="We'd love to hear from you! Reach out to Run for inquiries, consultations, or collaborations."
        url="https://runalpha.co/contact"
      />
     <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <HeroSectionCard data={heroSectionData.contact} />
      </motion.div>


    <motion.div
      className="h-auto px-4 lg:px-32 py-38 flex flex-col lg:flex-row justify-center items-center bg-[url('/maps.png')] bg-cover bg-center relative"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="md:p-10 p-3 max-w-xl py-8 rounded-lg md:shadow-md md:bg-white/50 backdrop-blur-sm md:border md:border-gray-200"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-alpha font-quicksand font-bold text-2xl md:text-3xl mb-4">
          Contact
        </h2>

        <p className="font-quicksand mb-6 text-alpha max-w-3xl md:text-lg">
          Run Alpha is based in Lagos, Nigeria. We are always happy to
          hear from you. Please reach out to us using the contact form below or contact us at the email address or phone number provided.
        </p>

            <div className="space-y-4 text-base">
              {/* Address */}
             <div className="space-y-4">
              <p className="font-bold text-alpha font-quicksand text-xl">Head Office</p>
               <motion.p
                className="flex flex-row gap-2 text-alpha font-quicksand items-start md:text-lg"
                whileHover={{ scale: 1.05 }}
              >
                <MdLocationPin size={25} className="text-alpha" />
                  1 Uwa Close, Off Billings Way, Oregun, Lagos.
              </motion.p>
             </div>

              {/* Phone */}
              <motion.p
                className="flex gap-4 text-alpha font-quicksand items-center md:text-lg"
                whileHover={{ scale: 1.05 }}
              >
                <div className="">
                  TEL:
                </div>
                <a className="" href="tel:+2349093717972">+234 909 371 7972</a>
              </motion.p>
               <motion.p
                className="flex gap-4 text-alpha font-quicksand items-center md:text-lg"
                whileHover={{ scale: 1.05 }}
              >
                <div className="">
                  E:
                </div>
                <a className="underline" href="mailto:info@example.com">hello@runalpha.co</a>
              </motion.p>
            </div>
          </motion.div>
      </motion.div>
    <div/>


      <Toaster position="top-right"  reverseOrder={false}/>
    </div>
         )

}

export default  ContactUs
