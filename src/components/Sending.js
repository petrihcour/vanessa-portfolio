import React from "react";
import MarqueeButton from "../animations/MarqueeButton";
import "../styles/Sending.css";
import star from "../images/accents/star.png";

// footer need to adjust size of border and to align to right

export const Sending = () => {
  const contactData = [
    {
      name: "Frontend Development",
      link: "mailto:letitbe24@yahoo.com?subject=I'm looking for a Frontend Developer. Let's talk!",
    },
    {
      name: "Full-Stack Development",
      link: "mailto:letitbe24@yahoo.com?subject=I'm looking for a Full-Stack Developer. Let's talk!",
    },
    {
      name: "Dungeons & Dragons",
      link: "mailto:letitbe24@yahoo.com?subject=Wanna play D&D?",
    },
  ];

  return (
    <div id="sending" className="container-fluid mt-5 pt-5">
      <div className="justify-content-lg-between row">
        <div className="text-uppercase col-lg-3 align-content-end mt-xl-4">
          <h1 className="home-i-am">Let's</h1>
          <h1 className="home-title-vanessa sending-title-connect">
            Connect
          </h1>
        </div>
        <div className="col-xl-9 col-lg-9 align-content-start">
          <h4 className="accent text-lowercase mt-4 mt-xl-0">
            <img src={star} alt="13 pointed star" className="star-img me-3" />
            Cast sending and let's talk about
          </h4>
          <div className="d-flex flex-wrap mb-xl-4">
            {contactData.map((contact, index) => (
              <MarqueeButton
                key={index}
                label={contact.name}
                href={contact.link}
                type="button"
                hasMarquee
              />
            ))}
          </div>

          <div className="d-flex col-xl-6 me-0 mt-3 mt-xl-5 pt-4 mx-auto justify-content-end">
            <div className="row mt-xl-1 body-text text-uppercase">
              <div className="text-end">This is just the beginning! </div>
              Reach out to me. Let's become friends, play D&D together, or do a
              project together.
              <div className="d-flex justify-content-end mt-3">
                <MarqueeButton
                  label="Contact Me"
                  href="mailto:letitbe24@yahoo.com?subject=I want to work with you!"
                  style={{
                    backgroundColor: "#F2F2F5",
                    color: "#191e24",
                    fontWeight: "600"
                  }}
                  textColor="#191e24"
                  hasMarquee
                />
              </div>
            </div>
          </div>
          <nav className="footer body-text d-flex text-uppercase mt-2 ms-5 justify-content-center justify-content-xl-end mx-auto" style={{borderTop: "0.5px solid #e9f2ff"}}>
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link" href="https://www.linkedin.com/in/vanesssagarcia/" target="_blank" rel="noreferrer">LinkedIn</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/petrihcour" target="_blank" rel="noreferrer">GitHub</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="to be filled out" target="_blank" rel="noreferrer">Resume</a>
              </li>
            </ul>
          </nav>
        </div>
        {/* <div class="d-flex">
          <div class="p-2 w-75 body-text text-uppercase">Flex item</div>
          <div class="p-2 flex-shrink-1 body-text text-uppercase">
            Flex item
          </div>
        </div> */}
      </div>
    </div>
  );
};
