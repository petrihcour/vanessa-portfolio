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
            <div className="home-title-vanessa d-flex align-items-start flex-column">Vanessa</div>
          </h1>
      </div>
    </div>
  );
}

export default Home;
