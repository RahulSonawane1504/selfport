import "../styles/Projects.css";
import bgImg from "../assets/codioful-formerly-gradienta-Iia-DCBlEDg-unsplash.jpg";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio to showcase my skills and projects, built using React and CSS animations.",
    techStack: ["React", "CSS", "Vite"],
    link: "https://yourportfolio.com", // Replace with your live link or GitHub
  },
  {
    title: "Todo App",
    description:
      "A simple and effective Todo App with local storage and responsive design.",
    techStack: ["JavaScript", "HTML", "CSS"],
    link: "https://yourtodoapp.com",
  },
  {
    title: "Weather App",
    description: "Fetches real-time weather data using OpenWeatherMap API.",
    techStack: ["React", "API", "TailwindCSS"],
    link: "https://yourweatherapp.com",
  },
];

function Projects() {
  return (
    <section
      className="projects"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="tech-stack">
              {project.techStack.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
