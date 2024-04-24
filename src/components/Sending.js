import React, { useRef, useState } from "react";
import MarqueeButton from "../animations/MarqueeButton";
import "../styles/Sending.css";
import star from "../images/accents/star.png";
import emailjs from "@emailjs/browser";

// consider removing form and applying buttons to contact me instead. 
// underneath sending, let's connect, add footer still in sending with linkedin, github, etc...

export const Sending = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_2l8691d",
        "template_xxnpv2p",
        formRef.current,
        "TCLTbBBqLyWifVTbK"
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Thank you for your message. I will get back to you as soon as possible."
          );
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div id="sending" className="container-fluid mt-5 pt-5">
      <div className="justify-content-lg-between row">
        <div className="text-uppercase col-lg-6 align-content-end">
          <h1 className="home-i-am">Let's</h1>
          <h1 className="home-title-vanessa sending-title-connect mb-0">
            Connect
          </h1>
        </div>
        <div className="col-xl-4 col-lg-5 align-content-center">
          <form
            ref={formRef}
            className="card border-light"
            onSubmit={handleSubmit}
            style={{ backgroundColor: "transparent" }}
          >
            <div className="card-body">
              <h4 className="accent text-lowercase">
              <img
              src={star}
              alt="13 pointed star"
              className="star-img me-3"
            />
            Cast Sending</h4>
              <div className="mb-2">
                <label
                  htmlFor="name"
                  className="form-label body-text text-uppercase"
                  style={{ fontSize: "1.1rem" }}
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  placeholder="What's your name?"
                  className="form-control form-control-sm body-text bg-transparent border-light rounded-3"
                  style={{ color: "#404455", fontSize: "1.2rem" }}
                  id="name"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="email"
                  className="form-label body-text text-uppercase"
                  style={{ fontSize: "1.1rem" }}
                >
                  email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  placeholder="example@gmail.com"
                  className="form-control form-control-sm body-text bg-transparent border-light rounded-3"
                  style={{ color: "#404455", fontSize: "1.2rem" }}
                  id="email"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="message"
                  className="form-label body-text text-uppercase"
                  style={{ fontSize: "1.1rem" }}
                >
                  Message
                </label>
                <textarea
                  rows="3"
                  name="message"
                  value={form.message}
                  placeholder="I want to hire you!"
                  className="form-control form-control-sm body-text bg-transparent border-light rounded-3"
                  style={{ color: "#E9F2FF", fontSize: "1.2rem" }}
                  id="message"
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="d-flex justify-content-end mt-2">
                <button
                  type="submit"
                  className="btn btn-outline"
                  style={{ border: "none", padding: "0" }}
                >
                  <MarqueeButton
                    label={loading ? "sending" : "send"}
                    hasMarquee
                    style={{
                      backgroundColor: "#F2F2F5",
                      color: "#15171C",
                      fontWeight: "600",
                      fontSize: "1.2rem",
                    }}
                    textColor="#15171C"
                  />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
