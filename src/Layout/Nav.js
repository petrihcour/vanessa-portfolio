import React from "react";
import { Link } from "react-scroll";
import "../styles/Nav.css";

function Nav() {
  const navItems = [
    { to: "features-traits", label: "features & traits," }, 
    { to: "skills", label: "skills," },
    { to: "quests", label: "quests," },
    { to: "sending", label: "sending" },
  ];

  return (
    <div className="d-flex">
      {navItems.map((item, index) => (
        <Link key={index} to={item.to} smooth duration={500} className="navbar-brand">
          <div className="nav-item pe-1">
            {item.label}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Nav;
