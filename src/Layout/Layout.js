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
      <div className="page-container">
        <div className="section-container">
          <Home id="home" />
        </div>
        <div className="section-container">
          <FeaturesAndTraits id="features-traits" />
        </div>
        <div className="section-container">
          <Skills id="skills" />
        </div>
        <div className="section-container">
          <Quests id="quests" />
        </div>
        <div className="section-container">
          <Sending id="sending" />
        </div>
      </div>
    </div>
  );
}

export default Layout;
