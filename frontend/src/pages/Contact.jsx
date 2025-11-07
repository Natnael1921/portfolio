import React, { useState } from "react";
import "../styles/Contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submit", form);
    alert("Message sent (demo). Replace handleSubmit with real API call.");
    setForm({ firstName: "", lastName: "", email: "", message: "" });
  }

  return (
    <div id="contact" className="contact-page" data-aos="fade-up">
      <div className="contact-container">
        <section className="contact-left">
          <h2 className="contact-title">
            Lets <span className="accent">Talk</span> !
          </h2>
          <div className="hr" />

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="field">
                <label htmlFor="firstName">First name</label>
                <input
                  id="firstName"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="enter your first name..."
                  type="text"
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="lastName">Last name</label>
                <input
                  id="lastName"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="enter your last name..."
                  type="text"
                />
              </div>
            </div>

            <div className="field full">
              <label htmlFor="email">email</label>
              <input
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="enter your email..."
                type="email"
                required
              />
            </div>

            <div className="field full">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="enter your message..."
                rows="6"
                required
              />
            </div>

            <button className="btn-send" type="submit">
              Send Message
            </button>
          </form>
        </section>

        <aside className="contact-right">
          <div className="contact-image-wrap">
            <img
              className="contact-image"
              src="contact1.png"
              alt="contact visual"
            />
          </div>

          <div className="contact-info">
            <div className="info-row">
              <svg
                className="icon"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                aria-hidden
              >
                <path
                  fill="currentColor"
                  d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C9.16 21 3 14.84 3 6a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z"
                />
              </svg>
              <span className="contact-text">+251910895476</span>
            </div>

            <div className="divider" />

            <div className="info-row">
              <svg
                className="icon"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                aria-hidden
              >
                <path
                  fill="currentColor"
                  d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5L4 8V6l8 5 8-5v2z"
                />
              </svg>
              <span className="contact-text">nnatnaelmekonnen19@gmail.com</span>
            </div>
          </div>

          <div className="socials">
            <a className="social" href="#" aria-label="telegram (demo)">
              <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden>
                <path
                  fill="currentColor"
                  d="M22 4L2 12.5 6.5 15 9 21l3-9 9.5-8z"
                />
              </svg>
            </a>

            <a className="social" href="#" aria-label="github (demo)">
              <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden>
                <path
                  fill="currentColor"
                  d="M12 .5A12 12 0 000 12.7c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.6-.8 1.6-.8.8-1.4 2.1-1 2.6-.8.1-.7.4-1 .7-1.3-2.6-.3-5.3-1.3-5.3-6a4.7 4.7 0 011.2-3.3 4.4 4.4 0 01.1-3.2s1-.3 3.3 1.2a11.4 11.4 0 016 0c2.2-1.5 3.2-1.2 3.2-1.2.8 1.6.3 2.7.1 3.2a4.7 4.7 0 011.2 3.3c0 4.7-2.7 5.6-5.3 5.9.4.4.7 1 .7 2v3c0 .3.2.7.8.6A12 12 0 0024 .5z"
                />
              </svg>
            </a>

            <a className="social" href="#" aria-label="x (demo)">
              <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden>
                <path
                  fill="currentColor"
                  d="M19 6.4l-1.4-1.4L12 10.6 6.4 5 5 6.4 10.6 12 5 17.6 6.4 19 12 13.4 17.6 19 19 17.6 13.4 12z"
                />
              </svg>
            </a>

            <a className="social" href="#" aria-label="linkedin (demo)">
              <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden>
                <path
                  fill="currentColor"
                  d="M4.98 3.5A2.5 2.5 0 002.5 6v12a2.5 2.5 0 002.48 2.5h0A2.5 2.5 0 007.96 18V6A2.5 2.5 0 004.98 3.5zM8 9h3v9H8V9zm4-4h3v1.3h.1a3.3 3.3 0 013-1.7c3.2 0 3.8 2.1 3.8 4.9V18h-3v-4.7c0-1.1 0-2.6-1.6-2.6S13 12 13 13.7V18h-3V5z"
                />
              </svg>
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}
