import React from "react";
import "./Home.css";
// different animation styles for accent:
// typewriter effect, transition is deleting the word and retyping the new word.
// slide effect?

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
    <div id="home" className="ms-sm-4 me-sm-4 home-container">
      <div className="marquee-accent home-accent accent text-lowercase">
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
        <div className="justify-content-lg-between row">
          <div className="home-title text-uppercase col-lg-6">
            <h1 className="home-i-am">I am</h1>
            <h1 className="home-title-vanessa">Vanessa</h1>
          </div>
          <div className="home-text text-uppercase col-lg-6 mt-4 align-content-end">
              <div className="text-end">I've found a home in technology,</div>
              where JavaScript, Node.js, React, HTML, CSS, and Bootstrap are my
              comfort. I love Dungeons & Dragons, unbearably spicy food, and my cats - Salmon,
              Sharky, and Fishy.
            <div className="d-flex justify-content-end mt-4">
              <a
                href="#sending"
                type="button"
                className="btn btn-transparent border rounded-pill text-uppercase"
              >
                <span className="default-text">Cast Sending</span>
                <div className="marquee-btn" aria-hidden="true">
                  <div className="marquee-btn-inner">
                    <span>Cast Sending</span>
                    <span>Cast Sending</span>
                    <span>Cast Sending</span>
                    <span>Cast Sending</span>
                    <span>Cast Sending</span>
                    <span>Cast Sending</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
