import Tilt from "react-parallax-tilt";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">
        Featured Projects
      </h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.2}
            key={index}
          >
            <div className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>

              <div className="project-buttons">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}

export default Projects;