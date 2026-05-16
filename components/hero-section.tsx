"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#fff3df] pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,122,24,0.35),transparent_28%),radial-gradient(circle_at_82%_22%,rgba(255,214,64,0.35),transparent_30%),radial-gradient(circle_at_55%_85%,rgba(221,19,103,0.18),transparent_32%)]" />

            <div className="absolute inset-0 opacity-75">
  <video autoPlay loop muted playsInline className="h-full w-full object-cover">
    <source src="/ai-tech.mp4" type="video/mp4" />
  </video>
</div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#fff3df]/78 via-[#fff3df]/55 to-[#fff3df]/25" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-[1fr_0.9fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <p className="inline-flex rounded-full bg-white/70 border border-[#ff7a18]/25 px-5 py-2 text-xs md:text-sm font-bold tracking-[0.22em] uppercase text-[#3a2d21] shadow-sm">
              A Youth Platform by MAPS International W.L.L.
            </p>

            <h1 className="mt-8 text-6xl md:text-8xl xl:text-9xl font-black leading-[0.9] text-[#1e2f28]">
              Y.O.U.T.H.
            </h1>

            <p className="mt-5 text-2xl md:text-4xl font-black text-[#ff6b18]">
              You Own Unlimited Talent & Hope
            </p>

            <p className="mt-8 max-w-3xl mx-auto lg:mx-0 text-lg md:text-2xl leading-relaxed text-[#314238]">
              Empowering the next generation through creativity, innovation,
              leadership, culture, and global collaboration.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/about">
                <motion.button
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-[#ff7a18] to-[#dd1367] text-white font-black shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                >
                  Explore the Vision
                </motion.button>
              </Link>

              <Link href="/jadoo" target="_blank" rel="noreferrer">
                <motion.button
                  className="px-8 py-4 rounded-full bg-[#1e2f28] text-white font-black shadow-xl hover:bg-[#314238] transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                >
                  View JADOO Initiative
                </motion.button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative mx-auto h-[560px] w-[460px] rounded-[3rem] overflow-hidden shadow-2xl border-[10px] border-white bg-white">
              <img
                src="/Y.O.U.T.H.jpeg"
                alt="Y.O.U.T.H. Youth Vision"
                className="h-full w-full object-cover"
              />
            </div>

            <motion.div
              className="absolute -left-10 top-16 rounded-[2rem] bg-[#ffe7a3] px-7 py-6 text-[#1e2f28] shadow-2xl"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <p className="text-5xl font-black">3000+</p>
              <p className="font-bold">Young Innovators</p>
            </motion.div>

            <motion.div
              className="absolute -right-8 bottom-20 rounded-full bg-[#0a97d9] px-8 py-5 text-white shadow-2xl"
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
