import flashcard from "../images/quests/flashcard.jpeg";
import thinkfulbnb from "../images/quests/thinkfulbnb.jpeg";
import welovemovies from "../images/quests/welovemovies.jpeg";
import restaurantReservation from "../images/quests/restaurant-reservation.jpeg";

const QuestData = [
    {
        name: "ThinkfulBnB", 
        description: "HTML, CSS, Flexbox, mobile-first",
        imageUrl: thinkfulbnb,
        gitHubUrl: "https://github.com/petrihcour/thinkfulbnb-project",
        webUrl: "https://petrihcour.github.io/thinkfulbnb-project/",
        position: "left",
        reversePosition: false,
    },
    {
        name: "FlashCard-o-matic", 
        description: "JavaScript, React, Bootstrap, mobile-first",
        imageUrl: flashcard,
        gitHubUrl: "https://github.com/petrihcour/flashcard-app.git",
        webUrl: "https://flashcard-o-matic-9frr.onrender.com/",
        position: "center",
        reversePosition: true,
    }, 
    {
        name: "WeLoveMovies", 
        description: "Node.js, Express, PostgreSQL, RESTful APIs",
        imageUrl: welovemovies,
        gitHubUrl: "https://github.com/petrihcour/WeLoveMovies-Backend",
        webUrl: "https://welovemovies-frontend-sjx0.onrender.com/",
        position: "center",
        reversePosition: false,
    },
    {
        name: "Periodic Tables", 
        description: "JavaScript, React, Bootstrap, CSS, Node.js, Express, PostgreSQL RESTful APIs",
        imageUrl: restaurantReservation,
        gitHubUrl: "https://github.com/petrihcour/restaurant-reservation",
        webUrl: "https://reservation-restaurant-jkbn.onrender.com/",
        position: "right",
        reversePosition: true,
    },
]

export default QuestData;