import "../styles/Home.css";
import { useState, useEffect } from "react";

export default function Home() {
  const cols = 25;
  const rows = 40;
  const total = cols * rows;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 900);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);
  return (
    <section id="home" className="section homepage">
      {/*  Background dots  */}
      <div className="dots-background">
        {Array.from({ length: total }).map((_, i) => {
          const col = i % cols;
          const fade = 0.05 + ((cols - col) / cols) * 0.35; // right → left subtle fade
          return (
            <span
              key={i}
              style={{
                "--fade": fade,
                "--i": i,
              }}
            ></span>
          );
        })}
      </div>

      <div className="home-main-container">
        <div className="home-left-side" data-aos="fade-up">
          <h1>Natnael Mekonnen</h1>
          <h3>Creative Developer</h3>
          {isMobile && (
            <div className="image-circle mobile-image">
              <img src="profile.png" alt="Profile" />
            </div>
          )}

          <p>
            I love building digital experiences that feel smooth, human, and
            alive. Every project I create is focused on performance,
            scalability, and emotion.
          </p>

          <div className="cta-container">
            <div className="my-works-btn">
              <button>My works</button>
            </div>
            <div className="contact-me-btn">
              <button>Contact me</button>
            </div>
          </div>
        </div>

        {!isMobile && (
          <div className="home-right-side" data-aos="fade-up">
            <div className="image-circle">
              <img src="profile.png" alt="Profile" />
            </div>
          </div>
        )}
      </div>

      <div className="home-footer">
        <img src="telegram.png" alt="telegram" className="footer-icon" />
        <img src="github.png" alt="github" className="footer-icon" />
        <img src="x.png" alt="x" className="footer-icon" />
        <img src="linked-in.png" alt="linked-in" className="footer-icon" />
      </div>
    </section>
  );
}
