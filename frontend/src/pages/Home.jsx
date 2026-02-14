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
  useEffect(() => {
    fetch(
      "https://my-portfolio-management-backend.onrender.com/api/visitors/increment",
      {
        method: "POST",
      },
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Visitor count incremented:", data.totalVisits);
      })
      .catch((err) => {
        console.log("Error incrementing visitor:", err);
      });
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
          <h3>Full-Stack Developer</h3>
          {isMobile && (
            <div className="image-circle mobile-image">
              <img src="profile.png" alt="Profile" />
            </div>
          )}

          <p>
            I LOVE BUILDING DIGITAL EXPERIENCES THAT FEEL SMOOTH, HUMAN, AND
            ALIVE. EVERY PROJECT I CREATE IS FOCUSED ON PERFORMANCE,
            SCALABILITY, AND EMOTION.
          </p>
          <p>CREATIVE DEVELOPER, DESIGNER, PROBLEM SOLVER </p>
          <div className="cta-container">
            <div className="my-works-btn">
              <button>View Projects</button>
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
