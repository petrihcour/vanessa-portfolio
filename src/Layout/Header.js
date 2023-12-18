import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0)
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])


  return (
    <nav className={`sticky-top bg-transparent text-body border-bottom ${scrolling ? "blur-on-scroll" : ""}`}>
          <div className="d-flex align-items-center p-3 text-light">
            <div>
              <h5>Vanessa Garcia</h5>
            </div>
            <div className="d-none d-sm-block ps-4">
              <h5>Full-Stack Developer</h5>
            </div>
            <div className="ms-auto">
              <Link to="/">
                <img
                  src="https://cdn4.iconfinder.com/data/icons/video-game-items-concepts/128/swords-crossed-dice-512.png"
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
