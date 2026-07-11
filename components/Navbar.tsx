'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ShoppingBag, Menu, X, MessageCircle } from 'lucide-react'

const navLinks = [
  { href: '/products', label: 'Produk' },
  { href: '/about', label: 'Tentang' },
  { href: '/about#proses', label: 'Proses' },
  { href: '/order', label: 'Pesan' },
]

export default function Navbar({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (!transparent) return
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [transparent])

  const isLight = !transparent || scrolled

  return (
    <>
      {/* ── Main Navbar ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: isLight
            ? 'rgba(250,247,242,0.95)'
            : 'transparent',
          backdropFilter: isLight ? 'blur(12px)' : 'none',
          borderBottom: isLight ? '1px solid #E8E3DA' : 'none',
          // account for announcement bar height (~36px)
          top: '36px',
        }}
      >
        <nav className="container-jl flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 no-underline" style={{ textDecoration: 'none' }}>
            {/* Hexagon SVG */}
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <polygon
                points="18,2 32,10 32,26 18,34 4,26 4,10"
                fill={isLight ? '#1B4332' : '#F5ECD7'}
                stroke="none"
              />
              <text
                x="18" y="23"
                textAnchor="middle"
                fontSize="13"
                fontWeight="700"
                fontFamily="serif"
                fill={isLight ? '#F5ECD7' : '#1B4332'}
              >K</text>
            </svg>
            <div>
              <span
                className="block label-caps"
                style={{
                  color: isLight ? '#414844' : 'rgba(245,236,215,0.7)',
                  fontSize: '9px',
                  letterSpacing: '0.18em',
                }}
              >
                TOKO KOPI
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-playfair), serif',
                  fontSize: '16px',
                  fontWeight: 600,
                  color: isLight ? '#1A1C1A' : '#F5ECD7',
                  lineHeight: 1,
                }}
              >
                Jaya Lestari
              </span>
            </div>
          </Link>

          {/* Center nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="label-caps transition-colors duration-200 no-underline"
                style={{
                  color: isLight
                    ? pathname === link.href ? '#1B4332' : '#414844'
                    : pathname === link.href ? '#C17A3B' : 'rgba(245,236,215,0.8)',
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 btn-outline-forest transition-all"
              style={{
                padding: '8px 16px',
                fontSize: '11px',
                borderColor: isLight ? '#1B4332' : 'rgba(245,236,215,0.5)',
                color: isLight ? '#1B4332' : '#F5ECD7',
              }}
            >
              <MessageCircle size={13} />
              WhatsApp
            </a>
            <button
              aria-label="Shopping bag"
              className="p-1"
              style={{ color: isLight ? '#1A1C1A' : '#F5ECD7' }}
            >
              <ShoppingBag size={20} />
            </button>
            {/* Hamburger */}
            <button
              aria-label="Toggle menu"
              onClick={() => setMenuOpen(true)}
              className="md:hidden p-1"
              style={{ color: isLight ? '#1A1C1A' : '#F5ECD7' }}
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile Menu Overlay ── */}
      <div
        className="fixed inset-0 z-[100] flex flex-col transition-all duration-500 md:hidden"
        style={{
          background: '#1B4332',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'all' : 'none',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
        }}
      >
        <div className="flex justify-between items-center p-6">
          <span
            style={{
              fontFamily: 'var(--font-playfair), serif',
              fontSize: '18px',
              fontWeight: 600,
              color: '#F5ECD7',
            }}
          >
            Jaya Lestari
          </span>
          <button
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            style={{ color: '#F5ECD7' }}
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center flex-1 gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-playfair), serif',
                fontSize: '32px',
                fontWeight: 600,
                color: '#F5ECD7',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-4"
          >
            <MessageCircle size={16} />
            Pesan via WhatsApp
          </a>
        </div>

        <div className="p-8 text-center">
          <p className="label-caps" style={{ color: 'rgba(245,236,215,0.4)' }}>
            ROASTERY · HUTAN CEMPAKA · PRIGEN · 875 MDPL
          </p>
        </div>
      </div>
    </>
  )
}
