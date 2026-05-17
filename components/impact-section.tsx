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
    <section className="relative overflow-hidden youth-section-dark px-6 py-24 text-white md:py-32">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="inline-flex rounded-full bg-white/10 px-5 py-2 text-xs font-black uppercase tracking-[0.24em] text-[#ffe7a3]">
              Our Impact
            </p>

            <h2 className="mt-6 text-4xl font-black leading-[1] tracking-[-0.035em] md:text-6xl">
              Inspiring youth to imagine, create, lead, and transform.
            </h2>
          </motion.div>

          <motion.p
            className="max-w-2xl text-lg leading-relaxed text-white/72"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Through creative programs, youth initiatives, learning experiences,
            cultural engagement, and future-focused platforms, THE Y.O.U.T.H™
            continues to build confidence and possibility.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-4">
          {impact.map(([number, label], index) => (
            <motion.div
              key={label}
              className="rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:bg-white/15"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
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
