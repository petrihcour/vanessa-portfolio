import React from "react";
import { motion } from "framer-motion";
import {
  fadeVariant,
  fadeInFromBottom,
  fadeInFromLeft,
  fadeInFromRight,
} from "../animations/animations";
import MarqueeButton from "../animations/MarqueeButton";
import "../styles/Home.css";

function Home() {
  const words = [
    "Software Engineer",
    "Sorcerer",
    "Frontend Developer",
    "Chaotic Creative",
    "Full-Stack Developer",
    "Cat Mom",
    "Web Developer",
  ];

  const marqueeLoopCount = 5;
  const repeatedWords = Array.from(
    { length: marqueeLoopCount },
    () => words
  ).flat();

  // scroll adjustment when clicking Cast Sending button on home page to ensure scroll is as smooth as other scrolling

  const smoothScrollTo = (element, duration) => {
    const targetPosition = element.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const ease = (timeElapsed / duration) ** 2;
      window.scrollTo(0, startPosition + distance * ease);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  const handleScrollToSending = () => {
    const sendingElement = document.getElementById("sending");
    if (sendingElement) {
      smoothScrollTo(sendingElement, 500); // Adjust duration here
    }
  };

  return (
    <motion.div
      variants={fadeVariant}
      initial="hidden"
      animate="visible"
      className="home-container mt-md-5 pt-md-5 mb-4 pb-5 mb-lg-5"
    >
      <div className="marquee-accent home-accent text-lowercase">
        <div className="marquee-accent-inner" aria-hidden="true">
          {repeatedWords.map((word, index) => (
            <div
              key={index}
              className="ms-sm-4 me-sm-4 ps-sm-4 pe-sm-4 ms-2 me-2 ps-2 pe-2"
            >
              {word}
            </div>
          ))}
        </div>
      </div>
      <div className="container-fluid">
        <div className="justify-content-xl-between align-items-end row">
          <motion.div
            variants={fadeInFromLeft}
            className="text-uppercase col-lg-6 align-content-end"
          >
            <h1 className="home-i-am">I am</h1>
            <h1 className="home-title-vanessa">Vanessa</h1>
          </motion.div>
          <div className="body-text text-uppercase col-xl-5 col-lg-6 mt-4">
            <motion.div variants={fadeInFromRight} className="text-end">
              I've found a home in technology,
            </motion.div>
            <motion.p variants={fadeInFromRight}>
              where JavaScript, React, HTML, CSS, and Bootstrap are my comfort.
              I'm based out of Central Texas and I love Dungeons & Dragons,
              unbearably spicy food, and my cats - Salmon, Sharky, and Fishy.
            </motion.p>
            <motion.div
              variants={fadeInFromBottom}
              className="d-flex justify-content-end mt-4"
            >
              <MarqueeButton
                type="button"
                label="Cast Sending"
                onClick={handleScrollToSending}
                hasMarquee
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
