import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";



function Jump() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsVisible(window.scrollY > 600);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

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
    className={`fixed bottom-6 right-6 z-50 p-2 rounded-full bg-secondary text-white cursor-pointer transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    onClick={scrollToTop}
    aria-label="Scroll to top"
  >
    <FaArrowUp size={24} />
  </div>
  )
}

export default Jump