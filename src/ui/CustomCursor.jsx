import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // The ring trails behind with spring physics
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleLeave = () => setIsVisible(false);
    const handleEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  useEffect(() => {
    const handleMouseOver = (e) => {
      if (
        e.target.closest(
          "a, button, .motion-button, [role='button'], input, textarea, select"
        )
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    return () => document.removeEventListener("mouseover", handleMouseOver);
  }, []);

  // Hide on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      {/* Inner dot — follows cursor instantly */}
      <motion.div
        className="absolute rounded-full bg-secondary"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovering ? 8 : 6,
          height: isHovering ? 8 : 6,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Outer ring — trails with spring physics */}
      <motion.div
        className="absolute rounded-full border-2 border-secondary"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovering ? 48 : 32,
          height: isHovering ? 48 : 32,
          borderColor: isHovering
            ? "var(--color-secondary)"
            : "var(--color-secondary)",
          backgroundColor: isHovering
            ? "rgba(108, 180, 184, 0.1)"
            : "transparent",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
    </div>
  );
};

export default CustomCursor;
