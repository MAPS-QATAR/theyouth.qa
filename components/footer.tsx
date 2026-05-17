"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="relative overflow-hidden youth-section-dark px-6 py-20 text-white">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="inline-flex rounded-full bg-white/10 px-5 py-2 text-xs font-black uppercase tracking-[0.24em] text-[#ffe7a3]">
              THE Y.O.U.T.H™
            </p>

            <h2 className="mt-7 max-w-3xl text-4xl font-black leading-[1] tracking-[-0.035em] md:text-6xl">
              Building creators, leaders, innovators, and changemakers.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/72">
              Y.O.U.T.H. – You Own Unlimited Talent & Hope is a youth-focused platform
              by MAPS International W.L.L., created to inspire creativity, confidence,
              collaboration, innovation, and purpose-driven action.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="mailto:info@mapsinternational.net">
                <button className="rounded-full bg-white px-8 py-4 font-black text-[#10251f] transition hover:-translate-y-1 hover:bg-[#ffe7a3]">
                  Get in touch
                </button>
              </Link>

              <Link href="/jadoo" target="_blank" rel="noreferrer">
                <button className="rounded-full border border-white/30 px-8 py-4 font-black text-white transition hover:-translate-y-1 hover:bg-white hover:text-[#10251f]">
                  Explore JADOO
                </button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="grid gap-6 sm:grid-cols-2"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-7 backdrop-blur-xl">
              <h3 className="text-xl font-black">Navigate</h3>
              <div className="mt-5 space-y-3 text-white/72">
                <Link href="/" className="block hover:text-white">Home</Link>
                <Link href="/about" className="block hover:text-white">About</Link>
                <Link href="/jadoo" target="_blank" rel="noreferrer" className="block hover:text-white">JADOO</Link>
                <Link href="/target-audience" className="block hover:text-white">Target Audience</Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-7 backdrop-blur-xl">
              <h3 className="text-xl font-black">Contact</h3>
              <p className="mt-5 leading-relaxed text-white/72">
                For collaborations, school engagement, partnerships, and youth initiatives:
              </p>
              <Link
                href="mailto:info@mapsinternational.net"
                className="mt-4 block break-words text-base font-black text-[#ffe7a3]"
              >
                info@mapsinternational.net
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/55 md:flex-row">
          <p>Y.O.U.T.H. – You Own Unlimited Talent & Hope</p>
          <p>An Initiative by MAPS International W.L.L.</p>
          <p>© 2026 MAPS International W.L.L. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
