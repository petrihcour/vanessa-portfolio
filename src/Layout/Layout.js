import React from "react";
import Header from "./Header";
import FeaturesAndTraits from "../components/FeaturesAndTraits/FeaturesAndTraits";
import Home from "../components/Home";
import Quests from "../components/Quests";
import { Sending } from "../components/Sending";
import Skills from "../components/Skills";
import "../styles/Layout.css";

function Layout() {
  return (
    <div className="Layout">
      <Header />
        <div className="bg-home min-vh-100 container-fluid">
          <Home id="home" />
        </div>
        <div className="bg-featuresAndTraits bg-dark min-vh-100 container-fluid">
          <FeaturesAndTraits id="features-traits" />
        </div>
        <div className="bg-skills bg-dark min-vh-100 container-fluid">
          <Skills id="skills" />
        </div>
        <div className="bg-quests min-vh-100 container-fluid">
          <Quests id="quests" />
        </div>
        <div className="bg-sending min-vh-100 container-fluid">
          <Sending id="sending" />
        </div>
    </div>
  );
}

export default Layout;
