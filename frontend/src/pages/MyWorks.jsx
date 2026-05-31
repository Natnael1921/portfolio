import "../styles/MyWorks.css";
import { useEffect, useState, useRef } from "react";
import API from "../../api";

export default function MyWorks() {
  const [works, setWorks] = useState([]);
  const [personalProjects, setPersonalProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const worksRef = useRef(null);
  const personalRef = useRef(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await API.get("/projects");

        const workProjects = res.data.filter(
          (project) => project.category === "work"
        );

        const personal = res.data.filter(
          (project) => project.category === "personal"
        );

        setWorks(workProjects);
        setPersonalProjects(personal);
      } catch (err) {
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const moveSlider = (ref, direction) => {
    const el = ref.current;
    if (!el) return;

    el.classList.add("paused");

    const group = el.querySelector(".works-group");
    if (!group) return;

    const groupWidth = group.offsetWidth;
    const moveAmount = 340; // Adjusted for new card styling width

    const currentMargin = parseInt(
      window.getComputedStyle(el).marginLeft || "0",
      10
    );

    let newMargin =
      direction === "left"
        ? currentMargin + moveAmount
        : currentMargin - moveAmount;

    if (newMargin <= -groupWidth) {
      newMargin += groupWidth;
    }

    if (newMargin > 0) {
      newMargin -= groupWidth;
    }

    el.style.marginLeft = `${newMargin}px`;

    setTimeout(() => {
      el.classList.remove("paused");
    }, 400);
  };

  const renderSkeletonCards = (count = 4) => {
    return Array.from({ length: count }).map((_, index) => (
      <div key={`skeleton-${index}`} className="works-card skeleton-card">
        <div className="skeleton skeleton-image"></div>
        <div className="skeleton skeleton-title"></div>
        <div className="skeleton skeleton-text"></div>
        <div className="skeleton skeleton-text short"></div>
      </div>
    ));
  };

  const renderProjectCards = (projects, type) => {
    // If no projects found, display fallback view
    if (projects.length === 0) {
      return (
        <div className="empty-works-state">
          <p>No projects listed under this category yet.</p>
        </div>
      );
    }

    return [...Array(2)].map((_, i) => (
      <div key={`group-${type}-${i}`} className="works-group">
        {projects.map((project, index) => (
          <div key={`${type}-${index}-${i}`} className="works-card">
            <div className="image-wrapper">
              <img
                src={project.imageUrl || "placeholder-project.jpg"}
                alt={project.title}
                className="project-image"
                loading="lazy"
              />
              <div className="image-overlay">
                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="overlay-btn live"
                  >
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="overlay-btn github"
                  >
                    Codebase
                  </a>
                )}
              </div>
            </div>

            <div className="works-card-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              {project.tags && (
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag-pill">{tag}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div className="myworks-page-wrapper">
      {/* ── CLIENT/COMMERCIAL WORKS ── */}
      <section className="works-section" id="myworks">
        <div className="about-section-head">
          <span className="ab-line" />
          <span className="about-section-title">Portfolio</span>
          <span className="ab-line" />
        </div>
        <h2 className="works-main-heading">
          Recent <span>Works</span>
        </h2>

        <div className="slider-outer-wrapper">
          <button
            className="slider-nav-btn left"
            onClick={() => moveSlider(worksRef, "left")}
            aria-label="Scroll left"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="slider-window">
            <div
              ref={worksRef}
              className={`works-container ${loading ? "loading-mode" : ""}`}
            >
              {loading ? renderSkeletonCards(4) : renderProjectCards(works, "work")}
            </div>
          </div>

          <button
            className="slider-nav-btn right"
            onClick={() => moveSlider(worksRef, "right")}
            aria-label="Scroll right"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 5l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </section>

      {/* ── PERSONAL LAB PROJECTS ── */}
      <section className="works-section personal-projects-section">
        <div className="about-section-head">
          <span className="ab-line" />
          <span className="about-section-title">Experiments</span>
          <span className="ab-line" />
        </div>
        <h2 className="works-main-heading">
          Personal <span>Projects</span>
        </h2>

        <div className="slider-outer-wrapper">
          <button
            className="slider-nav-btn left"
            onClick={() => moveSlider(personalRef, "left")}
            aria-label="Scroll left"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="slider-window">
            <div
              ref={personalRef}
              className={`works-container ${loading ? "loading-mode" : ""}`}
            >
              {loading ? renderSkeletonCards(4) : renderProjectCards(personalProjects, "personal")}
            </div>
          </div>

          <button
            className="slider-nav-btn right"
            onClick={() => moveSlider(personalRef, "right")}
            aria-label="Scroll right"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 5l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
}