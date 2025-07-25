import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Function to track the mouse movement
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Event listener to update the cursor position
    window.addEventListener("mousemove", moveCursor);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  useEffect(() => {
    const buttons = document.querySelectorAll(".motion-button");

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    buttons.forEach((btn) => {
      btn.addEventListener("mouseenter", handleMouseEnter);
      btn.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      buttons.forEach((btn) => {
        btn.removeEventListener("mouseenter", handleMouseEnter);
        btn.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      className={`fixed z-50 pointer-events-none transition-transform duration-700 ease-out`}
      style={{
        width: isHovering ? "40px" : "30px",
        height: isHovering ? "40px" : "30px",
        left: `${position.x - (isHovering ? 25 : 12)}px`,
        top: `${position.y - (isHovering ? 25 : 12)}px`,
      }}
    >
      <div className="absolute w-full h-full rounded-full border-3 border-secondary bg-transparent" />
    </div>
  );
};

export default CustomCursor;
