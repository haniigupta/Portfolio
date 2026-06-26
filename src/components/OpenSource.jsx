import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  
  FaCodeBranch,
  FaBug,
  FaFolderOpen,
  
} from "react-icons/fa";

const stats = [
  {
    icon: <FaCodeBranch />,
    value: "20+",
    label: "Pull Requests",
  },
  {
    icon: <FaBug />,
    value: "15+",
    label: "Issues Raised",
  },
  {
    icon: <FaFolderOpen />,
    value: "10+",
    label: "Repositories",
  },
];



function OpenSource() {
  return (
    <section
      id="opensource"
      className="py-24 px-[10%]"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-bold mb-4">
          Open Source Contributions
        </h2>

        <p className="text-gray-400 max-w-3xl leading-8">
          Contributed to multiple open source organizations through
          frontend, backend, UI/UX, accessibility and documentation
          improvements across real-world production repositories.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center"
          >
            <div className="text-violet-400 text-3xl flex justify-center">
              {item.icon}
            </div>

            <h3 className="text-4xl font-bold mt-4">
              {item.value}
            </h3>

            <p className="text-gray-400 mt-2">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="grid gap-6 md:grid-cols-3 mt-14"
      >

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <h3 className="text-xl font-semibold">
            Open Source Connect Global
          </h3>

          <p className="mt-2 text-violet-400 font-medium">
            10+ Pull Requests
          </p>

          <p className="mt-4 text-gray-400 leading-7">
            Frontend • Backend • UI/UX
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <h3 className="text-xl font-semibold">
            Social Summer of Code
          </h3>

          <p className="mt-2 text-violet-400 font-medium">
            5 Pull Requests
          </p>

          <p className="mt-4 text-gray-400 leading-7">
            UI/UX • Backend
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <h3 className="text-xl font-semibold">
            GirlScript Summer of Code
          </h3>

          <p className="mt-2 text-violet-400 font-medium">
            1 Merged Pull Request
          </p>

          <p className="mt-4 text-gray-400 leading-7">
            UI Enhancement
          </p>
        </div>

      </motion.div>

      <div className="mt-12 flex justify-center">

        <Link
          to="/contributions"
          className="inline-flex items-center rounded-xl bg-violet-600 px-8 py-4 font-semibold transition-all duration-300 hover:bg-violet-500 hover:scale-105"
        >
          View My Open Source Portfolio →
        </Link>

      </div>


    </section>

  );
}

export default OpenSource;