'use client'

import { motion } from 'framer-motion'
import { Heart, Plus } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const navItems = [
    { label: 'RESUME', href: '#' },
    { label: 'ABOUT', href: '#about' },
    { label: 'PLAYGROUND', href: '#' },
  ]

  return (
    <>
      {/* Bottom Navbar */}
      <footer className="bg-[#0f0f0f] border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between gap-6">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <div className="w-20 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg shadow-lg flex items-center justify-center overflow-hidden">
                <div className="text-4xl font-bold text-white transform scale-150">▶</div>
              </div>
            </motion.div>

            {/* Center Navigation */}
            <div className="flex-1 flex justify-center gap-12 items-center">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-white font-bold text-sm tracking-widest hover:text-gray-300 transition-colors duration-300 uppercase"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Connect Button */}
            <motion.button
              suppressHydrationWarning
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-bold uppercase text-sm tracking-wide hover:bg-gray-100 transition-colors duration-300 flex-shrink-0"
            >
              CONNECT
              <Plus size={20} />
            </motion.button>
          </div>
        </div>
      </footer>

      {/* Bottom Footer Info */}
      <div className="bg-[#0f0f0f] border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            {/* Footer content */}
            <div className="mb-6">
              <p className="text-gray-300 mb-2">
                Designed &amp; built by <span className="text-white font-semibold">Rajesh</span>
              </p>
              <p className="text-gray-500 text-sm flex items-center justify-center gap-1">
                Made with <Heart size={16} className="text-red-500" /> using React, Next.js &amp; Tailwind CSS
              </p>
            </div>

            {/* Links */}
            <div className="flex justify-center gap-6 mb-8 flex-wrap">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Sitemap
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                RSS
              </a>
            </div>

            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              © {currentYear} All rights reserved. Built with passion.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  )
}
