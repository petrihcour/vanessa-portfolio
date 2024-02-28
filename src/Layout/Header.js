import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Nav from "./Nav";
import "../styles/Header.css";

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
      className={`navbar fixed-top bg-transparent border-bottom border-light header-border ${
        scrolling ? "blur-on-scroll" : ""
      }`}
    >
      <div className="container-fluid">
        <div className="d-flex flex-sm-row align-items-center">
          <Link
            to="home"
            className="text-light header-name link-underline link-underline-opacity-0"
          >
            vanessa garcia
          </Link>
          <span className="ps-3 d-none d-sm-block header">SOFTWARE ENGINEER</span>
        </div>

        <div className="header">
          <Nav />
        </div>
      </div>
    </nav>
  );
}

export default Header;
