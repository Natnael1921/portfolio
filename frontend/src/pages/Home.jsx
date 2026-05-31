import "../styles/Home.css";
import { useState, useEffect, useRef } from "react";
import {
  Code2, Braces, TerminalSquare, Cpu, CodeXml,
  Database, Server, LayoutDashboard, Palette, Blocks, GitBranch,
} from "lucide-react";

const FLOATING_ICONS = [
  { Icon: Code2,          cls: "i1"  },
  { Icon: Braces,         cls: "i2"  },
  { Icon: TerminalSquare, cls: "i3"  },
  { Icon: Cpu,            cls: "i4"  },
  { Icon: CodeXml,        cls: "i5"  },
  { Icon: Database,       cls: "i6"  },
  { Icon: Server,         cls: "i7"  },
  { Icon: LayoutDashboard,cls: "i8"  },
  { Icon: Palette,        cls: "i9"  },
  { Icon: Blocks,         cls: "i10" },
  { Icon: GitBranch,      cls: "i11" },
];

const ROLES = ["Full-Stack Developer", "UI/UX Designer", "Problem Solver", "Creative Builder"];

export default function Home() {
  const cols = 22, rows = 36;
  const total = cols * rows;

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const heroRef  = useRef(null);
  const imageRef = useRef(null);

  // Typing animation for role
  useEffect(() => {
    const current = ROLES[roleIndex];
    if (!deleting && charIdx < current.length) {
      const t = setTimeout(() => {
        setDisplayedRole((p) => p + current[charIdx]);
        setCharIdx((p) => p + 1);
      }, 65);
      return () => clearTimeout(t);
    }
    if (!deleting && charIdx === current.length) {
      const t = setTimeout(() => setDeleting(true), 2000);
      return () => clearTimeout(t);
    }
    if (deleting && charIdx > 0) {
      const t = setTimeout(() => {
        setDisplayedRole((p) => p.slice(0, -1));
        setCharIdx((p) => p - 1);
      }, 30);
      return () => clearTimeout(t);
    }
    if (deleting && charIdx === 0) {
      setDeleting(false);
      setRoleIndex((p) => (p + 1) % ROLES.length);
    }
  }, [charIdx, deleting, roleIndex]);

  // Mouse parallax on hero image
  useEffect(() => {
    const onMove = (e) => {
      if (!imageRef.current) return;
      const nx = (e.clientX / window.innerWidth  - 0.5) * 12;
      const ny = (e.clientY / window.innerHeight - 0.5) * 12;
      imageRef.current.style.transform = `translate(${nx}px, ${ny}px) scale(1.06)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Visitor counter
  useEffect(() => {
    fetch("https://my-portfolio-management-backend.onrender.com/api/visitors/increment", { method: "POST" })
      .then((r) => r.json())
      .then((d) => console.log("Visitors:", d.totalVisits))
      .catch(() => {});
  }, []);

  return (
    <section id="home" className="portfolio-home" ref={heroRef}>

      {/* ── DOT GRID ── */}
      <div className="dot-grid" aria-hidden="true">
        {Array.from({ length: total }).map((_, i) => {
          const col  = i % cols;
          const fade = 0.04 + ((cols - col) / cols) * 0.28;
          return <span key={i} style={{ "--fade": fade, "--i": i }} />;
        })}
      </div>

      {/* ── FLOATING TECH ICONS ── */}
      <div className="floating-icons" aria-hidden="true">
        {FLOATING_ICONS.map(({ Icon, cls }) => (
          <Icon key={cls} className={`bg-icon ${cls}`} />
        ))}
      </div>

      {/* ── MAIN GRID ── */}
      <div className="ph-grid">

        {/* LEFT CONTENT */}
        <div className="ph-content" data-aos="fade-up" data-aos-duration="900">

          {/* Eyebrow */}
          <div className="ph-eyebrow">
            <span className="ph-eyebrow__line" />
            <span className="ph-eyebrow__text">Software Engineer · Ethiopia</span>
          </div>

          {/* Name */}
          <h1 className="ph-name">
            Natnael<br />
            <span className="ph-name__last">Mekonnen</span>
          </h1>

          {/* Typing role */}
          <div className="ph-role">
            <span className="ph-role__text">{displayedRole}</span>
            <span className="ph-role__cursor">|</span>
          </div>

          {/* Divider */}
          <div className="ph-divider" />

          {/* Description */}
          <p className="ph-desc">
            I build digital experiences that feel smooth, human, and alive.
            Every project is crafted with obsessive attention to performance,
            scalability, and emotion.
          </p>

          {/* Tags */}
          <div className="ph-tags">
            {["React", "Node.js", "TypeScript", "UI/UX", "MongoDB"].map((t) => (
              <span key={t} className="ph-tag">{t}</span>
            ))}
          </div>

          {/* CTAs */}
          <div className="ph-actions">
            <a href="#myworks" className="ph-btn-solid">
              <span>View Projects</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4"
                  strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#contact" className="ph-btn-ghost">Contact Me</a>
          </div>

          {/* Socials */}
          <div className="ph-socials">
            <a href="https://t.me/Nathnaelmekonnen"         className="ph-social" aria-label="Telegram">
              <img src="telegram.png"   alt="" />
            </a>
            <a href="https://github.com"                    className="ph-social" aria-label="GitHub">
              <img src="github.png"     alt="" />
            </a>
            <a href="https://x.com/NatnaelMek896"           className="ph-social" aria-label="X">
              <img src="x.png"          alt="" />
            </a>
            <a href="https://linkedin.com/in/natnael-mekonnen" className="ph-social" aria-label="LinkedIn">
              <img src="linked-in.png"  alt="" />
            </a>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="ph-image-wrap" data-aos="fade-up" data-aos-delay="120" data-aos-duration="900">
          {/* Glow rings */}
          <div className="ph-ring ph-ring--outer" aria-hidden="true" />
          <div className="ph-ring ph-ring--mid"   aria-hidden="true" />

          {/* Photo frame */}
          <div className="ph-photo-frame">
            <img
              ref={imageRef}
              src="Natnael.jpg"
              alt="Natnael Mekonnen"
              className="ph-photo"
            />
            <div className="ph-photo-overlay" />
          </div>

          {/* Floating stat badges */}
          <div className="ph-badge ph-badge--tl" data-aos="zoom-in" data-aos-delay="500">
            <span className="ph-badge__num">2+</span>
            <span className="ph-badge__lbl">Years Exp.</span>
          </div>
          <div className="ph-badge ph-badge--br" data-aos="zoom-in" data-aos-delay="620">
            <span className="ph-badge__num">10+</span>
            <span className="ph-badge__lbl">Projects</span>
          </div>
        </div>

      </div>

      {/* ── SCROLL HINT ── */}
      <div className="ph-scroll-hint" aria-hidden="true">
        <div className="ph-scroll-hint__line" />
        <span className="ph-scroll-hint__text">scroll</span>
      </div>

    </section>
  );
}