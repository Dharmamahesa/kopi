'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import AnnouncementBar from '@/components/AnnouncementBar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import VideoSlideshow from '@/components/VideoSlideshow'
import ProductCarousel from '@/components/ProductCarousel'
import StatsStrip from '@/components/StatsStrip'
import OriginMap from '@/components/OriginMap'
import ProcessTimeline from '@/components/ProcessTimeline'
import MarqueeBand from '@/components/MarqueeBand'
import LoadingScreen from '@/components/LoadingScreen'
import CustomCursor from '@/components/CustomCursor'
import { products, bundles } from '@/data/products'
import { MessageCircle } from 'lucide-react'
import { useReveal, useParallax } from '@/hooks/useScrollEffects'

type Tab = 'biji' | 'bubuk' | 'bundle'

const caraPesanSteps = [
  { number: '1', title: 'Pilih Kopi',     desc: 'Browse katalog kami, pilih varian single origin & ukuran yang kamu inginkan.' },
  { number: '2', title: 'Hubungi Kami',   desc: 'Kirim pesananmu via WhatsApp. Kami konfirmasi dalam 1×24 jam.' },
  { number: '3', title: 'Terima Segar',   desc: 'Dikemas vakum, dikirim dalam 2–3 hari kerja langsung ke pintumu.' },
]

export default function Home() {
  const [activeTab,    setActiveTab]    = useState<Tab>('biji')
  const [heroVisible,  setHeroVisible]  = useState(false)

  // Section reveal observers
  const heroSectionRef    = useReveal()
  const productSectionRef = useReveal()
  const ctaSectionRef     = useReveal()

  // Parallax ghost text
  const ghostTextRef = useParallax(0.25)

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 1600) // after loading screen
    return () => clearTimeout(timer)
  }, [])

  const tabProducts = activeTab === 'bundle' ? bundles : products

  return (
    <>
      {/* Loading screen */}
      <LoadingScreen />

      {/* Custom cursor */}
      <CustomCursor />

      <main className="flex-1">
        <AnnouncementBar />
        <Navbar transparent />

        {/* ══════════════════════════════════════════
            HERO — Split 50/50 with oversized bleed heading
        ══════════════════════════════════════════ */}
        <section
          ref={heroSectionRef as React.RefObject<HTMLElement>}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            minHeight: '100vh',
            paddingTop: 36,
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
            {/* Letterbox */}
            <div style={{ position: 'absolute', top: 36, left: 0, right: 0, height: 48, background: '#0F2419', zIndex: 10 }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 48, background: '#0F2419', zIndex: 10 }} />

            {/* Parallax ghost text KOPI */}
            <span
              ref={ghostTextRef as React.RefObject<HTMLElement>}
              className="parallax-bg-text"
              style={{ color: 'transparent', WebkitTextStroke: '1px rgba(193,122,59,0.08)' }}
              aria-hidden
            >
              KOPI
            </span>

            {/* Content */}
            <div style={{ position: 'relative', zIndex: 5 }}>
              {/* Eyebrow with bleed-left gold rule */}
              <p
                className="bleed-left-text label-caps mb-6 reveal-element"
                style={{
                  color: '#C17A3B',
                  opacity: heroVisible ? undefined : 0,
                }}
              >
                ROASTERY · HUTAN CEMPAKA · PRIGEN · 875 MDPL
              </p>

              {/* OVERSIZED BLEED HEADING */}
              <div
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? 'none' : 'translateY(20px)',
                  filter: heroVisible ? 'blur(0)' : 'blur(8px)',
                  transition: 'opacity 1s cubic-bezier(0.23,1,0.32,1) 0.1s, transform 1s cubic-bezier(0.23,1,0.32,1) 0.1s, filter 0.8s ease 0.1s',
                }}
              >
                <h1 className="hero-heading mb-6">
                  <span className="line-1">dari lereng</span>
                  <span className="line-2">Arjuno.</span>
                </h1>
                {/* Wavy strokes */}
                <svg width="120" height="16" viewBox="0 0 120 16" fill="none" style={{ marginBottom: 24, marginLeft: 4 }}>
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
                  filter: heroVisible ? 'blur(0)' : 'blur(4px)',
                  transition: 'opacity 1s cubic-bezier(0.23,1,0.32,1) 0.3s, transform 1s cubic-bezier(0.23,1,0.32,1) 0.3s, filter 0.8s ease 0.3s',
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
                  transition: 'opacity 1s cubic-bezier(0.23,1,0.32,1) 0.5s, transform 1s cubic-bezier(0.23,1,0.32,1) 0.5s',
                }}
              >
                <Link href="/products" className="btn-gold">Belanja Sekarang</Link>
                <Link href="/about#proses" className="btn-secondary">Kenali Proses Kami</Link>
              </div>
            </div>
          </div>

          {/* RIGHT — Video Slideshow */}
          <div style={{ position: 'relative', minHeight: '100vh' }}>
            <VideoSlideshow />
          </div>
        </section>

        {/* ── Diagonal divider: hero → marquee ── */}
        <div className="diagonal-divider" style={{ background: '#FAF7F2' }} />

        {/* ── Marquee band between hero and stats ── */}
        <MarqueeBand bg="#FAF7F2" />

        {/* ══════════════════════════════════════════
            STATS STRIP
        ══════════════════════════════════════════ */}
        <StatsStrip />

        {/* ══════════════════════════════════════════
            PRODUK UNGGULAN
        ══════════════════════════════════════════ */}
        <section
          ref={productSectionRef as React.RefObject<HTMLElement>}
          style={{ background: '#fff', paddingTop: 80, paddingBottom: 80 }}
          className="texture-washi"
        >
          <div className="container-jl" style={{ position: 'relative', zIndex: 2 }}>
            {/* Headline with bleed-left rule */}
            <div style={{ marginBottom: 40 }}>
              <p className="bleed-left-text label-caps mb-3 reveal-element" style={{ color: '#C17A3B' }}>
                PILIHAN TERBAIK
              </p>
              <h2 className="headline-md reveal-element" style={{ transitionDelay: '80ms' }}>
                produk unggulan
              </h2>
            </div>

            {/* Pull quote */}
            <div className="reveal-element" style={{ transitionDelay: '160ms', marginBottom: 40, maxWidth: 600 }}>
              <p className="pull-quote">
                "Setiap batch dipanggang kecil. Tidak pernah massal."
              </p>
            </div>

            {/* Tab switcher */}
            <div style={{ display: 'flex', gap: 8, marginBottom: 40, flexWrap: 'wrap' }}>
              {(['biji', 'bubuk', 'bundle'] as Tab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    padding: '8px 20px', borderRadius: 9999,
                    background: 'transparent', border: 'none', cursor: 'pointer',
                    fontFamily: 'var(--font-playfair), serif', fontSize: '20px', fontWeight: 600,
                    color: activeTab === tab ? '#1A1C1A' : '#717973',
                    transition: 'color 0.2s',
                  }}
                >
                  {tab === 'biji' ? 'biji kopi' : tab === 'bubuk' ? 'kopi bubuk' : 'paket bundle'}
                  {activeTab === tab && (
                    <span className="animate-scale-in" style={{
                      display: 'inline-block', width: 8, height: 8, borderRadius: '50%', background: '#1B4332',
                    }} />
                  )}
                </button>
              ))}
            </div>

            <ProductCarousel products={tabProducts} />
          </div>
        </section>

        {/* ── Diagonal divider: white → forest ── */}
        <div className="diagonal-divider-to-dark" />

        {/* ══════════════════════════════════════════
            ORIGIN MAP
        ══════════════════════════════════════════ */}
        <OriginMap />

        {/* ── Diagonal divider: forest → parchment ── */}
        <div className="diagonal-divider-dark" />

        {/* ══════════════════════════════════════════
            CARA PESAN — with washi texture + ghost number
        ══════════════════════════════════════════ */}
        <section
          style={{ background: '#FAF7F2', paddingTop: 96, paddingBottom: 96, position: 'relative', overflow: 'hidden' }}
          className="texture-washi"
        >
          {/* Ghost oversized section number */}
          <span className="section-number" aria-hidden>03</span>

          <div className="container-jl" style={{ position: 'relative', zIndex: 2 }}>
            <ProcessTimeline
              steps={caraPesanSteps}
              overline="CARA PEMESANAN"
              headline="semudah tiga langkah"
              light
            />
          </div>
        </section>

        {/* ── Diagonal divider: parchment → espresso ── */}
        <div className="diagonal-divider-espresso" />

        {/* ══════════════════════════════════════════
            CTA BANNER
        ══════════════════════════════════════════ */}
        <section
          ref={ctaSectionRef as React.RefObject<HTMLElement>}
          className="film-grain relative overflow-hidden"
          style={{ background: '#3B1F0E', paddingTop: 112, paddingBottom: 112, textAlign: 'center' }}
        >
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.45) 100%)',
            zIndex: 1, pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
            background: `
              radial-gradient(ellipse 55% 45% at 0% 100%, rgba(193,122,59,0.22) 0%, transparent 70%),
              radial-gradient(ellipse 55% 45% at 100% 0%, rgba(193,122,59,0.16) 0%, transparent 70%)
            `,
          }} />

          {/* Ghost ARJUNO text */}
          <span
            aria-hidden
            style={{
              position: 'absolute', top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              fontFamily: 'var(--font-playfair), serif',
              fontSize: 'clamp(80px, 16vw, 200px)',
              fontWeight: 800,
              color: 'transparent',
              WebkitTextStroke: '1px rgba(193,122,59,0.07)',
              whiteSpace: 'nowrap',
              pointerEvents: 'none',
              userSelect: 'none',
              zIndex: 1,
              lineHeight: 1,
            }}
          >
            ARJUNO
          </span>

          <div className="container-jl" style={{ position: 'relative', zIndex: 5 }}>
            <h2
              className="display-lg reveal-element mb-5"
              style={{ color: '#F5ECD7', fontStyle: 'italic', maxWidth: 640, margin: '0 auto 20px' }}
            >
              Siap merasakan kopi dari lereng Arjuno?
            </h2>
            <p className="body-lg reveal-element mb-10" style={{ color: 'rgba(245,236,215,0.65)', transitionDelay: '120ms' }}>
              Dipanggang segar per pesanan. Dikirim ke pintumu.
            </p>
            <div className="reveal-element" style={{ transitionDelay: '240ms', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
              <a
                id="cta-whatsapp"
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center gap-2"
              >
                <MessageCircle size={16} />
                Pesan via WhatsApp 🟢
              </a>
              <Link href="/products" className="label-caps" style={{ color: 'rgba(245,236,215,0.5)', textDecoration: 'none' }}>
                atau lihat semua produk →
              </Link>
            </div>
          </div>
        </section>

        <Footer />

        <style>{`
          @media (max-width: 768px) {
            .hero-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </main>
    </>
  )
}
