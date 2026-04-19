'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Twitter, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Github, label: 'GitHub', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Mail, label: 'Email', href: 'mailto:hello@example.com' },
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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section title */}
          <motion.div variants={itemVariants} className="mb-12 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-2">
              Let's Get In <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-gray-400 text-lg">I'd love to hear from you. Send me a message!</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors duration-300 resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <span>Send Message</span>
                  <Send className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="p-4 bg-green-500/20 border border-green-500/30 text-green-300 rounded-lg text-center"
                  >
                    ✓ Message sent successfully!
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact info */}
            <motion.div variants={itemVariants}>
              <div className="space-y-8">
                {/* Info cards */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#262626] border border-gray-700">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 flex items-center justify-center">
                      <Mail className="text-indigo-400" size={24} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <p className="text-white font-medium">hello@example.com</p>
                    </div>
                  </div>
                </div>

                {/* Social links */}
                <div>
                  <p className="text-white font-semibold mb-4">Connect with me</p>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon
                      return (
                        <motion.a
                          key={index}
                          href={social.href}
                          whileHover={{ y: -5 }}
                          className="p-4 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#262626] border border-gray-700 hover:border-indigo-500/50 transition-all duration-300 flex items-center justify-center gap-2 group"
                        >
                          <Icon className="text-gray-400 group-hover:text-indigo-400 transition-colors" size={20} />
                          <span className="text-gray-300 group-hover:text-white transition-colors text-sm font-medium">
                            {social.label}
                          </span>
                        </motion.a>
                      )
                    })}
                  </div>
                </div>

                {/* Availability */}
                <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 border border-indigo-500/30">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                    </span>
                    <span className="text-green-400 font-medium text-sm">Available for freelance</span>
                  </div>
                  <p className="text-gray-300">I'm currently available for freelance projects and collaborations.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
