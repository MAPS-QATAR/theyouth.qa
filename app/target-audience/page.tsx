"use client"

import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"

export default function TargetAudiencePage() {
  const targetGroups = [
    {
      title: "Students",
      description: "From schools and universities passionate about learning and growth",
      icon: "🎓",
      color: "#4a8fff"
    },
    {
      title: "Young Creators",
      description: "Individual innovators and artists ready to showcase their talents",
      icon: "🎨",
      color: "#ff6b9d"
    },
    {
      title: "Educators",
      description: "Mentors guiding the next generation of leaders",
      icon: "👨‍🏫",
      color: "#5a8a6a"
    },
    {
      title: "Passionate Youth",
      description: "Anyone aged 13-21 passionate about art, fashion, culture, and growth",
      icon: "✨",
      color: "#f4e8a8"
    }
  ]

  const activities = [
    {
      title: "Painting",
      image: "/high-angle-artist-chair-painting_23-2150170506.jpg",
      description: "Express yourself through colors and creativity",
      color: "#ff6b9d"
    },
    {
      title: "Photography",
      image: "/playing-1.jpg",
      description: "Capture moments and tell stories through the lens",
      color: "#4a8fff"
    },
    {
      title: "Fashion",
      video: "/fashion-design.mp4",
      description: "Showcase your unique style and design vision",
      color: "#9b59b6"
    },
    {
      title: "Design",
      video: "/sticky-note.mp4",
      description: "Create innovative solutions and visual masterpieces",
      color: "#5a8a6a"
    }
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
      <section className="relative bg-[#4a5a52] min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden px-4 md:px-6 py-16 md:py-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="/6260_Wall_Painting_1920x1080.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            className="mb-6 md:mb-8"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <div className="inline-block bg-[#f4e8a8] text-[#2a3a32] px-6 md:px-8 py-2 md:py-3 rounded-full font-bold text-base md:text-lg">
              Ages 13-21
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-[#e8ded2] mb-4 md:mb-6 px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block sm:inline">Target </span>
            <span className="relative inline-block">
              Demographic
              <motion.div
                className="absolute -bottom-1 md:-bottom-2 left-0 right-0 h-2 md:h-3 bg-[#5a8a6a]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#e8ded2]/90 max-w-3xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Empowering the next generation of leaders, creators, and innovators
          </motion.p>

          {/* Animated Doodles - Hidden on mobile */}
          <motion.svg
            className="hidden lg:block absolute top-10 left-10 w-32 h-32 text-[#f4e8a8] opacity-40"
            viewBox="0 0 100 100"
            initial={{ opacity: 0, rotate: -45 }}
            animate={{ opacity: 0.4, rotate: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.path
              d="M 20 50 Q 30 30, 50 50 Q 70 70, 80 50"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
          </motion.svg>
        </div>
      </section>

      {/* Target Groups */}
      <section className="relative bg-[#e8ded2] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-[#2a3a32] mb-6">
              Who Should Join?
            </h2>
            <p className="text-xl text-[#2a3a32]/70 max-w-3xl mx-auto">
              The Youth.qa is designed for youth passionate about creativity, innovation, and making a difference
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {targetGroups.map((group, index) => (
              <motion.div
                key={group.title}
                className="bg-white rounded-3xl p-8 shadow-lg text-center relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10"
                  style={{ backgroundColor: group.color }}
                  animate={{ scale: [1, 1.2, 1], rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, delay: index * 0.5 }}
                />

                <motion.div
                  className="text-6xl mb-4 relative z-10"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                >
                  {group.icon}
                </motion.div>
                <h3 className="text-2xl font-black text-[#2a3a32] mb-3 relative z-10">
                  {group.title}
                </h3>
                <p className="text-[#2a3a32]/70 leading-relaxed relative z-10">
                  {group.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Age Range Highlight */}
          <motion.div
            className="bg-gradient-to-br from-[#4a8fff] to-[#5a8a6a] rounded-3xl p-12 text-center mb-20 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-10"
              animate={{ scale: [1, 1.3, 1], x: [0, 50, 0], y: [0, -30, 0] }}
              transition={{ duration: 15, repeat: Infinity }}
            />

            <div className="relative z-10">
              <motion.h2
                className="text-5xl md:text-7xl font-black text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                13-21 Years
              </motion.h2>
              <p className="text-2xl text-white/90 max-w-3xl mx-auto">
                This event promotes sustainability, critical thinking, and social responsibility, making it ideal for young leaders aligning with global goals
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Art, Fashion, and Culture Section */}
      <section className="relative bg-[#2a3a32] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              <div className="w-20 h-20 bg-[#f4e8a8] rounded-full flex items-center justify-center text-4xl">
                🎨
              </div>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              Art, Fashion{" "}
              <span className="relative inline-block">
                & Culture
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-3 bg-[#f4e8a8]"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Celebrating creativity across key themes, providing opportunities for expression and collaboration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.title}
                className={`relative rounded-3xl overflow-hidden shadow-2xl ${
                  index === 0 ? 'md:col-span-2' : ''
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative h-96">
                  {activity.video ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    >
                      <source src={activity.video} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={activity.image!}
                      alt={activity.title}
                      fill
                      className="object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2a3a32] via-transparent to-transparent" />
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-8 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                >
                  <h3 className="text-3xl font-black mb-2">{activity.title}</h3>
                  <p className="text-white/80 text-lg">{activity.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Empowerment Message */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              The event focuses on empowering young individuals through innovation and creativity in art, fashion, and culture. It promotes cultural exchange, fostering the next generation through creative expression over three transformative days.
            </p>
          </motion.div>
        </div>

        {/* Floating Animated Elements */}
        <motion.div
          className="absolute top-20 right-20 w-24 h-24 rounded-full bg-[#4a8fff]/20"
          animate={{ y: [0, -30, 0], rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-32 h-32 rounded-full bg-[#5a8a6a]/20"
          animate={{ y: [0, 30, 0], rotate: -360 }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </section>

      <Footer />
    </motion.main>
  )
}
