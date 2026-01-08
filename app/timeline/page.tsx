"use client"

import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function TimelinePage() {
  const timeline = [
    {
      year: "2023",
      title: "Foundation",
      description: "Preparation of the project focused on empowering youth as leaders and innovators in various fields",
      icon: "🌱",
      color: "#5a8a6a",
      details: [
        "Project conceptualization",
        "Partnership development",
        "Framework establishment"
      ]
    },
    {
      year: "2024",
      title: "Growth",
      description: "Youth play a pivotal role in driving change in technology, creativity, and sustainable practices across global communities",
      icon: "🚀",
      color: "#4a8fff",
      details: [
        "Community engagement",
        "Program development",
        "Network expansion"
      ]
    },
    {
      year: "2025",
      title: "Transformation",
      description: "Project's plan to align with the Sustainable Development Goals (SDGs), targeting Innovation, start-ups, education, Fashion, and Cultural growth",
      icon: "✨",
      color: "#f4e8a8",
      details: [
        "Three-day mega event at Katara Cultural Village",
        "Full SDG alignment",
        "Maximum youth impact"
      ],
      highlight: false
    }
  ]

  const workshops = [
    { title: "Project Management", icon: "📊", color: "#4a8fff" },
    { title: "Communication Training", icon: "💬", color: "#5a8a6a" },
    { title: "Presentation Skills", icon: "🎤", color: "#ff6b9d" },
    { title: "Sales Training", icon: "💼", color: "#9b59b6" },
    { title: "Law & Data Protection", icon: "⚖️", color: "#e67e22" },
    { title: "Personal Development", icon: "🌟", color: "#f4e8a8" }
  ]

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-[#4a5a52] min-h-[60vh] flex items-center justify-center overflow-hidden px-6 py-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="/6260_Wall_Painting_1920x1080.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <div className="inline-block bg-[#f4e8a8] text-[#2a3a32] px-8 py-3 rounded-full font-bold text-lg">
              2023 - 2025
            </div>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-black text-[#e8ded2] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Project{" "}
            <span className="relative inline-block">
              Timeline
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-3 bg-[#5a8a6a]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </span>
          </motion.h1>

          <motion.p
            className="text-2xl text-[#e8ded2]/90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A multi-year initiative fostering leadership and innovation among today's youth
          </motion.p>

          {/* Animated Timeline Connector */}
          <motion.svg
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-20 text-[#e8ded2]"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <line x1="50%" y1="0" x2="50%" y2="100%" stroke="currentColor" strokeWidth="4" />
          </motion.svg>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative bg-[#e8ded2] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16 relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Animated Doodles around title */}
            <motion.svg
              className="absolute -top-12 left-1/4 w-20 h-20 text-[#5a8a6a] opacity-40"
              viewBox="0 0 100 100"
              initial={{ opacity: 0, rotate: -20 }}
              whileInView={{ opacity: 0.4, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <motion.path
                d="M 20 50 Q 40 30, 60 50 Q 80 70, 100 50"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.5 }}
              />
            </motion.svg>

            {/* Decorative icon above title */}
            <motion.div
              className="inline-block mb-4"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            >
              <div className="w-16 h-16 mx-auto">
                <svg viewBox="0 0 100 100" className="w-full h-full text-[#f4e8a8]">
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="30"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.5 }}
                  />
                  <motion.path
                    d="M 30 50 L 45 35 L 70 60"
                    stroke="#2a3a32"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 1 }}
                  />
                </svg>
              </div>
            </motion.div>

            <motion.svg
              className="absolute -top-8 right-1/4 w-16 h-16 text-[#4a8fff] opacity-40"
              viewBox="0 0 100 100"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 0.4, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <motion.path
                d="M 50 20 L 60 40 L 80 45 L 65 60 L 68 80 L 50 70 L 32 80 L 35 60 L 20 45 L 40 40 Z"
                fill="currentColor"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.7 }}
              />
            </motion.svg>

            <h2 className="text-4xl md:text-6xl font-black text-[#2a3a32] mb-6 relative inline-block">
              Our Journey
              {/* Yellow underline highlight */}
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-3 bg-[#f4e8a8] -z-10 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </h2>
            <p className="text-xl text-[#2a3a32]/70 max-w-3xl mx-auto">
              Aligning with the Sustainable Development Goals (SDGs) to create lasting impact
            </p>
          </motion.div>

          {/* Timeline Grid - Using Programs Section Card Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  className={`relative ${
                    item.highlight ? 'bg-gradient-to-br from-[#f4e8a8] to-[#4a8fff]' : 'bg-white'
                  } rounded-3xl overflow-hidden shadow-xl h-full`}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Icon/Emoji Container */}
                  <div className="relative h-48 overflow-hidden rounded-t-3xl bg-gradient-to-br from-[#e8ded2] to-[#2a3a32]/10 flex items-center justify-center">
                    <motion.div
                      className="text-8xl"
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    >
                      {item.icon}
                    </motion.div>
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />
                    
                    {/* Floating decorative elements */}
                    <motion.div
                      className="absolute top-4 right-4 w-8 h-8 rounded-full"
                      style={{ backgroundColor: item.color }}
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                    />
                    <motion.div
                      className="absolute bottom-4 left-4 w-6 h-6 rounded-full bg-white/40"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.4, 0.7, 0.4]
                      }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.4 }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Year badge */}
                    <motion.div
                      className={`text-sm font-semibold mb-3 ${
                        item.highlight ? 'text-white/90' : 'text-[#4a5a52]'
                      }`}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    >
                      {item.year}
                    </motion.div>

                    {/* Title */}
                    <h3 className={`text-2xl font-bold mb-3 ${
                      item.highlight ? 'text-white' : 'text-[#2a3a32]'
                    }`}>
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className={`text-sm mb-4 leading-relaxed ${
                      item.highlight ? 'text-white/80' : 'text-[#2a3a32]/70'
                    }`}>
                      {item.description}
                    </p>

                    {/* Details list */}
                    <ul className="space-y-1 mb-4">
                      {item.details.map((detail, i) => (
                        <motion.li
                          key={i}
                          className={`flex items-center gap-2 text-xs ${
                            item.highlight ? 'text-white/80' : 'text-[#2a3a32]/80'
                          }`}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 + 0.5 + i * 0.1 }}
                        >
                          <span className={item.highlight ? 'text-white' : 'text-[#5a8a6a]'}>✓</span>
                          {detail}
                        </motion.li>
                      ))}
                    </ul>

                    {/* Icon Button */}
                    <motion.div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${
                        item.highlight ? 'bg-white/20 text-white' : 'bg-white border-2 border-[#2a3a32] text-[#2a3a32]'
                      }`}
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Hover overlay effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-[#2a3a32]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating Animated Elements */}
        <motion.div
          className="absolute top-1/4 left-10 w-16 h-16 rounded-full bg-[#f4e8a8] opacity-20 blur-xl"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-20 w-20 h-20 rounded-full bg-[#4a8fff] opacity-20 blur-xl"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 7, repeat: Infinity, delay: 1 }}
        />

        {/* Decorative doodles */}
        <motion.svg
          className="absolute top-1/3 right-12 w-24 h-24 text-[#5a8a6a] opacity-30 hidden lg:block"
          viewBox="0 0 100 100"
          initial={{ opacity: 0, rotate: 45 }}
          whileInView={{ opacity: 0.3, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          <motion.circle
            cx="50"
            cy="50"
            r="25"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 1.2 }}
          />
          <motion.circle
            cx="50"
            cy="50"
            r="15"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, delay: 1.5 }}
          />
        </motion.svg>

        {/* Additional scattered doodles */}
        <motion.svg
          className="absolute top-20 left-1/3 w-16 h-16 text-[#f4e8a8] opacity-25 hidden md:block"
          viewBox="0 0 100 100"
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          <motion.path
            d="M 30 30 L 70 30 L 70 70 L 30 70 Z"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.svg>

        <motion.svg
          className="absolute bottom-32 left-16 w-20 h-20 text-[#4a8fff] opacity-20 hidden lg:block"
          viewBox="0 0 100 100"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.2, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.path
            d="M 20 50 Q 50 20, 80 50 Q 50 80, 20 50"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 3, delay: 1 }}
          />
        </motion.svg>
      </section>

      {/* Event Highlight Section */}
      <section className="relative bg-[#2a3a32] py-20 px-6 overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-[#4a8fff] rounded-full opacity-10"
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-64 h-64 bg-[#5a8a6a] rounded-full opacity-10"
          animate={{ scale: [1, 1.3, 1], x: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              <div className="w-24 h-24 bg-[#f4e8a8] rounded-full flex items-center justify-center text-5xl">
                🎉
              </div>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              The Culmination
            </h2>
            <p className="text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              October 23-25, 2025 at Katara Cultural Village
            </p>
            <motion.div
              className="inline-block bg-[#5a8a6a] text-white px-10 py-5 rounded-full font-bold text-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register for the Event
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Seminars and Workshops */}
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
              Seminars{" "}
              <span className="relative inline-block">
                & Workshops
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-3 bg-[#f4e8a8]"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </span>
            </h2>
            <p className="text-xl text-[#2a3a32]/70 max-w-3xl mx-auto">
              Comprehensive training programs designed to empower and equip youth with essential skills
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workshops.map((workshop, index) => (
              <motion.div
                key={workshop.title}
                className="bg-white rounded-3xl p-8 shadow-lg text-center relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <motion.div
                  className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10"
                  style={{ backgroundColor: workshop.color }}
                  animate={{ scale: [1, 1.2, 1], rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, delay: index * 0.5 }}
                />

                <motion.div
                  className="text-6xl mb-4 relative z-10"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                >
                  {workshop.icon}
                </motion.div>
                <h3 className="text-2xl font-black text-[#2a3a32] relative z-10">
                  {workshop.title}
                </h3>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xl text-[#2a3a32]/70 max-w-4xl mx-auto leading-relaxed">
              The project includes comprehensive training on project management, communication, presentation skills, sales training, law and data protection, personal development, and much more to prepare youth for future success.
            </p>
          </motion.div>
        </div>

        {/* Enhanced Floating Doodles */}
        <motion.svg
          className="absolute bottom-10 right-10 w-32 h-32 text-[#5a8a6a] opacity-20"
          viewBox="0 0 100 100"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <motion.path
            d="M 50 20 L 60 40 L 80 40 L 65 55 L 70 75 L 50 60 L 30 75 L 35 55 L 20 40 L 40 40 Z"
            fill="currentColor"
          />
        </motion.svg>

        {/* Additional workshop section doodles */}
        <motion.svg
          className="absolute top-10 left-10 w-24 h-24 text-[#f4e8a8] opacity-30 hidden lg:block"
          viewBox="0 0 100 100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.3, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.path
            d="M 25 50 Q 50 25, 75 50 Q 50 75, 25 50"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.8 }}
          />
          <motion.circle
            cx="50"
            cy="50"
            r="8"
            fill="currentColor"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.svg>

        <motion.svg
          className="absolute top-1/3 left-1/4 w-16 h-16 text-[#4a8fff] opacity-25 hidden md:block"
          viewBox="0 0 100 100"
          animate={{ 
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <motion.path
            d="M 50 10 L 90 50 L 50 90 L 10 50 Z"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </motion.svg>

        {/* Scattered small circles */}
        <motion.div
          className="absolute top-16 right-1/3 w-4 h-4 rounded-full bg-[#5a8a6a] opacity-30"
          animate={{
            y: [0, -10, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        
        <motion.div
          className="absolute bottom-20 left-1/3 w-6 h-6 rounded-full bg-[#f4e8a8] opacity-40"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />

        <motion.div
          className="absolute top-2/3 right-16 w-3 h-3 rounded-full bg-[#4a8fff] opacity-50"
          animate={{
            x: [0, 10, 0],
            y: [0, -5, 0]
          }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
        />
      </section>

      <Footer />
    </motion.main>
  )
}
