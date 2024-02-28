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
    <div className="d-flex ">
      {navItems.map((item, index) => (
        <Link
          key={index}
          to={item.to}
          smooth
          duration={500}
          className="nav-link link-underline link-underline-opacity-0 ps-1"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export default Nav;
