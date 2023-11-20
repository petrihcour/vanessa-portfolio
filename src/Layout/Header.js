import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <nav className="fixed-top text-bg-dark">
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
                  src="https://cdn.iconfinder.com/icons/4683694/5155940/1024/raster.png?token=1700492748-5vrspDSNyFSanYC4BWN3HxA8XSXwsI1H7uYbemiaH7c%3D"
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
