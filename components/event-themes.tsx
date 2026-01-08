"use client"

import { motion } from "framer-motion"

export default function EventThemes() {
  const themes = [
    {
      title: "Innovation",
      description: "Cutting-edge ideas and breakthrough solutions",
      icon: "💡",
      color: "#4a8fff"
    },
    {
      title: "Startups",
      description: "Entrepreneurial ventures and business growth",
      icon: "🚀",
      color: "#5a8a6a"
    },
    {
      title: "AI & Technology",
      description: "Artificial intelligence and digital transformation",
      icon: "🤖",
      color: "#9b59b6"
    },
    {
      title: "Art",
      description: "Creative expression through visual arts",
      icon: "🎨",
      color: "#ff6b9d"
    },
    {
      title: "Culture",
      description: "Cultural exchange and heritage celebration",
      icon: "🎭",
      color: "#e67e22"
    },
    {
      title: "Fashion",
      description: "Style, design, and fashion innovation",
      icon: "👗",
      color: "#f4e8a8"
    }
  ]

  return (
    <section className="relative bg-[#e8ded2] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-[#2a3a32] mb-6">
            Event{" "}
            <span className="relative inline-block">
              Themes
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-3 bg-[#ff6b9d]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </span>
          </h2>
          <p className="text-xl text-[#2a3a32]/70 max-w-3xl mx-auto">
            Explore diverse focus areas that align with global sustainability goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {themes.map((theme, index) => (
            <motion.div
              key={theme.title}
              className="bg-white rounded-3xl p-8 shadow-lg relative overflow-hidden group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <motion.div
                className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
                style={{ backgroundColor: theme.color }}
                animate={{ scale: [1, 1.2, 1], rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, delay: index * 0.5 }}
              />

              <motion.div
                className="text-6xl mb-4 relative z-10"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
              >
                {theme.icon}
              </motion.div>

              <h3 className="text-2xl font-black text-[#2a3a32] mb-3 relative z-10">
                {theme.title}
              </h3>
              <p className="text-[#2a3a32]/70 leading-relaxed relative z-10">
                {theme.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Doodles */}
      <motion.svg
        className="absolute top-10 left-10 w-24 h-24 text-[#2a3a32] opacity-20"
        viewBox="0 0 100 100"
        initial={{ opacity: 0, rotate: -45 }}
        whileInView={{ opacity: 0.2, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.path
          d="M 20 50 Q 30 30, 50 50 Q 70 70, 80 50"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.5 }}
        />
      </motion.svg>

      <motion.svg
        className="absolute bottom-10 right-10 w-32 h-32 text-[#2a3a32] opacity-20"
        viewBox="0 0 100 100"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <motion.path
          d="M 50 20 L 60 40 L 80 40 L 65 55 L 70 75 L 50 60 L 30 75 L 35 55 L 20 40 L 40 40 Z"
          fill="currentColor"
        />
      </motion.svg>
    </section>
  )
}
