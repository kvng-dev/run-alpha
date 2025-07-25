import { useState } from "react"
import SwipeCard from "../components/SwipeCard"
import teamMembers, { heroSectionData } from "../data/data"
import HeroSectionCard from "../ui/HeroSectionCard"
import { motion } from "framer-motion"
import TeamSection from "../features/team/TeamSection"
import { PiArrowBendUpLeftBold, PiArrowBendUpRightBold } from "react-icons/pi"
import SEO from "../components/SEO"

function Team() {

  const [cards, setCards] = useState(teamMembers)

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
      />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <HeroSectionCard data={heroSectionData.teams} />
      </motion.div>

      <motion.div
        className="md:max-w-[1500px] max-w-lg w-full md:mx-auto md:grid grid-cols-1 lg:grid-cols-2 px-4 md:px-32 py-8 place-items-center gap-16 md:my-24"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="row-start-2 md:row-start-1">
          <motion.img
            src="/pexels-diva-plavalaguna-6149793.jpg"
            alt=""
            className="rounded-2xl mb-6 md:h-[500px] object-cover"
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
          <h2 className="md:text-3xl text-2xl mb-4 font-lora text-alpha font-extrabold text-">Join Us</h2>
          <p className="tracking-[2] text-base lg:text-xl leading-relaxed font-quicksand">
          In order to achieve success, we rely on our most important asset: the collaborative effort, resourcefulness and talent of our employees. Our continued success is truly determined by our ability to attract and retain exceptional talent. We are always on the lookout for team-oriented individuals with a capacity to apply creative and scientific thinking to solve challenging problems. Perhaps you can join us?
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="md:max-w-[1500px] max-w-lg w-full md:mx-auto grid grid-cols-1 lg:grid-cols-2 px-4 md:px-32 py-4 place-items-center gap-4 my-12"
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
          <h2 className="md:text-3xl text-xl mb-8  font-lora text-alpha capitalize font-extrabold row-start-2">
            workplace & culture
          </h2>
          <p className="tracking-[2] text-base lg:text-xl leading-relaxed font-quicksand mb-6">
            We believe that a successful and productive team is one where everyone feels valued and respected. Our culture values open communication, collaboration, and a growth mindset. We also strive to create a work environment that fosters a sense of belonging and purpose. Our focus is on providing a supportive and inclusive environment where employees feel comfortable expressing their thoughts, ideas, and concerns. As a team-oriented company, we believe that every member contributes to the success of our organization.
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
      className="flex flex-col items-center justify-center bg-alpha text-white md:px-16 lg:px-28 xl:px-36 md:text-center px-6 md:py-12 py-6"
    >
      <h2 className="text-2xl md:text-3xl mb-8 font-lora font-extrabold">
        What We Do
      </h2>
      <p className="tracking-wide text-base md:text-lg lg:text-xl leading-relaxed font-quicksand text-center md:text-center">
        We specialize in developing innovative and sustainable solutions that help our clients achieve their goals. Our team of experts combines expertise in various fields, such as engineering, environmental science, and business management. We continuously strive to improve our processes, technology, and communication to ensure that our clients receive the best possible results.
      </p>
    </motion.div>

    {/* Image Block */}
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full h-full aspect-[3/2] md:aspect-[4/3] overflow-hidden"
    >
      <img
        className="absolute inset-0 w-full h-full object-cover"
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
        className="relative w-full aspect-[3/2] overflow-hidden"
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.4 }}
      >
        <img
          src={src}
          alt={`Gallery ${index}`}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </motion.div>
    ))}
  </div>
</div>


      <div className="my-28 md:px-24 px-8 text-center sm:max-w-3xl sm:mx-auto">
        <h2 className="text-xl md:text-3xl mb-8 font-lora text-alpha font-extrabold">
          What We Offer
        </h2>
        <p className="tracking-[2] text-base md:text-base lg:text-[20px] max-w-sm md:max-w-7xl mx-auto leading-relaxed font-quicksand">
          At Run Alpha, we strive to offer a comprehensive and transparent investment experience that aligns with our clients&apos; financial goals and risk tolerance. We believe that by providing a safe, transparent, and accessible platform, we can help clients make informed decisions while also fostering a culture of continuous learning and growth. Our mission is to create a platform that empowers individuals to make informed decisions, while also fostering a culture of continuous learning and growth.
        </p>
      </div>

        <div className="min-h-screen bg-gray-300 py-12 w-full max-w-screen relative">
             <div className=" justify-between absolute my-auto top-1/3 w-full z-20 px-4 hidden lg:flex">
          <button
            onClick={() => handleSwipe("left")}
            className="bg-alpha text-white p-3 rounded-full shadow-md hover:bg-opacity-80 transition"
          >
            <PiArrowBendUpLeftBold size={32} />
          </button>
          <button
            onClick={() => handleSwipe("right")}
            className="bg-alpha text-white p-3 rounded-full shadow-md hover:bg-opacity-80 transition"
          >
            <PiArrowBendUpRightBold size={32} />
          </button>
        </div>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-xl md:text-4xl font-lora font-extrabold text-alpha text-center mb-6">Meet The Team</motion.p>
        <div className="hidden lg:grid place-items-center items-start lg:h-[100ch] mt-12 max-w-screen">
          {teamMembers.map((card,i) => (
            <SwipeCard
             key={`card-${i}`}
              id={cards[0].id}
              cards={cards}
              setCards={setCards}
              {...cards[0]}
            />
          ))}
        </div>
        <div className=" lg:hidden flex flex-wrap">
              <TeamSection />
        </div>
      </div>

    </section>
  )
}

export default Team
