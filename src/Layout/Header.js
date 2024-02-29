import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Nav from "./Nav";
import "../styles/Header.css";

function Header() {
  const [scrolling, setScrolling] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / totalHeight) * 100;

      setScrollProgress(progress);
      setScrolling(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar fixed-top bg-transparent ${
        scrolling ? "blur-on-scroll" : ""
      }`}
    >
      <div className="container-fluid m-2 ps-sm-5 pe-sm-5">
        <div className="d-flex flex-sm-row align-items-baseline">
          <Link
            to="home"
            className="header-name link-underline link-underline-opacity-0"
          >
            vanessa garcia
          </Link>
          <span className="ps-3 d-none d-sm-block header-title">
            SOFTWARE ENGINEER
          </span>
        </div>

        <div className="header">
          <Nav />
        </div>
      </div>
      <div className="progress">
        <div
          className={`${scrolling ? "progress-bar-scrolling" : ""}`}
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
    </nav>
  );
}

export default Header;
