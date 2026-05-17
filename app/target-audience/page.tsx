"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const groups = [
  ["Students", "Young learners ready to explore creativity, confidence, leadership, innovation, and purpose.", "🎓", "from-[#ff7a18] to-[#dd1367]"],
  ["Schools", "Institutions seeking meaningful creative, cultural, sustainability, and future-skills engagement.", "🏫", "from-[#0a97d9] to-[#26bde2]"],
  ["Young Creators", "Artists, designers, storytellers, performers, makers, innovators, and emerging talents.", "🎨", "from-[#dd1367] to-[#ff7a18]"],
  ["Educators", "Teachers, mentors, coordinators, and guides shaping the learning journeys of young people.", "🌟", "from-[#19486a] to-[#0a97d9]"],
  ["Youth Leaders", "Changemakers who want to build confidence, responsibility, communication, and public action.", "🚀", "from-[#3f7e44] to-[#56c02b]"],
  ["Partners", "Cultural, educational, creative, and institutional collaborators supporting youth impact.", "🤝", "from-[#facc15] to-[#ff7a18]"],
]

const experiences = [
  "Creative learning and hands-on workshops",
  "Youth festivals, exhibitions, and showcases",
  "Innovation, AI, and future-skills exposure",
  "Space science and curiosity-led discovery",
  "Culture, art, fashion, and storytelling",
  "Sustainability, SDGs, and social impact",
]

export default function TargetAudiencePage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#fff8ee] text-[#1e2f28]"
    >
      <Navbar />

      <section className="relative overflow-hidden youth-section-light px-6 pb-24 pt-40 md:pt-48">
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="inline-flex rounded-full bg-white px-5 py-2 text-xs font-black uppercase tracking-[0.24em] text-[#ff6b18] shadow-sm">
              Who We Empower
            </p>

            <h1 className="mt-7 max-w-5xl text-5xl font-black leading-[0.96] tracking-[-0.04em] md:text-7xl">
              Youth, schools, creators, educators, and partners.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-[#44554d] md:text-2xl">
              THE Y.O.U.T.H™ is built for young minds and the ecosystems that support
              them — helping talent grow into confidence, creativity, leadership,
              and meaningful action.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href="/jadoo" target="_blank" rel="noreferrer">
                <button className="rounded-full bg-gradient-to-r from-[#ff7a18] to-[#dd1367] px-8 py-4 font-black text-white shadow-xl transition hover:-translate-y-1">
                  Explore JADOO
                </button>
              </Link>

              <Link href="mailto:info@mapsinternational.net">
                <button className="rounded-full bg-[#1e2f28] px-8 py-4 font-black text-white shadow-xl transition hover:-translate-y-1">
                  Partner With Us
                </button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="relative mx-auto h-[560px] w-[460px] overflow-hidden rounded-[3.2rem] border-[10px] border-white bg-white shadow-[0_30px_90px_rgba(30,47,40,0.25)]">
              <video autoPlay loop muted playsInline className="h-full w-full object-cover">
                <source src="/lady-dancing.mp4" type="video/mp4" />
              </video>
            </div>

            <motion.div
              className="absolute -left-8 top-0 rounded-[2rem] bg-[#ffe7a3] px-7 py-6 shadow-2xl"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity }}
            >
              <p className="text-4xl font-black">13+</p>
              <p className="font-bold">Youth-ready programs</p>
            </motion.div>

            <motion.div
              className="absolute -right-8 bottom-20 rounded-full bg-[#0a97d9] px-8 py-5 font-black text-white shadow-2xl"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, delay: 0.5 }}
            >
              Creative Futures
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="mx-auto mb-14 max-w-4xl text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="inline-flex rounded-full bg-[#fff3df] px-5 py-2 text-xs font-black uppercase tracking-[0.24em] text-[#ff6b18]">
              Our Community
            </p>

            <h2 className="mt-6 text-4xl font-black leading-[1] tracking-[-0.035em] md:text-6xl">
              A platform for every young person with potential.
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {groups.map(([title, description, icon, gradient], index) => (
              <motion.div
                key={title}
                className="group relative overflow-hidden rounded-[2rem] bg-white/90 p-8 shadow-[0_18px_60px_rgba(30,47,40,0.08)] transition hover:-translate-y-2 hover:shadow-[0_28px_90px_rgba(30,47,40,0.14)]"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
              >
                <div className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${gradient}`} />
                <div className="text-5xl">{icon}</div>
                <h3 className="mt-6 text-2xl font-black text-[#1e2f28]">{title}</h3>
                <p className="mt-4 leading-relaxed text-[#5b6b63]">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden youth-section-dark px-6 py-24 text-white md:py-32">
        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="inline-flex rounded-full bg-white/10 px-5 py-2 text-xs font-black uppercase tracking-[0.24em] text-[#ffe7a3]">
              Experiences
            </p>

            <h2 className="mt-6 text-4xl font-black leading-[1] tracking-[-0.035em] md:text-6xl">
              Learning becomes powerful when it becomes real.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-white/72">
              THE Y.O.U.T.H™ creates real platforms where youth can participate,
              present, collaborate, build confidence, and transform ideas into
              visible outcomes.
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2">
            {experiences.map((item, index) => (
              <motion.div
                key={item}
                className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5 font-bold text-white/85 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/15"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden youth-section-light px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-black leading-[1] tracking-[-0.035em] md:text-6xl">
            Youth are not only the audience — they are the future creators.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[#44554d]">
            THE Y.O.U.T.H™ welcomes learners, creators, schools, mentors,
            institutions, and partners who believe in empowering the next generation
            through creativity, innovation, leadership, culture, and action.
          </p>

          <Link href="mailto:info@mapsinternational.net">
            <button className="mt-10 rounded-full bg-[#1e2f28] px-8 py-4 font-black text-white shadow-xl transition hover:-translate-y-1">
              Collaborate With Us
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </motion.main>
  )
}
