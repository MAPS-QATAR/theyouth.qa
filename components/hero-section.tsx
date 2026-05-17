"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#fff4e6] pt-28 md:pt-32">
      {/* VIDEO BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.78]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover scale-[1.03]"
        >
          <source src="/ai-tech.mp4" type="video/mp4" />
        </video>
      </div>

      {/* PREMIUM OVERLAYS */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#fff4e6]/95 via-[#fff4e6]/72 to-[#fff4e6]/35" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,122,24,0.20),transparent_28%),radial-gradient(circle_at_84%_16%,rgba(255,231,163,0.24),transparent_32%),radial-gradient(circle_at_60%_88%,rgba(221,19,103,0.10),transparent_34%)]" />

      {/* FLOATING LIGHTS */}
      <motion.div
        className="absolute right-10 top-32 hidden h-28 w-28 rounded-full bg-[#0a97d9]/20 blur-3xl lg:block"
        animate={{ y: [0, 18, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-20 left-12 hidden h-32 w-32 rounded-full bg-[#dd1367]/14 blur-3xl lg:block"
        animate={{ y: [0, -18, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* MAIN CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.92fr]">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* LABEL */}
            <p className="inline-flex rounded-full border border-white/50 bg-white/70 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#3a2d21] shadow-sm backdrop-blur-xl md:text-xs">
              A Youth Platform by MAPS International W.L.L.
            </p>

            {/* HEADLINE */}
            <h1 className="mt-7 max-w-3xl text-[2.9rem] font-black leading-[0.92] tracking-[-0.055em] text-[#183028] sm:text-[4rem] md:text-[5rem] lg:text-[5.8rem]">
              You Own Unlimited
              <span className="block youth-gradient-text">
                Talent & Hope
              </span>
            </h1>

            {/* SUBTEXT */}
            <p className="mx-auto mt-7 max-w-2xl text-[1.08rem] font-light italic leading-relaxed tracking-[0.01em] text-[#314238] sm:text-[1.2rem] md:text-[1.42rem] lg:mx-0">
              Empowering the next generation through creativity,
              innovation, leadership, culture, and global collaboration.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Link href="/about">
                <motion.button
                  className="rounded-full bg-gradient-to-r from-[#ff7a18] to-[#dd1367] px-8 py-4 text-sm font-black text-white shadow-[0_16px_45px_rgba(221,19,103,0.22)]"
                  whileHover={{ scale: 1.045, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                >
                  Explore the Vision
                </motion.button>
              </Link>

              <div className="flex flex-col items-center sm:items-start">
                <Link href="/jadoo" target="_blank" rel="noreferrer">
                  <motion.button
                    className="rounded-full border border-[#1e2f28]/10 bg-[#1e2f28] px-8 py-4 text-sm font-black text-white shadow-[0_16px_45px_rgba(30,47,40,0.18)] transition hover:bg-[#314238]"
                    whileHover={{ scale: 1.045, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    View JADOO Initiative
                  </motion.button>
                </Link>

                <p className="mt-2 text-[10px] uppercase tracking-[0.32em] text-[#7d6f61] italic sm:ml-3">
                  Coming Soon...
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* MAIN IMAGE */}
            <div className="relative mx-auto h-[560px] w-[460px] overflow-hidden rounded-[3rem] border-[10px] border-white/90 bg-white shadow-[0_30px_90px_rgba(30,47,40,0.22)]">
              <img
                src="/Y.O.U.T.H..jpeg"
                alt="Y.O.U.T.H. Youth Vision"
                className="h-full w-full object-cover"
              />
            </div>

            {/* FLOAT CARD */}
            <motion.div
              className="absolute -left-10 top-8 rounded-[2rem] border border-white/60 bg-[#fff3d9]/92 px-7 py-6 text-[#1e2f28] shadow-[0_20px_60px_rgba(0,0,0,0.12)] backdrop-blur-xl"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity }}
            >
              <p className="text-5xl font-black">3000+</p>
              <p className="mt-1 text-sm font-bold tracking-wide">
                Young Innovators
              </p>
            </motion.div>

            {/* FLOAT BADGE */}
            <motion.div
              className="absolute -right-8 bottom-20 rounded-full bg-[#0a97d9]/95 px-8 py-5 text-white shadow-[0_20px_60px_rgba(10,151,217,0.32)]"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, delay: 0.5 }}
            >
              <p className="text-sm font-black tracking-wide">
                Global Youth Energy
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
