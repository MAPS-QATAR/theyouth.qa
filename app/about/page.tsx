"use client"

import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"

export default function AboutPage() {
  const themes = [
    { name: "Innovation", icon: "💡", color: "#4a8fff" },
    { name: "Startups", icon: "🚀", color: "#5a8a6a" },
    { name: "AI", icon: "🤖", color: "#f4e8a8" },
    { name: "Art", icon: "🎨", color: "#ff6b9d" },
    { name: "Culture", icon: "🎭", color: "#9b59b6" },
    { name: "Fashion", icon: "👗", color: "#e67e22" },
  ]

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-[#4a5a52] min-h-[60vh] flex items-center justify-center overflow-hidden px-6 py-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="/arab-lady-2.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-6xl md:text-8xl font-black text-[#e8ded2] mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              About{" "}
              <span className="relative inline-block">
                Y.O.U.T.H
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-3 bg-[#f4e8a8]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
              </span>
            </motion.h1>

            <motion.p
              className="text-2xl text-[#e8ded2]/90 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              You Own Unlimited Talents and Hope
            </motion.p>
          </motion.div>

          {/* Animated Doodles */}
          <motion.svg
            className="absolute top-20 right-20 w-24 h-24 text-[#f4e8a8] opacity-40"
            viewBox="0 0 100 100"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <motion.path
              d="M 50 20 L 60 40 L 80 40 L 65 55 L 70 75 L 50 60 L 30 75 L 35 55 L 20 40 L 40 40 Z"
              fill="currentColor"
            />
          </motion.svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative bg-[#e8ded2] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <motion.div
            className="max-w-4xl mx-auto mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-[#2a3a32] mb-8">
              A Transformative Youth Empowerment Project
            </h2>
            <p className="text-lg text-[#2a3a32]/80 leading-relaxed mb-6">
              The Y.O.U.T.H is a transformative youth empowerment project dedicated to celebrating creativity, education, and expression. Organized by <strong>MAPS International W.L.L</strong> at <strong>Katara Cultural Village</strong>, this three-day mega event aims to empower and inspire young individuals through a collective series of creative and educational activities.
            </p>
          </motion.div>

          {/* Event Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: "Duration",
                content: "3 Days with an action-packed schedule and diverse engagement opportunities",
                icon: "📅",
                color: "#4a8fff"
              },
              {
                title: "Focus",
                content: "Fostering personal growth, encouraging innovation, and promoting sustainability among young individuals",
                icon: "🎯",
                color: "#5a8a6a"
              },
              {
                title: "Aim",
                content: "Create a vibrant space that nurtures creativity, critical thinking, and social responsibility",
                icon: "🌟",
                color: "#f4e8a8"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-white rounded-3xl p-8 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div
                  className="text-5xl mb-4"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-[#2a3a32] mb-4">{item.title}</h3>
                <p className="text-[#2a3a32]/70 leading-relaxed">{item.content}</p>
              </motion.div>
            ))}
          </div>

          {/* Vision Statement */}
          <motion.div
            className="bg-[#2a3a32] rounded-3xl p-12 md:p-16 text-center mb-20 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 bg-[#5a8a6a] rounded-full opacity-10"
              animate={{ scale: [1, 1.2, 1], rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-48 h-48 bg-[#4a8fff] rounded-full opacity-10"
              animate={{ scale: [1, 1.3, 1], rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity }}
            />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                We Believe in Tomorrow's Leaders
              </h2>
              <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                Participants will include individuals, schools, universities, students, educators, and more, all coming together to display creativity and innovation under the given themes. We believe that fostering a culture of creativity and innovation today will benefit society for years to come.
              </p>
              <motion.div
                className="mt-8 text-6xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                🌟
              </motion.div>
            </div>
          </motion.div>

          {/* Key Themes */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-[#2a3a32] mb-4">
                Key Themes
              </h2>
              <p className="text-lg text-[#2a3a32]/70">
                Empowering young individuals through innovation and creativity
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {themes.map((theme, index) => (
                <motion.div
                  key={theme.name}
                  className="bg-white rounded-2xl p-6 text-center shadow-md"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
                  whileHover={{ y: -10, scale: 1.05 }}
                >
                  <motion.div
                    className="text-5xl mb-3"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                  >
                    {theme.icon}
                  </motion.div>
                  <h3 className="font-bold text-[#2a3a32]">{theme.name}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Empowerment Section */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-[#2a3a32] mb-6">
                Empowering Youth
              </h2>
              <p className="text-lg text-[#2a3a32]/80 leading-relaxed mb-6">
                Empowering young individuals through innovation and creativity across various fields to foster leadership and cultural exchange. This event empowers youth by offering a vibrant platform where they can showcase their talents, engage in creative activities, and connect with peers and mentors.
              </p>
              <motion.div
                className="inline-block bg-[#5a8a6a] text-white px-8 py-4 rounded-full font-bold text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join the Movement
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/high-angle-artist-chair-painting_23-2150170506.jpg"
                  alt="Youth Empowerment"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <motion.div
                className="absolute -top-6 -right-6 w-32 h-32 bg-[#f4e8a8] rounded-full"
                animate={{ scale: [1, 1.2, 1], rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#4a8fff] rounded-full"
                animate={{ scale: [1, 1.3, 1], rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.main>
  )
}
