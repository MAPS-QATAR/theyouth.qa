"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const pillars = [
  ["Creativity", "Unlocking imagination through art, culture, design, storytelling, and expression.", "from-[#ff7a18] to-[#dd1367]"],
  ["Innovation", "Encouraging future skills, problem-solving, technology, discovery, and entrepreneurship.", "from-[#0a97d9] to-[#26bde2]"],
  ["Leadership", "Building confidence, communication, responsibility, collaboration, and purpose.", "from-[#19486a] to-[#0a97d9]"],
  ["Impact", "Transforming ideas into meaningful action for communities, society, and the future.", "from-[#3f7e44] to-[#56c02b]"],
]

const pathways = [
  "Workshops & creative learning experiences",
  "Festivals, exhibitions & youth showcases",
  "Space science and future skills initiatives",
  "SDG programs and sustainability action",
  "Culture, education and global collaboration",
  "Leadership, innovation and social impact",
]

export default function AboutPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#fff8ee] text-[#1e2f28]"
    >
      <Navbar />

      <section className="relative overflow-hidden youth-section-light px-6 pb-24 pt-40 md:pt-48">
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="inline-flex rounded-full bg-white px-5 py-2 text-xs font-black uppercase tracking-[0.24em] text-[#ff6b18] shadow-sm">
              About THE Y.O.U.T.H™
            </p>

            <h1 className="mt-7 max-w-5xl text-5xl font-black leading-[0.96] tracking-[-0.04em] md:text-7xl">
              Youth potential deserves a global stage.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-[#44554d] md:text-2xl">
              THE Y.O.U.T.H™ is the dynamic youth wing of MAPS International W.L.L.,
              created to inspire, empower, and shape the next generation of young
              leaders, creators, and innovators.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href="/target-audience">
                <button className="rounded-full bg-gradient-to-r from-[#ff7a18] to-[#dd1367] px-8 py-4 font-black text-white shadow-xl transition hover:-translate-y-1">
                  Who We Empower
                </button>
              </Link>

              <Link href="/jadoo" target="_blank" rel="noreferrer">
                <button className="rounded-full bg-[#1e2f28] px-8 py-4 font-black text-white shadow-xl transition hover:-translate-y-1">
                  Explore JADOO
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
              <img
                src="/Y.O.U.T.H..jpeg"
                alt="THE Y.O.U.T.H vision"
                className="h-full w-full object-cover"
              />
            </div>

            <motion.div
              className="absolute -left-8 top-0 rounded-[2rem] bg-[#ffe7a3] px-7 py-6 shadow-2xl"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity }}
            >
              <p className="text-4xl font-black">Youth</p>
              <p className="font-bold">with purpose</p>
            </motion.div>

            <motion.div
              className="absolute -right-8 bottom-20 rounded-full bg-[#0a97d9] px-8 py-5 font-black text-white shadow-2xl"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, delay: 0.5 }}
            >
              Creativity + Impact
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="inline-flex rounded-full bg-[#fff3df] px-5 py-2 text-xs font-black uppercase tracking-[0.24em] text-[#ff6b18]">
              Our Vision
            </p>

            <h2 className="mt-6 text-4xl font-black leading-[1] tracking-[-0.035em] md:text-6xl">
              You Own Unlimited Talents & Hope.
            </h2>
          </motion.div>

          <motion.div
            className="space-y-6 text-lg leading-relaxed text-[#44554d]"
            initial={{ opacity: 0, x: 26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p>
              Built on the vision of “You Own Unlimited Talents & Hope,” the platform
              encourages youth to explore creativity, innovation, sustainability,
              culture, education, leadership, and social impact.
            </p>

            <p>
              Through workshops, exhibitions, festivals, space science initiatives,
              SDG programs, creative learning experiences, and global collaborations,
              THE Y.O.U.T.H™ provides young minds with opportunities to discover their
              potential and transform ideas into meaningful action.
            </p>

            <p className="font-black text-[#1e2f28]">
              It is a movement where imagination meets purpose, and youth become the
              creators of a brighter future.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden youth-section-light px-6 py-24 md:py-32">
        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            className="mx-auto mb-14 max-w-4xl text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="inline-flex rounded-full bg-white px-5 py-2 text-xs font-black uppercase tracking-[0.24em] text-[#ff6b18] shadow-sm">
              What We Build
            </p>

            <h2 className="mt-6 text-4xl font-black leading-[1] tracking-[-0.035em] md:text-6xl">
              A future-ready ecosystem for young changemakers.
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map(([title, text, gradient], index) => (
              <motion.div
                key={title}
                className="group relative overflow-hidden rounded-[2rem] bg-white/88 p-7 shadow-[0_18px_60px_rgba(30,47,40,0.08)] backdrop-blur transition hover:-translate-y-2 hover:shadow-[0_28px_90px_rgba(30,47,40,0.14)]"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <div className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${gradient}`} />
                <h3 className="text-2xl font-black">{title}</h3>
                <p className="mt-4 leading-relaxed text-[#5b6b63]">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden youth-section-dark px-6 py-24 text-white md:py-32">
        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="inline-flex rounded-full bg-white/10 px-5 py-2 text-xs font-black uppercase tracking-[0.24em] text-[#ffe7a3]">
              Pathways
            </p>

            <h2 className="mt-6 text-4xl font-black leading-[1] tracking-[-0.035em] md:text-6xl">
              From inspiration to action.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-white/72">
              THE Y.O.U.T.H™ connects young people with real platforms where they can
              learn, create, collaborate, present ideas, and grow into confident future
              leaders.
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2">
            {pathways.map((item, index) => (
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
            A movement where imagination meets purpose.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[#44554d]">
            By bringing together creativity, innovation, sustainability, culture,
            education, leadership, and global collaboration, THE Y.O.U.T.H™ creates
            opportunities for young minds to shape a brighter future.
          </p>

          <Link href="mailto:info@mapsinternational.net">
            <button className="mt-10 rounded-full bg-[#1e2f28] px-8 py-4 font-black text-white shadow-xl transition hover:-translate-y-1">
              Connect with THE Y.O.U.T.H™
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </motion.main>
  )
}
