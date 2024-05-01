import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <nav className="sending-footer body-text d-flex text-uppercase justify-content-center justify-content-xl-end mt-2">
      <ul className="nav">
        <li className="nav-item">
          <a
            className="nav-link"
            href="https://www.linkedin.com/in/vanesssagarcia/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="https://github.com/petrihcour"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="to be filled out"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Footer;
