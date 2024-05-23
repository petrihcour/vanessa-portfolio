import React from "react";
import { Link } from "react-scroll";
import "../styles/Header.css";

function Nav() {
  const navItems = [
    { to: "features-traits", label: "Features & Traits," },
    { to: "skills", label: "Skills," },
    { to: "quests", label: "Quests," },
    { to: "sending", label: "Sending" },
  ];

  return (
    <nav aria-label="Main Navigation" className="d-flex">
      <ul className="nav">
        {navItems.map((item, index) => (
          <li className="nav-item" key={index}>
            <Link
              to={item.to}
              role="button"
              smooth
              duration={500}
              className="nav-link link-underline link-underline-opacity-0 text-lowercase ps-2 pe-0"
              aria-label={`Navigate to ${item.label} section`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
