"use client"

import { motion } from "framer-motion"

export default function FloatingCard() {
  return (
    <motion.div
      className="hidden absolute bottom-12 left-12 bg-black text-white p-6 rounded-3xl max-w-sm shadow-2xl"
      initial={{ opacity: 0, x: -50, y: 50 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.8, delay: 1.5 }}
      whileHover={{ scale: 1.05, rotate: 2 }}
    >
      <div className="mb-4 font-black text-xl text-[#e8ded2]">Y.O.U.T.H.</div>
      
      <div className="space-y-3">
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          <div className="w-2 h-2 rounded-full bg-[#5a8a6a]" />
          <span className="text-sm">Implementation guarantee</span>
        </motion.div>
        
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <div className="w-2 h-2 rounded-full bg-[#5a8a6a]" />
          <span className="text-sm">Hygiene concept &<br />3G rule</span>
        </motion.div>
      </div>
    </motion.div>
  )
}
