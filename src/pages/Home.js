import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <div id="home" className="container">
      <div className="d-flex flex-column flex-sm-row">
        <div className="col-sm-6">
        <p className="accent home-accent">
          human, sorcerer, software engineer, chaotic creative, cat mom
        </p>
        <h1 className="home-title text-uppercase col-sm-6">
          <div className="home-i-am">I am</div>
          <div className="home-title-vanessa">Vanessa</div>
        </h1>
        </div>
        <div className="home-text d-flex align-items-end text-uppercase col-sm-6">
          <p className="mt-3">
            <div className="text-end">I've found a home in technology,</div>
            where JavaScript, Node.js, React, HTML, CSS, and Bootstrap are my
            comfort. I love all things beautiful and functional. I love Dungeons
            & Dragons, unbearably spicy food, and my cats - Salmon, Sharky, and
            Fishy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
