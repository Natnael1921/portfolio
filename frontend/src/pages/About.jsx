import "../styles/About.css";

export default function About() {
  return (
    <section id="about" className="section about-page" data-aos="fade-up">
      <div className="about-left-section" data-aos="fade-up">
        <h1 data-aos="fade-up">
          About<span> me</span>
        </h1>
        <p data-aos="fade-up">
          Hi, I’m <strong>Natnael Mekonnen</strong>, a creative web developer
          and third-year Computer Science student at Hawassa University. I love
          crafting digital experiences that combine elegant design and powerful
          functionality.
        </p>

        <div className="what-i-do-card-container" data-aos="fade-up">
          <h3 data-aos="fade-up">What I do</h3>
          <div className="top-card-container">
            <div className="what-i-do-card card-1" data-aos="fade-left">
              <h2>Web Development</h2>
              <p>
                I build responsive, high-performance websites using modern
                frameworks and clean, maintainable code.
              </p>
            </div>
            <div className="what-i-do-card card-2" data-aos="fade-right">
              <h2>UI/UX Design</h2>
              <p>
                I design intuitive interfaces that balance creativity,
                accessibility, and user delight.
              </p>
            </div>
          </div>
          <div className="bottom-card-container">
            <div className="what-i-do-card card-3" data-aos="fade-left">
              <h2 className="what-i-do-h2">Backend Development</h2>
              <p>
                I develop secure, scalable backends and efficient API systems
                with Node.js . express.js . REST APIs
              </p>
            </div>
            <div className="what-i-do-card card-4" data-aos="fade-right">
              <h2>Database</h2>
              <p>MySQL, MongoDB,</p>
            </div>
            <div className="what-i-do-card card-5" data-aos="fade-left">
              <h2>Testing</h2>
              <p>Unit Testing, Jest</p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-right-section" data-aos="fade-up">
        <h3 className="tech-header" data-aos="fade-up">Technologies</h3>
        <div className="skills-grid" data-aos="fade-up">
          <div className="skill-item" data-aos="fade-up">
            <img src="react.png" alt="React" data-aos="fade-top"/>
            <span className="tooltip">React</span>
          </div>
          <div className="skill-item">
            <img src="express.png" alt="Express" data-aos="fade-right" />
            <span className="tooltip">Express</span>
          </div>
          <div className="skill-item">
            <img src="tailwind.png" alt="Tailwind CSS" data-aos="fade-bottom"/>
            <span className="tooltip">Tailwind CSS</span>
          </div>
          <div className="skill-item">
            <img src="mysql.png" alt="MySQL" data-aos="fade-left"/>
            <span className="tooltip">MySQL</span>
          </div>
          <div className="skill-item">
            <img src="js.png" alt="JavaScript" data-aos="fade-top"/>
            <span className="tooltip">JavaScript</span>
          </div>
          <div className="skill-item">
            <img src="node.png" alt="Node.js" data-aos="fade-right"/>
            <span className="tooltip">Node.js</span>
          </div>
          <div className="skill-item">
            <img src="css.png" alt="CSS3" data-aos="fade-bottom"/>
            <span className="tooltip">CSS3</span>
          </div>
          <div className="skill-item">
            <img src="mongodb.png" alt="MongoDB" data-aos="fade-left"/>
            <span className="tooltip">MongoDB</span>
          </div>
        </div>
      </div>
    </section>
  );
}
