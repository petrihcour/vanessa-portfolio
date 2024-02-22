import React from "react";
import vanessa from "../images/vanessa.jpeg";
import "../styles/Home.css"; 

function Home() {
  return (
    <div id="home" className="container d-flex align-items-center justify-content-center">
      <div className="row d-flex align-items-cnter mt-5">
        <div className="col-md-6 pt-3 text-center">
          <p className="accent">greetings, travelers</p>
          <h1 className="">I AM VANESSA</h1>
          <p className="accent">
            a human, sorcerer, software engineer, chaotic creative, cat mom
          </p>
        </div>
        <div className="col-md-6 text-center">
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