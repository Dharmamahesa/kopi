'use client'

import Link from 'next/link'
import { MessageCircle } from 'lucide-react'
import Image from 'next/image'

const navLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/products', label: 'Produk' },
  { href: '/about', label: 'Tentang' },
  { href: '/about#proses', label: 'Proses' },
  { href: '/order', label: 'Pesan' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#2C3E35', color: '#F0EBE0' }}>
      {/* Botanical top border — SVG branch as a thin band */}
      <div style={{ height: 48, background: '#2C3E35', overflow: 'hidden', position: 'relative', opacity: 0.25 }}>
        <svg viewBox="0 0 1200 48" fill="none" width="100%" height="48" preserveAspectRatio="none">
          <path d="M0 24 C100 12 200 36 300 24 C400 12 500 36 600 24 C700 12 800 36 900 24 C1000 12 1100 36 1200 24"
            stroke="#F0EBE0" strokeWidth="1.5" fill="none" />
          {[100, 250, 400, 600, 750, 950].map((x, i) => (
            <g key={i} transform={`translate(${x} ${i % 2 === 0 ? 18 : 30})`}>
              <path d="M0 0 C-6 -9 -14 -8 -12 -2 C-10 4 -3 3 0 0Z" stroke="#F0EBE0" strokeWidth="1" fill="none" />
              <path d="M0 0 C6 -8 14 -7 12 0 C10 7 3 5 0 0Z" stroke="#F0EBE0" strokeWidth="1" fill="none" />
            </g>
          ))}
        </svg>
      </div>

      <div className="container-jl" style={{ paddingTop: 56, paddingBottom: 40 }}>
        {/* Top row */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 48, marginBottom: 48 }}
          className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <Image
                src="/logojales.png"
                alt="Jaya Lestari"
                width={38}
                height={38}
                style={{ objectFit: 'contain', borderRadius: 6 }}
              />
              <span style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 18, fontWeight: 600, color: '#F0EBE0' }}>
                Toko Kopi Jaya Lestari
              </span>
            </div>
            <p style={{ fontSize: 14, color: 'rgba(240,235,224,0.55)', lineHeight: 1.7, maxWidth: 280 }}>
              Roastery kopi single origin Nusantara. Dipanggang kecil per batch di Hutan Cempaka, Prigen, 875 MDPL.
              Dikirim segar langsung ke pintumu.
            </p>
            <div style={{ marginTop: 20, display: 'flex', gap: 12 }}>
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                style={{ color: 'rgba(240,235,224,0.5)', transition: 'color 0.2s' }}
                onMouseOver={e => (e.currentTarget.style.color = '#8FAF97')}
                onMouseOut={e => (e.currentTarget.style.color = 'rgba(240,235,224,0.5)')}
                aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              {/* TikTok */}
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"
                style={{ color: 'rgba(240,235,224,0.5)', transition: 'color 0.2s' }}
                onMouseOver={e => (e.currentTarget.style.color = '#8FAF97')}
                onMouseOut={e => (e.currentTarget.style.color = 'rgba(240,235,224,0.5)')}
                aria-label="TikTok">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.72a4.85 4.85 0 01-1.01-.03z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="label-overline" style={{ marginBottom: 16 }}>Navigasi</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {navLinks.map(link => (
                <Link key={link.href} href={link.href}
                  style={{ fontSize: 14, color: 'rgba(240,235,224,0.6)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseOver={e => (e.currentTarget.style.color = '#F0EBE0')}
                  onMouseOut={e => (e.currentTarget.style.color = 'rgba(240,235,224,0.6)')}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="label-overline" style={{ marginBottom: 16 }}>Hubungi Kami</p>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer"
              className="btn-sage" style={{ marginBottom: 12 }}>
              <MessageCircle size={14} />
              WhatsApp 🟢
            </a>
            <p style={{ fontSize: 12, color: 'rgba(240,235,224,0.45)', lineHeight: 1.8, marginTop: 12 }}>
              Hutan Cempaka, Prigen<br />
              Pasuruan, Jawa Timur<br />
              875 MDPL
            </p>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(240,235,224,0.12)', paddingTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
          <p style={{ fontSize: 12, color: 'rgba(240,235,224,0.35)' }}>
            Part of <span style={{ color: '#8FAF97' }}>@hutan.cempaka</span>
          </p>
          <p style={{ fontSize: 12, color: 'rgba(240,235,224,0.35)' }}>
            © 2025 Toko Kopi Jaya Lestari. All rights reserved.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
