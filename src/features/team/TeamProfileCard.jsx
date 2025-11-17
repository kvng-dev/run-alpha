import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const ProfileCard = ({ image, name, title, quote }) => {
  return (
    <div className="bg-alpha flex cursor-pointer flex-col items-center space-y-3 rounded-xl p-6 text-white shadow-md duration-300 ease-in-out">
      <img
        src={image}
        alt={name}
        className="h-30 w-30 rounded-full object-cover"
      />
      <blockquote className="font-quicksand text-justify text-base">
        <div className="mt-6 flex w-full justify-start">
          <FaQuoteLeft size={16} className="mb-6" />
        </div>
        {quote}
        <div className="mt-6 flex w-full justify-end">
          <FaQuoteRight size={16} />
        </div>
      </blockquote>
      <div className="text-center">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className=" ">{title}</p>
      </div>
      {/* <span className="text-gray-400 text-xl">›</span> */}
    </div>
  );
};

export default ProfileCard;
