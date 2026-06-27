import { motion } from "framer-motion";
import { FaCodeBranch, FaBug } from "react-icons/fa";

function OrganizationCard({
  title,
  duration,
  subtitle,
  prCount,
  issueCount,
  color,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        y: -8,
        transition: { duration: 0.25 },
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-all duration-300 hover:border-violet-500/40 hover:shadow-[0_0_35px_rgba(139,92,246,.18)]"
    >
      {/* Left Accent */}
      <div
        className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b ${color}`}
      />

      {/* Hover Glow */}
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-gradient-to-br from-violet-500/10 via-transparent to-transparent" />

      <div className="relative z-10 p-7">
        {/* Duration */}
        <p className="text-sm font-medium text-violet-400">
          {duration}
        </p>

        {/* Title */}
        <h3 className="mt-3 text-2xl font-bold leading-tight">
          {title}
        </h3>

        {/* Subtitle */}
        <p className="mt-4 text-gray-400 leading-7">
          {subtitle}
        </p>

        {/* Stats */}
        <div className="mt-8 flex flex-wrap gap-6">
          <div className="flex items-center gap-2">
            <FaCodeBranch className="text-violet-400" />
            <span className="font-medium">{prCount}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaBug className="text-violet-400" />
            <span className="font-medium">{issueCount}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default OrganizationCard;