import { useNavigate } from "react-router";
import Button from "../../ui/button";
import { BsChevronRight } from "react-icons/bs";
import { motion } from "framer-motion";

function AboutUsHomeSection() {
  const navigate = useNavigate();

  const handleScrollToTop = () => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
    navigate("/aboutus"); // Navigates to the /aboutus route
  };
  return (
    <div className="text-alpha relative h-auto w-full max-w-screen bg-[url('/team-assets/pexels-vanessa-loring-5082960.jpg')] bg-cover bg-center py-12 md:mb-0 md:h-auto md:py-32 lg:mb-0">
      <div className="absolute top-0 left-0 z-1 h-full w-full bg-black/50" />
      <div className="relative z-10 flex justify-between gap-6 lg:gap-8">
        <div className="container mx-auto mb-16 flex flex-col items-start px-4 md:px-16 lg:px-28 xl:px-36">
          <motion.h2
            variants={{
              visible: { y: 0, opacity: 1 },
              hidden: { y: "50%", opacity: 0 },
            }}
            initial={{ y: "50%", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.4 }}
            whileInView="visible"
            className="font-lora mb-8 text-4xl leading-snug font-medium text-white capitalize md:max-w-6xl md:text-6xl xl:text-7xl"
          >
            About <span className="">Us</span>
          </motion.h2>
          <motion.p
            variants={{
              visible: { x: 0, opacity: 1 },
              hidden: { x: "-100%", opacity: 0 },
            }}
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: "0", opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.4 }}
            whileInView="visible"
            className="font-quicksand w-full text-2xl leading-8 font-semibold text-white md:max-w-xl md:text-3xl md:leading-9 lg:max-w-5xl lg:leading-11 lg:tracking-wide xl:text-5xl xl:leading-13"
          >
            Our investment policy focuses on delivering sustainable,{" "}
            <span className="text-secondary">risk-adjusted returns</span>{" "}
            through{" "}
            <span className="text-secondary">data-driven strategies</span> and
            disciplined portfolio management.
          </motion.p>

          <p className="font-quicksand mt-24 max-w-xl text-lg text-white md:max-w-xl lg:max-w-2xl lg:text-2xl xl:max-w-4xl">
            Headquartered in Lagos, Nigeria, we are committed to delivering
            financial advisory and investment management services with the
            highest level of service and transparency. We build long-term
            relationships founded on mutual trust and respect, and we thrive on
            data-driven results. Whether it's hedge funds, family offices,
            financial planning, or private wealth investments, our team of
            experienced professionals is dedicated to delivering exceptional
            results for our clients. We continually seek new opportunities to
            refine our investment strategies and drive tremendous capital
            growth.
          </p>

          <div className="flex flex-col py-12">
            <Button
              onClick={handleScrollToTop}
              title="Read More"
              type="button"
              size="large"
              className={`font-lora md:text-[1rem]`}
              icon={<BsChevronRight />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsHomeSection;
