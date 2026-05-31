import "../styles/About.css";

const SERVICES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="3" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M7 19h8M11 17v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <path d="M6 9l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 15h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    title: "Web Development",
    desc: "Responsive, high-performance websites using modern frameworks and clean, maintainable code.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M7.5 14.5c1-2 5-4 7-1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <circle cx="8.5" cy="9" r="1.2" fill="currentColor"/>
        <circle cx="13.5" cy="9" r="1.2" fill="currentColor"/>
      </svg>
    ),
    title: "UI / UX Design",
    desc: "Intuitive interfaces that balance creativity, accessibility, and delightful user experience.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 6h14M4 11h8M4 16h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <circle cx="17" cy="15" r="3.5" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M19.5 17.5l2 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    title: "Backend Development",
    desc: "Secure, scalable backends and efficient REST APIs with Node.js and Express.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <ellipse cx="11" cy="7" rx="8" ry="3" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M3 7v5c0 1.66 3.58 3 8 3s8-1.34 8-3V7" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M3 12v5c0 1.66 3.58 3 8 3s8-1.34 8-3v-5" stroke="currentColor" strokeWidth="1.3"/>
      </svg>
    ),
    title: "Databases",
    desc: "Structured and flexible data management with MySQL and MongoDB.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M9 11l2 2 4-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="3" y="3" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.3"/>
      </svg>
    ),
    title: "Testing",
    desc: "Reliable unit and integration testing pipelines using Jest and best practices.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="5" cy="5" r="2" stroke="currentColor" strokeWidth="1.3"/>
        <circle cx="17" cy="5" r="2" stroke="currentColor" strokeWidth="1.3"/>
        <circle cx="11" cy="17" r="2" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M7 5h8M6.5 6.5l3.5 9M15.5 6.5l-3.5 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    title: "Version Control",
    desc: "Git-based workflows, branching strategies, and collaborative code management.",
  },
];

const SKILLS = [
  { img: "react.png",    name: "React",      level: 90 },
  { img: "node.png",     name: "Node.js",    level: 85 },
  { img: "express.png",  name: "Express",    level: 82 },
  { img: "js.png",       name: "JavaScript", level: 92 },
  { img: "mysql.png",    name: "MySQL",      level: 75 },
  { img: "mongo.png",    name: "MongoDB",    level: 78 },
  { img: "css.png",      name: "CSS",        level: 88 },
  { img: "tailwind.png", name: "Tailwind",   level: 85 },
];

const STATS = [
  { num: "2+",  label: "Years Experience" },
  { num: "10+", label: "Projects Built"   },
  { num: "5+",   label: "Technologies"     },
  { num: "∞",   label: "Curiosity"        },
];

export default function About() {
  return (
    <section id="about" className="about-page">

      {/* ── HEADER ── */}
      <div className="about-header" data-aos="fade-up">
        <div className="about-eyebrow">
          <span className="ab-line" />
          <span className="ab-label">Who I Am</span>
          <span className="ab-line" />
        </div>
        <h1 className="about-title">
          About <span>Me</span>
        </h1>
        <p className="about-intro">
          Hi, I'm <strong>Natnael Mekonnen</strong> — a creative full-stack developer
          and Computer Science student at Hawassa University. I love crafting digital
          experiences that combine elegant design with powerful, purposeful functionality.
        </p>
      </div>

      {/* ── STATS ROW ── */}
      <div className="about-stats" data-aos="fade-up" data-aos-delay="100">
        {STATS.map(({ num, label }) => (
          <div key={label} className="about-stat">
            <span className="about-stat__num">{num}</span>
            <span className="about-stat__lbl">{label}</span>
          </div>
        ))}
      </div>

      {/* ── WHAT I DO ── */}
      <div className="about-services-section">
        <div
          className="about-section-head"
          data-aos="fade-up"
          data-aos-delay="60"
        >
          <span className="ab-line" />
          <h2 className="about-section-title">What I Do</h2>
          <span className="ab-line" />
        </div>

        <div className="about-services-grid">
          {SERVICES.map(({ icon, title, desc }, i) => (
            <div
              key={title}
              className="about-service-card"
              data-aos="fade-up"
              data-aos-delay={`${i * 70}`}
              data-aos-duration="700"
            >
              <div className="asc-icon">{icon}</div>
              <h3 className="asc-title">{title}</h3>
              <p  className="asc-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── SKILLS ── */}
      <div className="about-skills-section">
        <div
          className="about-section-head"
          data-aos="fade-up"
        >
          <span className="ab-line" />
          <h2 className="about-section-title">Technologies</h2>
          <span className="ab-line" />
        </div>

        <div className="about-skills-grid">
          {SKILLS.map(({ img, name, level }, i) => (
            <div
              key={name}
              className="skill-card"
              data-aos="zoom-in"
              data-aos-delay={`${i * 60}`}
              data-aos-duration="600"
            >
              <div className="skill-card__img-wrap">
                <img src={img} alt={name} />
              </div>
              <span className="skill-card__name">{name}</span>
              <div className="skill-card__bar-track">
                <div
                  className="skill-card__bar-fill"
                  style={{ "--level": `${level}%` }}
                />
              </div>
              <span className="skill-card__pct">{level}%</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}