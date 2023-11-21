import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import MobileNav from "./MobileNav";
import FeaturesAndTraits from "../pages/FeaturesAndTraits";
import Home from "../pages/Home";
import Quests from "../pages/Quests";
import Sending from "../pages/Sending";
import Skills from "../pages/Skills";
import background from "../images/background.jpg";

function Layout() {
  return (
    <div className="Layout" style={{backgroundImage: `url(${background})`,
    backgroundSize: "cover", height: "100vh",
    }}>
      <Header />
      <div className="mt-5 pt-5">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/features-traits">
          <FeaturesAndTraits />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/quests">
          <Quests />
        </Route>
        <Route path="/sending">
          <Sending />
        </Route>
      </Switch>
      </div>
      <MobileNav />
    </div>
  );
}

export default Layout;
