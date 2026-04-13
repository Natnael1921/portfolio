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
          (project) => project.category === "work",
        );

        const personal = res.data.filter(
          (project) => project.category === "personal",
        );

        setWorks(workProjects);
        setPersonalProjects(personal);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  //  move container manually
  const moveSlider = (ref, direction) => {
    const el = ref.current;
    if (!el) return;

    el.classList.add("paused");

    const group = el.querySelector(".works-group");
    if (!group) return;

    const groupWidth = group.offsetWidth;
    const moveAmount = 300;

    const currentMargin = parseInt(
      window.getComputedStyle(el).marginLeft || "0",
    );

    let newMargin =
      direction === "left"
        ? currentMargin + moveAmount
        : currentMargin - moveAmount;

    //  SMOOTH LOOP
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
      <div key={index} className="works-card skeleton-card">
        <div className="skeleton skeleton-image"></div>
        <div className="skeleton skeleton-title"></div>
        <div className="skeleton skeleton-text"></div>
        <div className="skeleton skeleton-text short"></div>
      </div>
    ));
  };

  const renderProjectCards = (projects, type) => {
    return [...Array(2)].map((_, i) => (
      <div key={i} className="works-group">
        {projects.map((project, index) => (
          <div key={`${type}-${index}-${i}`} className="works-card">
            <div className="image-wrapper">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="project-image"
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
                    View Code
                  </a>
                )}
              </div>
            </div>

            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    ));
  };

  return (
    <>
      {/* WORKS */}
      <section className="section myworks" id="myworks">
        <h1>
          My Recent <span>Works</span>
        </h1>

        <div className="slider-wrapper">
          <button
            className="nav-btn left"
            onClick={() => moveSlider(worksRef, "left")}
          >
            ‹
          </button>

          <div
            ref={worksRef}
            className={`works-container ${loading ? "loading-mode" : ""}`}
          >
            {loading ? (
              <div className="works-group">{renderSkeletonCards(4)}</div>
            ) : (
              renderProjectCards(works, "work")
            )}
          </div>

          <button
            className="nav-btn right"
            onClick={() => moveSlider(worksRef, "right")}
          >
            ›
          </button>
        </div>
      </section>

      {/* PERSONAL PROJECTS */}
      <section className="section myworks personal-projects">
        <h1>
          Personal <span>Projects</span>
        </h1>

        <div className="slider-wrapper">
          <button
            className="nav-btn left"
            onClick={() => moveSlider(personalRef, "left")}
          >
            ‹
          </button>

          <div
            ref={personalRef}
            className={`works-container ${loading ? "loading-mode" : ""}`}
          >
            {loading ? (
              <div className="works-group">{renderSkeletonCards(4)}</div>
            ) : (
              renderProjectCards(personalProjects, "personal")
            )}
          </div>

          <button
            className="nav-btn right"
            onClick={() => moveSlider(personalRef, "right")}
          >
            ›
          </button>
        </div>
      </section>
    </>
  );
}
