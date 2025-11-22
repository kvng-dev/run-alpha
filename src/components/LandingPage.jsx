import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="relative h-[800px] w-full max-w-screen shadow-2xl lg:h-dvh">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 -z-10 h-full w-full object-cover"
      >
        <source src="/videos/5224-183786646.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 -z-5 h-full w-full bg-black opacity-20" />
      <div className="z-20 container mx-auto flex h-full flex-col items-start justify-center gap-6 px-4 tracking-wider text-white md:px-16 lg:px-28 xl:px-36">
        <div className="space-y-3 pt-48">
          <p className="font-quicksand text-xl font-bold md:text-3xl xl:text-4xl">
            Run Alpha
          </p>
          <motion.div
            initial={{ y: "50%", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.4 }}
          >
            <h1 className="font-quicksand max-w-sm text-3xl leading-8 font-bold sm:text-4xl sm:leading-[1.2] md:max-w-[1300px] md:text-5xl lg:max-w-4xl lg:text-6xl">
              Your Reliable <span className="text-secondary">Partner</span>{" "}
              <br />
              For Investment <br />
              Advisory
            </h1>
          </motion.div>

          <motion.p
            className="font-quicksand flex flex-row gap-2 text-2xl text-[1.15rem] leading-6 font-semibold text-nowrap text-white sm:leading-none md:text-3xl lg:text-4xl"
            initial={{ y: "100%", opacity: 0 }} // Start off-screen to the right with no opacity
            animate={{ y: "0", opacity: 1 }} // Move to the normal position with full opacity
            transition={{ duration: 1.6, ease: "easeInOut", delay: 0.4 }} // Duration, easing, and delay
          >
            <span className="text-secondary">Driven by Alpha,</span>
            <span className="">Powered by Data</span>
          </motion.p>
        </div>
      </div>
    </div>
  );
}
