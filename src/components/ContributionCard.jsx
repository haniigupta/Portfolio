import { motion } from "framer-motion";
import { FaArrowRight, FaCodeBranch } from "react-icons/fa";

function ContributionCard({
  repository,
  title,
  tech = [],
  type,
  status,
  url,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35 }}
      className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition-all"
    >
      {/* Repository */}
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-white">
          {repository}
        </h3>

        <span className="rounded-full bg-violet-500/20 px-3 py-1 text-xs font-medium text-violet-300">
          {type}
        </span>
      </div>

      {/* Title */}
      <p className="mt-4 leading-7 text-gray-300">
        {title}
      </p>

      {/* Tech Stack */}
      <div className="mt-5 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-sm text-violet-300"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between">
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            status === "Merged"
              ? "bg-green-500/20 text-green-400"
              : status === "Open"
              ? "bg-yellow-500/20 text-yellow-400"
              : "bg-red-500/20 text-red-400"
          }`}
        >
          {status}
        </span>

        {url && (
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-violet-400 transition hover:text-violet-300"
          >
            <FaCodeBranch />
            View PR
            <FaArrowRight className="text-xs" />
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default ContributionCard;