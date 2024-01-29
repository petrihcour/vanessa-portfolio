import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import MobileNav from "./Nav";
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
      className={`sticky-top bg-transparent border-bottom border-dark ${
        scrolling ? "blur-on-scroll" : ""
      }`}
    >
      <div className="d-flex align-items-center p-3">
        <div className="d-flex align-items-center justify-content-start">
          <div className="d-flex flex-column flex-sm-row">
            <Link to="home">
              <h6 className="mb-0">Vanessa Garcia</h6>
            </Link>
            <h6 className="mb-0 ms-sm-4">SOFTWARE ENGINEER</h6>
          </div>
        </div>

        <div className="ms-auto">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
}

export default Header;
