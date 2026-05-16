"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Home", path: "/", external: false },
    { name: "About", path: "/about", external: false },
    { name: "JADOO", path: "/jadoo", external: true },
    { name: "Target Audience", path: "/target-audience", external: false },
  ]

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/40 bg-[#fff8ee]/90 backdrop-blur-xl shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-6 py-3">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" aria-label="Y.O.U.T.H. Home">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-pointer"
            >
              <img
                src="/youth-wordmark.png"
                alt="Y.O.U.T.H. – You Own Unlimited Talent & Hope"
                className="h-12 md:h-16 w-auto object-contain"
              />
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => {
              const active = pathname === item.path

              return (
                <Link
                  key={item.name}
                  href={item.path}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                >
                  <motion.div
                    className={`relative text-sm font-semibold tracking-wide transition-colors cursor-pointer ${
                      active ? "text-[#111827]" : "text-[#314238] hover:text-[#111827]"
                    }`}
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                  >
                    {item.name}
                    <span
                      className={`absolute -bottom-2 left-0 h-0.5 rounded-full bg-gradient-to-r from-[#ff7a18] via-[#dd1367] to-[#0a97d9] transition-all duration-300 ${
                        active ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </motion.div>
                </Link>
              )
            })}
          </div>

          <Link href="mailto:info@mapsinternational.net">
            <motion.button
              className="hidden md:block px-6 py-3 rounded-full bg-[#1f342c] text-white font-bold shadow-md hover:bg-[#0f1f19] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in touch
            </motion.button>
          </Link>

          <button
            className="md:hidden text-[#1f342c]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <motion.div
            className="md:hidden mt-4 pb-5 space-y-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
              >
                <div
                  className={`block font-semibold transition-colors ${
                    pathname === item.path ? "text-[#111827]" : "text-[#314238]"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </div>
              </Link>
            ))}

            <Link href="mailto:info@mapsinternational.net">
              <button className="w-full px-6 py-3 rounded-full bg-[#1f342c] text-white font-bold">
                Get in touch
              </button>
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
