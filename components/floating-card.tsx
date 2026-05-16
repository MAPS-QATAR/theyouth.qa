"use client"

import { motion } from "framer-motion"

export default function FloatingCard() {
  return (
    <motion.div
      className="hidden xl:block absolute bottom-10 left-10 z-20"
      initial={{ opacity: 0, x: -40, y: 40 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 1, delay: 1.2 }}
    >
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.35)] p-8 w-[360px]"
      >
        {/* Gradient Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff7a18]/20 via-[#dd1367]/10 to-[#0a97d9]/20" />

        <div className="relative z-10">
          {/* Label */}
          <p className="text-xs uppercase tracking-[0.28em] text-white/70 font-semibold">
            Global Youth Platform
          </p>

          {/* Heading */}
          <h3 className="mt-4 text-3xl font-black leading-tight text-white">
            Creativity.
            <br />
            Leadership.
            <br />
            Impact.
          </h3>

          {/* Description */}
          <p className="mt-5 text-white/80 leading-relaxed text-[15px]">
            Inspiring young minds through innovation, culture,
            collaboration, sustainability, and purpose-driven action.
          </p>

          {/* Stats */}
          <div className="mt-7 grid grid-cols-3 gap-3">
            <div className="rounded-2xl bg-white/10 border border-white/10 p-3 text-center">
              <p className="text-2xl font-black text-[#ffe7a3]">17</p>
              <p className="text-[11px] uppercase tracking-wider text-white/70">
                SDGs
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 border border-white/10 p-3 text-center">
              <p className="text-2xl font-black text-[#ff7a18]">50+</p>
              <p className="text-[11px] uppercase tracking-wider text-white/70">
                Programs
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 border border-white/10 p-3 text-center">
              <p className="text-2xl font-black text-[#0a97d9]">Global</p>
              <p className="text-[11px] uppercase tracking-wider text-white/70">
                Vision
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
