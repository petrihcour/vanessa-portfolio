import React from "react";
// import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import MobileNav from "./MobileNav";

function Layout() {
  return (
    <div className="Layout">
      <Header />
      <MobileNav />
    </div>
  );
}

export default Layout;