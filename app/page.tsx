'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import AnnouncementBar from '@/components/AnnouncementBar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import VideoSlideshow from '@/components/VideoSlideshow'
import ProductCarousel from '@/components/ProductCarousel'
import StatsStrip from '@/components/StatsStrip'
import OriginMap from '@/components/OriginMap'
import ProcessTimeline from '@/components/ProcessTimeline'
import { products, bundles } from '@/data/products'
import { MessageCircle } from 'lucide-react'

type Tab = 'biji' | 'bubuk' | 'bundle'

const caraPesanSteps = [
  {
    number: '1',
    title: 'Pilih Kopi',
    desc: 'Browse katalog kami, pilih varian single origin & ukuran yang kamu inginkan.',
  },
  {
    number: '2',
    title: 'Hubungi Kami',
    desc: 'Kirim pesananmu via WhatsApp. Kami konfirmasi dalam 1×24 jam.',
  },
  {
    number: '3',
    title: 'Terima Segar',
    desc: 'Dikemas vakum, dikirim dalam 2–3 hari kerja langsung ke pintumu.',
  },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>('biji')
  const [heroVisible, setHeroVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const tabProducts = activeTab === 'bundle' ? bundles : products
  // For biji/bubuk we show all single-origin products (same underlying beans)
  // In a real app these would be different SKUs; for now show same list

  return (
    <main className="flex-1">
      {/* ── Announcement + Navbar ── */}
      <AnnouncementBar />
      <Navbar transparent />

      {/* ══════════════════════════════════════════
          HERO — Split 50/50
      ══════════════════════════════════════════ */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: '100vh',
          paddingTop: 36, // announcement bar height
        }}
        className="hero-grid"
      >
        {/* LEFT — Cinematic dark */}
        <div
          className="film-grain relative overflow-hidden flex flex-col justify-end"
          style={{
            background: 'linear-gradient(160deg, #0F2419 0%, #1B4332 50%, #243B2F 100%)',
            padding: '80px 64px',
            minHeight: '100vh',
          }}
        >
          {/* Vignette */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.55) 100%)',
            zIndex: 1, pointerEvents: 'none',
          }} />
          {/* Light leaks */}
          <div style={{
            position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
            background: `
              radial-gradient(ellipse 55% 45% at 0% 0%, rgba(193,122,59,0.20) 0%, transparent 70%),
              radial-gradient(ellipse 50% 40% at 100% 100%, rgba(193,122,59,0.10) 0%, transparent 70%)
            `,
          }} />
          {/* Letterbox top */}
          <div style={{
            position: 'absolute', top: 36, left: 0, right: 0, height: 48,
            background: '#0F2419', zIndex: 10,
          }} />
          {/* Letterbox bottom */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: 48,
            background: '#0F2419', zIndex: 10,
          }} />

          {/* Content */}
          <div style={{ position: 'relative', zIndex: 5 }}>
            {/* Eyebrow */}
            <p
              className="label-caps mb-6"
              style={{
                color: '#C17A3B',
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? 'none' : 'translateY(12px)',
                transition: 'opacity 0.8s ease, transform 0.8s ease',
              }}
            >
              ROASTERY · HUTAN CEMPAKA · PRIGEN · 875 MDPL
            </p>

            {/* Heading */}
            <div
              style={{
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? 'none' : 'translateY(20px)',
                transition: 'opacity 0.9s ease 0.15s, transform 0.9s ease 0.15s',
              }}
            >
              <h1 className="display-lg mb-1" style={{ color: '#F5ECD7', fontWeight: 400, fontStyle: 'normal' }}>
                dari lereng
              </h1>
              <h1 className="display-lg mb-2" style={{ color: '#C17A3B', fontWeight: 700, fontStyle: 'italic' }}>
                Arjuno.
              </h1>
              {/* Decorative wavy strokes */}
              <svg width="120" height="16" viewBox="0 0 120 16" fill="none" style={{ marginBottom: 24 }}>
                <path d="M4 12 Q14 4 24 12 Q34 20 44 12 Q54 4 64 12" stroke="#C17A3B" strokeWidth="2" fill="none" strokeLinecap="round"/>
                <path d="M20 12 Q30 4 40 12 Q50 20 60 12 Q70 4 80 12" stroke="#C17A3B" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6"/>
                <path d="M36 12 Q46 4 56 12 Q66 20 76 12 Q86 4 96 12" stroke="#C17A3B" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.35"/>
              </svg>
            </div>

            {/* Body */}
            <p
              className="body-md mb-10"
              style={{
                color: 'rgba(245,236,215,0.7)',
                maxWidth: 380,
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? 'none' : 'translateY(16px)',
                transition: 'opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s',
              }}
            >
              Biji kopi single origin Nusantara, dipanggang kecil per batch di roastery kami.
              Dikirim langsung ke pintumu.
            </p>

            {/* Buttons */}
            <div
              style={{
                display: 'flex', gap: 16, flexWrap: 'wrap',
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? 'none' : 'translateY(16px)',
                transition: 'opacity 0.9s ease 0.45s, transform 0.9s ease 0.45s',
              }}
            >
              <Link href="/products" className="btn-gold">
                Belanja Sekarang
              </Link>
              <Link href="/about#proses" className="btn-secondary">
                Kenali Proses Kami
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT — Video Slideshow */}
        <div style={{ position: 'relative', minHeight: '100vh' }}>
          <VideoSlideshow />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STATS STRIP
      ══════════════════════════════════════════ */}
      <StatsStrip />

      {/* ══════════════════════════════════════════
          PRODUK UNGGULAN
      ══════════════════════════════════════════ */}
      <section style={{ background: '#fff', paddingTop: 80, paddingBottom: 80 }}>
        <div className="container-jl">
          {/* Headline */}
          <div style={{ marginBottom: 40 }}>
            <p className="label-caps mb-3" style={{ color: '#C17A3B' }}>PILIHAN TERBAIK</p>
            <h2 className="headline-md">produk unggulan</h2>
          </div>

          {/* Tab switcher */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 40, flexWrap: 'wrap' }}>
            {(['biji', 'bubuk', 'bundle'] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  padding: '8px 20px',
                  borderRadius: 9999,
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-playfair), serif',
                  fontSize: '20px',
                  fontWeight: 600,
                  color: activeTab === tab ? '#1A1C1A' : '#717973',
                  transition: 'color 0.2s',
                }}
              >
                {tab === 'biji' ? 'biji kopi' : tab === 'bubuk' ? 'kopi bubuk' : 'paket bundle'}
                {activeTab === tab && (
                  <span
                    className="animate-scale-in"
                    style={{
                      display: 'inline-block',
                      width: 8, height: 8, borderRadius: '50%',
                      background: '#1B4332',
                    }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Carousel */}
          <ProductCarousel products={tabProducts} />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ORIGIN MAP
      ══════════════════════════════════════════ */}
      <OriginMap />

      {/* ══════════════════════════════════════════
          CARA PESAN
      ══════════════════════════════════════════ */}
      <section style={{ background: '#FAF7F2', paddingTop: 96, paddingBottom: 96 }}>
        <div className="container-jl">
          <ProcessTimeline
            steps={caraPesanSteps}
            overline="CARA PEMESANAN"
            headline="semudah tiga langkah"
            light
          />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════════ */}
      <section
        className="film-grain relative overflow-hidden"
        style={{
          background: '#3B1F0E',
          paddingTop: 96,
          paddingBottom: 96,
          textAlign: 'center',
        }}
      >
        {/* Vignette */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.45) 100%)',
          zIndex: 1, pointerEvents: 'none',
        }} />
        {/* Light leaks */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
          background: `
            radial-gradient(ellipse 55% 45% at 0% 100%, rgba(193,122,59,0.22) 0%, transparent 70%),
            radial-gradient(ellipse 55% 45% at 100% 0%, rgba(193,122,59,0.16) 0%, transparent 70%)
          `,
        }} />

        <div className="container-jl" style={{ position: 'relative', zIndex: 5 }}>
          <h2
            className="display-lg mb-5"
            style={{ color: '#F5ECD7', fontStyle: 'italic', maxWidth: 640, margin: '0 auto 20px' }}
          >
            Siap merasakan kopi dari lereng Arjuno?
          </h2>
          <p className="body-lg mb-10" style={{ color: 'rgba(245,236,215,0.65)' }}>
            Dipanggang segar per pesanan. Dikirim ke pintumu.
          </p>
          <a
            id="cta-whatsapp"
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-2 mb-6"
          >
            <MessageCircle size={16} />
            Pesan via WhatsApp 🟢
          </a>
          <br />
          <Link
            href="/products"
            className="label-caps"
            style={{ color: 'rgba(245,236,215,0.5)', textDecoration: 'none' }}
          >
            atau lihat semua produk →
          </Link>
        </div>
      </section>

      {/* ── Footer ── */}
      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  )
}
