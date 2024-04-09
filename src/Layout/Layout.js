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

  useEffect (() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxOpacityScroll = window.innerHeight;
      const newOpacity = Math.min(1, scrollTop / maxOpacityScroll);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

   // Dynamically determine the background color based on opacity
   const bgColor = `rgba(0, 0, 0, ${opacity})`;
   const layoutStyle = {
     backgroundColor: bgColor,
     transition: "background-color 0.5s ease",
   };

  return (
    <div className={`Layout ${opacity > 0.8 ? 'bg-dark' : ''}`} style={layoutStyle}>
      <Header />
        <div className="bg-home min-vh-100 container-fluid" id="home">
          <Home  />
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
