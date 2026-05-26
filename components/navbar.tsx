'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    let currentLastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > currentLastScrollY && currentScrollY > 10) {
        setIsVisible(false)
      } else if (currentScrollY < currentLastScrollY) {
        setIsVisible(true)
      } else if (currentScrollY <= 10) {
        setIsVisible(true)
      }

      currentLastScrollY = currentScrollY
    }

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 0) {
        setIsVisible(false)
      } else if (e.deltaY < 0) {
        setIsVisible(true)
      }
    }

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;
      
      if (deltaY > 0) { // dragging up = scrolling down
        setIsVisible(false);
      } else if (deltaY < 0) {
        setIsVisible(true);
      }
      touchStartY = touchY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('wheel', handleWheel, { passive: true })
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
    }
  }, [])

  const navItems = [
    { label: 'RESUME', href: '/resume' },
    { label: 'SKILLS', href: '/skills' },
    { label: 'ABOUT', href: '/about' },
    { label: 'PLAYGROUND', href: '/playground' },
  ]

  return (
    <>
      {/* Outer wrapper: full-width fixed, centers the navbar card */}
      <div
        style={{
          position: 'fixed',
          bottom: '32px',           // more lift for visible floating gap
          left: 0,
          right: 0,
          zIndex: 50,
          display: 'flex',
          justifyContent: 'center',
          padding: '0 24px',        // side padding so it doesn't touch screen edges on mobile
          pointerEvents: 'none',    // let clicks pass through the transparent wrapper
          transform: isVisible ? 'translateY(0)' : 'translateY(150%)',
          transition: 'transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
        }}
      >
        {/* The actual navbar card */}
        <nav
          style={{
            width: '100%',
            maxWidth: '820px',      // centered card with max width
            backgroundColor: '#6b7280',
            borderRadius: '14px',   // rounded pill-card look
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(0,0,0,0.45)',
            pointerEvents: 'all',   // re-enable clicks on the card itself
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'stretch',
              height: '72px',
            }}
          >
            {/* Left: Profile Photo — flush to card edge */}
            <div
              style={{
                width: '90px',
                flexShrink: 0,
                overflow: 'hidden',
              }}
            >
              <Link href="/" onClick={() => setIsOpen(false)} aria-label="Home">
                <Image
                  src="/profile-nav.png"
                  alt="Profile"
                  width={90}
                  height={72}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </Link>
            </div>

            {/* Center: Nav Links (desktop) */}
            <div
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                gap: '40px',
              }}
              className="hidden md:flex"
            >
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  style={{
                    fontFamily: '"Courier New", Courier, monospace',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.22em',
                    color: 'rgba(255,255,255,0.9)',
                    textDecoration: 'none',
                    textTransform: 'uppercase',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = '#fff')
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.9)')
                  }
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile: Hamburger (center) */}
            <div
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              className="flex md:hidden"
            >
              <button
                suppressHydrationWarning
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle navigation"
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#fff',
                  cursor: 'pointer',
                }}
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>

            {/* Right: CONNECT button — white box with margin so it floats inside card */}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '0 28px',
                margin: '8px 10px',         // inset so it looks like floating white box
                backgroundColor: '#fff',
                color: '#000',
                textDecoration: 'none',
                fontFamily: '"Courier New", Courier, monospace',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                flexShrink: 0,
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#e5e5e5'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#fff'
              }}
            >
              <span>CONNECT</span>
              <span style={{ fontSize: '18px', lineHeight: 1, fontWeight: 300 }}>+</span>
            </Link>
          </div>

          {/* Mobile Dropdown */}
          {isOpen && (
            <div
              style={{
                backgroundColor: '#6b7280',
                borderTop: '1px solid rgba(255,255,255,0.12)',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
              }}
              className="md:hidden"
            >
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  style={{
                    fontFamily: '"Courier New", Courier, monospace',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.22em',
                    color: 'rgba(255,255,255,0.9)',
                    textDecoration: 'none',
                    textTransform: 'uppercase',
                    padding: '12px 16px',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  {item.label}
                  <span style={{ color: 'rgba(255,255,255,0.5)' }}>→</span>
                </Link>
              ))}
            </div>
          )}
        </nav>
      </div>

    </>
  )
}