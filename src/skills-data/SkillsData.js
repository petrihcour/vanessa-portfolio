

// bonuses
// might implement dice rolling for bonus
const proficiencyBonus = 3;
const expertiseBonus = proficiencyBonus + proficiencyBonus;

const skillsData = [
  {
    proficiency: "expertise",
    type: "Frontend",
    skill: "Bootstrap",
    bonus: expertiseBonus,
  },
  {
    proficiency: "proficient",
    type: "Personal",
    skill: "Cross-Functional Collaborations",
    bonus: proficiencyBonus,
  },
  {
    proficiency: "proficient",
    type: "Frontend",
    skill: "CSS",
    bonus: proficiencyBonus,
  },
  {
    proficiency: "proficient",
    type: "Backend",
    skill: "Express Js",
    bonus: proficiencyBonus,
  },
  {
    proficiency: "proficient",
    type: "Frontend",
    skill: "HTML5",
    bonus: proficiencyBonus,
  },
  {
    proficiency: "proficient",
    type: "Frontend",
    skill: "JavaScript",
    bonus: proficiencyBonus,
  },
  {
    proficiency: "proficient",
    type: "Backend",
    skill: "Node Js",
    bonus: proficiencyBonus,
  },
  {
    proficiency: "proficient",
    type: "Backend",
    skill: "PostgreSQL",
    bonus: proficiencyBonus,
  },
  {
    proficiency: "expertise",
    type: "Personal",
    skill: "Project Management",
    bonus: expertiseBonus,
  },
  {
    proficiency: "proficient",
    type: "Frontend",
    skill: "React",
    bonus: proficiencyBonus,
  },
  {
    proficiency: "expertise",
    type: "Personal",
    skill: "Root Cause Problem Solving",
    bonus: expertiseBonus,
  },
];

export default skillsData;
