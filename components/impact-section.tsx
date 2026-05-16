"use client"

import { motion } from "framer-motion"

const impact = [
  ["3000+", "Young Innovators"],
  ["50+", "Youth Programs"],
  ["17", "Global Goals"],
  ["25+", "Creative Collaborations"],
]

export default function ImpactSection() {
  return (
    <section className="relative overflow-hidden bg-[#111f1a] px-6 py-24 md:py-32 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,122,24,0.25),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(10,151,217,0.22),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(221,19,103,0.18),transparent_32%)]" />

      <div className="relative z-10 mx-auto max-w-7xl text-center">
        <p className="inline-flex rounded-full bg-white/10 px-5 py-2 text-xs font-black uppercase tracking-[0.24em] text-[#ffe7a3]">
          Our Impact
        </p>

        <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
          Inspiring youth to imagine, create, lead, and transform.
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-4">
          {impact.map(([number, label], index) => (
            <motion.div
              key={label}
              className="rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <p className="text-5xl font-black text-[#ffe7a3] md:text-6xl">{number}</p>
              <p className="mt-4 font-bold text-white/75">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
