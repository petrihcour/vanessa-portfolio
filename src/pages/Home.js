import React from "react";
import "../styles/Home.css";
// different animation styles for accent:
// typewriter effect, transition is deleting the word and retyping the new word.
// slide effect?

function Home() {
  return (
    <div id="home" className="ms-sm-4 me-sm-4 home-container">
      <div className="marquee home-accent accent text-lowercase">
        <div className="marquee-inner">
          <div className="ps-5 pe-5">Software Engineer</div>
          <div className="ps-5 pe-5">Sorcerer</div>
          <div className="ps-5 pe-5">Frontend Developer</div>
          <div className="ps-5 pe-5">Chaotic Creative</div>
          <div className="ps-5 pe-5">Full-Stack Developer</div>
          <div className="ps-5 pe-5">Cat Mom</div>
          <div className="ps-5 pe-5">Web Developer</div>
        </div>
      </div>
      <div className="d-flex flex-column flex-sm-row justify-content-between">
        <div className="col-sm-6">
          <h1 className="home-title text-uppercase">
            <div className="home-i-am">I am</div>
            <div className="home-title-vanessa">Vanessa</div>
          </h1>
        </div>
        <div className="home-text d-flex text-uppercase row align-content-end mb-sm-4">
          <p className="mt-2">
            <span className="text-end">I've found a home in technology,</span>
            where JavaScript, Node.js, React, HTML, CSS, and Bootstrap are my
            comfort. I love all things beautiful and functional. I love Dungeons
            & Dragons, unbearably spicy food, and my cats - Salmon, Sharky, and
            Fishy.
          </p>
          <div className="d-flex justify-content-end">
            <button
              type="button"
              className="btn btn-transparent border rounded-pill text-uppercase"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
