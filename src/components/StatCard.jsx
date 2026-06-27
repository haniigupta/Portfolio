import { motion } from "framer-motion";

function StatCard({ icon, value, label, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -6 }}
      className="
group
rounded-[30px]
border
border-white/10
bg-white/[0.04]
backdrop-blur-xl
p-10
min-h-[220px]
flex
flex-col
justify-center
items-center
transition-all
duration-300
hover:-translate-y-3
hover:border-violet-500/40
hover:shadow-[0_0_35px_rgba(139,92,246,.20)]
"
    >
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 text-2xl text-violet-400 transition group-hover:rotate-6">
        {icon}
      </div>

      <h3 className="mt-7 text-5xl font-extrabold">{value}</h3>

      <p className="mt-4 text-lg text-gray-400">{label}</p>
    </motion.div>
  );
}

export default StatCard;