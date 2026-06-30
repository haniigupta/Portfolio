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

            <div className="mt-8 flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="
      flex-1
      rounded-[16px]
      border
      border-[#6d5dfc]/30
      bg-[#6d5dfc]
      px-6
      py-4
      text-center
      text-lg
      font-semibold
      text-white
      transition-all
      duration-300
      hover:shadow-[0_0_25px_rgba(109,93,252,.35)]
    "
              >
                GitHub
              </a>

              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="
      flex-1
      rounded-[16px]
      border
      border-[#6d5dfc]/40
      bg-white/5
      px-6
      py-4
      text-center
      text-lg
      font-semibold
      text-white
      transition-all
      duration-300
      hover:shadow-[0_0_25px_rgba(109,93,252,.35)]
    "
              >
                Live Demo
              </a>
            </div>
          </div>

        ))}
      </div>
    </section>
  );
}

export default Projects;