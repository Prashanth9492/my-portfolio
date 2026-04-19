'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1460925895917-adf4e565c479?w=500&h=300&fit=crop',
      tags: ['Next.js', 'React', 'PostgreSQL', 'Stripe'],
      live: '#',
      github: '#',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates, team collaboration features, and advanced filtering.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
      tags: ['React', 'Firebase', 'Tailwind CSS'],
      live: '#',
      github: '#',
    },
    {
      title: 'Analytics Dashboard',
      description: 'Interactive analytics dashboard with data visualization, custom reports, and performance metrics tracking.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      tags: ['React', 'D3.js', 'Node.js'],
      live: '#',
      github: '#',
    },
    {
      title: 'Social Media App',
      description: 'Social platform with user authentication, real-time messaging, and social feed with advanced features.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
      tags: ['Next.js', 'MongoDB', 'Socket.io'],
      live: '#',
      github: '#',
    },
    {
      title: 'AI Chat Interface',
      description: 'Modern chat application powered by AI with natural language processing and contextual responses.',
      image: 'https://images.unsplash.com/photo-1677442d019cecf8978eaa846e6b050d2d02319b9?w=500&h=300&fit=crop',
      tags: ['React', 'OpenAI API', 'TypeScript'],
      live: '#',
      github: '#',
    },
    {
      title: 'Design System',
      description: 'Comprehensive design system with reusable components, documentation, and storybook integration.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop',
      tags: ['React', 'Storybook', 'TypeScript'],
      live: '#',
      github: '#',
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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
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
              Featured <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg">Showcase of my recent work and achievements</p>
          </motion.div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group h-full"
              >
                <div className="relative h-full rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#262626] border border-gray-700 hover:border-indigo-500/50 transition-all duration-300 flex flex-col">
                  {/* Image container */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 text-gray-300 rounded-full border border-indigo-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 text-sm">
                        <ExternalLink size={16} />
                        Live Demo
                      </button>
                      <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-500 text-white font-medium rounded-lg hover:bg-white/5 transition-colors duration-300 text-sm">
                        <Github size={16} />
                        Code
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
