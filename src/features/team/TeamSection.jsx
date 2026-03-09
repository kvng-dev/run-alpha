import { motion } from "framer-motion";
import teamMembers from "../../data/data";
import ProfileCard from "./TeamProfileCard";

const TeamSection = () => {
  return (
    <motion.div
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } },
      }}
    >
      {teamMembers.map((member) => (
        <ProfileCard
          key={member.id}
          image={member.image}
          name={member.name}
          title={member.title}
          quote={member.quote}
        />
      ))}
    </motion.div>
  );
};

export default TeamSection;
