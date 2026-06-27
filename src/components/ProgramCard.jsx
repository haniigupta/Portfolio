import { motion } from "framer-motion";
import { FaCodeBranch, FaBug } from "react-icons/fa";

function ProgramCard({
  title,
  duration,
  subtitle,
  prCount,
  issueCount,
  color,
  large = false,
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-300 hover:border-violet-500/40 hover:shadow-[0_0_40px_rgba(139,92,246,.18)]
      ${large ? "p-10 min-h-[260px]" : "p-7 min-h-[200px]"}`}
    >
      <div
        className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b ${color}`}
      />

      <span className="text-sm text-violet-400">
        {duration}
      </span>

      <h3
        className={`mt-3 font-bold ${
          large ? "text-3xl" : "text-2xl"
        }`}
      >
        {title}
      </h3>

      <p className="mt-5 text-gray-400">
        {subtitle}
      </p>

      <div className="mt-auto pt-10 flex gap-6">
        <div className="flex items-center gap-2">
          <FaCodeBranch className="text-violet-400" />
          <span>{prCount}</span>
        </div>

        <div className="flex items-center gap-2">
          <FaBug className="text-violet-400" />
          <span>{issueCount}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default ProgramCard;