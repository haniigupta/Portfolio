import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaCodeBranch,
  FaBug,
  FaFolderOpen,
} from "react-icons/fa";

import StatCard from "./StatCard";


import {
  contributionStats,
} from "../data/contributions";

const icons = [
  <FaCodeBranch />,
  <FaBug />,
  <FaFolderOpen />,
];

function OpenSource() {
  return (
    <section
      id="opensource"
      className="relative py-28 px-[8%]"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/3 top-24 h-80 w-80 rounded-full bg-violet-500/10 blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <span className="text-violet-400 font-semibold tracking-widest uppercase">
          Open Source
        </span>

        <h2 className="mt-5 text-6xl font-black leading-[1.15]">
          Building Through
          <span className="text-violet-400">
            {" "}
            Real Contributions
          </span>
        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-400">
          Contributing to production repositories across frontend,
          backend, accessibility and UI/UX while collaborating with
          maintainers through pull requests and issue discussions.
        </p>
      </motion.div>

      {/* Stats */}
      <div className="mt-24 grid gap-12 md:grid-cols-3">
        {contributionStats.map((item, index) => (
          <StatCard
            key={item.label}
            icon={icons[index]}
            value={item.value}
            label={item.label}
            delay={index * 0.15}
          />
        ))}
      </div>


      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-32 flex flex-col items-center text-center"
      >


        <p className="mt-5 max-w-xl text-lg leading-8 text-gray-400">
          View all pull requests, issues, organizations and featured contributions.
        </p>

        <Link
          to="/contributions"
          className="
  group
  mt-10
  inline-flex
  items-center
  gap-3
  rounded-full
  border
  border-violet-500/30
  bg-gradient-to-r
  from-violet-600/90
  to-indigo-600/90
  px-8
  py-4
  text-base
  font-semibold
  shadow-lg
  shadow-violet-500/20
  transition-all
  duration-300
  hover:-translate-y-1
  hover:scale-105
  hover:shadow-violet-500/40
"
        >
          Open Source Portfolio

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>


      </motion.div>
    </section>
  );
}

export default OpenSource;