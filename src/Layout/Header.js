import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <nav className="sticky-top bg-transparent text-body">
          <div className="d-flex align-items-center">
            <div className="p-3 ">
              <h5>Vanessa Garcia</h5>
            </div>
            <div className="p-3 d-none d-sm-block">
              <h5>Frontend Developer</h5>
            </div>
            <div className="ms-auto p-3">
              <Link to="/">
                <img
                  src="https://cdn4.iconfinder.com/data/icons/video-game-items-concepts/128/swords-crossed-dice-512.png"
                  width="35"
                  alt="20 sided die with crossing swords"
                />
              </Link>
            </div>
          
      </div>
    </nav>
  );
}

export default Header;
