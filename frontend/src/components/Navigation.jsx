import { useState, useEffect } from "react";
import "../styles/Navigation.css";

export default function Navigation() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ["home", "about", "myworks", "contact"];
      let current = active;
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            current = id;
          }
        }
      });
      if (current !== active) setActive(current);
    };
    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [active]);

  return (
    <div className="navigation">
      <img src="logo.png" className="logo" alt="Logo" />

      {/* Hamburger Button */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`navbar ${menuOpen ? "show" : ""}`}>
        <ul>
          <li
            className={`nav-item ${active === "home" ? "active" : ""}`}
            onClick={() => handleScroll("home")}
          >
            <img src="home.png" alt="Home" />
            <span className="nav-label">Home</span>
          </li>
          <li
            className={`nav-item ${active === "about" ? "active" : ""}`}
            onClick={() => handleScroll("about")}
          >
            <img src="about.png" alt="About" />
            <span className="nav-label">About</span>
          </li>
          <li
            className={`nav-item ${active === "myworks" ? "active" : ""}`}
            onClick={() => handleScroll("myworks")}
          >
            <img src="works.png" alt="My Works" />
            <span className="nav-label">Works</span>
          </li>
          <li
            className={`nav-item ${active === "contact" ? "active" : ""}`}
            onClick={() => handleScroll("contact")}
          >
            <img src="contact.png" alt="Contact" />
            <span className="nav-label">Contact</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}
