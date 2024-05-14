import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "../animations/animations";
import { useInView } from "react-intersection-observer";
import "../styles/Footer.css";

function Footer() {
  const { ref, inView } = useInView({ triggerOnce: false });

  const links = [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/vanesssagarcia/",
    },
    {
      label: "GitHub",
      url: "https://github.com/petrihcour",
    },
    {
      label: "Resume",
      url: "https://drive.google.com/file/d/1kAF1Wq4_GZ8jley4rhnFIRLl8NmwEia_/view?usp=sharing",
    },
  ];

  return (
    <nav className="sending-footer body-text d-flex text-uppercase justify-content-center justify-content-xl-end mt-2">
      <motion.ul
        className="nav"
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {links.map((link, index) => (
          <motion.li key={index} variants={staggerItem}>
            <a
              className="nav-link"
              href={link.url}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
}

export default Footer;
