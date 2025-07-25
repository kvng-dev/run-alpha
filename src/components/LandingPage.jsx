
import { motion } from "framer-motion";


export default function LandingPage() {
  return (

    <div className="h-[800px] relative w-full lg:h-dvh shadow-2xl max-w-screen">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute -z-10 top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/5224-183786646.mp4" type="video/mp4" />

      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 -z-5"/>
      <div className="flex flex-col items-start justify-center lg:px-28 xl:px-36 px-4 md:px-16 container mx-auto h-full tracking-wider z-20 text-white gap-6">
        <div className="space-y-3 pt-48">
          <p className="text-xl md:text-3xl xl:text-4xl font-quicksand font-bold">Run Alpha</p>
          <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl md:max-w-[1300px] leading-8 sm:leading-[1.2] max-w-sm lg:max-w-4xl font-quicksand font-bold"
            initial={{ y: '50%', opacity: 0 }}
            animate={{ y: '0', opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.4 }}
          >
            Your Reliable <span className="text-secondary">Partner</span> <br />For Investment <br />Advisory
          </motion.h1>

          <motion.p
            className="text-[1.15rem] text-2xl md:text-3xl lg:text-4xl font-quicksand leading-6 sm:leading-none flex flex-row text-white font-semibold gap-2 text-nowrap"
            initial={{ y: '100%', opacity: 0 }} // Start off-screen to the right with no opacity
            animate={{ y: '0', opacity: 1 }}    // Move to the normal position with full opacity
            transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.4 }} // Duration, easing, and delay
          >
             <span className="text-secondary">
              Driven by Alpha,
              </span>
             <span className="">
                  Powered by Data
              </span>
          </motion.p>
        </div>
      </div>
    </div>
  )
}
