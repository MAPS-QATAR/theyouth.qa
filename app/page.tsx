"use client"

import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import InitiativesPrograms from "@/components/initiatives-programs"
import EventThemes from "@/components/event-themes"
import ImpactSection from "@/components/impact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen overflow-hidden"
    >
      <Navbar />

      <HeroSection />

      <FeaturesSection />

      <InitiativesPrograms />

      <EventThemes />

      <ImpactSection />

      <Footer />
    </motion.main>
  )
}
