"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function EventSchedule() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const schedule = [
    {
      day: "Day 1",
      date: "October 23, 2025",
      theme: "Innovation & Startups",
      emoji: "💡",
      activities: [
        "Opening Ceremony",
        "Innovation Workshops",
        "Startup Pitch Sessions",
        "Networking Events"
      ],
      color: "#4a8fff",
      video: "/ideas.mp4"
    },
    {
      day: "Day 2",
      date: "October 24, 2025",
      theme: "Art, Culture & Fashion",
      emoji: "🎨",
      activities: [
        "Art Exhibitions",
        "Fashion Showcases",
        "Cultural Performances",
        "Creative Workshops"
      ],
      color: "#ff6b9d",
      video: "/6260_Wall_Painting_1920x1080.mp4"
    },
    {
      day: "Day 3",
      date: "October 25, 2025",
      theme: "AI & Technology",
      emoji: "🤖",
      activities: [
        "Tech Demonstrations",
        "AI Workshops",
        "Awards Ceremony",
        "Closing Celebration"
      ],
      color: "#5a8a6a",
      video: "/ai-tech.mp4"
    }
  ]

  return (
    <section ref={ref} className="relative bg-[#2a3a32] py-20 px-6 overflow-hidden">
      {/* Animated Background Sparkles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        >
          <svg viewBox="0 0 24 24" fill="#f4e8a8">
            <path d="M12 0l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z" />
          </svg>
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header with Playful Animations */}
        <motion.div
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Floating Doodles around title */}
          <motion.svg
            className="absolute -top-16 left-1/4 w-24 h-24 text-[#f4e8a8] opacity-40"
            viewBox="0 0 100 100"
            initial={{ opacity: 0, rotate: -45 }}
            animate={isInView ? { opacity: 0.4, rotate: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.path
              d="M 20 50 Q 40 20, 60 50 Q 80 80, 100 50"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 2, delay: 0.5 }}
            />
          </motion.svg>

          <motion.svg
            className="absolute -top-12 right-1/4 w-20 h-20 text-[#4a8fff] opacity-40"
            viewBox="0 0 100 100"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 0.4, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 2, delay: 0.6 }}
            />
          </motion.svg>

          {/* Bouncing Calendar Icon */}
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, type: "spring", bounce: 0.6 }}
          >
            <motion.div
              className="w-24 h-24 bg-[#f4e8a8] rounded-3xl flex items-center justify-center text-5xl shadow-2xl"
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              📅
            </motion.div>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-black text-white mb-4 inline-block relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Event{" "}
            <span className="relative inline-block">
              Schedule
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-4 bg-[#f4e8a8] -z-10 rounded-full"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
              />
              {/* Sparkle on title */}
              <motion.svg
                className="absolute -top-8 -right-8 w-8 h-8 text-[#4a8fff]"
                viewBox="0 0 24 24"
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9, type: "spring" }}
              >
                <motion.path
                  d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z"
                  fill="currentColor"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </motion.svg>
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-white/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Three transformative days of creativity, innovation, and empowerment! 🌟
          </motion.p>
        </motion.div>

        {/* Schedule Cards Grid - Using Programs Section Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {schedule.map((day, index) => (
            <motion.div
              key={day.day}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50, rotate: index % 2 === 0 ? -5 : 5 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                bounce: 0.4
              }}
            >
              <motion.div
                className="relative bg-[#e8ded2] rounded-3xl overflow-hidden shadow-2xl h-full"
                whileHover={{ 
                  y: -15, 
                  scale: 1.05,
                  rotate: index % 2 === 0 ? 3 : -3
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Video Background with Emoji Overlay */}
                <div className="relative h-56 overflow-hidden rounded-t-3xl">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  >
                    <source src={day.video} type="video/mp4" />
                  </video>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
                  
                  {/* Floating Emoji Badge */}
                  <motion.div
                    className="absolute top-4 right-4 w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-xl"
                    style={{ backgroundColor: day.color }}
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    {day.emoji}
                  </motion.div>

                  {/* Day Badge */}
                  <motion.div
                    className="absolute top-4 left-4 px-5 py-2 rounded-full font-black text-white text-lg shadow-xl"
                    style={{ backgroundColor: day.color }}
                    initial={{ scale: 0, x: -50 }}
                    animate={isInView ? { scale: 1, x: 0 } : {}}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.2 + 0.5,
                      type: "spring"
                    }}
                  >
                    {day.day}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Date */}
                  <motion.div
                    className="text-sm text-[#4a5a52] mb-2 font-medium"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                  >
                    📆 {day.date}
                  </motion.div>

                  {/* Theme Title */}
                  <motion.h3
                    className="text-2xl font-black text-[#2a3a32] mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.7 }}
                  >
                    {day.theme}
                  </motion.h3>

                  {/* Activities List */}
                  <ul className="space-y-2 mb-6">
                    {day.activities.map((activity, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-2 text-[#2a3a32]/80 text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ 
                          duration: 0.4, 
                          delay: index * 0.2 + 0.8 + i * 0.1 
                        }}
                      >
                        <motion.span 
                          className="text-[#5a8a6a] mt-0.5 text-lg"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            delay: i * 0.2
                          }}
                        >
                          ✓
                        </motion.span>
                        <span>{activity}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Arrow Button */}
                  <motion.div
                    className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white border-4 text-[#2a3a32] shadow-lg"
                    style={{ borderColor: day.color }}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 90,
                      backgroundColor: day.color,
                      color: "#fff"
                    }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${day.color}20 0%, transparent 70%)`
                  }}
                />

                {/* Floating Sparkles on Hover */}
                <motion.div
                  className="absolute top-2 right-2 w-4 h-4 opacity-0 group-hover:opacity-100"
                  animate={{
                    y: [-5, -15, -5],
                    rotate: [0, 360]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <svg viewBox="0 0 24 24" fill={day.color}>
                    <path d="M12 0l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z" />
                  </svg>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Event Details Cards - Playful Style */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { icon: "📍", title: "Location", detail: "Katara Cultural Village, Qatar", color: "#10b981" },
            { icon: "🏢", title: "Organized By", detail: "MAPS International W.L.L", color: "#ff6b9d" },
            { icon: "🎯", title: "Target Age", detail: "13-21 Years", color: "#22c55e" }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="relative bg-white rounded-3xl p-6 text-center shadow-xl overflow-hidden group"
              initial={{ opacity: 0, scale: 0.8, rotate: i % 2 === 0 ? -10 : 10 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.9 + i * 0.15,
                type: "spring"
              }}
              whileHover={{ 
                scale: 1.1, 
                rotate: i % 2 === 0 ? 5 : -5,
                y: -10
              }}
            >
              {/* Colored Circle Background */}
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10"
                style={{ backgroundColor: item.color }}
                animate={{ scale: [1, 1.3, 1], rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity }}
              />

              <motion.div
                className="relative text-5xl mb-3"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              >
                {item.icon}
              </motion.div>
              <h4 className="text-xl font-bold text-[#2a3a32] mb-2 relative z-10">
                {item.title}
              </h4>
              <p className="text-[#4a5a52] relative z-10">{item.detail}</p>

              {/* Sparkle Effect on Hover */}
              <motion.div
                className="absolute -top-2 -right-2 w-6 h-6 opacity-0 group-hover:opacity-100"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <svg viewBox="0 0 24 24" fill={item.color}>
                  <path d="M12 0l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z" />
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Large Floating Elements */}
      <motion.div
        className="absolute top-20 right-20 w-40 h-40 rounded-full bg-[#4a8fff]/10 blur-3xl"
        animate={{ 
          y: [0, -50, 0],
          x: [0, 30, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-[#ff6b9d]/10 blur-3xl"
        animate={{ 
          y: [0, 50, 0],
          x: [0, -30, 0],
          scale: [1, 1.4, 1]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-[#5a8a6a]/10 blur-2xl"
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Decorative Doodles */}
      <motion.svg
        className="absolute bottom-32 right-16 w-32 h-32 text-[#f4e8a8] opacity-30"
        viewBox="0 0 100 100"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <motion.path
          d="M 50 20 L 60 40 L 80 40 L 65 55 L 70 75 L 50 60 L 30 75 L 35 55 L 20 40 L 40 40 Z"
          fill="currentColor"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.svg>

      <motion.svg
        className="absolute top-40 left-16 w-24 h-24 text-[#4a8fff] opacity-30"
        viewBox="0 0 100 100"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <circle cx="50" cy="50" r="20" fill="currentColor" />
        <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="3" fill="none" />
      </motion.svg>
    </section>
  )
}
