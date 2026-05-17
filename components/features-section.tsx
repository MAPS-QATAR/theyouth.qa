"use client"

import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { useRef } from "react"

const pillars = [
  ["Creativity", "Art, culture, imagination, and self-expression.", "#ff7a18"],
  ["Innovation", "Future skills, ideas, technology, and problem-solving.", "#0a97d9"],
  ["Leadership", "Confidence, communication, responsibility, and purpose.", "#dd1367"],
]

export default function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-120px" })

  return (
    <section ref={ref} className="relative overflow-hidden youth-section-light px-6 py-24 md:py-32">
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          className="relative min-h-[560px]"
          initial={{ opacity: 0, x: -36 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.85 }}
        >
          <div className="absolute left-0 top-8 h-[460px] w-[78%] overflow-hidden rounded-[3rem] border-[10px] border-white bg-white shadow-[0_30px_90px_rgba(30,47,40,0.18)]">
            <video autoPlay loop muted playsInline className="h-full w-full object-cover">
              <source src="/lady-dancing.mp4" type="video/mp4" />
            </video>
          </div>

          <motion.div
            className="absolute bottom-8 right-0 w-[58%] overflow-hidden rounded-[2.5rem] border-[8px] border-white bg-white shadow-[0_24px_70px_rgba(30,47,40,0.18)]"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity }}
          >
            <img
              src="/high-angle-artist-chair-painting_23-2150170506.jpg"
              alt="Youth creativity"
              className="h-72 w-full object-cover"
            />
          </motion.div>

          <motion.div
            className="absolute bottom-1 left-8 rounded-[2rem] bg-gradient-to-r from-[#ff7a18] to-[#dd1367] px-7 py-5 text-white shadow-[0_20px_60px_rgba(221,19,103,0.25)]"
            animate={{ y: [0, 9, 0] }}
            transition={{ duration: 4.5, repeat: Infinity }}
          >
            <p className="text-4xl font-black">Future</p>
            <p className="font-bold">created by youth</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 36 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.12 }}
        >
          <p className="inline-flex rounded-full bg-white px-5 py-2 text-xs font-black uppercase tracking-[0.24em] text-[#ff6b18] shadow-sm">
            About the platform
          </p>

          <h2 className="mt-6 max-w-5xl text-4xl font-black leading-[0.98] tracking-[-0.04em] text-[#1e2f28] md:text-5xl lg:text-[4.7rem]">
            Talent becomes
            <br />
            purpose here.
          </h2>

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-[#44554d]">
            <p>
              THE Y.O.U.T.H™ is the dynamic youth wing of MAPS International W.L.L.,
              created to inspire, empower, and shape the next generation of young
              leaders, creators, and innovators.
            </p>
            <p>
              Built on the vision of “You Own Unlimited Talents & Hope,” the platform
              encourages youth to explore creativity, innovation, sustainability,
              culture, education, leadership, and social impact.
            </p>
            <p className="font-bold text-[#1e2f28]">
              It is a movement where imagination meets purpose, and youth become
              the creators of a brighter future.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {pillars.map(([title, text, color]) => (
              <div key={title} className="youth-card p-5">
                <div className="mb-4 h-2 w-16 rounded-full" style={{ backgroundColor: color }} />
                <h3 className="text-xl font-black text-[#1e2f28]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#647067]">{text}</p>
              </div>
            ))}
          </div>

          <Link href="/about">
            <button className="mt-10 rounded-full bg-[#1e2f28] px-8 py-4 font-black text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#314238]">
              Learn More About Y.O.U.T.H.
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
