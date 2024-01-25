import React from "react";
import Header from "./Header";
import MobileNav from "./MobileNav";
import FeaturesAndTraits from "../pages/FeaturesAndTraits";
import Home from "../pages/Home";
import Quests from "../pages/Quests";
import Sending from "../pages/Sending";
import Skills from "../pages/Skills";


function Layout() {
  return (
    <div className="Layout p-2" >
      <Header />

      <MobileNav />
      <div>
          <Home id="home" />
          <FeaturesAndTraits id="features-traits" />
          <Skills id="skills" />
          <Quests id="quests" />
          <Sending id="sending" />
      </div>
    </div>
  );
}

export default Layout;
