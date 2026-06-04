'use client'

import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import { useEffect } from 'react'
import heroImage from './assets/new-hero-image.png'
// ────────────────────────────────────────────────────────────────────────────

export default function Hero() {
  const scrollControls = useAnimation()

  useEffect(() => {
    scrollControls.start({
      y: [0, 10, 0],
      opacity: [0.5, 1, 0.5],
      transition: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' },
    })
  }, [scrollControls])

  return (
    <section
      id="home"
      className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center"
      style={{ fontFamily: "'Anton', 'Bebas Neue', Impact, Arial Narrow, sans-serif" }}
    >
      {/* ── Google Font import ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

        .hero-letter {
          font-family: 'Anton', Impact, Arial Narrow, sans-serif;
          color: #F5F5F5;
          line-height: 0.88;
          letter-spacing: -0.01em;
          text-transform: uppercase;
          user-select: none;
        }

        /* Responsive font sizes */
        .display-text {
          font-size: clamp(120px, 18vw, 280px);
        }

        @media (max-width: 768px) {
          .display-text { font-size: clamp(72px, 22vw, 130px); }
        }
        @media (max-width: 480px) {
          .display-text { font-size: clamp(56px, 24vw, 100px); }
        }

        .green-badge {
          background: var(--neon, #B7FF2A);
          color: #000;
          font-family: 'Anton', Impact, Arial Narrow, sans-serif;
          font-size: clamp(13px, 1.4vw, 20px);
          letter-spacing: 0.05em;
          padding: 6px 18px;
          border-radius: 4px;
          transform: rotate(2deg);
          display: inline-block;
          white-space: nowrap;
          box-shadow: 0 0 18px rgba(183,255,42,0.35);
        }

        .zigzag-line {
          stroke: rgba(255,255,255,0.22);
          stroke-width: 1;
          fill: none;
        }

        .slant-bar {
          background: var(--neon, #B7FF2A);
          width: clamp(60px, 8vw, 110px);
          height: clamp(10px, 1.2vw, 18px);
          transform: rotate(-8deg);
          box-shadow: 0 0 14px rgba(183,255,42,0.5);
          border-radius: 2px;
        }

        .neon-dot {
          color: var(--neon, #B7FF2A);
          text-shadow: 0 0 20px rgba(158,240,47,0.9), 0 0 40px rgba(158,240,47,0.45);
        }
      `}</style>

      {/* ══════════════════════════════════════════════════════════════════════
          DESKTOP LAYOUT
      ══════════════════════════════════════════════════════════════════════ */}

      {/* ── Left: PORT. ─────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, x: -120 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-0 bottom-6 z-10 hidden md:flex flex-col items-start pl-4 lg:pl-8"
        style={{ paddingBottom: '25vh' }}
      >
        {/* Green slanted bar */}
        <div className="slant-bar mb-2 ml-2" />

        <div className="hero-letter display-text leading-none select-none">
          PORT<span className="neon-dot">.</span>
        </div>
      </motion.div>

      {/* ── Right: FOLIO + badge ─────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, x: 120 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="absolute right-0 bottom-6 z-10 hidden md:flex flex-col items-end pr-4 lg:pr-8"
        style={{ paddingBottom: '17vh' }}
      >
        <div className="hero-letter display-text leading-none select-none">
          FOLIO
        </div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, rotate: -4, scale: 0.85 }}
          animate={{ opacity: 1, rotate: 2, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.6, ease: 'backOut' }}
          whileHover={{ rotate: -1, scale: 1.06 }}
          className="mt-3 mr-2"
        >
          <span className="green-badge">Creative Technologist</span>
        </motion.div>
      </motion.div>

      {/* ══════════════════════════════════════════════════════════════════════
          MOBILE LAYOUT  (stacked)
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="flex md:hidden flex-col items-center justify-end w-full h-full pb-36 z-10 relative">
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-[70vw] max-w-[320px] h-[55vw] max-h-[260px] mb-2"
        >
          <Image
            src={heroImage}
            alt="Portrait"
            fill
            className="object-contain object-bottom drop-shadow-2xl"
            priority
          />
        </motion.div>

        {/* PORTFOLIO text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hero-letter text-center"
          style={{ fontSize: 'clamp(56px, 24vw, 100px)' }}
        >
          PORT<span className="neon-dot">.</span>FOLIO
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-4"
        >
          <span className="green-badge">Creative Technologist</span>
        </motion.div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          CENTER PORTRAIT  (desktop)
      ══════════════════════════════════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-40 left-1/2 -translate-x-1/2 z-20 hidden md:block"
        style={{
          width: 'clamp(340px, 38vw, 620px)',
          height: 'clamp(440px, 80vh, 900px)',
        }}
      >
        <Image
          src={heroImage}
          alt="Portrait"
          fill
          className="object-contain object-bottom drop-shadow-[0_0_60px_rgba(0,0,0,0.9)]"
          style={{ filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.85))' }}
          priority
        />
      </motion.div>

      {/* ══════════════════════════════════════════════════════════════════════
          DECORATIVE WIREFRAME LINES  (bottom left & right)
      ══════════════════════════════════════════════════════════════════════ */}
      <svg
        className="absolute bottom-20 left-0 z-5 hidden md:block pointer-events-none"
        width="38vw"
        height="120"
        viewBox="0 0 560 120"
        preserveAspectRatio="none"
      >
        <polyline
          className="zigzag-line"
          points="0,60 80,60 120,20 160,100 200,20 240,100 280,60 560,60"
        />
        <polyline
          className="zigzag-line"
          points="0,90 60,90 90,55 120,125 150,55 180,125 210,90 560,90"
          strokeOpacity="0.12"
        />
      </svg>

      <svg
        className="absolute bottom-20 right-0 z-5 hidden md:block pointer-events-none"
        width="38vw"
        height="120"
        viewBox="0 0 560 120"
        preserveAspectRatio="none"
        style={{ transform: 'scaleX(-1)' }}
      >
        <polyline
          className="zigzag-line"
          points="0,60 80,60 120,20 160,100 200,20 240,100 280,60 560,60"
        />
        <polyline
          className="zigzag-line"
          points="0,90 60,90 90,55 120,125 150,55 180,125 210,90 560,90"
          strokeOpacity="0.12"
        />
      </svg>

      {/* ══════════════════════════════════════════════════════════════════════
          SCROLL INDICATOR  (bottom center)
      ══════════════════════════════════════════════════════════════════════ */}
      {/* <div className="absolute bottom-50 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1">
        <span
          style={{
            fontFamily: 'Anton, Impact, sans-serif',
            fontSize: '11px',
            letterSpacing: '0.25em',
            color: 'rgba(255,255,255,0.45)',
          }}
        >
          SCROLL
        </span>
        <motion.div
          animate={scrollControls}
          style={{
            width: 1,
            height: 32,
            background: 'rgba(255,255,255,0.3)',
          }}
        />
      </div> */}
    </section>
  )
}