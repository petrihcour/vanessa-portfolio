import flashcard from "../images/quests/flashcard.jpeg";
import thinkfulbnb from "../images/quests/thinkfulbnb.jpeg";
import welovemovies from "../images/quests/welovemovies.jpeg";
import restaurantReservation from "../images/quests/restaurant-reservation.png";

const QuestData = [
    {
        name: "FlashCard-o-matic", 
        description: "An online study application that gives teachers the ability to create, read, update, edit, and delete decks and cards for their students to study.",
        imageUrl: flashcard,
        gitHubUrl: "https://github.com/petrihcour/flashcard-app.git",
        webUrl: "https://flashcard-o-matic-9frr.onrender.com/",
    }, 
    {
        name: "ThinkfulBnB", 
        description: "A static website that emulates AirBnb and focuses on a responsive, intuitive user interface with a mobile-first approach.",
        imageUrl: thinkfulbnb,
        gitHubUrl: "https://github.com/petrihcour/thinkfulbnb-project",
        webUrl: "https://petrihcour.github.io/thinkfulbnb-project/",
    },
    {
        name: "WeLoveMovies", 
        description: "A database for a movie website, enabling users to search for their favorite movies.",
        imageUrl: welovemovies,
        gitHubUrl: "https://github.com/petrihcour/WeLoveMovies-Backend",
        webUrl: "https://welovemovies-frontend-sjx0.onrender.com/",
    },
    {
        name: "Periodic Tables", 
        description: "A full stack application designed for fine-dining restaurant management that allows users to: create, edit, or cancel reservations; efficiently seat customers.",
        imageUrl: restaurantReservation,
        gitHubUrl: "https://github.com/petrihcour/restaurant-reservation",
        webUrl: "https://reservation-restaurant-jkbn.onrender.com/",
    },
]

export default QuestData;