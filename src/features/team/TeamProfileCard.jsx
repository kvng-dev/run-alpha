import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";


// eslint-disable-next-line react/prop-types
const ProfileCard = ({ image, name, title,quote }) => {
  return (
    <div className="bg-alpha text-white shadow-md rounded-xl p-6 flex flex-col items-center  space-y-3 cursor-pointer ease-in-out duration-300">
      <img
        src={image}
        alt={name}
        className="rounded-full h-30 w-30 object-cover"
      />
      <blockquote className="text-base text-justify font-quicksand">
       <div className="w-full flex justify-start mt-6">
          <FaQuoteLeft size={16} className="mb-6" />
        </div>
              {quote}
        <div className="w-full flex justify-end mt-6">
            <FaQuoteRight size={16} />
        </div>
        </blockquote>
     <div className="text-center ">
       <h2 className="text-lg font-semibold">{name}</h2>
      <p className=" ">{title}</p>
     </div>
      {/* <span className="text-gray-400 text-xl">›</span> */}
    </div>
  );
};

export default ProfileCard;
