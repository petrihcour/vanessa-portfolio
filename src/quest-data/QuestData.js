import flashcard from "../images/quests/flashcard.jpeg";
import welovemovies from "../images/quests/welovemovies.jpeg";
import tableFlow from "../images/quests/tableflow.jpeg";
import techGarden from "../images/quests/techgarden.jpeg";
import cybereye from "../images/quests/cybereye.jpeg";

const QuestData = [
  {
    name: "CyberEye",
    description:
      "A professional cybersecurity website built with WordPress, featuring a custom design optimized for accessibility, performance, and UX. Developed using custom CSS, and UX/UI best practices.",
    imageUrl: cybereye,
    figmaUrl: "https://www.figma.com/proto/6k9yhEVUXmIMJL2xjZxfG9/CyberEye?node-id=33-1680&p=f&t=Bv8ZdRMnt1W4NE6w-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=33%3A1680&show-proto-sidebar=1",
    webUrl: "https://www.cybereyesolutions.com",
    position: "left",
    reversePosition: false,
  },
  {
    name: "TechGarden",
    description:
      "Enhance technical, soft skills, and career growth with assessments and resources. Built with React and Tailwind CSS",
    imageUrl: techGarden,
    gitHubUrl: "https://github.com/cherryontech/TechGarden",
    webUrl: "https://techgarden.netlify.app/",
    position: "left",
    reversePosition: true,
  },
  {
    name: "TableFlow",
    description:
      "Manage reservations and tables for restaurants. Built and redesigned with React, Bootstrap, CSS, Node.js, Express, Postgres, and REST APIs",
    imageUrl: tableFlow,
    gitHubUrl: "https://github.com/petrihcour/TableFlow",
    webUrl: "https://reservation-restaurant-jkbn.onrender.com/",
    position: "left",
    reversePosition: false,
  },
  {
    name: "WeLoveMovies",
    description:
      "Movie application backend using Node.js, Express, Postgres, and REST APIs, granting access to movie, theater, and review data",
    imageUrl: welovemovies,
    gitHubUrl: "https://github.com/petrihcour/WeLoveMovies-Backend",
    webUrl: "https://welovemovies-frontend-sjx0.onrender.com/",
    position: "center",
    reversePosition: true,
  },
  {
    name: "FlashCard-o-matic",
    description:
      "Flashcard application using React and Bootstrap, allowing teachers to create decks of flashcards for students to study",
    imageUrl: flashcard,
    gitHubUrl: "https://github.com/petrihcour/flashcard-app.git",
    webUrl: "https://flashcard-o-matic-9frr.onrender.com/",
    position: "center",
    reversePosition: false,
  },
];

export default QuestData;
