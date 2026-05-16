"use client"

import { motion } from "framer-motion"

const themes = [
  ["Creativity", "Art, design, storytelling, imagination, and expression.", "🎨", "from-[#ff7a18] to-[#dd1367]"],
  ["Innovation", "Ideas, problem-solving, future skills, and entrepreneurship.", "💡", "from-[#0a97d9] to-[#26bde2]"],
  ["Leadership", "Confidence, communication, responsibility, and action.", "🚀", "from-[#19486a] to-[#0a97d9]"],
  ["Culture", "Heritage, identity, diversity, and global exchange.", "🌍", "from-[#dd1367] to-[#ff7a18]"],
  ["Sustainability", "Purpose-driven learning for people, planet, and future.", "🌱", "from-[#3f7e44] to-[#56c02b]"],
  ["Future Skills", "Technology, AI, space science, collaboration, and discovery.", "✨", "from-[#facc15] to-[#ff7a18]"],
]

export default function EventThemes() {
  return (
    <section className="relative overflow-hidden bg-[#fff8ee] px-6 py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,122,24,0.20),transparent_28%),radial-gradient(circle_at_85%_25%,rgba(10,151,217,0.16),transparent_30%),radial-gradient(circle_at_55%_90%,rgba(221,19,103,0.13),transparent_32%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          className="mx-auto mb-16 max-w-4xl text-center"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="inline-flex rounded-full bg-white px-5 py-2 text-xs font-black uppercase tracking-[0.24em] text-[#ff6b18] shadow-sm">
            Creative Focus Areas
          </p>

          <h2 className="mt-6 text-4xl font-black leading-tight text-[#1e2f28] md:text-6xl">
            Where youth talent meets future opportunity.
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {themes.map(([title, description, icon, gradient], index) => (
            <motion.div
              key={title}
              className="group relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${gradient}`} />
              <div className="text-5xl">{icon}</div>
              <h3 className="mt-6 text-2xl font-black text-[#1e2f28]">{title}</h3>
              <p className="mt-4 leading-relaxed text-[#5b6b63]">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
