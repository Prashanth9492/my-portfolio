'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      role: 'Senior Frontend Developer',
      company: 'Tech Startup Co.',
      duration: '2022 - Present',
      description: 'Led frontend development team, architected scalable React applications, and mentored junior developers.',
      highlights: ['React & Next.js', 'Team Leadership', 'Architecture Design'],
    },
    {
      role: 'Full Stack Developer',
      company: 'Digital Solutions Inc.',
      duration: '2020 - 2022',
      description: 'Developed full-stack web applications, managed databases, and improved application performance by 40%.',
      highlights: ['Full Stack Development', 'Database Design', 'Performance Optimization'],
    },
    {
      role: 'Junior Frontend Developer',
      company: 'Creative Agency',
      duration: '2019 - 2020',
      description: 'Built responsive websites, implemented UI designs, and collaborated with design team.',
      highlights: ['HTML/CSS/JS', 'UI Implementation', 'Client Projects'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section title */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-2">
              Professional <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-gray-400 text-lg">My career timeline and experience</p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-500 via-blue-500 to-cyan-500 opacity-30" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`md:flex gap-8 items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex md:w-1/2 md:justify-center">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 ring-4 ring-[#0f0f0f] z-10" />
                  </div>

                  {/* Content */}
                  <div className="md:w-1/2">
                    <div className="group p-6 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#262626] border border-gray-700 hover:border-indigo-500/50 transition-all duration-300">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                          <p className="text-indigo-400 font-medium">{exp.company}</p>
                        </div>
                        <span className="text-xs bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 text-indigo-300 px-3 py-1 rounded-full whitespace-nowrap">
                          {exp.duration}
                        </span>
                      </div>

                      <p className="text-gray-300 mb-4">{exp.description}</p>

                      <div className="space-y-2">
                        {exp.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="text-cyan-400 flex-shrink-0" size={16} />
                            <span className="text-gray-400 text-sm">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
