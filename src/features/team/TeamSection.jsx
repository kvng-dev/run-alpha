import teamMembers from "../../data/data";
import ProfileCard from "./TeamProfileCard";

const TeamSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  gap-3 px-6">
      {teamMembers.map((member) => (
        <ProfileCard
          key={member.id}
          image={member.image}
          name={member.name}
          title={member.title}
          quote={member.quote}
          />
        ))}
    </div>
  );
};

export default TeamSection;