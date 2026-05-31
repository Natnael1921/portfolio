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
      <div className="contact-container">
        
        {/* ── LEFT COLUMN: FORM ── */}
        <section className="contact-left">
          <div className="about-section-head left-aligned">
            <span className="ab-line" />
            <span className="about-section-title">Get In Touch</span>
          </div>
          <h2 className="contact-title">
            Let's <span>Talk</span>!
          </h2>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="field">
                <label htmlFor="firstName">First name</label>
                <input
                  id="firstName"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="e.g. John"
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
                  placeholder="e.g. Doe"
                  type="text"
                />
              </div>
            </div>

            <div className="field full">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
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
                placeholder="Tell me about your project or inquiry..."
                rows="6"
                required
              />
            </div>

            <button className="btn-send" type="submit" disabled={loading}>
              {loading ? (
                <span className="btn-loader-text">Sending...</span>
              ) : (
                <>
                  Send Message
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="btn-arrow">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </>
              )}
            </button>

            {status === "success" && (
              <div className="status-message success">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <p>Message sent successfully, thank you!</p>
              </div>
            )}
            {status === "error" && (
              <div className="status-message error">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                <p>Failed to send message. Please try again.</p>
              </div>
            )}
          </form>
        </section>

        {/* ── RIGHT COLUMN: INFO & VISUALS ── */}
        <aside className="contact-right">
          <div className="contact-image-wrap">
            <img
              className="contact-image"
              src="contact1.png"
              alt="Contact workflow dashboard visual"
            />
          </div>

          <div className="contact-info-card">
            <div className="info-row">
              <div className="info-icon-box">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="info-details">
                <span className="info-label">Call Directly</span>
                <a href="tel:+251910895476" className="contact-text">+251 91 089 5476</a>
              </div>
            </div>

            <div className="contact-card-divider" />

            <div className="info-row">
              <div className="info-icon-box">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="info-details">
                <span className="info-label">Drop an Email</span>
                <a href="mailto:nnatnaelmekonnen19@gmail.com" className="contact-text">
                  nnatnaelmekonnen19@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="socials-container">
            <span className="socials-title-hint">Connect via Social Networks</span>
            <div className="socials-row">
              <a className="social-glass-btn" href="https://t.me/Nathnaelmekonnen" aria-label="Telegram Profile">
                <img className="social-img" src="telegram.png" alt="Telegram" />
              </a>

              <a className="social-glass-btn" href="https://github.com/Natnael1921" aria-label="GitHub Profile">
                <img className="social-img" src="github.png" alt="GitHub" />
              </a>

              <a className="social-glass-btn" href="https://x.com/NatnaelMek896" aria-label="X Twitter Profile">
                <img className="social-img" src="x.png" alt="X" />
              </a>

              <a className="social-glass-btn" href="https://linkedin.com/in/natnael-mekonnen" aria-label="LinkedIn Profile">
                <img className="social-img" src="linked-in.png" alt="LinkedIn" />
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}