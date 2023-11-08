import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
 

  return (
    <nav className="navbar bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <Link to="" className="navbar-brand" >
          <h3>
            Vanessa Garcia <br />A D&D Inspired Portfolio
          </h3>
        </Link>
       
      </div>
    </nav>
  );
}

export default Header;
