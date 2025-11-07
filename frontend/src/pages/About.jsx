import "../styles/About.css";

export default function About() {
  return (
    <section id="about" className="section about-page">
      <div className="about-left-section">
        <h1>
          About<span> me</span>
        </h1>
        <p>
          Hi, I’m <strong>Natnael Mekonnen</strong>, a creative web developer
          and third-year Computer Science student at Hawassa University. I love
          crafting digital experiences that combine elegant design and powerful
          functionality.
        </p>

        <div className="what-i-do-card-container">
          <h3>What I do</h3>
          <div className="top-card-container">
            <div className="what-i-do-card">
              <h2>Web Development</h2>
              <p>
                I build responsive, high-performance websites using modern
                frameworks and clean, maintainable code.
              </p>
            </div>
            <div className="what-i-do-card">
              <h2>UI/UX Design</h2>
              <p>
                I design intuitive interfaces that balance creativity,
                accessibility, and user delight.
              </p>
            </div>
          </div>
          <div className="bottom-card-container">
            <div className="what-i-do-card">
              <h2 className="what-i-do-h2">Backend Development</h2>
              <p>
                I develop secure, scalable backends and efficient API systems
                with Node.js . express.js . REST APIs
              </p>
            </div>
            <div className="what-i-do-card">
              <h2>Database</h2>
              <p>MySQL, MongoDB,</p>
            </div>
            <div className="what-i-do-card">
              <h2>Testing</h2>
              <p>Unit Testing, Jest</p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-right-section">
        <h3 className="tech-header">Technologies</h3>
        <div className="skills-grid">
          <div className="skill-item">
            <img src="react.png" alt="React" />
            <span className="tooltip">React</span>
          </div>
          <div className="skill-item">
            <img src="express.png" alt="Express" />
            <span className="tooltip">Express</span>
          </div>
          <div className="skill-item">
            <img src="tailwind.png" alt="Tailwind CSS" />
            <span className="tooltip">Tailwind CSS</span>
          </div>
          <div className="skill-item">
            <img src="mysql.png" alt="MySQL" />
            <span className="tooltip">MySQL</span>
          </div>
          <div className="skill-item">
            <img src="js.png" alt="JavaScript" />
            <span className="tooltip">JavaScript</span>
          </div>
          <div className="skill-item">
            <img src="node.png" alt="Node.js" />
            <span className="tooltip">Node.js</span>
          </div>
          <div className="skill-item">
            <img src="css.png" alt="CSS3" />
            <span className="tooltip">CSS3</span>
          </div>
          <div className="skill-item">
            <img src="MongoDB.png" alt="MongoDB" />
            <span className="tooltip">Docker</span>
          </div>
        </div>
      </div>
    </section>
  );
}
