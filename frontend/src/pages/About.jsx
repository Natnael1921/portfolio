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
        <h3 className="tech-header" data-aos="fade-up">
          Technologies
        </h3>
        <div className="skills-container">
          <div className="skill-box s1">
            <img src="react.png" />
            <span>React</span>
          </div>

          <div className="skill-box s2">
            <img src="node.png" />
            <span>Node.js</span>
          </div>

          <div className="skill-box s3">
            <img src="express.png" />
            <span>Express</span>
          </div>

          <div className="skill-box s4">
            <img src="js.png" />
            <span>JavaScript</span>
          </div>

          <div className="skill-box s5">
            <img src="mysql.png" />
            <span>MySQL</span>
          </div>

          <div className="skill-box s6">
            <img src="mongo.png" />
            <span>MongoDB</span>
          </div>

          <div className="skill-box s7">
            <img src="css.png" />
            <span>CSS</span>
          </div>

          <div className="skill-box s8">
            <img src="tailwind.png" />
            <span>Tailwind</span>
          </div>
        </div>
      </div>
    </section>
  );
}
