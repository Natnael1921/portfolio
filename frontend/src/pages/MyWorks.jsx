import "../styles/MyWorks.css";
import { useEffect, useState } from "react";
import API from "../../api";
export default function MyWorks() {

  const [works, setWorks] = useState([]);
  const [personalProjects, setPersonalProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await API.get("/projects");

        const workProjects = res.data.filter(
          project => project.category === "work"
        );

        const personal = res.data.filter(
          project => project.category === "personal"
        );

        setWorks(workProjects);
        setPersonalProjects(personal);

      } catch (err) {
        console.log(err);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      {/* WORKS */}
      <section id="myworks" className="section myworks" data-aos="fade-up">
        <h1 data-aos="fade-up">
          My Recent <span>Works</span>
        </h1>

        <div className="works-container" data-aos="fade-up">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="works-group">
              {works.map((work, index) => (
                <div key={index + i * works.length} className="works-card" data-aos="fade-up">
                  <img src={work.imageUrl} alt={work.title} data-aos="fade-up"/>
                  <h2 data-aos="fade-up">{work.title}</h2>
                  <p data-aos="fade-up">{work.description}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>


      {/* PERSONAL PROJECTS */}
      <section className="section myworks personal-projects" data-aos="fade-up">
        <h1 data-aos="fade-up">
          Personal <span>Projects</span>
        </h1>

        <div className="works-container" data-aos="fade-up">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="works-group">
              {personalProjects.map((project, index) => (
                <div key={index + i * personalProjects.length} className="works-card" data-aos="fade-up">
                  <img src={project.imageUrl} alt={project.title}/>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

    </>
  );
}
