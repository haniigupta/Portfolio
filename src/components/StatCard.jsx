import { motion } from "framer-motion";

function StatCard({ icon, value, label, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ rotate: 1 }}
      className="
        group
        flex
        min-h-[280px]
        flex-col
        items-center
        justify-center
        rounded-[28px]
        border
        border-white/[0.08]
        bg-white/5
        px-10
        py-8
        text-center
        backdrop-blur-[20px]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#6d5dfc]/40
        hover:shadow-[0_0_35px_rgba(109,93,252,.35)]
      "
    >
      <div
        className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-[#6d5dfc]/10
          text-[2rem]
          text-[#6d5dfc]
          transition-transform
          duration-300
          group-hover:rotate-6
        "
      >
        {icon}
      </div>

      <h3 className="mt-6 text-[3rem] font-bold">
        {value}
      </h3>

      <p className="mt-3 text-lg text-[#c7c7c7]">
        {label}
      </p>
    </motion.div>
  );
}

export default StatCard;