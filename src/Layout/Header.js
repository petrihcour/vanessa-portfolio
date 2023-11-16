import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";



function Header() {
  return (
    <nav className="navbar bg-body-tertiary fixed-top">
      <div className="container-fluid header">
        <Link to="/" className="navbar-brand" >
          <h3>
            Vanessa Garcia
          </h3>
          <h3>Frontend Developer</h3>
          <img src="https://cdn.iconfinder.com/icons/4683694/5155940/1024/raster.png?token=1700153899-BGXowyJ2GNVAKFc4EM1mKwubdLIMi9Hytpw4WBJevfI%3D" width="35" alt="20 sided die witg crossing swords"/>
        </Link>
       
      </div>
    </nav>
  );
}

export default Header;
