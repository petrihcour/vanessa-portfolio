import React, { useRef, useState } from "react";
import MarqueeButton from "../animations/MarqueeButton";
import "../styles/Sending.css";
import emailjs from "@emailjs/browser";

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
      <div className="justify-content-xl-between row">
        <div className="text-uppercase col-lg-6 align-content-end">
          <h1 className="home-i-am sending-lets">Let's</h1>
          <h1 className="home-title-vanessa sending-title-connect">Connect</h1>
        </div>
        <div className="col-xl-5 col-lg-6 mt-4 align-content-end">
          <form
            ref={formRef}
            className="card"
            onSubmit={handleSubmit}
            style={{ backgroundColor: "transparent" }}
          >
            <div className="card-body">
              <div className="mb-3">
                <label
                  htmlFor="formGroupExampleInput"
                  className="form-label body-text text-uppercase"
                  style={{fontSize: "1.1rem"}}
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  placeholder="What's your name?"
                  className="form-control form-control-sm body-text"
                  style={{ color: "#404455", fontSize: "1.2rem" }}
                  id="name"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label body-text text-uppercase"
                  style={{fontSize: "1.1rem"}}
                >
                  email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  placeholder="example@gmail.com"
                  className="form-control form-control-sm body-text"
                  style={{ color: "#404455", fontSize: "1.2rem" }}
                  id="email"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label body-text text-uppercase"
                  style={{fontSize: "1.1rem"}}
                >
                  Message
                </label>
                <textarea
                  rows="3"
                  name="message"
                  value={form.message}
                  placeholder="I want to hire you!"
                  className="form-control form-control-sm body-text"
                  style={{ color: "#404455", fontSize: "1.2rem" }}
                  id="message"
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="d-flex justify-content-end mt-4">
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
                      fontSize: "1.2rem"
                    }}
                    textColor="#15171C"
                  />
                </button>{" "}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
