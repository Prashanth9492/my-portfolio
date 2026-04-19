'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (window.scrollY / windowHeight) * 100
      setProgress(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 z-50"
      style={{ width: `${progress}%` }}
      initial={{ width: '0%' }}
      animate={{ width: `${progress}%` }}
      transition={{ duration: 0.3 }}
    />
  )
}
