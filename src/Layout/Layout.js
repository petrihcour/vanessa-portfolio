import React from "react";
import Header from "./Header";
import FeaturesAndTraits from "../components/FeaturesAndTraits";
import Home from "../components/Home";
import Quests from "../components/Quests";
import { Sending } from "../components/Sending";
import Skills from "../components/Skills";
import "../styles/Layout.css";

function Layout() {
  return (
    <div className="Layout">
      <Header />
      <div className="section bg-home min-vh-100 container-fluid" 
      id="home"
      >
        <Home />
      </div>
      <div
        className="section bg-featuresAndTraits min-vh-100 container-fluid"
        id="features-traits"
      >
        <FeaturesAndTraits />
      </div>
      <div className="section bg-skills min-vh-100 container-fluid" 
      id="skills"
      >
        <Skills />
      </div>
      <div className="section bg-quests min-vh-100 container-fluid" 
      id="quests"
      >
        <Quests />
      </div>
      <div
        className="section bg-sending min-vh-100 container-fluid"
        id="sending"
      >
        <Sending />
      </div>
    </div>
  );
}

export default Layout;
