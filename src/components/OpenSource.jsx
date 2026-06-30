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
      className="relative px-[10%] py-[100px]"
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
      >
        <h2 className="mb-[55px] text-[3rem] max-md:text-[2.2rem]">
          Open Source
        </h2>

        <p className="max-w-[900px] text-[1.1rem] leading-8 text-[#c7c7c7]">
          Contributing to production repositories across frontend,
          backend, accessibility, and UI/UX while collaborating with
          maintainers through pull requests, issue discussions, and
          feature implementations.
        </p>
      </motion.div>

      {/* Stats */}
      <div className="mt-[60px] grid grid-cols-1 gap-8 lg:grid-cols-3">
        {contributionStats.map((item, index) => (
          <StatCard
            key={item.label}
            icon={icons[index]}
            value={item.value}
            label={item.label}
            delay={index * 0.2}
          />
        ))}
      </div>


      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-[80px] flex flex-col items-center text-center"
      >


        <p className="mt-5 max-w-xl text-lg leading-8 text-[#c7c7c7]">
          View all pull requests, issues, organizations and featured contributions.
        </p>

        <Link
  to="/contributions"
  className="
    mt-12
    inline-flex
    items-center
    justify-center
    rounded-[18px]
    border
    border-[#6d5dfc]
    bg-[#6d5dfc]
    px-12
    py-5
    min-w-[320px]
    text-lg
    font-semibold
    text-white
    shadow-[0_0_20px_rgba(109,93,252,.25)]
    hover:shadow-[0_0_40px_rgba(109,93,252,.55)]
    focus:shadow-[0_0_40px_rgba(109,93,252,.55)]
  "
>
  Open Source Portfolio
</Link>

      </motion.div>



    
    </section >
  );
}

export default OpenSource;