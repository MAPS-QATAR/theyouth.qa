"use client"

import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import FloatingCard from "@/components/floating-card"
import FeaturesSection from "@/components/features-section"
import EventThemes from "@/components/event-themes"
import InitiativesPrograms from "@/components/initiatives-programs"
import ImpactSection from "@/components/impact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Navbar />
      <HeroSection />
      <FloatingCard />
      <FeaturesSection />
      <InitiativesPrograms />
      <EventThemes />
      <ImpactSection />
      <Footer />
    </motion.main>
  )
}
