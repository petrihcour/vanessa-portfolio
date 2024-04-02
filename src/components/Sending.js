import React, { useRef, useState } from "react";
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
    <div id="sending" className="container">
      <h2 className="component-title text-uppercase text-center">Sending</h2>
      <form ref={formRef} className="card" onSubmit={handleSubmit}>
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">
              your name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              placeholder="what's your name?"
              className="form-control"
              id="name"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              your email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              placeholder="what's your email?"
              className="form-control"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              your message
            </label>
            <textarea
              rows="3"
              name="message"
              value={form.message}
              placeholder="what's your message?"
              className="form-control"
              id="message"
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
          {loading ? "sending" : "send"}
          </button>
        </div>
      </form>
    </div>
  );
};
