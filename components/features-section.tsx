"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect } from "react"

const floatingCards = [
  {
    type: "video",
    src: "/lady-dancing.mp4",
    label: "Creative Expression",
    color: "#4a8fff",
    rotation: -8,
    position: { top: "10%", left: "5%" }
  },
  {
    type: "image",
    src: "/high-angle-artist-chair-painting_23-2150170506.jpg",
    label: "Art & Culture",
    color: "#2a3a32",
    rotation: 5,
    position: { top: "45%", left: "15%" }
  },
  {
    type: "video",
    src: "/6260_Wall_Painting_1920x1080.mp4",
    label: "Workshops & Training",
    color: "#f4e8a8",
    rotation: -3,
    position: { top: "70%", left: "8%" }
  },
  {
    type: "badge",
    label: "Youth Empowerment & Leadership",
    avatar: "/art-supply-illustration.jpg",
    color: "#5a8a6a",
    rotation: 10,
    position: { bottom: "15%", left: "10%" }
  }
]

export default function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  // Scroll-based animation for the floating card
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"]
  })

  const cardOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const cardX = useTransform(scrollYProgress, [0, 0.5], [0, -600])
  const cardY = useTransform(scrollYProgress, [0, 0.5], [0, -300])
  const cardRotate = useTransform(scrollYProgress, [0, 0.5], [8, -8])

  useEffect(() => {
    const floatingCard = document.getElementById('floating-transition-card')
    if (!floatingCard) return

    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest > 0.5) {
        floatingCard.style.display = 'none'
      } else {
        floatingCard.style.display = 'block'
      }
    })

    return () => unsubscribe()
  }, [scrollYProgress])

  return (
    <section ref={ref} className="relative py-32 px-6 bg-[#e8ded2] overflow-hidden min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r="1" fill="#2a3a32" />
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      {/* Animated Sparkles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        >
          <svg viewBox="0 0 24 24" fill="#f4e8a8">
            <path d="M12 0l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z" />
          </svg>
        </motion.div>
      ))}

      {/* Scroll-animated card from hero section */}
      <motion.div
        className="absolute hidden lg:block"
        style={{
          top: "35%",
          right: "35%",
          opacity: cardOpacity,
          x: cardX,
          y: cardY,
          rotate: cardRotate,
        }}
      >
        <motion.div
          className="w-48 h-48 rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/sticky-note.mp4" type="video/mp4" />
          </video>
          <motion.div
            className="absolute top-3 left-3 px-3 py-1 rounded-full text-sm font-bold shadow-lg bg-[#f4e8a8]"
          >
            <span className="text-[#2a3a32]">Creative Space</span>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Floating Cards */}
          <div className="relative h-[600px] hidden lg:block">
            {/* Animated Doodle Lines */}
            <motion.svg
              className="absolute top-0 right-0 w-32 h-32 text-[#5a8a6a] opacity-40"
              viewBox="0 0 100 100"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 0.4 } : {}}
              transition={{ duration: 1 }}
            >
              <motion.path
                d="M 20 20 Q 40 10, 60 20 Q 80 30, 90 20"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 2, delay: 0.5 }}
              />
              <motion.path
                d="M 10 50 Q 30 40, 50 50"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.8 }}
              />
            </motion.svg>

            <motion.svg
              className="absolute bottom-20 right-10 w-24 h-24 text-[#4a8fff] opacity-40"
              viewBox="0 0 100 100"
              initial={{ opacity: 0, rotate: -20 }}
              animate={isInView ? { opacity: 0.4, rotate: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <motion.circle
                cx="50"
                cy="50"
                r="30"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 2, delay: 0.7 }}
              />
              <motion.circle
                cx="50"
                cy="50"
                r="20"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.8, delay: 1 }}
              />
            </motion.svg>

            {/* Floating Cards */}
            {floatingCards.map((card, index) => (
              <motion.div
                key={index}
                className="absolute"
                style={{
                  ...card.position,
                  rotate: card.rotation,
                }}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={isInView ? { 
                  opacity: 1, 
                  scale: 1, 
                  y: 0,
                } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100 
                }}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: 0,
                  zIndex: 50,
                  transition: { duration: 0.3 }
                }}
              >
                {card.type === "video" ? (
                  <motion.div
                    className="w-48 h-48 rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3 + index,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={card.src} type="video/mp4" />
                    </video>
                    <motion.div
                      className="absolute top-3 left-3 px-3 py-1 rounded-full text-white text-sm font-bold shadow-lg"
                      style={{ backgroundColor: card.color }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {card.label}
                    </motion.div>
                  </motion.div>
                ) : card.type === "image" ? (
                  <motion.div
                    className="w-56 h-56 rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
                    animate={{
                      y: [0, -15, 0],
                    }}
                    transition={{
                      duration: 4 + index,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <img
                      src={card.src}
                      alt={card.label}
                      className="w-full h-full object-cover"
                    />
                    <motion.div
                      className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-white text-sm font-bold shadow-lg"
                      style={{ backgroundColor: card.color }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {card.label}
                    </motion.div>
                  </motion.div>
                ) : (
                  <motion.div
                    className="px-6 py-3 rounded-full shadow-2xl flex items-center gap-3"
                    style={{ backgroundColor: card.color }}
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                      <img
                        src={card.avatar}
                        alt="Avatar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-white text-sm font-bold max-w-[150px]">
                      {card.label}
                    </span>
                  </motion.div>
                )}

                {/* Sparkle effect on hover */}
                <motion.div
                  className="absolute -top-2 -right-2 w-4 h-4"
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg viewBox="0 0 24 24" fill="#f4e8a8">
                    <path d="M12 0l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z" />
                  </svg>
                </motion.div>
              </motion.div>
            ))}

            {/* Decorative Icon */}
            <motion.div
              className="absolute top-1/2 right-0 transform -translate-y-1/2"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.div
                className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="#2a3a32" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Doodle beside heading */}
            <motion.svg
              className="w-16 h-16 mb-4 text-[#5a8a6a] opacity-60"
              viewBox="0 0 100 100"
              initial={{ opacity: 0, rotate: -20 }}
              animate={isInView ? { opacity: 0.6, rotate: 0 } : {}}
              transition={{ duration: 1 }}
            >
              <motion.path
                d="M 30 50 Q 50 30, 70 50"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
              <motion.path
                d="M 20 70 Q 40 60, 60 70"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.7 }}
              />
            </motion.svg>

            {/* Icon */}
            <motion.div
              className="inline-block mb-6"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-white border-2 border-[#2a3a32] flex items-center justify-center">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#2a3a32" strokeWidth="2">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 1v6m0 6v6M1 12h6m6 0h6" />
                </svg>
              </div>
            </motion.div>

            {/* Heading with highlight */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#2a3a32] mb-6 leading-tight">
              <span className="inline-block">About </span>
              <span className="relative inline-block">
                <span className="relative z-10">The Youth.qa</span>
                <motion.span
                  className="absolute bottom-2 left-0 w-full h-4 bg-[#f4e8a8] -z-10"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  style={{ transformOrigin: "left" }}
                />
              </span>
            </h2>

            {/* Description */}
            <div className="space-y-4 text-lg text-[#4a5a52] mb-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                THE Y.O.U.T.H™ is the dynamic youth wing of MAPS International W.L.L., created to inspire, empower, and shape the next generation of young leaders, creators, and innovators.
Built on the vision of “You Own Unlimited Talents & Hope,” the platform encourages youth to explore creativity, innovation, sustainability, culture, education, leadership, and social impact.

              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                Through workshops, exhibitions, festivals, space science initiatives, SDG programs, creative learning experiences, and global collaborations, THE Y.O.U.T.H™ provides young minds with opportunities to discover their potential and transform ideas into meaningful action.
It is a movement where imagination meets purpose, and youth become the creators of a brighter future.
              </motion.p>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <motion.button
                className="px-8 py-4 bg-[#2a3a32] text-white rounded-full font-bold text-lg hover:bg-[#4a5a52] transition-colors shadow-xl flex items-center gap-3"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                Register Now
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animated Corner Elements */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 rounded-full bg-[#5a8a6a] opacity-10 blur-3xl"
        animate={{
          scale: [1, 1.5, 1],
          x: [0, 20, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      <motion.div
        className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-[#4a8fff] opacity-10 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
    </section>
  )
}
