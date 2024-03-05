import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <div id="home" className="container">
      <div className="d-flex align-items-start flex-column">
        <p className="accent mb-0">
          human, sorcerer, software engineer, chaotic creative, cat mom
        </p>
        <h1 className="home-title text-uppercase">
          <div>I am</div>
          <div className="home-title-vanessa d-flex align-items-start flex-column">
            Vanessa
          </div>
        </h1>
      </div>
      <div className="home-text d-flex justify-content-end text-uppercase">
        <p className="mt-3">
          <div className="text-end">I've found a home in technology,</div>
          where JavaScript, Node.js, React, HTML, CSS, and Bootstrap are my comfort. I love all things beautiful and functional. I love Dungeons & Dragons, unbearably spicy food, and my cats - Salmon, Sharky, and Fishy. 
        </p>
      </div>
    </div>
  );
}

export default Home;
