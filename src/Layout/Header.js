import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Nav from "./Nav";
import "../styles/Header.css";
import vanessaLogo from "../images/logo/vanessa-logo.png";

function Header() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed-top bg-transparent border-bottom border-light header-border ${
        scrolling ? "blur-on-scroll" : ""
      }`} 
    >
      <div className="d-flex align-items-center" style={{height: "55px"}}>
          <div className="d-flex flex-column flex-sm-row">
            <Link to="home" className="d-flex align-items-center link-dark link-underline link-underline-opacity-0">
              <img src={vanessaLogo} alt="logo" className="ms-1 logo"  />
              <h6 className="fw-light d-none d-sm-block header">SOFTWARE ENGINEER</h6>
            </Link>
        </div>

        <div className="ms-auto pe-3 fw-light">
          <Nav />
        </div>
      </div>
    </nav>
  );
}

export default Header;
