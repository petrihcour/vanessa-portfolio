import React from "react";
import { Link } from "react-scroll";
import "../styles/Header.css";

function Nav() {
  const navItems = [
    { to: "features-traits", label: "features & traits," },
    { to: "skills", label: "skills," },
    { to: "quests", label: "quests," },
    { to: "sending", label: "sending" },
  ];

  return (
    <div className="d-flex">
      <ul className="nav">
        {navItems.map((item, index) => (
          <li className="nav-item" key={index}>
            <Link
              to={item.to}
              smooth
              duration={500}
              className="nav-link link-underline link-underline-opacity-0 ps-2 pe-0"
              aria-current="page"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Nav;
