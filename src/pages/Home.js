import React from "react";
import vanessa from "../images/vanessa.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div
      id="home"
      className="container"
    >
      <div className="row mt-5">
        <div className="col-md-6 pt-3">
          <p className="accent">
            human, sorcerer, software engineer, chaotic creative, cat mom
          </p>
          <h1 className="title">I AM</h1>
          <h1 className="title"> VANESSA</h1>
        </div>
        <div className="col-md-6 d-flex justify-content-end">
          <img
            src={vanessa}
            alt="AI representation of Vanessa"
            className="vanessa-image border border-5 rounded-circle rounded-bottom-0"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
