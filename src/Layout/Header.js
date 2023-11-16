import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <nav className="fixed-top text-bg-dark">
          <div className="d-flex align-items-center">
            <div className="p-2">
              <h3>Vanessa Garcia</h3>
            </div>
            <div className="p-2">
              <h3>Frontend Developer</h3>
            </div>
            <div className="ms-auto p-2">
              <Link to="/">
                <img
                  src="https://cdn.iconfinder.com/icons/4683694/5155940/1024/raster.png?token=1700153899-BGXowyJ2GNVAKFc4EM1mKwubdLIMi9Hytpw4WBJevfI%3D"
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
