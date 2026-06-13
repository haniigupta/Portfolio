import { skillCategories } from "../data/skills";

function Skills() {
  return (
    <section id="skills">
      <h2 className="section-title">
        Technical Skills
      </h2>

      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div
            className="skill-category"
            key={index}
          >
            <h3>{category.title}</h3>

            <div className="skill-tags">
              {category.skills.map((skill, i) => (
                <span key={i}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;