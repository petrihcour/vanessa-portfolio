// bonuses
// might implement dice rolling for bonus
const proficiencyBonus = 3;
const expertiseBonus = proficiencyBonus + proficiencyBonus;

const bonusData = {
  Frontend: 4,
  Backend: 3,
  Personal: 5,
};

const skillsData = [
  {
    proficiency: "expertise",
    type: "Frontend",
    skill: "Bootstrap",
    bonus: expertiseBonus + bonusData.Frontend,
  },
  {
    proficiency: "proficient",
    type: "Frontend",
    skill: "CSS",
    bonus: proficiencyBonus + bonusData.Frontend,
  },
  {
    proficiency: "proficient",
    type: "Backend",
    skill: "Express",
    bonus: proficiencyBonus + bonusData.Backend,
  },
  {
    proficiency: "expertise",
    type: "Frontend",
    skill: "HTML",
    bonus: expertiseBonus + bonusData.Frontend,
  },
  {
    proficiency: "proficient",
    type: "Frontend",
    skill: "JavaScript",
    bonus: proficiencyBonus + bonusData.Frontend,
  },
  {
    proficiency: "proficient",
    type: "Backend",
    skill: "Node.js",
    bonus: proficiencyBonus + bonusData.Backend,
  },
  {
    proficiency: "proficient",
    type: "Backend",
    skill: "PostgreSQL",
    bonus: proficiencyBonus + bonusData.Backend,
  },
  {
    proficiency: "proficient",
    type: "Backend",
    skill: "Process Optimization",
    bonus: proficiencyBonus + bonusData.Personal,
  },
  {
    proficiency: "proficient",
    type: "Personal",
    skill: "Project Management",
    bonus: proficiencyBonus + bonusData.Personal,
  },
  {
    proficiency: "proficient",
    type: "Frontend",
    skill: "React",
    bonus: proficiencyBonus + bonusData.Frontend,
  },
  {
    proficiency: "proficient",
    type: "Frontend",
    skill: "React Native",
    bonus: proficiencyBonus + bonusData.Frontend,
  },
  {
    proficiency: "proficient",
    type: "Backend",
    skill: "RESTful APIs",
    bonus: proficiencyBonus + bonusData.Backend,
  },
  {
    proficiency: "proficient",
    type: "Frontend",
    skill: "Tailwind CSS",
    bonus: proficiencyBonus,
  },
  // {
  //   proficiency: "proficient",
  //   type: "Frontend",
  //   skill: "WordPress",
  //   bonus: proficiencyBonus + bonusData.Frontend,
  // },
];

export default skillsData;
