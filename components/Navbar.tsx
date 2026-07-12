'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import { LogoBranchIcon } from './illustrations/Botanicals'

const navLinks = [
  { href: '/products', label: 'Produk' },
  { href: '/about',    label: 'Tentang' },
  { href: '/about#proses', label: 'Proses' },
  { href: '/order',    label: 'Pesan' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: '#F0EBE0',
          borderBottom: scrolled ? '1px solid #DDD5C8' : '1px solid transparent',
          transition: 'border-color 0.3s ease',
        }}
      >
        <div className="container-jl" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <LogoBranchIcon size={26} color="#3D6B52" />
            <span style={{
              fontFamily: 'var(--font-playfair), serif',
              fontSize: '18px',
              fontWeight: 600,
              color: '#2C3E35',
              letterSpacing: '-0.01em',
            }}>
              Jaya Lestari
            </span>
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="hidden md:flex">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link${pathname === link.href ? ' nav-link-active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
              style={{ color: '#3D6B52', fontWeight: 500 }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <MessageCircle size={14} />
                WhatsApp
              </span>
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#2C3E35', padding: 4 }}
            aria-label="Buka menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: '#F0EBE0',
        display: 'flex',
        flexDirection: 'column',
        padding: '24px',
        opacity: menuOpen ? 1 : 0,
        pointerEvents: menuOpen ? 'all' : 'none',
        transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'opacity 0.35s ease, transform 0.4s cubic-bezier(0.23,1,0.32,1)',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 48 }}>
          <span style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 20, fontWeight: 600, color: '#2C3E35' }}>
            Jaya Lestari
          </span>
          <button onClick={() => setMenuOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#2C3E35', padding: 4 }}>
            <X size={24} />
          </button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 28, fontWeight: 400, color: '#2C3E35', textDecoration: 'none' }}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div style={{ marginTop: 'auto' }}>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-sage"
          >
            <MessageCircle size={16} />
            Pesan via WhatsApp
          </a>
          <p style={{ marginTop: 16, fontSize: 12, color: '#8FAF97', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'var(--font-inter), sans-serif' }}>
            ROASTERY · PRIGEN · 875 MDPL
          </p>
        </div>
      </div>
    </>
  )
}
