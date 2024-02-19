import React from "react";
import Header from "./Header";
import FeaturesAndTraits from "../pages/FeaturesAndTraits";
import Home from "../pages/Home";
import Quests from "../pages/Quests";
import { Sending } from "../pages/Sending";
import Skills from "../pages/Skills";
import "../styles/Layout.css";

function Layout() {
  return (
    <div className="Layout">
      <Header />
        <div className="bg-home">
          <Home id="home" />
        </div>
        <div className="bg-featuresAndTraits">
          <FeaturesAndTraits id="features-traits" />
        </div>
        <div className="bg-skills bg-dark text-light">
          <Skills id="skills" />
        </div>
        <div className="bg-quests">
          <Quests id="quests" />
        </div>
        <div className="bg-sending">
          <Sending id="sending" />
        </div>
    </div>
  );
}

export default Layout;
