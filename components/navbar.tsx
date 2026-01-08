"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Target Audience", path: "/target-audience" },
   // { name: "Timeline", path: "/timeline" },
  ]

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-[#e8ded2] shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="text-2xl md:text-3xl font-black text-[#2a3a32] cursor-pointer relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span className="relative inline-block">
                Y.O.U.T.H.
                <span className="relative inline-block">
                  qa
                  {/* Animated underline for .qa */}
                  <motion.span
                    className="absolute -bottom-1 left-0 right-0 h-1 bg-[#4a8fff] rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                  
                  {/* Small star doodle */}
                  <motion.svg
                    className="absolute -top-2 -right-3 w-4 h-4 text-[#f4e8a8]"
                    viewBox="0 0 100 100"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
                  >
                    <motion.path
                      d="M 50 20 L 60 40 L 80 45 L 65 60 L 68 80 L 50 70 L 32 80 L 35 60 L 20 45 L 40 40 Z"
                      fill="currentColor"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </motion.svg>

                  {/* Small circle doodle */}
                  <motion.svg
                    className="absolute -bottom-2 -left-2 w-3 h-3 text-[#5a8a6a]"
                    viewBox="0 0 100 100"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1, type: "spring" }}
                  >
                    <circle cx="50" cy="50" r="40" fill="currentColor" />
                  </motion.svg>

                  {/* Curved line doodle */}
                  <motion.svg
                    className="absolute -top-1 -left-4 w-5 h-5 text-[#4a8fff] opacity-60"
                    viewBox="0 0 100 100"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.6 }}
                    transition={{ duration: 1, delay: 0.9 }}
                  >
                    <motion.path
                      d="M 10 50 Q 30 20, 50 50"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </motion.svg>
                </span>
              </span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <Link key={item.name} href={item.path}>
                <motion.div
                  className={`text-[#2a3a32] font-medium hover:text-[#4a5a52] transition-colors relative group cursor-pointer ${
                    pathname === item.path ? 'text-[#4a5a52] font-bold' : ''
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-[#4a5a52] transition-all duration-300 ${
                    pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </motion.div>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            className="hidden md:block px-6 py-3 border-2 border-[#2a3a32] text-[#2a3a32] rounded-full font-bold hover:bg-[#2a3a32] hover:text-[#e8ded2] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Get in touch
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#2a3a32]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden mt-4 pb-4 space-y-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navItems.map((item) => (
              <Link key={item.name} href={item.path}>
                <div
                  className={`block text-[#2a3a32] font-medium hover:text-[#4a5a52] transition-colors cursor-pointer ${
                    pathname === item.path ? 'text-[#4a5a52] font-bold' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </div>
              </Link>
            ))}
            <button className="w-full px-6 py-3 border-2 border-[#2a3a32] text-[#2a3a32] rounded-full font-bold hover:bg-[#2a3a32] hover:text-[#e8ded2] transition-colors">
              Get in touch
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
