import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "../animations/animations";
import { useInView } from "react-intersection-observer";
import MarqueeButton from "../animations/MarqueeButton";
import skillsData from "./SkillsData";

function SkillsTemplate() {
  const { ref, inView } = useInView({ triggerOnce: false });

  return (
    <motion.ul
      className="skills-list d-flex flex-wrap"
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {skillsData.map((skill, index) => (
        <motion.li key={index} variants={staggerItem}>
          <MarqueeButton type="button" label={skill.skill} hasMarquee />
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default SkillsTemplate;
