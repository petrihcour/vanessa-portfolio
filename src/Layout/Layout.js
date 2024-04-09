import React, { useEffect, useState } from "react";
import Header from "./Header";
import FeaturesAndTraits from "../components/FeaturesAndTraits";
import Home from "../components/Home";
import Quests from "../components/Quests";
import { Sending } from "../components/Sending";
import Skills from "../components/Skills";
import "../styles/Layout.css";

function Layout() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxOpacityScroll = window.innerHeight;

      // Adjust these thresholds as needed to control the fading effect
      const featureThreshold = maxOpacityScroll * 0.2;
      const questThreshold = maxOpacityScroll * 0.6;

      let newOpacity;

      if (scrollTop < featureThreshold) {
        newOpacity = 0;
      } else if (scrollTop >= featureThreshold && scrollTop < questThreshold) {
        newOpacity = (scrollTop - featureThreshold) / (questThreshold - featureThreshold);
      } else {
        newOpacity = 1;
      }

      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Dynamically determine the background color based on opacity
  const bgHomeRGB = [32, 38, 44];
  const bgHomeColor = `rgba(${bgHomeRGB[0]}, ${bgHomeRGB[1]}, ${bgHomeRGB[2]}, ${opacity})`;

  return (
    <div className="Layout" style={{ backgroundColor: bgHomeColor }}>
      <Header />
      <div className="bg-home min-vh-100 container-fluid" id="home">
        <Home />
      </div>
      <div className="bg-featuresAndTraits min-vh-100 container-fluid" id="features-traits">
        <FeaturesAndTraits />
      </div>
      <div className="bg-skills min-vh-100 container-fluid" id="skills">
        <Skills />
      </div>
      <div className="bg-quests min-vh-100 container-fluid" id="quests">
        <Quests />
      </div>
      <div className="bg-sending min-vh-100 container-fluid" id="sending">
        <Sending />
      </div>
    </div>
  );
}

export default Layout;
