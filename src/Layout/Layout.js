import React, { useEffect, useState } from "react";
import Header from "./Header";
import FeaturesAndTraits from "../components/FeaturesAndTraits";
import Home from "../components/Home";
import Quests from "../components/Quests";
import { Sending } from "../components/Sending";
import Skills from "../components/Skills";
import "../styles/Layout.css";

function Layout() {
  const [opacity, setOpacity] = useState(0); // Initially set opacity to 0 for transparency

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // Calculate the top and bottom positions of each section
      const homeSection = document.getElementById("home");
      const featuresTraitsSection = document.getElementById("features-traits");
      const skillsSection = document.getElementById("skills");
      const questsSection = document.getElementById("quests");
      const sendingSection = document.getElementById("sending");

      const homeTop = homeSection.offsetTop;
      const featuresTraitsTop = featuresTraitsSection.offsetTop;
      const skillsTop = skillsSection.offsetTop;
      const questsTop = questsSection.offsetTop;
      const sendingTop = sendingSection.offsetTop;

      let newOpacity = 0;

      // Determine the opacity based on the scroll position
      if (scrollTop >= homeTop && scrollTop < featuresTraitsTop) {
        newOpacity = (scrollTop - homeTop) / (featuresTraitsTop - homeTop);
      } else if (scrollTop >= featuresTraitsTop && scrollTop < skillsTop) {
        newOpacity = 1;
      } else if (scrollTop >= skillsTop && scrollTop < questsTop) {
        newOpacity = 1;
      } else if (scrollTop >= questsTop && scrollTop < sendingTop) {
        newOpacity = 1 - (scrollTop - questsTop) / (sendingTop - questsTop);
      } else if (scrollTop >= sendingTop) {
        newOpacity = 0; // Set opacity to 0 for the "Sending" section
      }

      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Dynamically determine the background color based on opacity
  const bgHomeColor = `rgba(32, 38, 44, ${opacity})`;

  return (
    <div className="Layout" style={{ backgroundColor: bgHomeColor }}>
      <Header />
      <div className="bg-home min-vh-100 container-fluid" id="home">
        <Home />
      </div>
      <div className="bg-featuresAndTraits min-vh-100 container-fluid" id="features-traits" style={{ opacity: opacity }}>
        <FeaturesAndTraits />
      </div>
      <div className="bg-skills min-vh-100 container-fluid" id="skills" style={{ opacity: 1 }}>
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
