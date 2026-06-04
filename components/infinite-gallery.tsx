'use client'

import { useEffect, useRef, useCallback, useState } from 'react'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'

// ─── Project Data ───────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack solution with real-time inventory, payment integration & admin dashboard.',
    image: 'https://images.unsplash.com/photo-1460925895917-adf4e565c479?w=800&h=500&fit=crop&auto=format',
    tags: ['Next.js', 'PostgreSQL', 'Stripe'],
    type: 'landscape', // w: 420, h: 280
    accent: '#6366f1',
  },
  {
    id: 2,
    title: 'Task Management',
    description: 'Collaborative tool with real-time updates and advanced filtering.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=700&fit=crop&auto=format',
    tags: ['React', 'Firebase'],
    type: 'portrait', // w: 280, h: 380
    accent: '#06b6d4',
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    description: 'Interactive data visualization with custom reports and performance metrics.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop&auto=format',
    tags: ['D3.js', 'Node.js'],
    type: 'square', // w: 320, h: 320
    accent: '#ec4899',
  },
  {
    id: 4,
    title: 'Social Media App',
    description: 'Social platform with auth, real-time messaging & advanced feed algorithms.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop&auto=format',
    tags: ['Next.js', 'MongoDB', 'Socket.io'],
    type: 'landscape',
    accent: '#f59e0b',
  },
  {
    id: 5,
    title: 'AI Chat Interface',
    description: 'Modern chat powered by AI with natural language processing.',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=500&h=700&fit=crop&auto=format',
    tags: ['OpenAI API', 'TypeScript'],
    type: 'portrait',
    accent: '#10b981',
  },
  {
    id: 6,
    title: 'Design System',
    description: 'Comprehensive component library with storybook documentation.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=600&fit=crop&auto=format',
    tags: ['React', 'Storybook'],
    type: 'square',
    accent: '#8b5cf6',
  },
  {
    id: 7,
    title: 'Motion Portfolio',
    description: 'Award-winning creative developer portfolio with GSAP animations.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop&auto=format',
    tags: ['GSAP', 'WebGL', 'Three.js'],
    type: 'landscape',
    accent: '#ef4444',
  },
  {
    id: 8,
    title: 'Crypto Tracker',
    description: 'Real-time cryptocurrency tracking with portfolio management.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=700&fit=crop&auto=format',
    tags: ['React', 'WebSocket'],
    type: 'portrait',
    accent: '#06b6d4',
  },
  {
    id: 9,
    title: 'SaaS Dashboard',
    description: 'Enterprise dashboard with role management and analytics.',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=600&fit=crop&auto=format',
    tags: ['Next.js', 'Prisma'],
    type: 'square',
    accent: '#6366f1',
  },
]

// ─── Card dimensions by type ─────────────────────────────────────────────────
const CARD_SIZES = {
  landscape: { w: 420, h: 270 },
  portrait:  { w: 270, h: 370 },
  square:    { w: 320, h: 320 },
}

const GAP = 8 // gap between cards in px

// ─── Build the repeating tile grid ───────────────────────────────────────────
// We arrange all cards in a structured 3-row layout that tiles seamlessly.
// Layout rows (y offset from tile origin):
//   Row 0: landscape  portrait  square    landscape  portrait
//   Row 1: portrait   square    landscape portrait   square
//   Row 2: square     landscape portrait  square     landscape

type CardLayout = {
  projectIndex: number
  x: number
  y: number
  w: number
  h: number
}

function buildTileLayout(): { layouts: CardLayout[]; tileW: number; tileH: number } {
  // We'll place 9 cards in a 3-column × 3-row structure.
  // Each "slot" is placed at pre-computed offsets for varied sizes but aligned.

  const ROW_HEIGHT = [CARD_SIZES.landscape.h, CARD_SIZES.portrait.h, CARD_SIZES.square.h]
  const COL_WIDTH  = [CARD_SIZES.landscape.w, CARD_SIZES.portrait.w, CARD_SIZES.square.w]

  // Pattern: 3x3 grid where each cell picks a card type
  // (projectIndex, type)
  const GRID: { proj: number; type: keyof typeof CARD_SIZES }[][] = [
    [{ proj: 0, type: 'landscape' }, { proj: 1, type: 'portrait' }, { proj: 2, type: 'square' }],
    [{ proj: 3, type: 'portrait'  }, { proj: 4, type: 'square'   }, { proj: 5, type: 'landscape' }],
    [{ proj: 6, type: 'square'    }, { proj: 7, type: 'landscape'}, { proj: 8, type: 'portrait' }],
  ]

  // Compute consistent column widths: use the max width in each column
  const colWidths = [0, 1, 2].map(col =>
    Math.max(...GRID.map(row => CARD_SIZES[row[col].type].w))
  )
  const rowHeights = GRID.map(row =>
    Math.max(...row.map(cell => CARD_SIZES[cell.type].h))
  )

  const layouts: CardLayout[] = []
  let cy = 0
  for (let r = 0; r < GRID.length; r++) {
    let cx = 0
    for (let c = 0; c < GRID[r].length; c++) {
      const cell = GRID[r][c]
      const { w, h } = CARD_SIZES[cell.type]
      // center card within its slot
      const slotW = colWidths[c]
      const slotH = rowHeights[r]
      layouts.push({
        projectIndex: cell.proj,
        x: cx + (slotW - w) / 2,
        y: cy + (slotH - h) / 2,
        w,
        h,
      })
      cx += slotW + GAP
    }
    cy += rowHeights[r] + GAP
  }

  const tileW = colWidths.reduce((a, b) => a + b, 0) + GAP * (colWidths.length - 1) + GAP
  const tileH = rowHeights.reduce((a, b) => a + b, 0) + GAP * (rowHeights.length - 1) + GAP

  return { layouts, tileW, tileH }
}

// ─── Visible card instance (rendered in the DOM) ─────────────────────────────
type CardInstance = CardLayout & { key: string; tileRow: number; tileCol: number }

// ─── Main Component ───────────────────────────────────────────────────────────
export default function InfiniteGallery() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef    = useRef<HTMLDivElement>(null)
  const rafRef       = useRef<number | null>(null)

  // camera position (world offset)
  const camX = useRef(0)
  const camY = useRef(0)

  // velocity for smooth scrolling
  const velX = useRef(0)
  const velY = useRef(0)

  // smooth target wheel values
  const targetVelX = useRef(0)
  const targetVelY = useRef(0)

  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [isMounted, setIsMounted] = useState(false)

  const { layouts, tileW, tileH } = buildTileLayout()

  // Mouse move handler for 3D card tilt and glare effect
  const handleCardMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * -10 // Max 10 deg
    const rotateY = ((x - centerX) / centerX) * 10
    
    card.style.setProperty('--mouse-x', `${x}px`)
    card.style.setProperty('--mouse-y', `${y}px`)
    card.style.setProperty('--rotate-x', `${rotateX}deg`)
    card.style.setProperty('--rotate-y', `${rotateY}deg`)
  }, [])

  const handleCardMouseLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    card.style.setProperty('--rotate-x', `0deg`)
    card.style.setProperty('--rotate-y', `0deg`)
    setHoveredCard(null)
  }, [])

  // We render a pool of tiles (3×3 visible area + 1 buffer on each side = 5×5)
  // and reposition them using modulo math every animation frame.
  const TILE_RANGE = 2 // -2 to +2 tiles in each direction

  function getTileInstances(): CardInstance[] {
    const instances: CardInstance[] = []
    for (let tr = -TILE_RANGE; tr <= TILE_RANGE; tr++) {
      for (let tc = -TILE_RANGE; tc <= TILE_RANGE; tc++) {
        layouts.forEach(card => {
          instances.push({
            ...card,
            tileRow: tr,
            tileCol: tc,
            key: `${tc}_${tr}_${card.projectIndex}`,
          })
        })
      }
    }
    return instances
  }

  const allInstances = getTileInstances()

  // ── Animation loop ──────────────────────────────────────────────────────────
  const animate = useCallback(() => {
    if (!canvasRef.current) return

    // Interpolate velocity for smooth scrolling
    velX.current += (targetVelX.current - velX.current) * 0.08
    velY.current += (targetVelY.current - velY.current) * 0.08

    // Decay the target velocity when user stops scrolling
    targetVelX.current *= 0.9
    targetVelY.current *= 0.9

    camX.current += velX.current
    camY.current += velY.current

    // Wrap camera within tile dimensions for seamless infinite loop
    camX.current = ((camX.current % tileW) + tileW) % tileW
    camY.current = ((camY.current % tileH) + tileH) % tileH

    // Apply to canvas via translate3d (GPU accelerated)
    canvasRef.current.style.transform =
      `translate3d(${-camX.current}px, ${-camY.current}px, 0)`

    rafRef.current = requestAnimationFrame(animate)
  }, [tileW, tileH])

  // ── Mount / Unmount ─────────────────────────────────────────────────────────
  useEffect(() => {
    setIsMounted(true)
    // Start centered
    camX.current = tileW * 1 + tileW / 2 - (window.innerWidth / 2)
    camY.current = tileH * 1 + tileH / 2 - (window.innerHeight / 2)

    rafRef.current = requestAnimationFrame(animate)

    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      // Scale wheel delta to target velocity (positive scrolling = move camera)
      targetVelX.current += e.deltaX * 0.15
      targetVelY.current += e.deltaY * 0.15
    }
    
    // Use passive: false to prevent default scrolling of body
    window.addEventListener('wheel', onWheel, { passive: false })

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener('wheel', onWheel)
    }
  }, [animate, tileW, tileH])

  if (!isMounted) return null

  return (
    <div
      ref={containerRef}
      id="infinite-gallery-container"
      className="infinite-gallery-container"
    >
      {/* Subtle dot-grid background */}
      <div className="gallery-bg-dots" />

      {/* Canvas: the giant world that moves */}
      <div
        ref={canvasRef}
        className="gallery-canvas"
        style={{
          width:  tileW * (TILE_RANGE * 2 + 1),
          height: tileH * (TILE_RANGE * 2 + 1),
        }}
      >
        {allInstances.map(inst => {
          const project = PROJECTS[inst.projectIndex]
          // Absolute position within the giant canvas
          const absX = (inst.tileCol + TILE_RANGE) * tileW + inst.x
          const absY = (inst.tileRow + TILE_RANGE) * tileH + inst.y
          const isHovered = hoveredCard === inst.key

          return (
            <div
              key={inst.key}
              className={`gallery-card ${inst.w > inst.h ? 'card-landscape' : inst.w === inst.h ? 'card-square' : 'card-portrait'} ${isHovered ? 'card-hovered' : ''}`}
              style={{
                position: 'absolute',
                left: absX,
                top:  absY,
                width:  inst.w,
                height: inst.h,
                '--accent': project.accent,
              } as React.CSSProperties}
              onMouseEnter={() => setHoveredCard(inst.key)}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              {/* Image */}
              <div className="card-image-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  draggable={false}
                  className="card-image"
                />
                <div className="card-image-overlay" />
              </div>

              {/* Glowing Interactive Gradiant on Hover */}
              <div className="card-glare" />

              {/* Content overlay */}
              <div className="card-content">
                <div className="card-meta">
                  <div className="card-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="card-tag">{tag}</span>
                    ))}
                  </div>
                  <h3 className="card-title">{project.title}</h3>
                  <p className="card-desc">{project.description}</p>
                </div>
                <div className="card-actions">
                  <button className="card-btn card-btn-primary" onClick={e => e.stopPropagation()}>
                    <ExternalLink size={14} />
                    <span>Live</span>
                  </button>
                  <button className="card-btn card-btn-secondary" onClick={e => e.stopPropagation()}>
                    <Github size={14} />
                    <span>Code</span>
                  </button>
                </div>
              </div>

              {/* Corner icon */}
              <div className="card-corner-icon">
                <ArrowUpRight size={16} />
              </div>
            </div>
          )
        })}
      </div>

      {/* HUD overlays */}
      <div className="gallery-hud-top">
        <div className="gallery-label">
          <span className="gallery-label-dot" />
          <span>Projects Gallery</span>
        </div>
        <div className="gallery-hint">Scroll to explore · {PROJECTS.length} projects</div>
      </div>

      {/* <div className="gallery-hud-bottom">
        <div className="gallery-nav-hint">
          <span>↑</span><span>↓</span><span>←</span><span>→</span>
          <span className="gallery-nav-hint-text">Scroll anywhere</span>
        </div>
      </div> */}

      <style>{`
        .infinite-gallery-container {
          position: fixed;
          inset: 0;
          overflow: hidden;
          background: #000;
          color: #fff;
          user-select: none;
          -webkit-user-select: none;
          touch-action: none;
        }

        /* Dot grid bg */
        .gallery-bg-dots {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgb(247, 242, 242) 1px, transparent 2px);
          background-size: 28px 28px;
          opacity: 0.16;
          pointer-events: none;
          z-index: 0;
        }

        /* Canvas */
        .gallery-canvas {
          position: absolute;
          top: 0;
          left: 0;
          will-change: transform;
          z-index: 1;
        }

        /* ── Card base ─────────────────────────────────────────────────────────── */
        .gallery-card {
          border-radius: 16px;
          overflow: hidden;
          background: #0b0b0b;
          box-shadow:
            0 4px 18px rgba(0,0,0,0.6),
            0 12px 40px rgba(0,0,0,0.7);
          transform: perspective(1200px) rotateX(var(--rotate-x, 0deg)) rotateY(var(--rotate-y, 0deg));
          transition:
            transform 0.2s cubic-bezier(0.2, 0, 0, 1),
            box-shadow 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          will-change: transform, box-shadow;
          display: flex;
          flex-direction: column;
        }

        .gallery-card:hover,
        .gallery-card.card-hovered {
          transform: perspective(1200px) scale(1.04) translateY(-4px) rotateX(var(--rotate-x, 0deg)) rotateY(var(--rotate-y, 0deg));
          box-shadow:
            0 2px 4px rgba(164, 161, 161, 0.48),
            0 8px 24px rgba(0,0,0,0.12),
            0 32px 70px rgba(0,0,0,0.18),
            0 0 0 1.5px var(--accent, #6366f1);
          z-index: 10;
        }

        /* ── Card Glare ────────────────────────────────────────────────────────── */
        .card-glare {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(
            circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
            rgba(255,255,255,0.25) 0%,
            rgba(255,255,255,0) 60%
          );
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 5;
        }

        .gallery-card:hover .card-glare,
        .gallery-card.card-hovered .card-glare {
          opacity: 1;
        }

        /* ── Image ─────────────────────────────────────────────────────────────── */
        .card-image-wrap {
          position: relative;
          flex: 1;
          min-height: 0;
          overflow: hidden;
        }

        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          will-change: transform;
          pointer-events: none;
        }

        .gallery-card:hover .card-image,
        .gallery-card.card-hovered .card-image {
          transform: scale(1.06);
        }

        .card-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 30%,
            rgba(10, 10, 10, 0.72) 100%
          );
          transition: opacity 0.4s ease;
          opacity: 0.5;
        }

        .gallery-card:hover .card-image-overlay,
        .gallery-card.card-hovered .card-image-overlay {
          opacity: 1;
        }

        /* ── Content overlay ───────────────────────────────────────────────────── */
        .card-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          transform: translateY(8px);
          opacity: 0;
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease;
        }

        .gallery-card:hover .card-content,
        .gallery-card.card-hovered .card-content {
          transform: translateY(0);
          opacity: 1;
        }

        .card-meta {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .card-tag {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          padding: 3px 8px;
          border-radius: 99px;
          background: var(--accent, #6366f1);
          color: #fff;
          opacity: 0.92;
        }

        .card-title {
          font-size: 17px;
          font-weight: 700;
          color: #fff;
          line-height: 1.3;
          margin: 0;
          letter-spacing: -0.01em;
        }

        .card-desc {
          font-size: 12px;
          color: rgba(255,255,255,0.75);
          line-height: 1.5;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .card-actions {
          display: flex;
          gap: 8px;
        }

        .card-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 7px 14px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          border: none;
          transition: background 0.2s, transform 0.15s;
        }

        .card-btn:active { transform: scale(0.96); }

        .card-btn-primary {
          background: var(--accent, #6366f1);
          color: #fff;
        }

        .card-btn-primary:hover {
          filter: brightness(1.12);
        }

        .card-btn-secondary {
          background: rgba(255,255,255,0.15);
          color: #fff;
          border: 1px solid rgba(255,255,255,0.25);
          backdrop-filter: blur(6px);
        }

        .card-btn-secondary:hover {
          background: rgba(255,255,255,0.25);
        }

        /* ── Corner icon ───────────────────────────────────────────────────────── */
        .card-corner-icon {
          position: absolute;
          top: 14px;
          right: 14px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255,255,255,0.18);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          opacity: 0;
          transform: scale(0.7) rotate(-45deg);
          transition: opacity 0.3s ease, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .gallery-card:hover .card-corner-icon,
        .gallery-card.card-hovered .card-corner-icon {
          opacity: 1;
          transform: scale(1) rotate(0deg);
        }

        /* ── HUD ───────────────────────────────────────────────────────────────── */
        .gallery-hud-top {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          padding: 20px 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 100;
          background: linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, transparent 100%);
          pointer-events: none;
        }

        .gallery-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #fff;
        }

        .gallery-label-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent, #6366f1);
          box-shadow: 0 0 10px rgba(99,102,241,0.5);
          animation: pulse-dot 2.4s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(1.5); }
        }

        .gallery-hint {
          font-size: 12px;
          color: #bfbfbf;
          letter-spacing: 0.04em;
        }

        .gallery-hud-bottom {
          position: fixed;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 100;
          pointer-events: none;
        }

        .gallery-nav-hint {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 99px;
          padding: 8px 18px;
          font-size: 13px;
          color: #6b6058;
          box-shadow: 0 2px 12px rgba(0,0,0,0.08);
        }

        .gallery-nav-hint span {
          opacity: 0.7;
          font-weight: 500;
        }

        .gallery-nav-hint-text {
          margin-left: 4px;
          opacity: 1 !important;
          font-weight: 500;
          color: #3d3530;
        }
      `}</style>
    </div>
  )
}
