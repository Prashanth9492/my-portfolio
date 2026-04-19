'use client'

import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section title */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-2">
              About <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-gray-400 text-lg">Learn more about my background and experience</p>
          </motion.div>

          {/* Content grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-blue-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-2xl border border-gray-700 group-hover:border-indigo-500 transition-colors duration-300" />
            </motion.div>

            {/* Text content */}
            <motion.div variants={itemVariants}>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a passionate full-stack developer with 5+ years of experience building web applications. I specialize in creating beautiful, accessible, and high-performance user experiences using modern technologies.
              </p>

              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or sharing knowledge with the community. I'm always eager to learn and take on new challenges.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-1 h-1 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                  <p className="text-gray-300">Expert in React, Next.js, TypeScript, and Tailwind CSS</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-1 h-1 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                  <p className="text-gray-300">Strong background in UI/UX design and accessibility</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-1 h-1 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
                  <p className="text-gray-300">Experienced with database design and backend development</p>
                </div>
              </div>

              <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300">
                <Download size={20} />
                Download Resume
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
