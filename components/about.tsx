'use client'

import { motion } from 'framer-motion'
import { VT323, Space_Mono } from 'next/font/google'
import Image from 'next/image'

const vt323 = VT323({ weight: '400', subsets: ['latin'], display: 'swap' })
const spaceMono = Space_Mono({ weight: ['400', '700'], subsets: ['latin'], display: 'swap' })

export default function About() {
  return (
    <section id="about" className="min-h-screen w-full bg-black text-white overflow-x-hidden relative flex flex-col items-center justify-center py-12 px-6 sm:px-12 md:px-20">
      
      <div className="w-full max-w-6xl mx-auto relative flex flex-col md:flex-row items-start justify-between gap-12 md:gap-4">
        
        {/* Top/Center Image Block - Layered dynamically */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-16 md:-top-24 z-10 w-[90%] max-w-[420px] aspect-[16/9] overflow-hidden">
          <Image
            src="/assets/parash.png"
            alt="Parash Rautela"
            width={420}
            height={236}
            className="w-full h-full object-cover object-center"
            priority
          />
        </div>

        {/* Left Column Text Content */}
        <div className="flex flex-col justify-center text-left pt-36 md:pt-28 z-20 max-w-md w-full">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className={`${vt323.className} text-[#444444] text-3xl sm:text-4xl leading-none mb-12 sm:mb-16`}
          >
            you came<br/>
            to this Page you are<br/>
            definatev more then a viewer
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p className={`${spaceMono.className} text-white tracking-widest text-sm uppercase mb-1`}>
              HII!! MYSELF
            </p>
            <h1 
              className={`${vt323.className} text-white leading-[0.85] tracking-tighter`}
              style={{ fontSize: 'clamp(4.5rem, 10vw, 7.5rem)' }}
            >
              PARASH<br/>RAUTELA
            </h1>
          </motion.div>
        </div>

        {/* Right Column Bio Content */}
        <div className="flex flex-col justify-end items-start md:items-end text-left md:text-right pt-8 md:pt-48 z-20 max-w-xl w-full ml-auto">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className={`${spaceMono.className} space-y-6 md:max-w-md`}
          >
            <p className="text-[#cccccc] text-[13px] sm:text-sm leading-relaxed tracking-tight">
              Currently working with <span className="text-white font-bold">early-stage founders</span> and I love the <span className="text-white font-bold">chaos</span> of it. Where the product only exists in someone's head and I have to help pull it into the real world. Strategy, design, execution I <span className="text-white font-bold">own all of it</span>. That's the <span className="text-white font-bold">0-1</span> space. That's where I do my best work.
            </p>
            <p className="text-[#cccccc] text-[13px] sm:text-sm leading-relaxed tracking-tight">
              <span className="text-white font-bold">10k Designers Cohort 10</span> is where it all started. Then <span className="text-white font-bold">Nirman</span>, shipping MVPs. Then <span className="text-white font-bold">Mercle</span>, getting deep into 3D, motion and the visual craft of products. One thing led to the next. Now looking to take <span className="text-white font-bold">everything</span> I've built and go all in <span className="text-white font-bold">full time</span>, <span className="text-white font-bold">deeper work</span>, <span className="text-white font-bold">bigger problems</span>.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  )
}