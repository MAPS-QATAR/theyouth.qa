"use client"

import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { useRef } from "react"

const initiatives = [
  {
    title: "JADOO – Youth for SDGs",
    label: "Flagship Initiative",
    description:
      "A school-based creative SDG platform where young minds transform sustainability goals into art, innovation, leadership, and public action.",
    image: "/jadoo-logo.png",
    color: "from-[#ff7a18] via-[#facc15] to-[#dd1367]",
    link: "/jadoo",
    external: true,
  },
  {
    title: "Creative Learning Labs",
    label: "Art + Innovation",
    description:
      "Hands-on workshops and experiences that help youth explore creativity, design thinking, storytelling, culture, and self-expression.",
    image: "/high-angle-artist-chair-painting_23-2150170506.jpg",
    color: "from-[#dd1367] via-[#ff7a18] to-[#facc15]",
    link: "/about",
    external: false,
  },
  {
    title: "Space Science & Future Skills",
    label: "STEM + Discovery",
    description:
      "Inspiring young learners through space science, technology, curiosity, research, and future-focused educational experiences.",
    image: "/ai-tech.mp4",
    type: "video",
    color: "from-[#0a97d9] via-[#26bde2] to-[#56c02b]",
    link: "/about",
    external: false,
  },
  {
    title: "Youth Leadership & Impact",
    label: "Purpose + Action",
    description:
      "Programs that build confidence, collaboration, communication, responsibility, and youth-led social impact.",
    image: "/lady-dancing.mp4",
    type: "video",
    color: "from-[#19486a] via-[#0a97d9] to-[#dd1367]",
    link: "/target-audience",
    external: false,
  },
]

export default function InitiativesPrograms() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-120px" })

  return (
    <section ref={ref} className="relative overflow-hidden youth-section-dark px-6 py-24 text-white md:py-32">
      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          className="mb-16 max-w-5xl"
          initial={{ opacity: 0, y: 26 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75 }}
        >
          <p className="inline-flex rounded-full bg-white/10 px-5 py-2 text-xs font-black uppercase tracking-[0.24em] text-[#ffe7a3] backdrop-blur">
            Initiatives & Programs
          </p>

          <h2 className="mt-6 text-4xl font-black leading-[1] tracking-[-0.035em] md:text-6xl lg:text-7xl">
            Youth ideas deserve platforms that feel alive.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/72">
            THE Y.O.U.T.H™ brings together creativity, culture, innovation,
            education, sustainability, leadership, and collaboration through
            future-facing initiatives designed for young changemakers.
          </p>
        </motion.div>

        <div className="grid gap-7 lg:grid-cols-4">
          {initiatives.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 34 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-[2.3rem] border border-white/10 bg-white/10 shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-18 transition duration-500 group-hover:opacity-40`} />

              <div className="relative h-64 overflow-hidden">
                {item.type === "video" ? (
                  <video autoPlay loop muted playsInline className="h-full w-full object-cover transition duration-700 group-hover:scale-110">
                    <source src={item.image} type="video/mp4" />
                  </video>
                ) : (
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-[#111f1a] via-[#111f1a]/25 to-transparent" />

                <span className="absolute left-5 top-5 rounded-full bg-white/92 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#1e2f28]">
                  {item.label}
                </span>
              </div>

              <div className="relative p-6">
                <h3 className="text-2xl font-black leading-tight text-white">{item.title}</h3>

                <p className="mt-4 text-sm leading-relaxed text-white/72">{item.description}</p>

                <Link
                  href={item.link}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                >
                  <button className="mt-6 rounded-full bg-white px-6 py-3 text-sm font-black text-[#1e2f28] transition hover:-translate-y-1 hover:bg-[#ffe7a3]">
                    Explore
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-14 rounded-[2.5rem] border border-white/10 bg-white/10 p-8 backdrop-blur-xl md:p-10"
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <h3 className="text-3xl font-black leading-tight md:text-4xl">
              More youth initiatives are coming.
            </h3>
            <p className="text-white/72">
              THE Y.O.U.T.H™ will continue expanding into leadership programs,
              youth innovation labs, cultural learning, creative technology,
              global collaborations, and future skills platforms.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
