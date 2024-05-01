import React from "react";
import Footer from "../Layout/Footer";
import MarqueeButton from "../animations/MarqueeButton";
import "../styles/Sending.css";
import star from "../images/accents/star.png";

//adjust the credit for myself on footer.
//  next work on transitions when scrolling and loading page

function Sending() {
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
    <div className="container-fluid mt-5 pt-5 mb-5 mt-lg-0 pt-lg-0 sending-component">
      <div className="d-flex justify-content-xl-between align-items-center row">
        <div className="text-uppercase col-lg-6 col-xl-3 align-content-end mt-3 mt-md-0">
          <h1 className="home-i-am">Let's</h1>
          <h1 className="home-title-vanessa sending-title-connect">Connect</h1>
        </div>
        <div className="col-lg-6 col-xl-9">
          <h4 className="accent text-lowercase mt-3 mt-xl-0 mt-lg-5 pt-lg-5 pt-xl-0">
            <img src={star} alt="13 pointed star" className="star-img me-3" />
            Cast sending and let's talk about
          </h4>
          <div className="d-flex flex-wrap mt-3 mt-md-0">
            <ul className="contact-list d-flex flex-wrap">
            {contactData.map((contact, index) => (
              <li key={index}>
              <MarqueeButton
                key={index}
                label={contact.name}
                href={contact.link}
                type="button"
                hasMarquee
              />
              </li>
            ))}
            </ul>
          </div>
          <div className="d-flex col-xl-6 me-0 mt-3 mt-lg-2 pt-lg-0 mx-auto justify-content-end">
            <div className="row body-text text-uppercase pt-1 ms-0 mt-xl-4">
              <div className="text-end">This is just the beginning! </div>
              Reach out to me. Let's become friends, play D&D together, or do a
              project together.
              <div className="d-flex justify-content-end mt-2 mt-lg-2">
                <MarqueeButton
                  label="Contact Me"
                  href="mailto:letitbe24@yahoo.com?subject=I want to work with you!"
                  style={{
                    backgroundColor: "#F2F2F5",
                    color: "#191e24",
                    fontWeight: "600",
                  }}
                  textColor="#191e24"
                  hasMarquee
                />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Sending;
