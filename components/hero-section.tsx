"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#10251f] pt-28">
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="h-full w-full object-cover opacity-45">
          <source src="/ai-tech.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-[#07120f]/90 via-[#17382f]/70 to-[#0a1c19]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,192,72,0.22),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(10,151,217,0.2),transparent_28%),radial-gradient(circle_at_55%_80%,rgba(221,19,103,0.16),transparent_30%)]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold tracking-[0.22em] uppercase text-white/80 backdrop-blur-md">
              A Youth Platform by MAPS International W.L.L.
            </p>

            <h1 className="mt-8 text-5xl md:text-7xl xl:text-8xl font-black leading-[0.95] text-white">
              Y.O.U.T.H.
            </h1>

            <p className="mt-5 text-2xl md:text-4xl font-bold text-[#ffe7a3]">
              You Own Unlimited Talent & Hope
            </p>

            <p className="mt-8 max-w-3xl mx-auto lg:mx-0 text-lg md:text-2xl leading-relaxed text-white/82">
              Empowering the next generation through creativity, innovation, sustainability,
              leadership, culture, and global collaboration.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/about">
                <motion.button
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-[#ff7a18] to-[#dd1367] text-white font-bold shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                >
                  Explore the Vision
                </motion.button>
              </Link>

              <Link href="/jadoo" target="_blank" rel="noreferrer">
                <motion.button
                  className="px-8 py-4 rounded-full border border-white/35 bg-white/10 text-white font-bold backdrop-blur-md hover:bg-white hover:text-[#10251f] transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                >
                  View JADOO Initiative
                </motion.button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="relative hidden lg:flex justify-center"
            initial={{ opacity: 0, scale: 0.92, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="relative h-[520px] w-[420px] rounded-[3rem] overflow-hidden border border-white/20 bg-white/10 shadow-2xl backdrop-blur-md">
              <video autoPlay loop muted playsInline className="h-full w-full object-cover">
                <source src="/sticky-note.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 rounded-3xl bg-white/14 p-6 backdrop-blur-xl border border-white/20">
                <p className="text-white/70 text-sm uppercase tracking-[0.22em]">Creative Futures</p>
                <h3 className="mt-2 text-3xl font-black text-white">Youth. Ideas. Impact.</h3>
              </div>
            </div>

            <motion.div
              className="absolute -left-8 top-16 rounded-3xl bg-[#ffe7a3] px-6 py-5 text-[#10251f] shadow-xl"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <p className="text-4xl font-black">3000+</p>
              <p className="text-sm font-bold">Young Innovators</p>
            </motion.div>

            <motion.div
              className="absolute -right-6 bottom-20 rounded-full bg-[#0a97d9] px-7 py-5 text-white shadow-xl"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
            >
              <p className="font-black">Global Youth Energy</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
