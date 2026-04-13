import "../styles/Home.css";
import { useState, useEffect } from "react";
import {
  Code2,
  Braces,
  TerminalSquare,
  Cpu,
  CodeXml,
  Database,
  Server,
  LayoutDashboard,
  Palette,
  Blocks,
  GitBranch,
} from "lucide-react";

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
      { method: "POST" },
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
      {/* DOTS BACKGROUND */}
      <div className="dots-background">
        {Array.from({ length: total }).map((_, i) => {
          const col = i % cols;
          const fade = 0.05 + ((cols - col) / cols) * 0.35;
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

      {/* FLOATING ICONS BACKGROUND */}
      <div className="floating-icons-bg">
        <Code2 className="bg-icon i1" />
        <Braces className="bg-icon i2" />
        <TerminalSquare className="bg-icon i3" />
        <Cpu className="bg-icon i4" />
        <CodeXml className="bg-icon i5" />
        <Database className="bg-icon i6" />
        <Server className="bg-icon i7" />
        <LayoutDashboard className="bg-icon i8" />
        <Palette className="bg-icon i9" />
        <Blocks className="bg-icon i10" />
        <GitBranch className="bg-icon i11" />
      </div>

      <div className="home-main-container">
        <div className="home-left-side" data-aos="fade-up">
          <h1>Natnael Mekonnen</h1>
          <h3>Full-Stack Developer</h3>

          {isMobile && (
            <div className="image-circle mobile-image">
              <img src="Natnael.jpg" alt="Profile" />
            </div>
          )}

          <p>
            I LOVE BUILDING DIGITAL EXPERIENCES THAT FEEL SMOOTH, HUMAN, AND
            ALIVE. EVERY PROJECT I CREATE IS FOCUSED ON PERFORMANCE,
            SCALABILITY, AND EMOTION.
          </p>
          <p>CREATIVE DEVELOPER, DESIGNER, PROBLEM SOLVER</p>

          <div className="cta-container">
            <a href="#myworks">
              <div className="my-works-btn">
                <button>View Projects</button>
              </div>
            </a>

            <a href="#contact">
              <div className="contact-me-btn">
                <button>Contact me</button>
              </div>
            </a>
          </div>
        </div>

        {!isMobile && (
          <div className="home-right-side" data-aos="fade-up">
            <div className="image-circle">
              <img src="Natnael.jpg" alt="Profile" />
            </div>
          </div>
        )}
      </div>

      <div className="home-footer">
        <a href="https://t.me/Nathnaelmekonnen">
          <img src="telegram.png" alt="telegram" className="footer-icon" />
        </a>
        <a href="https://github.com">
          <img src="github.png" alt="github" className="footer-icon" />
        </a>
        <a href="https://x.com/NatnaelMek896">
          <img src="x.png" alt="x" className="footer-icon" />
        </a>
        <a href="https://linkedin.com/in/natnael-mekonnen">
          <img src="linked-in.png" alt="linked-in" className="footer-icon" />
        </a>
      </div>
    </section>
  );
}
