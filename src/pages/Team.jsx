import { useState } from "react";
import SwipeCard from "../components/SwipeCard";
import teamMembers, { heroSectionData } from "../data/data";
import HeroSectionCard from "../ui/HeroSectionCard";
import { motion } from "framer-motion";
import TeamSection from "../features/team/TeamSection";
import { PiArrowBendUpLeftBold, PiArrowBendUpRightBold } from "react-icons/pi";
import SEO from "../components/SEO";

function Team() {
  const [cards, setCards] = useState(teamMembers);

  const handleSwipe = (direction) => {
    setCards((prevCards) => {
      if (prevCards.length < 2) return prevCards; // Prevent errors

      if (direction === "right") {
        return [...prevCards.slice(1), prevCards[0]]; // Move first card to the end
      } else {
        return [prevCards[prevCards.length - 1], ...prevCards.slice(0, -1)]; // Move last card to the front
      }
    });
  };

  return (
    <section>
      <SEO
        title="Meet the Team | Run Alpha"
        description="Meet the expert financial advisors & portfolio managers at Run Alpha, Nigeria's trusted investment management service for capital growth. Discover our team."
        url="https://runalpha.co/team"
        type="website"
      />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <HeroSectionCard data={heroSectionData.teams} />
      </motion.div>

      <motion.div
        className="w-full max-w-lg grid-cols-1 place-items-center gap-16 px-4 py-8 md:mx-auto md:my-24 md:grid md:max-w-[1500px] md:px-32 lg:grid-cols-2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="row-start-2 md:row-start-1">
          <motion.img
            src="/pexels-diva-plavalaguna-6149793.jpg"
            alt=""
            className="mb-6 rounded-2xl object-cover md:h-[500px]"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-lora text-alpha text- mb-4 text-2xl font-extrabold md:text-3xl">
            Join Us
          </h2>
          <p className="font-quicksand text-base leading-relaxed tracking-[2] lg:text-xl">
            In order to achieve success, we rely on our most important asset:
            the collaborative effort, resourcefulness and talent of our
            employees. Our continued success is truly determined by our ability
            to attract and retain exceptional talent. We are always on the
            lookout for team-oriented individuals with a capacity to apply
            creative and scientific thinking to solve challenging problems.
            Perhaps you can join us?
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="my-12 grid w-full max-w-lg grid-cols-1 place-items-center gap-4 px-4 py-4 md:mx-auto md:max-w-[1500px] md:px-32 lg:grid-cols-2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-lora text-alpha row-start-2 mb-8 text-xl font-extrabold capitalize md:text-3xl">
            workplace & culture
          </h2>
          <p className="font-quicksand mb-6 text-base leading-relaxed tracking-[2] lg:text-xl">
            We believe that a successful and productive team is one where
            everyone feels valued and respected. Our culture values open
            communication, collaboration, and a growth mindset. We also strive
            to create a work environment that fosters a sense of belonging and
            purpose. Our focus is on providing a supportive and inclusive
            environment where employees feel comfortable expressing their
            thoughts, ideas, and concerns. As a team-oriented company, we
            believe that every member contributes to the success of our
            organization.
          </p>
        </motion.div>

        <motion.img
          src="/team-assets/annie-spratt-QckxruozjRg-unsplash.jpg"
          alt=""
          className="rounded-2xl"
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </motion.div>

      <div className="mb-16">
        {/* Text + Image Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2">
          {/* Text Block */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-alpha flex flex-col items-center justify-center px-6 py-6 text-white md:px-16 md:py-12 md:text-center lg:px-28 xl:px-36"
          >
            <h2 className="font-lora mb-8 text-2xl font-extrabold md:text-3xl">
              What We Do
            </h2>
            <p className="font-quicksand text-center text-base leading-relaxed tracking-wide md:text-center md:text-lg lg:text-xl">
              We specialize in developing innovative and sustainable solutions
              that help our clients achieve their goals. Our team of experts
              combines expertise in various fields, such as engineering,
              environmental science, and business management. We continuously
              strive to improve our processes, technology, and communication to
              ensure that our clients receive the best possible results.
            </p>
          </motion.div>

          {/* Image Block */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative aspect-[3/2] h-full w-full overflow-hidden md:aspect-[4/3]"
          >
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="/pexels-olly-3769021.jpg"
              alt="What we do"
            />
          </motion.div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-4">
          {[
            "/team-assets/tobias-mrzyk-iuqmGmst5Po-unsplash.jpg",
            "/team-assets/helena-lopes-PGnqT0rXWLs-unsplash.jpg",
            "/ninthgrid-4-RLopzTVQ8-unsplash.jpg",
            "/team-assets/chang-duong-Sj0iMtq_Z4w-unsplash.jpg",
          ].map((src, index) => (
            <motion.div
              key={index}
              className="relative aspect-[3/2] w-full overflow-hidden"
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.4,
              }}
            >
              <img
                src={src}
                alt={`Gallery ${index}`}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="my-28 px-8 text-center sm:mx-auto sm:max-w-3xl md:px-24">
        <h2 className="font-lora text-alpha mb-8 text-xl font-extrabold md:text-3xl">
          What We Offer
        </h2>
        <p className="font-quicksand mx-auto max-w-sm text-base leading-relaxed tracking-[2] md:max-w-7xl md:text-base lg:text-[20px]">
          At Run Alpha, we strive to offer a comprehensive and transparent
          investment experience that aligns with our clients&apos; financial
          goals and risk tolerance. We believe that by providing a safe,
          transparent, and accessible platform, we can help clients make
          informed decisions while also fostering a culture of continuous
          learning and growth. Our mission is to create a platform that empowers
          individuals to make informed decisions, while also fostering a culture
          of continuous learning and growth.
        </p>
      </div>

      <div className="relative min-h-screen w-full max-w-screen bg-gray-300 py-12">
        <div className="absolute top-1/3 z-20 my-auto hidden w-full justify-between px-4 lg:flex">
          <button
            onClick={() => handleSwipe("left")}
            className="bg-alpha hover:bg-opacity-80 rounded-full p-3 text-white shadow-md transition"
          >
            <PiArrowBendUpLeftBold size={32} />
          </button>
          <button
            onClick={() => handleSwipe("right")}
            className="bg-alpha hover:bg-opacity-80 rounded-full p-3 text-white shadow-md transition"
          >
            <PiArrowBendUpRightBold size={32} />
          </button>
        </div>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-lora text-alpha mb-6 text-center text-xl font-extrabold md:text-4xl"
        >
          Meet The Team
        </motion.p>
        <div className="mt-12 hidden max-w-screen place-items-center items-start lg:grid lg:h-[100ch]">
          {teamMembers.map((card, i) => (
            <SwipeCard
              key={`card-${i}`}
              id={cards[0].id}
              cards={cards}
              setCards={setCards}
              {...cards[0]}
            />
          ))}
        </div>
        <div className="flex flex-wrap lg:hidden">
          <TeamSection />
        </div>
      </div>
    </section>
  );
}

export default Team;
