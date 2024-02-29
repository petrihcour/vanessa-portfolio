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
        <div className="bg-home min-vh-100">
          <Home id="home" />
        </div>
        <div className="bg-featuresAndTraits bg-dark min-vh-100">
          <FeaturesAndTraits id="features-traits" />
        </div>
        <div className="bg-skills bg-dark min-vh-100">
          <Skills id="skills" />
        </div>
        <div className="bg-quests min-vh-100">
          <Quests id="quests" />
        </div>
        <div className="bg-sending min-vh-100">
          <Sending id="sending" />
        </div>
    </div>
  );
}

export default Layout;
