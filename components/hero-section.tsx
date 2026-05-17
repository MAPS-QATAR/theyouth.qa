"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#fff3df] pt-32 md:pt-36">
      <div className="absolute inset-0 opacity-80">
        <video autoPlay loop muted playsInline className="h-full w-full object-cover">
          <source src="/ai-tech.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#fff3df]/92 via-[#fff3df]/70 to-[#fff3df]/28" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(255,122,24,0.34),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(255,231,163,0.34),transparent_30%),radial-gradient(circle_at_58%_88%,rgba(221,19,103,0.16),transparent_34%)]" />

      <motion.div
        className="absolute right-10 top-32 hidden h-28 w-28 rounded-full bg-[#0a97d9]/25 blur-2xl lg:block"
        animate={{ y: [0, 20, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-20 left-12 hidden h-32 w-32 rounded-full bg-[#dd1367]/18 blur-2xl lg:block"
        animate={{ y: [0, -18, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <p className="inline-flex rounded-full border border-[#ff7a18]/20 bg-white/78 px-5 py-2 text-xs font-black uppercase tracking-[0.24em] text-[#3a2d21] shadow-sm backdrop-blur-xl">
              A Youth Platform by MAPS International W.L.L.
            </p>

            <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.04em] text-[#1e2f28] md:text-7xl lg:text-8xl">
              You Own Unlimited
              <span className="block youth-gradient-text">Talent & Hope</span>
            </h1>

            <p className="mt-8 max-w-3xl text-[1.45rem] font-light italic leading-relaxed tracking-[0.01em] text-[#314238] md:text-[1.85rem] lg:mx-0">
              Empowering the next generation through creativity, innovation,
              leadership, culture, and global collaboration.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Link href="/about">
                <motion.button
                  className="rounded-full bg-gradient-to-r from-[#ff7a18] to-[#dd1367] px-8 py-4 font-black text-white shadow-[0_16px_45px_rgba(221,19,103,0.25)]"
                  whileHover={{ scale: 1.045, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                >
                  Explore the Vision
                </motion.button>
              </Link>

              <div className="flex flex-col items-center sm:items-start">
                <Link href="/jadoo" target="_blank" rel="noreferrer">
                  <motion.button
                    className="rounded-full bg-[#1e2f28] px-8 py-4 font-black text-white shadow-[0_16px_45px_rgba(30,47,40,0.22)] transition hover:bg-[#314238]"
                    whileHover={{ scale: 1.045, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    View JADOO Initiative
                  </motion.button>
                </Link>

                <p className="mt-2 text-xs uppercase tracking-[0.25em] text-[#7d6f61] italic sm:ml-3">
                  Coming Soon...
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative mx-auto h-[560px] w-[460px] overflow-hidden rounded-[3.2rem] border-[10px] border-white bg-white shadow-[0_30px_90px_rgba(30,47,40,0.28)]">
              <img
                src="/Y.O.U.T.H..jpeg"
                alt="Y.O.U.T.H. Youth Vision"
                className="h-full w-full object-cover"
              />
            </div>

            <motion.div
              className="absolute -left-8 top-0 rounded-[2rem] bg-[#ffe7a3] px-7 py-6 text-[#1e2f28] shadow-2xl"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity }}
            >
              <p className="text-5xl font-black">3000+</p>
              <p className="font-bold">Young Innovators</p>
            </motion.div>

            <motion.div
              className="absolute -right-8 bottom-20 rounded-full bg-[#0a97d9] px-8 py-5 text-white shadow-2xl"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, delay: 0.5 }}
            >
              <p className="font-black">Global Youth Energy</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
