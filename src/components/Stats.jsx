import { motion } from "framer-motion";

const stats = [
  {
    number: "160+",
    title: "LeetCode Problems",
  },
  {
    number: "3",
    title: "Open Source Programs",
  },
  {
    number: "2",
    title: "Deployed Projects",
  },
  {
    number: "MERN",
    title: "Full Stack Development",
  },
];

function Stats() {
  return (
    <section id="stats">
      <div className="stats-grid">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            className="stat-card"
            whileHover={{
              scale: 1.05,
            }}
          >
            <h2>{item.number}</h2>
            <p>{item.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Stats;