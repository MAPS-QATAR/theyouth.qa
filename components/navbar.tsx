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
      className="fixed left-0 right-0 top-0 z-50 px-4 pt-4"
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-7xl rounded-full border border-white/70 bg-[#fff8ee]/82 px-5 py-3 shadow-[0_18px_60px_rgba(30,47,40,0.12)] backdrop-blur-2xl md:px-6">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" aria-label="Y.O.U.T.H. Home">
            <motion.div
              whileHover={{ scale: 1.025 }}
              transition={{ type: "spring", stiffness: 260 }}
              className="flex items-center"
            >
              <img
                src="/youth-wordmark.png"
                alt="Y.O.U.T.H. – You Own Unlimited Talent & Hope"
                className="h-11 w-auto object-contain md:h-14"
              />
            </motion.div>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item, index) => {
              const active = pathname === item.path

              return (
                <Link
                  key={item.name}
                  href={item.path}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className="group"
                >
                  <motion.div
                    className={`relative text-sm font-black tracking-wide transition-colors ${
                      active ? "text-[#1e2f28]" : "text-[#42544b] hover:text-[#1e2f28]"
                    }`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: index * 0.07 }}
                  >
                    {item.name}
                    <span
                      className={`absolute -bottom-2 left-0 h-[3px] rounded-full bg-gradient-to-r from-[#ff7a18] via-[#dd1367] to-[#0a97d9] transition-all duration-300 ${
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
              className="hidden rounded-full bg-gradient-to-r from-[#1e2f28] to-[#314238] px-6 py-3 text-sm font-black text-white shadow-lg transition hover:shadow-xl md:block"
              whileHover={{ scale: 1.045 }}
              whileTap={{ scale: 0.96 }}
            >
              Get in touch
            </motion.button>
          </Link>

          <button
            className="rounded-full bg-white/70 p-2 text-[#1e2f28] shadow-sm md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <motion.div
            className="mt-4 space-y-4 rounded-[1.8rem] bg-white/70 p-5 shadow-sm md:hidden"
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
                  className={`block font-black ${
                    pathname === item.path ? "text-[#1e2f28]" : "text-[#42544b]"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </div>
              </Link>
            ))}

            <Link href="mailto:info@mapsinternational.net">
              <button className="w-full rounded-full bg-[#1e2f28] px-6 py-3 font-black text-white">
                Get in touch
              </button>
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
