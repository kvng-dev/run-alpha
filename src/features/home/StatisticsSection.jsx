import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const StatisticsSection = () => {
  const { ref: retentionRef, inView: retentionInView } = useInView({
    triggerOnce: false,
  });
  const { ref: teamRef, inView: teamInView } = useInView({
    triggerOnce: false,
  });
  const { ref: experienceRef, inView: experienceInView } = useInView({
    triggerOnce: false,
  });
  const { ref: assetsRef, inView: assetsInView } = useInView({
    triggerOnce: false,
  });

  return (
    <div className="font-quicksand text-alpha flex h-fit max-w-screen flex-col items-center justify-center gap-8 bg-gray-100 p-8 px-8 md:h-[625px] md:flex-row md:p-16 lg:gap-48 lg:p-32">
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-4 text-center md:text-start"
      >
        <p className="text-lg md:text-xl">Est. since</p>
        <p className="text-3xl font-bold md:text-6xl">2021</p>
        <p className="max-w-xs text-base md:text-lg">
          Founded in 2021, we have crafted winning investment strategies that
          have demonstrated resilience, adaptability, and capital growth across
          market cycles, attracting a diverse group of high-net-worth
          individuals.
        </p>
      </motion.div>

      {/* Divider */}
      <div className="bg-alpha hidden h-full w-[1px] sm:block" />

      {/* Right Statistics Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col gap-12"
      >
        {/* Assets Under Management */}
        <div className="text-center" ref={assetsRef}>
          <p className="flex justify-center text-2xl font-bold md:text-4xl">
            ₦
            {assetsInView && (
              <CountUp start={0} end={1.5} duration={6} decimals={2} />
            )}
            bn
          </p>
          <p className="md:text-lg">Assets under Management</p>
        </div>

        {/* Client Retention Rate */}
        <div className="text-center" ref={retentionRef}>
          <p className="text-2xl font-bold md:text-4xl">
            {retentionInView && <CountUp start={0} end={95} duration={3} />}%
          </p>
          <p className="md:text-lg">Client Retention Rate</p>
        </div>

        {/* Experienced Team */}
        <div className="mb-6 text-center sm:mb-0" ref={teamRef}>
          <p className="text-2xl font-bold md:text-4xl">
            {teamInView && <CountUp start={0} end={6} duration={3} />}
          </p>
          <p className="md:text-lg">Experienced team</p>
        </div>

        {/* Cumulative Experience */}
        <div className="text-center" ref={experienceRef}>
          <p className="text-2xl font-bold md:text-4xl">
            {experienceInView && <CountUp start={0} end={36} duration={3} />}
          </p>
          <p className="md:text-lg">Years cumulative experience</p>
        </div>
      </motion.div>
    </div>
  );
};

export default StatisticsSection;
