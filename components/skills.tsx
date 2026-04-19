'use client'

import { motion } from 'framer-motion'
import { Code2, Palette, Database, Zap } from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      icon: Database,
      title: 'Backend',
      skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'API Design'],
    },
    {
      icon: Palette,
      title: 'Design',
      skills: ['Figma', 'UI Design', 'UX Design', 'Accessibility', 'Prototyping'],
    },
    {
      icon: Zap,
      title: 'Tools',
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Testing'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section title */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-2">
              Skills &amp; <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-gray-400 text-lg">Technologies and tools I work with</p>
          </motion.div>

          {/* Skills grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="group p-6 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#262626] border border-gray-700 hover:border-indigo-500/50 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 group-hover:from-indigo-500/30 group-hover:to-cyan-500/30 transition-colors duration-300 mb-4">
                    <Icon className="text-indigo-400 group-hover:text-cyan-400 transition-colors" size={24} />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>

                  <div className="space-y-2">
                    {category.skills.map((skill, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500" />
                        <span className="text-gray-300 text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
