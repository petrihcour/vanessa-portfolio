import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { motion } from "framer-motion";
import { fadeInFromTop } from "../animations/animations";
import logo from "../images/logo/logo.png";
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
    <motion.nav
      variants={fadeInFromTop}
      initial="hidden"
      animate="visible"
      className={`navbar sticky-top bg-transparent ${
        scrolling ? "blur-on-scroll" : ""
      }`}
    >
      <div className="container-fluid mt-2 mb-2 ps-sm-5 pe-sm-5">
        <div className="d-flex flex-sm-row align-items-baseline">
          {window.innerWidth <= 360 ? ( // conditionally render logo for screens 360px or less
            <a
              href="/"
              className="header-logo"
            >
              <img
                src={logo}
                alt="Logo"
                className="logo-img"
                style={{ width: "40px" }}
              />
            </a>
          ) : (
            <a
              href="/"
              className="header-name link-underline link-underline-opacity-0"
            >
              vanessa fischbach
            </a>
          )}
          <span className="header-title ps-3 d-none d-lg-block">
            WEB DEVELOPER
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
    </motion.nav>
  );
}

export default Header;
