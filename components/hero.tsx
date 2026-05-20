'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Github, FileText } from 'lucide-react'
import heroImage from './assets/new-hero-image.png'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#070b14] flex items-center justify-center relative overflow-hidden font-sans"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-[#0d9488]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-[#0d9488]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between min-h-screen">
        
        {/* Left Column Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="lg:w-1/3 flex flex-col items-start z-20 mt-24 lg:mt-0 order-2 lg:order-1"
        >
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="text-[#2dd4bf] text-xl md:text-2xl font-medium tracking-wide mb-2 block">
              Hello! I'm
            </span>
            <h1 className="text-white text-5xl md:text-5xl lg:text-6xl xl:text-[5rem] 2xl:text-[5.5rem] font-bold leading-[1.1] tracking-tight uppercase">
              RAJESH<br />CHITYAL
            </h1>
          </motion.div>
        </motion.div>

        {/* Center 3D Character Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-[95vw] sm:w-[85vw] md:w-[75vw] lg:w-[1000px] xl:w-[1200px] h-[60vh] md:h-[75vh] lg:h-[90vh] pointer-events-none"
        >
          <div className="relative w-full h-full mx-auto flex items-end justify-center">
             <Image 
               src={heroImage} 
               alt="Hero Image" 
               fill 
               className="object-contain object-bottom filter saturate-[1.2] drop-shadow-2xl z-0"
               priority
             />
          </div>
        </motion.div>

        {/* Right Column Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="lg:w-1/3 flex flex-col items-start text-left z-20 mt-8 lg:mt-0 order-3"
        >
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5, delay: 0.5 }}
             className="relative flex flex-col items-start w-full"
          >
            <span className="text-[#2dd4bf] text-xl md:text-2xl font-medium tracking-wide mb-2 block">
              A Full Stack
            </span>
            
            <div className="relative flex justify-start items-center mt-2 w-full">
              {/* Back layered overlapping text (DEVELOPER) */}
              <div 
                className="absolute left-0 text-transparent font-black uppercase text-[4rem] sm:text-[5rem] md:text-[5.5rem] lg:text-[6rem] xl:text-[7.5rem] 2xl:text-[8rem] tracking-widest leading-none pointer-events-none select-none z-0 -translate-y-6 lg:-translate-y-10 whitespace-nowrap opacity-80"
                style={{ WebkitTextStroke: '1.5px rgba(20, 184, 166, 0.4)' }}
              >
                DEVELOPER
              </div>
              
              <div 
                className="absolute left-0 text-[#14b8a6] blur-[6px] opacity-20 font-black uppercase text-[4rem] sm:text-[5rem] md:text-[5.5rem] lg:text-[6rem] xl:text-[7.5rem] 2xl:text-[8rem] tracking-widest leading-none pointer-events-none select-none z-0 -translate-y-6 lg:-translate-y-10 whitespace-nowrap"
              >
                DEVELOPER
              </div>
              
              {/* Front Text (ENGINEER) */}
              <h1 className="text-white text-4xl md:text-5xl lg:text-5xl xl:text-[4.5rem] 2xl:text-[5.5rem] font-bold leading-none tracking-tight uppercase relative z-10 text-left">
                ENGINEER
              </h1>
            </div>
          </motion.div>
        </motion.div>

      </div>
      
      {/* Floating particles optional cool effect */}
      <div className="absolute inset-0 pointer-events-none z-0">
         <motion.div
            animate={{ 
               y: [0, -100, 0],
               opacity: [0, 0.5, 0]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            className="absolute top-[30%] left-[20%] w-2 h-2 bg-[#2dd4bf] rounded-full blur-[2px]"
         />
         <motion.div
            animate={{ 
               y: [0, -150, 0],
               opacity: [0, 0.4, 0]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: 'linear', delay: 2 }}
            className="absolute top-[60%] right-[30%] w-3 h-3 bg-blue-500 rounded-full blur-[3px]"
         />
      </div>

      {/* Bottom Left Icon */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-10 left-6 lg:left-12 z-30"
      >
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#2dd4bf] transition-colors duration-300">
          <Github size={36} />
        </a>
      </motion.div>

      {/* Bottom Right Resume */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-10 right-6 lg:right-12 z-30 flex items-center gap-2"
      >
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-[#a1a1aa] hover:text-white transition-colors duration-300 flex items-center gap-3 uppercase tracking-[0.2em] text-sm font-semibold group">
          RESUME
          <div className="p-2 border border-[#a1a1aa] rounded opacity-70 group-hover:opacity-100 group-hover:border-white transition-all">
            <FileText size={18} />
          </div>
        </a>
      </motion.div>
    </section>
  )
}
