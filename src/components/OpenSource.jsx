import { motion } from "framer-motion";

const timeline = [
  {
    date: "Feb 2026",
    title: "Open Source Connect",
    desc: "Contributor",
  },
  {
    date: "May 2026 - Aug 2026",
    title: "GirlScript Summer of Code",
    desc: "Contributor",
  },
  {
    date: "Jun 2026 - Jul 2026",
    title: "Social Summer of Code",
    desc: "Contributor",
  },
];

function OpenSource() {
  return (
    <section id="opensource">
      <h2 className="section-title">
        Open Source Journey
      </h2>

      <div className="timeline-container">
        {timeline.map((item, index) => (
          <motion.div
            className="timeline-item"
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <span>{item.date}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default OpenSource;