import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Sending = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2l8691d",
        "template_xxnpv2p",
        {
          from_name: form.name,
          to_name: "Vanessa",
          from_email: form.email,
          to_email: "letitbe24@yahoo.com",
          message: form.message,
        },
        "TCLTbBBqLyWifVTbK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="sending" className="mt-5">
      <h2 className="text-center">Sending</h2>
      <form ref={formRef} className="card" onSubmit={sendEmail}>
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
            send
          </button>
        </div>
      </form>
    </div>
  );
};
