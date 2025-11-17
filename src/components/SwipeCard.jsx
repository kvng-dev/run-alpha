import { motion, useMotionValue, useTransform } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

const SwipeCard = ({
  id,
  cards,
  setCards,
  image,
  quote,
  title,
  name,
  qualification,
}) => {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);
  const rotateR = useTransform(x, [-150, 150], [-18, 18]);
  const isFront = id === cards[cards.length - 1]?.id;

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : id % 2 ? 6 : -6;
    return `${rotateR.get() + offset}deg`;
  });

  // Handles swipe & reorder logic for infinite swipe
  const handleSwipe = (direction) => {
    x.set(direction === "right" ? 300 : -300);
    opacity.set(0);

    setTimeout(() => {
      setCards((prev) => {
        // Remove the first card (current front card)
        const newCards = prev.slice(1);
        const swipedCard = prev[0]; // The first card is the one we are swiping
        if (direction === "right" || direction === "left") {
          // If swiped right, move the swiped card to the end
          return [...newCards, swipedCard];
        } else {
          // If swiped left, move the swiped card to the front
          return [swipedCard, ...newCards];
        }
      });

      // Reset animation values
      x.set(0);
      opacity.set(1);
    }, 300);
  };

  // Drag event for touch/mouse swipe
  const handleDragEnd = (_, info) => {
    if (Math.abs(info.offset.x) > 100) {
      handleSwipe(info.offset.x > 0 ? "right" : "left");
    }
  };

  return (
    <motion.div
      key={id}
      className="relative mx-auto h-dvh origin-bottom rounded-lg object-cover hover:cursor-grab active:cursor-grabbing"
      style={{
        gridRow: 1,
        gridColumn: 1,
        x,
        opacity,
        rotate,
        transition: "0.2s transform ease-out",
        boxShadow: isFront
          ? "0 20px 30px -5px rgb(0 0 0 / 0.2), 0 8px 10px -6px rgb(0 0 0 / 0.5)"
          : undefined,
      }}
      animate={{ scale: isFront ? 1 : 0.98 }}
      drag="x"
      onDragEnd={handleDragEnd}
    >
      {/* Card Content */}
      <div className="bg-alpha group flex h-auto w-[350px] cursor-pointer flex-col items-center space-y-8 rounded-xl border border-white p-12 text-center text-white shadow-md duration-300 ease-in-out hover:text-white md:w-[400px] lg:w-[720px]">
        <img
          src={image}
          alt={name}
          className="h-30 w-30 rounded-full object-cover"
        />
        <blockquote className="font-inter w-full text-justify leading-7 text-white italic group-hover:text-white lg:text-xl">
          <div className="mt-6 flex w-full justify-start">
            <FaQuoteLeft size={25} className="mb-6" />
          </div>
          {quote}
          <div className="mt-6 flex w-full justify-end">
            <FaQuoteRight size={25} />
          </div>
        </blockquote>
        {qualification.degree ? (
          <>
            <div className="text-start">
              <h2 className="text-lg font-semibold">Qualification</h2>
              <div className="flex items-center gap-2 pl-4">
                <div className="h-1.5 w-1.5 rounded-full bg-white" />
                {qualification.degree}
              </div>
              <div className="flex items-center gap-2 pl-4">
                <div className="h-1.5 w-1.5 rounded-full bg-white" />
                {qualification.institute}
              </div>
            </div>
          </>
        ) : (
          <div className="hidden"></div>
        )}
        <div>
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="mb-8">{title}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default SwipeCard;
