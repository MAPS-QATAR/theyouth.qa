"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#10251f] text-white">
      <section className="relative px-6 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(255,122,24,0.18),transparent_28%),radial-gradient(circle_at_85%_20%,rgba(10,151,217,0.18),transparent_28%),radial-gradient(circle_at_50%_90%,rgba(221,19,103,0.14),transparent_30%)]" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img
                src="/youth-wordmark.png"
                alt="Y.O.U.T.H."
                className="h-16 md:h-20 w-auto object-contain bg-white/90 rounded-2xl p-2"
              />

              <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight">
                Building a generation of creators, leaders, and changemakers.
              </h2>

              <p className="mt-6 max-w-2xl text-white/72 text-lg leading-relaxed">
                Y.O.U.T.H. – You Own Unlimited Talent & Hope is a youth-focused platform
                by MAPS International W.L.L., designed to inspire creativity, confidence,
                collaboration, innovation, and purpose-driven action.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="mailto:info@mapsinternational.net">
                  <button className="px-8 py-4 rounded-full bg-white text-[#10251f] font-bold hover:bg-[#ffe7a3] transition">
                    Get in touch
                  </button>
                </Link>

                <Link href="/jadoo" target="_blank" rel="noreferrer">
                  <button className="px-8 py-4 rounded-full border border-white/30 text-white font-bold hover:bg-white hover:text-[#10251f] transition">
                    Explore JADOO
                  </button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="grid sm:grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="rounded-[2rem] border border-white/10 bg-white/8 p-7 backdrop-blur-md">
                <h3 className="text-xl font-black">Navigate</h3>
                <div className="mt-5 space-y-3 text-white/72">
                  <Link href="/" className="block hover:text-white">Home</Link>
                  <Link href="/about" className="block hover:text-white">About</Link>
                  <Link href="/jadoo" target="_blank" rel="noreferrer" className="block hover:text-white">JADOO</Link>
                  <Link href="/target-audience" className="block hover:text-white">Target Audience</Link>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/8 p-7 backdrop-blur-md">
                <h3 className="text-xl font-black">Contact</h3>
                <p className="mt-5 text-white/72 leading-relaxed">
                  For collaborations, school engagement, partnerships, and youth initiatives:
                </p>
                <Link href="mailto:info@mapsinternational.net" className="mt-4 block font-bold text-[#ffe7a3]">
                  info@mapsinternational.net
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-sm text-white/55">
            <p>Y.O.U.T.H. – You Own Unlimited Talent & Hope</p>
            <p>An Initiative by MAPS International W.L.L.</p>
            <p>© 2026 MAPS International W.L.L. All rights reserved.</p>
          </div>
        </div>
      </section>
    </footer>
  )
}
