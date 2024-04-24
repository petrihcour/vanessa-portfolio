import React from "react";
import "../styles/Home.css";
import MarqueeButton from "../animations/MarqueeButton";

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

  return (
    <div id="home" className="home-container mt-md-5 pt-md-5 mb-4 pb-5 mb-lg-5">
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
        <div className="justify-content-xl-between row">
          <div className="text-uppercase col-lg-6 align-content-end">
            <h1 className="home-i-am">I am</h1>
            <h1 className="home-title-vanessa">Vanessa</h1>
          </div>
          <div className="body-text text-uppercase col-xl-5 col-lg-6 mt-4 align-content-end">
              <div className="text-end">I've found a home in technology,</div>
              where JavaScript, React, HTML, CSS, and Bootstrap are my
              comfort. I love Dungeons & Dragons, unbearably spicy food, and my cats - Salmon,
              Sharky, and Fishy.
            <div className="d-flex justify-content-end mt-4">
              <MarqueeButton type="button" label="Cast Sending" hasMarquee />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
