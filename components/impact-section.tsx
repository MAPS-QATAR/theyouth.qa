"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

const stats = [
  { value: 500, label: "Young Innovators", suffix: "+" },
  { value: 50, label: "Workshops", suffix: "+" },
  { value: 20, label: "Mentors", suffix: "+" },
  { value: 10, label: "Programs", suffix: "+" }
]

const testimonials = [
  {
    quote: "The Youth.qa project transformed my perspective on innovation. I learned to think bigger and act bolder.",
    author: "Amira K.",
    role: "Startup Founder",
    color: "#5a8a6a"
  },
  {
    quote: "Through art and culture programs, I discovered my voice and learned to express my heritage proudly.",
    author: "Hassan M.",
    role: "Digital Artist",
    color: "#4a8fff"
  },
  {
    quote: "The mentorship I received helped me launch my first tech project. This community changed my life.",
    author: "Sara A.",
    role: "Tech Entrepreneur",
    color: "#f4e8a8"
  }
]

// Counter component with animation
function AnimatedCounter({ value, suffix = "", duration = 2, isInView }: { value: number; suffix?: string; duration?: number; isInView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * value))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(value)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [value, duration, isInView])

  return (
    <span>
      {count}{suffix}
    </span>
  )
}

export default function ImpactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  return (
    <section ref={ref} className="relative py-24 px-6 bg-gradient-to-br from-[#e8ded2] via-white to-[#e8ded2] overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-20 w-64 h-64 rounded-full bg-[#5a8a6a] opacity-10 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      
      <motion.div
        className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-[#4a8fff] opacity-10 blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          x: [0, -40, 0],
          y: [0, 40, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, delay: 2 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Stats Section */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12 relative">
            {/* Decorative doodles around title */}
            <motion.svg
              className="absolute -top-8 left-1/4 w-20 h-20 text-[#4a8fff] opacity-30"
              viewBox="0 0 100 100"
              initial={{ opacity: 0, rotate: -45 }}
              animate={isInView ? { opacity: 0.3, rotate: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <motion.path
                d="M 30 50 L 50 30 L 70 50 L 50 70 Z"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.4 }}
              />
            </motion.svg>

            <motion.svg
              className="absolute -top-6 right-1/4 w-16 h-16 text-[#5a8a6a] opacity-30"
              viewBox="0 0 100 100"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 0.3, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <motion.circle
                cx="50"
                cy="50"
                r="20"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.5 }}
              />
            </motion.svg>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-black text-[#2a3a32] mb-4 inline-block relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              Our Impact
              {/* Yellow underline highlight */}
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-3 bg-[#f4e8a8] -z-10 rounded-full"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </motion.h2>
            <motion.p
              className="text-xl text-[#4a5a52]"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Empowering youth across the region
            </motion.p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Decorative elements around cards */}
                {index === 0 && (
                  <motion.svg
                    className="absolute -top-4 -left-4 w-12 h-12 text-[#4a8fff] opacity-40"
                    viewBox="0 0 100 100"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <path d="M 50 20 L 60 40 L 80 45 L 65 60 L 68 80 L 50 70 L 32 80 L 35 60 L 20 45 L 40 40 Z" fill="currentColor" />
                  </motion.svg>
                )}
                {index === 1 && (
                  <motion.svg
                    className="absolute -top-2 -right-2 w-10 h-10 text-[#5a8a6a] opacity-40"
                    viewBox="0 0 100 100"
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <circle cx="50" cy="50" r="15" fill="currentColor" />
                  </motion.svg>
                )}
                {index === 2 && (
                  <motion.svg
                    className="absolute -bottom-2 -left-2 w-10 h-10 text-[#f4e8a8] opacity-60"
                    viewBox="0 0 100 100"
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <path d="M 50 10 L 90 90 L 10 90 Z" fill="currentColor" />
                  </motion.svg>
                )}

                <motion.div
                  className="inline-block p-8 bg-white rounded-3xl shadow-lg mb-4 relative overflow-hidden"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#4a8fff]/5 to-[#5a8a6a]/5"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  
                  <motion.div
                    className="text-5xl md:text-6xl font-black text-[#2a3a32] relative z-10"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                  >
                    <AnimatedCounter 
                      value={stat.value} 
                      suffix={stat.suffix}
                      duration={2}
                      isInView={isInView}
                    />
                  </motion.div>
                </motion.div>
                <div className="text-lg font-bold text-[#4a5a52]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-12 relative">
            {/* Decorative icon above title */}
            <motion.div
              className="inline-block mb-4"
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
            >
              <div className="w-16 h-16 mx-auto">
                <svg viewBox="0 0 100 100" className="w-full h-full text-[#4a8fff]">
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

            <motion.h3
              className="text-3xl md:text-4xl lg:text-5xl font-black text-[#2a3a32] mb-4 inline-block relative"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Stories of Transformation
              {/* Green underline highlight */}
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-3 bg-[#5a8a6a] opacity-30 -z-10 rounded-full"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
              />
            </motion.h3>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative max-w-4xl mx-auto">
            {/* Main Testimonial Card */}
            <motion.div
              key={activeTestimonial}
              className="bg-[#4a5a52] rounded-3xl p-12 md:p-16 text-center shadow-2xl"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              {/* Quote Icon */}
              <motion.div
                className="text-6xl md:text-7xl text-[#e8ded2] opacity-30 mb-6"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                ❝
              </motion.div>

              {/* Quote */}
              <p className="text-xl md:text-2xl text-[#e8ded2] mb-8 leading-relaxed italic">
                {testimonials[activeTestimonial].quote}
              </p>

              {/* Author */}
              <motion.div
                className="inline-block"
                whileHover={{ scale: 1.05 }}
              >
                <div className="font-bold text-2xl text-white mb-2">
                  {testimonials[activeTestimonial].author}
                </div>
                <div
                  className="text-lg px-6 py-2 rounded-full inline-block"
                  style={{ backgroundColor: testimonials[activeTestimonial].color }}
                >
                  <span className="text-[#2a3a32] font-medium">
                    {testimonials[activeTestimonial].role}
                  </span>
                </div>
              </motion.div>

              {/* Decorative Doodles */}
              <motion.svg
                className="absolute top-8 left-8 w-16 h-16 text-[#e8ded2] opacity-20"
                viewBox="0 0 100 100"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="3" fill="none" />
                <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="2" fill="none" />
              </motion.svg>

              <motion.svg
                className="absolute bottom-8 right-8 w-20 h-20 text-[#e8ded2] opacity-20"
                viewBox="0 0 100 100"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <path
                  d="M 30 50 L 50 30 L 70 50 L 50 70 Z"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                />
              </motion.svg>
            </motion.div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeTestimonial === index
                      ? "bg-[#4a5a52] w-8"
                      : "bg-[#4a5a52]/30"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="px-12 py-5 bg-[#2a3a32] text-white rounded-full font-bold text-lg hover:bg-[#4a5a52] transition-colors shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Share Your Story
          </motion.button>
        </motion.div>
      </div>

      {/* Animated Doodles */}
      <motion.svg
        className="absolute top-1/4 right-10 w-32 h-32 text-[#5a8a6a] opacity-20 hidden lg:block"
        viewBox="0 0 100 100"
        initial={{ opacity: 0, rotate: -20 }}
        animate={isInView ? { opacity: 0.2, rotate: 0 } : {}}
        transition={{ duration: 1.5, delay: 1 }}
      >
        <motion.path
          d="M 20 50 Q 40 20, 60 50 Q 80 80, 100 50"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 3, delay: 1.2 }}
        />
      </motion.svg>

      <motion.svg
        className="absolute bottom-1/4 left-10 w-28 h-28 text-[#4a8fff] opacity-20 hidden lg:block"
        viewBox="0 0 100 100"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 0.2, scale: 1 } : {}}
        transition={{ duration: 1.5, delay: 1.2 }}
      >
        <motion.path
          d="M 30 30 L 70 30 L 70 70 L 30 70 Z"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 2.5, delay: 1.5 }}
        />
        <motion.circle
          cx="50"
          cy="50"
          r="15"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 1, delay: 2 }}
        />
      </motion.svg>

      {/* Additional doodles */}
      <motion.svg
        className="absolute top-1/3 left-1/4 w-24 h-24 text-[#f4e8a8] opacity-30 hidden lg:block"
        viewBox="0 0 100 100"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <motion.circle
          cx="50"
          cy="50"
          r="20"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          strokeDasharray="5,5"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 2, delay: 1.8 }}
        />
      </motion.svg>

      <motion.svg
        className="absolute bottom-1/3 right-1/4 w-20 h-20 text-[#4a8fff] opacity-30 hidden lg:block"
        viewBox="0 0 100 100"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <motion.path
          d="M 50 10 L 90 50 L 50 90 L 10 50 Z"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 2, delay: 2 }}
        />
      </motion.svg>

      <motion.svg
        className="absolute top-2/3 left-20 w-16 h-16 text-[#5a8a6a] opacity-40 hidden lg:block"
        viewBox="0 0 100 100"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <motion.path
          d="M 30 50 L 50 30 M 70 50 L 50 30 M 50 70 L 50 30"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.5, delay: 2.2 }}
        />
      </motion.svg>

      <motion.svg
        className="absolute top-1/2 right-1/3 w-14 h-14 text-[#f4e8a8] opacity-50 hidden xl:block"
        viewBox="0 0 100 100"
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <motion.path
          d="M 50 20 L 80 80 L 20 80 Z"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.5, delay: 2.5 }}
        />
      </motion.svg>
    </section>
  )
}
