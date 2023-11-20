import React from "react";
import { Link } from "react-router-dom";
import "../styles/MobileNav.css";

// add design a little bit later. possible gold trim. adjust font for slighlty more ancient feeling
// small animations for buttons / links / menu

function MobileNav() {
  return (
    <nav className="navbar fixed-bottom bg-body-tertiary d-block d-sm-none">
      <div className="container-fluid">
          <Link to="/" className="navbar-brand ms-1">
            <div className="nav-item home-icon">
              <img
                src="https://cdn3.iconfinder.com/data/icons/materia-halloween-free/24/039_033_castle_horror_dracula_halloween-1024.png"
                width="35"
                alt="castle"
              />
              <div className="small-word">Home</div>
            </div>
          </Link>
          <Link to="/skills" className="navbar-brand ">
            <div className="nav-item">
              <img
                src="https://cdn1.iconfinder.com/data/icons/ionicons-sharp-vol-2/512/sparkles-sharp-1024.png"
                width="35"
                alt="skills"
              />
              <div className="small-word">Skills</div>
            </div>
          </Link>
          <Link to="/features-traits" className="navbar-brand">
            <div className="nav-item">
              <img
                src="https://cdn1.iconfinder.com/data/icons/literary-genres-1/64/humor-perform-acting-comedy-personality-1024.png"
                width="35"
                alt="features and traits"
              />
              <div className="small-word">Features & Traits</div>
            </div>
          </Link>
          <Link to="/quests" className="navbar-brand me-2">
            <div className="nav-item">
              <img
                src="https://cdn2.iconfinder.com/data/icons/rpg-fantasy-game-basic-ui/512/game_ui_scroll_quest_paper_treasure_adventure-1024.png"
                width="35"
                alt="quests"
              />
              <div className="small-word">Quests</div>
            </div>
          </Link>
          <button
            className="navbar-toggler menu-button"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
           
              <img
                src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-24-1024.png"
                width="35"
                alt="menu"
                className="menu-icon"
              />
              <div className="small-word menu-text">Menu</div>
         
          </button>
        
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
            Unleash your spells. <br />
             I cast...
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page">
                  Teleport
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/sending" className="nav-link">
                  Sending
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Locate Creature
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <a href="https://www.linkedin.com/in/vanesssagarcia/" target="_blank" 
                    rel="noreferrer"
                    className="dropdown-item">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a href="https://github.com/petrihcour" 
                    target="_blank" 
                    rel="noreferrer"
                    className="dropdown-item">
                      GitHub
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MobileNav;
