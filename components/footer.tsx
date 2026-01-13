"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-[#10b981] text-[#2a3a32] overflow-hidden">
      {/* Contact Section - Beige Background */}
      <section className="relative bg-[#e8ded2] py-20 px-6 overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Animated Doodles */}
          <motion.svg
            className="absolute top-10 left-10 w-16 h-16 text-[#2a3a32] opacity-30"
            viewBox="0 0 100 100"
            initial={{ opacity: 0, rotate: -45 }}
            whileInView={{ opacity: 0.3, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.path
              d="M 20 50 Q 30 30, 50 50 Q 70 70, 80 50"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </motion.svg>

          <motion.svg
            className="absolute top-16 right-20 w-20 h-20 text-[#2a3a32] opacity-20"
            viewBox="0 0 100 100"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 0.2, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <motion.path
              d="M 30 30 L 50 10 L 70 30 M 50 10 L 50 50"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
            />
          </motion.svg>

          {/* Animated Book Icon */}
          <motion.div
            className="absolute top-0 right-32 w-16 h-16"
            initial={{ opacity: 0, y: -30, rotate: -15 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <motion.svg
              viewBox="0 0 100 100"
              className="w-full h-full text-[#2a3a32]"
              animate={{ rotate: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <rect x="20" y="30" width="60" height="50" fill="white" stroke="currentColor" strokeWidth="3" rx="3" />
              <line x1="20" y1="45" x2="80" y2="45" stroke="currentColor" strokeWidth="2" />
              <line x1="20" y1="55" x2="80" y2="55" stroke="currentColor" strokeWidth="2" />
              <line x1="20" y1="65" x2="80" y2="65" stroke="currentColor" strokeWidth="2" />
            </motion.svg>
          </motion.div>

          {/* Main Heading with Inline Elements */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-black leading-tight flex flex-wrap items-center justify-center gap-4">
              <span>We're</span>
              
              {/* Circular Image 1 */}
              <motion.div
                className="relative inline-block"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-[#2a3a32]">
                  <Image
                    src="/arab-lady-1.jpg"
                    alt="Artist"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
              </motion.div>

              <span>waiting</span>
              
              {/* Yellow Highlight Circle */}
              <motion.span
                className="relative inline-block"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
              >
                <span className="relative z-10">for</span>
                <motion.div
                  className="absolute inset-0 bg-[#f4e8a8] rounded-full -z-10"
                  style={{ transform: "scale(1.4)" }}
                  animate={{ scale: [1.4, 1.5, 1.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.span>

              <span className="w-full" />
              
              <span>you</span>
              
              {/* Overlapping Circles with Blue */}
              <motion.div
                className="relative inline-flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
              >
                <motion.div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#4a8fff] border-4 border-[#2a3a32]"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                <motion.span
                  className="relative inline-block ml-3"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7, type: "spring" }}
                >
                  <span className="relative z-10 text-[#2a3a32]">to</span>
                  <motion.div
                    className="absolute inset-0 bg-[#f4e8a8] rounded-full -z-10"
                    style={{ transform: "scale(1.6)" }}
                    animate={{ scale: [1.6, 1.7, 1.6] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  />
                </motion.span>
              </motion.div>

              <span>contact</span>
              
              {/* White Circle */}
              <motion.div
                className="relative inline-block"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-4 border-[#2a3a32]" />
              </motion.div>

              <span>us</span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-center text-[#2a3a32]/80 max-w-2xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            You register online through the website, by mail, or by fax using the registration form. Registration requires the member's name and full company address or billing address with phone/ fax number and email address.
          </motion.p>

          {/* Register Button */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.button
              className="bg-[#2a3a32] text-white px-12 py-4 rounded-full text-lg font-bold hover:bg-[#1a2a22] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register now
            </motion.button>
          </motion.div>

          {/* Circular Badges Top Right */}
          <motion.div
            className="absolute top-0 right-0 flex items-center gap-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="w-16 h-16 rounded-full overflow-hidden border-4 border-[#2a3a32]"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
              <Image
                src="/art-supply-illustration.jpg"
                alt="Art"
                width={64}
                height={64}
                className="object-cover w-full h-full"
              />
            </motion.div>
            <motion.div
              className="w-20 h-20 rounded-full bg-[#f4e8a8] border-4 border-[#2a3a32]"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="w-16 h-16 rounded-full overflow-hidden border-4 border-[#2a3a32]"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section - Black Background */}
      <section className="relative bg-[#2a3a32] py-16 px-6 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Subscribe Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-block mb-4"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, type: "spring" }}
              >
                <div className="bg-[#5a8a6a] text-white px-8 py-3 rounded-full font-bold text-lg">
                  Subscribe
                </div>
              </motion.div>

              <motion.h3
                className="text-4xl md:text-5xl font-black text-white mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                to our updates
              </motion.h3>

              <motion.div
                className="flex gap-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full bg-transparent border-2 border-white/30 text-white placeholder:text-white/50 focus:outline-none focus:border-[#5a8a6a]"
                />
                <motion.button
                  className="bg-white text-[#2a3a32] px-8 py-4 rounded-full font-bold hover:bg-[#e8ded2] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right: Navigation Links */}
            <motion.div
              className="grid grid-cols-2 gap-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <motion.h4
                  className="text-white font-bold text-lg mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  About
                </motion.h4>
                <motion.h4
                  className="text-white font-bold text-lg mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  Programmes
                </motion.h4>
                <motion.h4
                  className="text-white font-bold text-lg mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  Resources
                </motion.h4>
              </div>

              <div>
                <motion.h4
                  className="text-white font-bold text-lg mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  Academy
                </motion.h4>
                <motion.h4
                  className="text-white font-bold text-lg mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  Business coaching
                </motion.h4>
                <motion.h4
                  className="text-white font-bold text-lg mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                >
                  Contact
                </motion.h4>
              </div>
            </motion.div>
          </div>

          {/* Social Icons and Privacy */}
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-white/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="flex gap-4 mb-6 md:mb-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {["f", "t"].map((social, index) => (
                <motion.a
                  key={social}
                  href={`#${social}`}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#5a8a6a] transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                >
                  {social}
                </motion.a>
              ))}
            </motion.div>

            <motion.p
              className="text-white/60 text-sm"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Privacy policy
            </motion.p>
          </motion.div>

          {/* Copyright */}
          <motion.p
            className="text-center text-white/40 text-xs mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            © {currentYear} The Youth.qa. All rights reserved.
          </motion.p>
        </div>

        {/* Animated Floating Circles */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 rounded-full bg-[#5a8a6a]/20"
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        
        <motion.div
          className="absolute bottom-20 left-20 w-24 h-24 rounded-full bg-[#4a8fff]/20"
          animate={{ 
            y: [0, 20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />

        <motion.svg
          className="absolute bottom-10 right-10 w-20 h-20 text-[#f4e8a8] opacity-30"
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
      </section>
    </footer>
  )
}
