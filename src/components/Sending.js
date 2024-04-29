import React from "react";
import MarqueeButton from "../animations/MarqueeButton";
import "../styles/Sending.css";
import star from "../images/accents/star.png";
// import emailjs from "@emailjs/browser";

// consider removing form and applying buttons to contact me instead.
// underneath sending, let's connect, add footer still in sending with linkedin, github, etc...

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
          <h4 className="accent text-lowercase mt-2 mt-xl-0">
            <img src={star} alt="13 pointed star" className="star-img me-4" />
            Cast sending and let's talk about
          </h4>
          <div className="d-flex flex-wrap">
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

          <div className="d-flex col-xl-6 me-0 mx-auto justify-content-end">
            <div className="mt-4 mt-xl-5 row body-text text-uppercase">
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
