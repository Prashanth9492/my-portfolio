'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { label: 'RESUME', href: '/resume' },
    { label: 'ABOUT', href: '/about' },
    { label: 'PLAYGROUND', href: '/playground' },
  ]

  return (
    <nav
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: '#000',
        borderTop: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'stretch',
          height: '72px',
          borderTop: '1px solid rgba(255,255,255,0.12)',
        }}
      >
        {/* Left: Profile Photo */}
        <div
          style={{
            width: '90px',
            flexShrink: 0,
            borderRight: '1px solid rgba(255,255,255,0.12)',
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
                filter: 'brightness(0.85)',
              }}
            />
          </Link>
        </div>

        {/* Center: Nav Links */}
        <div
          style={{
            flex: 1,
            display: 'flex',
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
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.22em',
                color: 'rgba(255,255,255,0.75)',
                textDecoration: 'none',
                textTransform: 'uppercase',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = '#fff')
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.75)')
              }
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger placeholder for center spacing */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          className="flex md:hidden"
        >
          <button
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

        {/* Right: Connect Button */}
        <Link
          href="/contact"
          onClick={() => setIsOpen(false)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '0 28px',
            backgroundColor: '#fff',
            color: '#000',
            textDecoration: 'none',
            fontFamily: '"Courier New", Courier, monospace',
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            borderLeft: '1px solid rgba(255,255,255,0.12)',
            transition: 'background-color 0.2s, color 0.2s',
            flexShrink: 0,
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement
            el.style.backgroundColor = '#e5e5e5'
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement
            el.style.backgroundColor = '#fff'
          }}
        >
          <span>CONNECT</span>
          <span style={{ fontSize: '16px', lineHeight: 1 }}>+</span>
        </Link>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          style={{
            backgroundColor: '#000',
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
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.22em',
                color: 'rgba(255,255,255,0.75)',
                textDecoration: 'none',
                textTransform: 'uppercase',
                padding: '12px 16px',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              {item.label}
              <span style={{ color: 'rgba(255,255,255,0.35)' }}>→</span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
