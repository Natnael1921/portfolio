import React, { useState } from "react";
import "../styles/Contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null); // success | error
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setForm({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }

    setLoading(false);
  }

  return (
    <div id="contact" className="contact-page" data-aos="fade-up">
      <div className="contact-container" data-aos="fade-up">
        <section className="contact-left" data-aos="fade-up">
          <h2 className="contact-title" data-aos="fade-up">
            Lets <span className="accent">Talk</span> !
          </h2>
          <div className="hr" />

          <form
            className="contact-form"
            onSubmit={handleSubmit}
            data-aos="fade-up"
          >
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

            <button className="btn-send" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p style={{ color: "#00ffae", marginTop: "10px" }}>
                Message sent successfully , Thank You !
              </p>
            )}
            {status === "error" && (
              <p style={{ color: "red", marginTop: "10px" }}>
                Failed to send message. Try again.
              </p>
            )}
          </form>
        </section>

        <aside className="contact-right" data-aos="fade-up">
          <div className="contact-image-wrap">
            <img
              className="contact-image"
              src="contact1.png"
              alt="contact visual"
              data-aos="fade-up"
            />
          </div>

          <div className="contact-info" data-aos="fade-up">
            <div className="info-row" data-aos="fade-up">
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
              <a href="tel:+251910895476">
                <span className="contact-text">+251910895476</span>
              </a>
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
              <a href="mailto:nnatnaelmekonnen19@gmail.com">
                <span className="contact-text">
                  nnatnaelmekonnen19@gmail.com
                </span>
              </a>
            </div>
          </div>

          <div className="socials">
            <a
              className="social"
              href="https://t.me/Nathnaelmekonnen"
              aria-label="telegram (demo)"
            >
              <img className="social-icon" src="telegram.png" />
            </a>

            <a
              className="social"
              href="https://github.com/Natnael1921"
              aria-label="github (demo)"
            >
              <img className="social-icon" src="github.png" />
            </a>

            <a
              className="social"
              href="https://x.com/NatnaelMek896"
              aria-label="x (demo)"
            >
              <img className="social-icon" src="x.png" />
            </a>

            <a
              className="social"
              href="https://linkedin.com/in/natnael-mekonnen"
              aria-label="linkedin (demo)"
            >
              <img className="social-icon" src="linked-in.png" />
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}
