"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

export default function GlobalLoader() {
  const [isLoading, setIsLoading] = useState(true)
  const [isNavigating, setIsNavigating] = useState(false)
  const pathname = usePathname()

  // Show loader on initial page load
  useEffect(() => {
    // Simulate minimum loading time to see the animation
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000) // Minimum 1 second to see the loader

    return () => clearTimeout(timer)
  }, [])

  // Show loader on route changes
  useEffect(() => {
    setIsNavigating(true)
    const timer = setTimeout(() => {
      setIsNavigating(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [pathname])

  const showLoader = isLoading || isNavigating

  return (
    <AnimatePresence mode="wait">
      {showLoader && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#4a5a52] overflow-hidden"
        >
          {/* Animated background blobs */}
          <motion.div
            className="absolute top-20 left-20 w-64 h-64 rounded-full bg-[#5a8a6a] opacity-20 blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          
          <motion.div
            className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-[#4a8fff] opacity-20 blur-3xl"
            animate={{
              scale: [1, 1.4, 1],
              x: [0, -40, 0],
              y: [0, 40, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          />

          <div className="relative z-10 text-center">
            {/* Main Logo Text */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-black text-[#e8ded2] mb-2">
                The Youth.qa
              </h1>
              <motion.div
                className="h-1 bg-[#f4e8a8] rounded-full mx-auto"
                initial={{ width: 0 }}
                animate={{ width: "200px" }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </motion.div>

            {/* Animated Doodle Loader */}
            <div className="relative w-32 h-32 mx-auto mb-8">
              {/* Central spinning circle */}
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="35"
                    stroke="#e8ded2"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="220"
                    initial={{ strokeDashoffset: 220 }}
                    animate={{ strokeDashoffset: [220, 0, 220] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </svg>
              </motion.div>

              {/* Orbiting stars */}
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: -360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <motion.div className="absolute top-0 left-1/2 -translate-x-1/2">
                  <svg className="w-6 h-6 text-[#f4e8a8]" viewBox="0 0 24 24">
                    <motion.path
                      d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z"
                      fill="currentColor"
                      animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </svg>
                </motion.div>
              </motion.div>

              {/* Orbiting dots */}
              {[0, 120, 240].map((angle, index) => (
                <motion.div
                  key={index}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    transformOrigin: "0 0",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.3,
                  }}
                >
                  <motion.div
                    className="w-4 h-4 rounded-full bg-[#4a8fff]"
                    style={{
                      transform: `rotate(${angle}deg) translateX(50px)`,
                    }}
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Loading Text */}
            <motion.p
              className="text-[#e8ded2] text-xl font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Loading...
            </motion.p>

            {/* Animated dots */}
            <div className="flex justify-center gap-2 mt-4">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-[#f4e8a8]"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>

            {/* Decorative doodles around */}
            <motion.svg
              className="absolute -top-20 -left-20 w-24 h-24 text-[#e8ded2] opacity-30"
              viewBox="0 0 100 100"
              initial={{ opacity: 0, rotate: -20 }}
              animate={{ opacity: 0.3, rotate: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.path
                d="M 20 50 Q 40 20, 60 50 Q 80 80, 100 50"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.svg>

            <motion.svg
              className="absolute -bottom-16 -right-16 w-20 h-20 text-[#e8ded2] opacity-30"
              viewBox="0 0 100 100"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.3, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <motion.path
                d="M 30 30 L 70 30 L 70 70 L 30 70 Z"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
              />
            </motion.svg>

            <motion.svg
              className="absolute top-32 right-20 w-16 h-16 text-[#5a8a6a] opacity-40 hidden md:block"
              viewBox="0 0 100 100"
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="3" fill="none" />
              <circle cx="50" cy="50" r="10" fill="currentColor" />
            </motion.svg>

            <motion.svg
              className="absolute bottom-32 left-20 w-14 h-14 text-[#4a8fff] opacity-40 hidden md:block"
              viewBox="0 0 100 100"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <path
                d="M 50 10 L 90 50 L 50 90 L 10 50 Z"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
              />
            </motion.svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
