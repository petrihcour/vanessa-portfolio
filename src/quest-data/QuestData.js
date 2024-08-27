import flashcard from "../images/quests/flashcard.jpeg";
import thinkfulbnb from "../images/quests/thinkfulbnb.jpeg";
import welovemovies from "../images/quests/welovemovies.jpeg";
import tableFlow from "../images/quests/tableflow.jpeg";
import techGarden from "../images/quests/techgarden.jpeg";

const QuestData = [
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
    gitHubUrl: "https://github.com/petrihcour/restaurant-reservation",
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
  {
    name: "ThinkfulBnB",
    description:
      "Static AirBnB look-a-like, utilizing HTML and CSS Flexbox, focusing on a mobile-first responsive approach",
    imageUrl: thinkfulbnb,
    gitHubUrl: "https://github.com/petrihcour/thinkfulbnb-project",
    webUrl: "https://petrihcour.github.io/thinkfulbnb-project/",
    position: "right",
    reversePosition: true,
  },
];

export default QuestData;
