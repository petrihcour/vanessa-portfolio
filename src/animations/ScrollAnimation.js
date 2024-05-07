import React, { useEffect, useState } from "react";

const ScrollAnimation = ({ children, animation }) => {
  const [isVisible, setIsVisible] = useState(false);

  // detects when the component becomes visible on the screen
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("scroll-animation");
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Trigger animation when element is 2% visible
      if (rect.top < windowHeight * 0.75 && rect.bottom >= 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="scroll-animation" className={isVisible ? animation : ""}>
      {children}
    </div>
  );
};

export default ScrollAnimation;
