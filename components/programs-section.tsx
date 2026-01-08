"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

const programs = [
  {
    lessons: "Day 1",
    title: "Innovation & Startups",
    description: "Explore entrepreneurship and innovative thinking for young leaders",
    image: "/art-supply-illustration.jpg",
    color: "#10b981",
    featured: true
  },
  {
    lessons: "Day 2",
    title: "Art & Culture",
    description: "Express creativity through painting, photography, and cultural activities",
    image: "/high-angle-artist-chair-painting_23-2150170506.jpg",
    color: "#e8ded2",
    featured: false
  },
  {
    lessons: "Day 2",
    title: "Fashion & Design",
    description: "Discover fashion trends and design principles for creative expression",
    image: "/fashion-design.mp4",
    type: "video",
    color: "#e8ded2",
    featured: false
  },
  {
    lessons: "Day 3",
    title: "AI & Technology",
    description: "Learn about artificial intelligence and emerging technologies",
    image: "/6260_Wall_Painting_1920x1080.mp4",
    type: "video",
    color: "#e8ded2",
    featured: false
  },
  {
    lessons: "Workshop",
    title: "Youth Leadership",
    description: "Develop leadership skills and social responsibility for the future",
    image: "/sticky-note.mp4",
    type: "video",
    color: "#e8ded2",
    featured: false
  },
  {
    lessons: "Workshop",
    title: "Creative Expression",
    description: "Unleash your talents through various forms of artistic expression",
    image: "/art-supply-illustration.jpg",
    color: "#e8ded2",
    featured: false
  }
]

export default function ProgramsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section ref={ref} className="relative py-24 px-6 bg-[#4a5a52] overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 opacity-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/6260_Wall_Painting_1920x1080.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Animated Doodles around title */}
          <motion.svg
            className="absolute -top-12 left-1/4 w-20 h-20 text-[#e8ded2] opacity-40"
            viewBox="0 0 100 100"
            initial={{ opacity: 0, rotate: -20 }}
            animate={isInView ? { opacity: 0.4, rotate: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.path
              d="M 20 50 Q 40 30, 60 50 Q 80 70, 100 50"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 2, delay: 0.5 }}
            />
          </motion.svg>

          {/* Decorative icon above title */}
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          >
            <div className="w-16 h-16 mx-auto">
              <svg viewBox="0 0 100 100" className="w-full h-full text-[#f4e8a8]">
                <motion.path
                  d="M 50 20 L 60 40 L 80 45 L 65 60 L 68 80 L 50 70 L 32 80 L 35 60 L 20 45 L 40 40 Z"
                  fill="currentColor"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <circle cx="50" cy="50" r="8" fill="#2a3a32" />
              </svg>
            </div>
          </motion.div>

          <motion.svg
            className="absolute -top-8 right-1/4 w-16 h-16 text-[#e8ded2] opacity-40"
            viewBox="0 0 100 100"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 0.4, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.path
              d="M 30 30 L 40 20 M 60 20 L 70 30 M 40 50 L 60 50 M 30 70 L 40 60 M 60 60 L 70 70"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.7 }}
            />
          </motion.svg>
          
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-black text-[#e8ded2] mb-2 inline-block relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Event Programs
            {/* Yellow underline highlight */}
            <motion.div
              className="absolute -bottom-1 left-0 right-0 h-3 bg-[#f4e8a8] -z-10 rounded-full"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
          </motion.h2>
        </motion.div>

        {/* Programs Grid - 3 columns on large screens, 2 on medium, 1 on small */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                className={`relative ${
                  program.featured ? 'bg-[#4a8fff]' : 'bg-[#e8ded2]'
                } rounded-3xl overflow-hidden shadow-xl h-full`}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Image/Video Container */}
                <div className="relative h-48 overflow-hidden rounded-t-3xl">
                  {program.type === 'video' ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={program.image} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  )}
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Day/Workshop label */}
                  <motion.div
                    className={`text-sm font-semibold mb-3 ${
                      program.featured ? 'text-white/90' : 'text-[#4a5a52]'
                    }`}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  >
                    {program.lessons}
                  </motion.div>

                  {/* Title */}
                  <h3 className={`text-2xl font-bold mb-3 ${
                    program.featured ? 'text-white' : 'text-[#2a3a32]'
                  }`}>
                    {program.title}
                  </h3>

                  {/* Expandable Description */}
                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.p
                        className={`text-sm mb-4 ${
                          program.featured ? 'text-white/80' : 'text-[#4a5a52]'
                        }`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {program.description}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  {/* Icon Button */}
                  <motion.button
                    onClick={() => toggleExpanded(index)}
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${
                      program.featured ? 'bg-black text-white' : 'bg-white border-2 border-[#2a3a32] text-[#2a3a32]'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <motion.svg 
                      className="w-5 h-5" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth={2}
                      animate={{ rotate: expandedIndex === index ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </motion.button>
                </div>

                {/* Hover overlay effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-[#2a3a32]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="px-12 py-4 bg-black text-white rounded-full font-bold text-lg hover:bg-[#2a3a32] transition-colors shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Full Schedule
          </motion.button>
        </motion.div>
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
        className="absolute top-1/3 right-12 w-24 h-24 text-[#f4e8a8] opacity-30 hidden lg:block"
        viewBox="0 0 100 100"
        initial={{ opacity: 0, rotate: 45 }}
        animate={isInView ? { opacity: 0.3, rotate: 0 } : {}}
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
          animate={isInView ? { pathLength: 1 } : {}}
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
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.8, delay: 1.5 }}
        />
      </motion.svg>
    </section>
  )
}

