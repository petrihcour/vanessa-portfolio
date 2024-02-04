import React from "react";
import { Link } from "react-scroll";
import "../styles/Nav.css";

// need to adjust background for nav. maybe same background or a blur or it hides until hovered over?

// add design a little bit later. possible gold trim. adjust font for slighlty more ancient feeling
// small animations for buttons / links / menu

function Nav() {
  return (
    <div className="d-flex">
      <Link to="features-traits" smooth duration={500} className="navbar-brand">
        <div className="nav-item">
          <div className="pe-1">features & traits,</div>
        </div>
      </Link>
      <Link to="skills" smooth duration={500} className="navbar-brand ">
        <div className="nav-item">
          <div className="pe-1">skills,</div>
        </div>
      </Link>
      <Link to="quests" smooth duration={500} className="navbar-brand">
        <div className="nav-item">
          <div className="pe-1">quests,</div>
        </div>
      </Link>
      <Link to="sending" smooth duration={500} className="navbar-brand me-2">
        <div className="nav-item">
          <div>sending</div>
        </div>
      </Link>
    </div>
  );
}

export default Nav;
