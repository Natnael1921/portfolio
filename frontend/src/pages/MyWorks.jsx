import "../styles/MyWorks.css";

export default function MyWorks() {
  const works = [
    {
      img: "impact.png",
      title: "Impact Advertising",
      desc: "A modern portfolio website built to showcase the company’s printing and advertising services. Designed with a clean layout, smooth interactions, and responsive design to highlight their brand identity effectively."
    },
    {
      img: "lideta.png",
      title: "Lideta Houses",
      desc: "Apartment Management System — A web platform built for administrators to efficiently manage apartment data and resident information. Includes tools for tracking tenants, handling documents, and monitoring living statuses with ease."
    },
    {
      img: "tdket.png",
      title: "TDKET Tennis",
      desc: "A comprehensive website showcasing the academy’s programs, match schedules, projects, and membership options. Designed to deliver an organized, interactive, and visually engaging experience for players and members alike."
    }
  ];

  return (
    <section id="myworks" className="section myworks" data-aos="fade-up">
      <h1 data-aos="fade-up">
        My Recent <span>Works</span>
      </h1>

      <div className="works-container" data-aos="fade-up">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="works-group">
            {works.map((work, index) => (
              <div key={index + i * works.length} className="works-card" data-aos="fade-up">
                <img src={work.img} alt={work.title} data-aos="fade-up"/>
                <h2 data-aos="fade-up">{work.title}</h2>
                <p data-aos="fade-up">{work.desc}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

