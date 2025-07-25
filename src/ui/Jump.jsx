import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";



function Jump() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll
    });
  };
  return (
    <div
    className={`fixed bottom-6 right-6 z-50 p-2 rounded-full bg-secondary text-white cursor-pointer transition-opacity duration-300 ${isVisible ? 'opacity-100 animate-pulse' : 'opacity-0'}`}
    onClick={scrollToTop}
    aria-label="Scroll to top"
  >
    <FaArrowUp size={24} />
  </div>
  )
}

export default Jump