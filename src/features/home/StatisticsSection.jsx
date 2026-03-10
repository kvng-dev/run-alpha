import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const fadeUp = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const stats = [
  { id: "assets", end: 5.0, decimals: 1, prefix: "₦", suffix: "bn", label: "Assets under Management", duration: 5 },
  { id: "retention", end: 95, decimals: 0, prefix: "", suffix: "%", label: "Client Retention Rate", duration: 3 },
  { id: "team", end: 6, decimals: 0, prefix: "", suffix: "", label: "Experienced Private Wealth Management Team", duration: 3 },
  { id: "experience", end: 36, decimals: 0, prefix: "", suffix: "", label: "Years Cumulative Experience", duration: 3 },
];

const StatCard = ({ stat }) => {
  const { ref, inView } = useInView({ triggerOnce: false });

  return (
    <motion.div
      ref={ref}
      className="rounded-2xl border border-gray-100 bg-white px-4 py-6 text-center shadow-sm transition-shadow duration-300 hover:shadow-md sm:px-6 sm:py-8"
      variants={fadeUp}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <p className="text-alpha font-quicksand mb-2 text-3xl font-bold sm:text-4xl md:text-5xl">
        {stat.prefix}
        {inView && (
          <CountUp start={0} end={stat.end} duration={stat.duration} decimals={stat.decimals} />
        )}
        {stat.suffix}
      </p>
      <p className="font-quicksand text-xs leading-snug text-gray-500 sm:text-sm md:text-base">
        {stat.label}
      </p>
    </motion.div>
  );
};

/* Vertical fading divider line */
const FadingDivider = () => (
  <div className="mx-auto hidden w-px lg:block">
    <div className="h-full w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
  </div>
);

const StatisticsSection = () => {
  return (
    <section className="bg-gray-50 py-14 sm:py-20 md:py-28">
      <motion.div
        className="mx-auto max-w-7xl px-5 sm:px-6 md:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
      >
        {/* Two-column layout with fading divider */}
        <div className="flex flex-col items-stretch gap-10 sm:gap-16 lg:flex-row lg:gap-0">
          {/* Left — story */}
          <motion.div
            className="flex flex-1 flex-col justify-center space-y-4 lg:pr-16"
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3">
              <div className="bg-secondary h-[2px] w-10 rounded-full" />
              <span className="font-quicksand text-secondary text-sm font-semibold tracking-widest uppercase">
                Our Track Record
              </span>
            </div>
            <p className="font-lora text-alpha text-3xl font-bold sm:text-4xl md:text-6xl">2021</p>
            <p className="font-quicksand max-w-md text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
              Founded in 2021, we have crafted winning investment strategies and
              legacy planning solutions that have demonstrated resilience,
              adaptability, and capital growth across market cycles, attracting a
              diverse group of high-net-worth individuals and families seeking
              boutique family office services and private wealth advisory in
              Nigeria.
            </p>
          </motion.div>

          {/* Fading divider */}
          <FadingDivider />

          {/* Right — stat cards */}
          <div className="flex flex-1 items-center lg:pl-16">
            <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2">
              {stats.map((stat) => (
                <StatCard key={stat.id} stat={stat} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default StatisticsSection;
