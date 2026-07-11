'use client'

import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/products', label: 'Produk' },
  { href: '/about', label: 'Tentang' },
  { href: '/about#proses', label: 'Proses' },
  { href: '/order', label: 'Pesan' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#0F2419', color: '#F5ECD7' }}>
      <div className="container-jl py-16">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
          {/* Brand + Hanko stamp */}
          <div className="max-w-xs">
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
              <svg width="40" height="40" viewBox="0 0 36 36" fill="none">
                <polygon points="18,2 32,10 32,26 18,34 4,26 4,10" fill="#C17A3B" />
                <text x="18" y="23" textAnchor="middle" fontSize="13" fontWeight="700" fontFamily="serif" fill="#FAF7F2">K</text>
              </svg>
              <div>
                <span className="block" style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '18px', fontWeight: 600 }}>
                  Toko Kopi Jaya Lestari
                </span>
              </div>

              {/* Hanko stamp */}
              <div className="hanko-stamp" aria-hidden style={{ borderColor: 'rgba(193,122,59,0.6)' }}>
                <span style={{ color: 'rgba(193,122,59,0.7)', fontSize: 7 }}>純{'\n'}JAYA{'\n'}LESTARI</span>
              </div>
            </div>
            <p className="label-caps" style={{ color: 'rgba(245,236,215,0.5)', lineHeight: 1.8 }}>
              ROASTERY · HUTAN CEMPAKA<br />
              PRIGEN, PASURUAN · 875 MDPL
            </p>
            <span className="sumi-divider" style={{ background: 'rgba(245,236,215,0.2)', marginTop: 16 }} />
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-3">
            <p className="label-caps mb-2" style={{ color: 'rgba(245,236,215,0.4)' }}>NAVIGASI</p>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link label-caps"
                style={{ color: 'rgba(245,236,215,0.6)', textDecoration: 'none' }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact & social */}
          <div className="flex flex-col gap-4">
            <p className="label-caps mb-2" style={{ color: 'rgba(245,236,215,0.4)' }}>HUBUNGI KAMI</p>
            <a
              href="https://wa.me/6281234567890"
              className="btn-gold"
              style={{ display: 'inline-flex', width: 'fit-content' }}
            >
              Pesan via WhatsApp 🟢
            </a>
            <div className="flex gap-4 mt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{ color: 'rgba(245,236,215,0.5)' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                style={{ color: 'rgba(245,236,215,0.5)' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.72a4.85 4.85 0 01-1.01-.03z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid #414844', marginBottom: '24px' }} />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="label-sm" style={{ color: 'rgba(245,236,215,0.4)' }}>
            Part of <span style={{ color: '#C17A3B' }}>@hutan.cempaka</span>
          </p>
          <p className="label-sm" style={{ color: 'rgba(245,236,215,0.4)' }}>
            © 2025 Toko Kopi Jaya Lestari. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
