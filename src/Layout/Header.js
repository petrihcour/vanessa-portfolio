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
      className={`sticky-top bg-transparent border-bottom border-dark ${
        scrolling ? "blur-on-scroll" : ""
      }`}
    >
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <Link to="home" className="d-flex align-items-center link-dark link-underline link-underline-opacity-0">
            <img
              src={vanessaLogo}
              alt="logo"
              className="w-25"
            />
            <h6 className="mt-3 ms-2">SOFTWARE ENGINEER</h6>
          </Link>
          
          <div className="ms-auto">
            <Nav />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
