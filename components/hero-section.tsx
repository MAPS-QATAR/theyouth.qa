"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function HeroSection() {
    const [email, setEmail] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        // Add your email submission logic here
        setEmail("")
    }

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#4a5a52]">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-30"
                >
                    <source src="/ai-tech.mp4" type="video/mp4" />
                </video>
                {/* <div className="absolute inset-0 bg-gradient-to-br from-[#4a5a52] via-[#5a6a62]/90 to-[#4a5a52]" /> */}
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
                {/* Animated Doodles - Top Left */}
                <motion.svg
                    className="absolute top-10 left-10 w-24 h-24 text-[#e8ded2]"
                    viewBox="0 0 100 100"
                    initial={{ opacity: 0, rotate: -10 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <motion.path
                        d="M 20 30 Q 30 20, 40 30 Q 50 40, 40 50"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 0.5 }}
                    />
                    <motion.path
                        d="M 60 20 Q 70 30, 60 40"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: 0.8 }}
                    />
                </motion.svg>

                {/* Animated Doodles - Top Right */}
                <motion.svg
                    className="absolute top-20 right-20 w-20 h-20 text-[#e8ded2]"
                    viewBox="0 0 100 100"
                    initial={{ opacity: 0, rotate: 10 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    <motion.path
                        d="M 30 50 Q 50 30, 70 50"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.8, delay: 0.6 }}
                    />
                </motion.svg>

                {/* Animated Doodles - Bottom Left */}
                <motion.svg
                    className="absolute bottom-32 left-16 w-28 h-28 text-[#e8ded2]"
                    viewBox="0 0 100 100"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.7 }}
                >
                    <motion.path
                        d="M 20 40 Q 40 20, 60 40 Q 80 60, 60 80 Q 40 100, 20 80"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2.5, delay: 0.9 }}
                    />
                </motion.svg>

                {/* Animated Doodles - Bottom Right */}
                <motion.svg
                    className="absolute bottom-40 right-28 w-24 h-24 text-[#e8ded2]"
                    viewBox="0 0 100 100"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <motion.path
                        d="M 30 30 L 45 45 M 55 45 L 70 30 M 40 60 Q 50 70, 60 60"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 1.2 }}
                    />
                </motion.svg>

                {/* Hero Content */}
                <div className="text-center">
                    {/* Main Heading with Circular Images */}
                    <motion.div
                        className="relative mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Mobile-optimized layout */}
                        <div className="block md:hidden">
                            <h1 className="text-4xl font-bold text-[#e8ded2] leading-tight mb-4">
                                Find seminar
                            </h1>
                            {/* Circular Image 1 - centered on mobile */}
                            <motion.div
                                className="flex justify-center my-4"
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
                            >
                                <img
                                    src="/arab-lady-1.jpg"
                                    alt="Youth creativity"
                                    className="w-20 h-20 rounded-full object-cover border-4 border-[#e8ded2]"
                                />
                            </motion.div>
                            <h1 className="text-4xl font-bold text-[#e8ded2] leading-tight">
                                topics & content
                            </h1>
                            {/* Circular Icons - stacked on mobile */}
                            <motion.div
                                className="flex justify-center gap-4 mt-6"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                            >
                                <motion.span
                                    className="w-16 h-16 rounded-full bg-[#f4e8a8] flex items-center justify-center border-4 border-[#e8ded2]"
                                    animate={{ rotate: [0, 5, -5, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                                >
                                    <span className="text-3xl font-black text-[#2a3a32]">&</span>
                                </motion.span>
                                <motion.span
                                    className="w-16 h-16 rounded-full bg-[#4a8fff] flex items-center justify-center border-4 border-[#e8ded2]"
                                    animate={{ y: [0, -5, 5, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.5 }}
                                >
                                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                                    </svg>
                                </motion.span>
                            </motion.div>
                        </div>

                        {/* Desktop layout */}
                        <div className="hidden md:block">
                            <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold text-[#e8ded2] leading-tight">
                                <span className="inline-block">Find </span>
                                {/* Circular Image 1 */}
                                <motion.span
                                    className="inline-block relative mx-4"
                                    initial={{ scale: 0, rotate: -180 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
                                >
                                    <img
                                        src="/arab-lady-1.jpg"
                                        alt="Youth creativity"
                                        className="w-24 h-24 md:w-32 md:h-32 xl:w-40 xl:h-40 rounded-full object-cover border-4 border-[#e8ded2] inline-block align-middle"
                                    />
                                </motion.span>
                                <span className="inline-block">seminar</span>
                            </h1>

                            <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold text-[#e8ded2] leading-tight mt-4">
                                <span className="inline-block">topics </span>
                                {/* Circular Icons */}
                                <motion.span
                                    className="inline-flex items-center justify-center mx-3"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                >
                                    <motion.span
                                        className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-[#f4e8a8] flex items-center justify-center border-4 border-[#e8ded2]"
                                        animate={{ rotate: [0, 5, -5, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                                    >
                                        <span className="text-3xl md:text-4xl lg:text-5xl font-black text-[#2a3a32]">&</span>
                                    </motion.span>
                                    <motion.span
                                        className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-[#4a8fff] flex items-center justify-center border-4 border-[#e8ded2] -ml-8"
                                        animate={{ y: [0, -5, 5, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.5 }}
                                    >
                                        <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                                        </svg>
                                    </motion.span>
                                </motion.span>
                                <span className="inline-block">content</span>
                            </h1>
                        </div>

                        {/* Floating Card - Hidden on mobile, repositioned on tablet */}
                        <motion.div
                            className="hidden lg:block z-50 top-50 absolute right-0"
                            initial={{ opacity: 0, scale: 0, rotate: -180 }}
                            animate={{ opacity: 1, scale: 1, rotate: 8 }}
                            transition={{ duration: 1, delay: 1.4, type: "spring" }}
                            id="floating-transition-card"
                        >
                            <motion.div
                                className="w-40 h-40 lg:w-48 lg:h-48 rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
                                animate={{
                                    y: [0, -10, 0],
                                    rotate: [8, 6, 8],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    rotate: 0,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                >
                                    <source src="/sticky-note.mp4" type="video/mp4" />
                                </video>
                                <motion.div
                                    className="absolute top-3 left-3 px-3 py-1 rounded-full text-white text-sm font-bold shadow-lg bg-[#f4e8a8]"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <span className="text-[#2a3a32]">Creative Space</span>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Subtitle */}
                    <motion.div
                        className="text-[#e8ded2] text-base md:text-xl lg:text-2xl max-w-3xl mx-auto mb-12 relative px-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <p className="relative inline-block">
                            Embrace your <span className="relative inline-block">
                                <span className="relative z-10 font-black text-2xl" style={{
                                    fontStyle: "italic"
                                }}>Youth</span>
                                {/* Yellow Highlight Underline */}
                                <motion.div
                                    className="absolute -bottom-1 left-0 right-0 h-2 bg-[#4a8fff] -z-0 "
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 0.8, delay: 1.2 }}
                                />
                                
                                {/* Sparkle 1 - Top Left */}
                                <motion.svg
                                    className="absolute -top-6 -left-8 w-6 h-6 text-[#f4e8a8]"
                                    viewBox="0 0 24 24"
                                    initial={{ scale: 0, rotate: -180 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ duration: 0.6, delay: 1.4, type: "spring" }}
                                >
                                    <motion.path
                                        d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z"
                                        fill="currentColor"
                                        animate={{ 
                                            scale: [1, 1.3, 1],
                                            rotate: [0, 180, 360]
                                        }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                    />
                                </motion.svg>

                                {/* Sparkle 2 - Top Right */}
                                <motion.svg
                                    className="absolute -top-4 -right-6 w-4 h-4 text-[#5a8a6a]"
                                    viewBox="0 0 24 24"
                                    initial={{ scale: 0, rotate: 180 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ duration: 0.6, delay: 1.5, type: "spring" }}
                                >
                                    <motion.path
                                        d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z"
                                        fill="currentColor"
                                        animate={{ 
                                            scale: [1, 1.4, 1],
                                            rotate: [0, -180, -360]
                                        }}
                                        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                                    />
                                </motion.svg>

                                {/* Sparkle 3 - Bottom Right */}
                                <motion.svg
                                    className="absolute -bottom-8 -right-8 w-5 h-5 text-[#4a8fff]"
                                    viewBox="0 0 24 24"
                                    initial={{ scale: 0, rotate: -90 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ duration: 0.6, delay: 1.6, type: "spring" }}
                                >
                                    <motion.path
                                        d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z"
                                        fill="currentColor"
                                        animate={{ 
                                            scale: [1, 1.2, 1],
                                            rotate: [0, 360, 720]
                                        }}
                                        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                                    />
                                </motion.svg>

                                {/* Curved Arrow Doodle */}
                                <motion.svg
                                    className="absolute -bottom-12 left-0 w-20 h-12 text-[#e8ded2] opacity-70"
                                    viewBox="0 0 80 40"
                                    initial={{ opacity: 0, pathLength: 0 }}
                                    animate={{ opacity: 0.7, pathLength: 1 }}
                                    transition={{ duration: 1.5, delay: 1.7 }}
                                >
                                    <motion.path
                                        d="M 5 35 Q 20 10, 40 20 Q 60 30, 75 15"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        fill="none"
                                        strokeLinecap="round"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 1.5, delay: 1.7 }}
                                    />
                                    <motion.path
                                        d="M 75 15 L 70 12 M 75 15 L 72 20"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        fill="none"
                                        strokeLinecap="round"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 0.5, delay: 2.2 }}
                                    />
                                </motion.svg>

                                {/* Small Circle Doodle */}
                                <motion.div
                                    className="absolute -top-8 right-0 w-3 h-3 rounded-full bg-[#f4e8a8] border-2 border-[#e8ded2]"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.4, delay: 1.8, type: "spring" }}
                                >
                                    <motion.div
                                        animate={{ scale: [1, 1.5, 1] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                                    />
                                </motion.div>

                                {/* Wavy Line Doodle */}
                                <motion.svg
                                    className="absolute -bottom-10 -right-12 w-16 h-8 text-[#e8ded2] opacity-60"
                                    viewBox="0 0 60 30"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.6 }}
                                    transition={{ duration: 1, delay: 1.9 }}
                                >
                                    <motion.path
                                        d="M 5 15 Q 15 5, 25 15 Q 35 25, 45 15 Q 55 5, 60 15"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        fill="none"
                                        strokeLinecap="round"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 1.2, delay: 1.9 }}
                                    />
                                </motion.svg>

                                {/* Dots Pattern */}
                                <motion.div
                                    className="absolute -left-10 top-0 flex gap-1"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 2 }}
                                >
                                    {[0, 1, 2].map((i) => (
                                        <motion.div
                                            key={i}
                                            className="w-1.5 h-1.5 rounded-full bg-[#5a8a6a]"
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ duration: 0.3, delay: 2 + i * 0.1 }}
                                        >
                                            <motion.div
                                                animate={{ scale: [1, 1.5, 1] }}
                                                transition={{ 
                                                    duration: 1.5, 
                                                    repeat: Infinity,
                                                    delay: i * 0.3
                                                }}
                                            />
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </span>, create your{" "}
                            <span className="relative inline-block">
                                <span className="relative z-10 font-black text-2xl" style={{
                                    fontStyle: "italic"
                                }}>Legacy</span>
                                {/* Yellow Highlight Underline */}
                                <motion.div
                                    className="absolute -bottom-1 left-0 right-0 h-2 bg-[#f4e8a8] -z-0 "
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 0.8, delay: 1.2 }}
                                />
                                
                                {/* Sparkle 1 - Top Left */}
                                <motion.svg
                                    className="absolute -top-6 -left-8 w-6 h-6 text-[#f4e8a8]"
                                    viewBox="0 0 24 24"
                                    initial={{ scale: 0, rotate: -180 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ duration: 0.6, delay: 1.4, type: "spring" }}
                                >
                                    <motion.path
                                        d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z"
                                        fill="currentColor"
                                        animate={{ 
                                            scale: [1, 1.3, 1],
                                            rotate: [0, 180, 360]
                                        }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                    />
                                </motion.svg>

                                {/* Sparkle 2 - Top Right */}
                                <motion.svg
                                    className="absolute -top-4 -right-6 w-4 h-4 text-[#5a8a6a]"
                                    viewBox="0 0 24 24"
                                    initial={{ scale: 0, rotate: 180 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ duration: 0.6, delay: 1.5, type: "spring" }}
                                >
                                    <motion.path
                                        d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z"
                                        fill="currentColor"
                                        animate={{ 
                                            scale: [1, 1.4, 1],
                                            rotate: [0, -180, -360]
                                        }}
                                        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                                    />
                                </motion.svg>

                                {/* Sparkle 3 - Bottom Right */}
                                <motion.svg
                                    className="absolute -bottom-8 -right-8 w-5 h-5 text-[#4a8fff]"
                                    viewBox="0 0 24 24"
                                    initial={{ scale: 0, rotate: -90 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ duration: 0.6, delay: 1.6, type: "spring" }}
                                >
                                    <motion.path
                                        d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z"
                                        fill="currentColor"
                                        animate={{ 
                                            scale: [1, 1.2, 1],
                                            rotate: [0, 360, 720]
                                        }}
                                        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                                    />
                                </motion.svg>

                                {/* Curved Arrow Doodle */}
                                <motion.svg
                                    className="absolute -bottom-12 left-0 w-20 h-12 text-[#e8ded2] opacity-70"
                                    viewBox="0 0 80 40"
                                    initial={{ opacity: 0, pathLength: 0 }}
                                    animate={{ opacity: 0.7, pathLength: 1 }}
                                    transition={{ duration: 1.5, delay: 1.7 }}
                                >
                                    <motion.path
                                        d="M 5 35 Q 20 10, 40 20 Q 60 30, 75 15"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        fill="none"
                                        strokeLinecap="round"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 1.5, delay: 1.7 }}
                                    />
                                    <motion.path
                                        d="M 75 15 L 70 12 M 75 15 L 72 20"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        fill="none"
                                        strokeLinecap="round"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 0.5, delay: 2.2 }}
                                    />
                                </motion.svg>

                                {/* Small Circle Doodle */}
                                <motion.div
                                    className="absolute -top-8 right-0 w-3 h-3 rounded-full bg-[#f4e8a8] border-2 border-[#e8ded2]"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.4, delay: 1.8, type: "spring" }}
                                >
                                    <motion.div
                                        animate={{ scale: [1, 1.5, 1] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                                    />
                                </motion.div>

                                {/* Wavy Line Doodle */}
                                <motion.svg
                                    className="absolute -bottom-10 -right-12 w-16 h-8 text-[#e8ded2] opacity-60"
                                    viewBox="0 0 60 30"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.6 }}
                                    transition={{ duration: 1, delay: 1.9 }}
                                >
                                    <motion.path
                                        d="M 5 15 Q 15 5, 25 15 Q 35 25, 45 15 Q 55 5, 60 15"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        fill="none"
                                        strokeLinecap="round"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 1.2, delay: 1.9 }}
                                    />
                                </motion.svg>

                                {/* Dots Pattern */}
                                <motion.div
                                    className="absolute -left-10 top-0 flex gap-1"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 2 }}
                                >
                                    {[0, 1, 2].map((i) => (
                                        <motion.div
                                            key={i}
                                            className="w-1.5 h-1.5 rounded-full bg-[#5a8a6a]"
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ duration: 0.3, delay: 2 + i * 0.1 }}
                                        >
                                            <motion.div
                                                animate={{ scale: [1, 1.5, 1] }}
                                                transition={{ 
                                                    duration: 1.5, 
                                                    repeat: Infinity,
                                                    delay: i * 0.3
                                                }}
                                            />
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </span>
                        </p>
                        <p className="mt-4">Join us for a transformative experience!</p>
                    </motion.div>

                    {/* Email Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                    >
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full sm:w-96 px-6 py-4 rounded-full text-[#2a3a32] bg-white border-2 border-[#e8ded2] focus:outline-none focus:border-[#f4e8a8] transition-colors"
                            required
                        />
                        <motion.button
                            type="submit"
                            className="px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-[#2a3a32] transition-colors whitespace-nowrap"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Send
                        </motion.button>
                    </motion.form>
                </div>

                {/* Floating Tags */}
                <motion.div
                    className="absolute top-1/2 right-12 transform -translate-y-1/2 hidden"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                >
                    <motion.div
                        className="bg-black text-white px-6 py-3 rounded-full font-bold text-lg"
                        animate={{ rotate: [-5, 5, -5] }}
                        transition={{ duration: 4, repeat: Infinity }}
                    >
                        Management
                    </motion.div>
                </motion.div>
            </div>

            {/* Animated Green Elements */}
            <motion.div
                className="absolute bottom-0 left-0 w-96 h-96"
                initial={{ opacity: 0, x: -100, rotate: -45 }}
                animate={{ opacity: 0.7, x: 0, rotate: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <svg viewBox="0 0 200 200" className="w-full h-full">
                    <motion.path
                        d="M 0 100 L 50 80 L 100 90 L 150 70 L 200 85 L 200 200 L 0 200 Z"
                        fill="#5a8a6a"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.7 }}
                        transition={{ duration: 1.5, delay: 0.8 }}
                    />
                    <motion.path
                        d="M 0 80 L 60 60 L 120 70 L 180 50 L 200 65 L 200 200 L 0 200 Z"
                        fill="#6a9a7a"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.8 }}
                        transition={{ duration: 1.5, delay: 1 }}
                    />
                </svg>
            </motion.div>

            <motion.div
                className="absolute top-0 right-0 w-96 h-96"
                initial={{ opacity: 0, x: 100, rotate: 45 }}
                animate={{ opacity: 0.6, x: 0, rotate: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
            >
                <svg viewBox="0 0 200 200" className="w-full h-full">
                    <motion.path
                        d="M 200 0 L 150 40 L 100 30 L 50 50 L 0 35 L 0 0 Z"
                        fill="#5a8a6a"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.6 }}
                        transition={{ duration: 1.5, delay: 1 }}
                    />
                </svg>
            </motion.div>

        </section>
    )
}
