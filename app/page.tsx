'use client'

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { products, bundles } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import { MessageCircle } from 'lucide-react'
import { useEffect, useRef } from 'react'
import {
  BotanicalBranch,
  ChemexIllustration,
  ScatteredBeans,
  BotanicalVine,
  CTABotanicalFrame,
} from '@/components/illustrations/Botanicals'

// Scroll reveal hook
function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    el.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
  return ref
}

const premiumProducts = [
  { name: 'Espresso Blend Arabica', price: 120000, desc: 'Kaya, berani, dengan aroma kacang panggang.' },
  { name: 'Single Origin Gayo',     price: 150000, desc: 'Cita rasa unik dengan sentuhan buah-buahan.' },
  { name: 'Decaf Roast',            price: 110000, desc: 'Nikmati rasa kopi tanpa kafein.' },
  { name: 'Robusta Gold',           price: 100000, desc: 'Kuat, penuh tubuh, dengan crema tebal.' },
  { name: 'Sumatra Blend',          price: 85000,  desc: 'Balanced, smooth, cocok semua metode seduh.' },
]

const stats = [
  { label: 'VARIAN',      value: '12+',       desc: 'Varian single origin' },
  { label: 'KUALITAS',    value: '100%',      desc: 'Arabika & Robusta pilihan' },
  { label: 'METODE',      value: 'SMALL BATCH', desc: 'Dipanggang per pesanan' },
  { label: 'PENGIRIMAN',  value: '2–3 HARI',  desc: 'Estimasi pengiriman' },
]

const howToSteps = [
  { n: '1', title: 'Pilih Kopi',   desc: 'Browse koleksi & pilih varian favoritmu.' },
  { n: '2', title: 'Hubungi Kami', desc: 'Kirim pesanan via WhatsApp kami.' },
  { n: '3', title: 'Terima Segar', desc: 'Dikemas vakum, tiba dalam 2–3 hari.' },
]

export default function Home() {
  const mainRef = useReveal()

  return (
    <div ref={mainRef} style={{ background: '#F0EBE0', minHeight: '100vh' }}>
      <Navbar />

      {/* ══════════════════════════════════════
          HERO — botanical illustrated, no photo
      ══════════════════════════════════════ */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        paddingTop: 68,
        overflow: 'hidden',
        background: '#F0EBE0',
      }}>
        {/* Botanical branch — left */}
        <div style={{ position: 'absolute', left: -20, bottom: -20, zIndex: 0 }}>
          <BotanicalBranch width={280} height={420} opacity={0.22} />
        </div>

        {/* Chemex — right */}
        <div style={{ position: 'absolute', right: 40, bottom: 40, zIndex: 0 }}>
          <ChemexIllustration width={200} height={300} opacity={0.22} />
        </div>

        {/* Scattered beans — behind content */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <ScatteredBeans opacity={0.12} />
        </div>

        {/* Center content */}
        <div style={{ textAlign: 'center', zIndex: 1, maxWidth: 640, padding: '0 24px' }}>
          <p className="label-overline reveal" style={{ marginBottom: 20 }}>
            ROASTERY · PRIGEN · 875 MDPL
          </p>
          <h1 className="heading-hero reveal" style={{ marginBottom: 20, transitionDelay: '80ms' }}>
            Nikmati Kopi<br />Terbaik Kami
          </h1>
          <p className="body-lg reveal" style={{ maxWidth: 480, margin: '0 auto 36px', transitionDelay: '160ms' }}>
            Biji kopi single origin Nusantara, dipanggang kecil per batch.
            Dikirim segar langsung ke pintumu.
          </p>
          <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: 20, justifyContent: 'center', transitionDelay: '240ms', flexWrap: 'wrap' }}>
            <Link href="/products" className="btn-sage">
              Jelajahi Produk
            </Link>
            <Link href="/about" className="btn-link">
              Cerita Kami →
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, #8FAF97, transparent)' }} />
          <p style={{ fontSize: 10, color: '#8FAF97', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'var(--font-inter), sans-serif' }}>
            SCROLL
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          STATS STRIP
      ══════════════════════════════════════ */}
      <section style={{ background: '#FAF6EF', borderTop: '1px solid #DDD5C8', borderBottom: '1px solid #DDD5C8' }}>
        <div className="container-jl" style={{ paddingTop: 48, paddingBottom: 48 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
            {stats.map((s, i) => (
              <div key={s.label} className="reveal"
                style={{
                  textAlign: 'center', padding: '16px 12px',
                  borderRight: i < stats.length - 1 ? '1px solid #DDD5C8' : 'none',
                  transitionDelay: `${i * 80}ms`,
                }}>
                <p className="label-overline" style={{ marginBottom: 10 }}>{s.label}</p>
                <p style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(20px, 3vw, 32px)', fontWeight: 600, color: '#3D6B52', lineHeight: 1, marginBottom: 6 }}>
                  {s.value}
                </p>
                <p style={{ fontSize: 13, color: '#6B7C72' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:640px){.stats-grid{grid-template-columns:repeat(2,1fr)!important}}`}</style>
      </section>

      {/* ══════════════════════════════════════
          KOLEKSI BIJI KOPI — 3-col grid
      ══════════════════════════════════════ */}
      <section className="section-py" style={{ background: '#F0EBE0' }}>
        <div className="container-jl">
          {/* Heading */}
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p className="label-overline reveal" style={{ marginBottom: 12 }}>KOLEKSI KAMI</p>
            <h2 className="heading-xl reveal" style={{ marginBottom: 12, transitionDelay: '80ms' }}>
              Koleksi Biji Kopi Kami
            </h2>
            <p className="body-md reveal" style={{ maxWidth: 440, margin: '0 auto', transitionDelay: '160ms' }}>
              Dipilih dari kebun terbaik seluruh Nusantara
            </p>
          </div>

          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}
            className="products-grid">
            {products.map((p, i) => (
              <div key={p.id} className="reveal" style={{ transitionDelay: `${(i % 3) * 100}ms` }}>
                <ProductCard product={p} showWeightToggle />
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link href="/products" className="btn-sage reveal">
              Lihat Semua Produk
            </Link>
          </div>
        </div>

        <style>{`
          @media(max-width:900px){ .products-grid{grid-template-columns:repeat(2,1fr)!important} }
          @media(max-width:580px){ .products-grid{grid-template-columns:1fr!important} }
        `}</style>
      </section>

      {/* ══════════════════════════════════════
          KOLEKSI PREMIUM — horizontal scroll
      ══════════════════════════════════════ */}
      <section className="section-py" style={{ background: '#FAF6EF', borderTop: '1px solid #DDD5C8', borderBottom: '1px solid #DDD5C8' }}>
        <div className="container-jl">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p className="label-overline reveal" style={{ marginBottom: 12 }}>PREMIUM SELECTION</p>
            <h2 className="heading-xl reveal" style={{ transitionDelay: '80ms' }}>
              Koleksi Kopi Premium
            </h2>
          </div>

          {/* Carousel */}
          <div className="carousel-track">
            {premiumProducts.map((p, i) => (
              <div key={i} className="product-card-botanical reveal" style={{
                minWidth: 240, width: 240, padding: '24px 20px',
                textAlign: 'center', position: 'relative', flexShrink: 0,
                transitionDelay: `${i * 60}ms`,
              }}>
                {/* Leaf corner */}
                <div style={{ position: 'absolute', top: 10, right: 10 }}>
                  <svg width="44" height="44" viewBox="0 0 60 60" fill="none" style={{ opacity: 0.28, pointerEvents: 'none' }}>
                    <path d="M50 55 C40 45 30 35 20 20" stroke="#3D6B52" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M20 20 C10 8 2 5 5 15 C8 25 18 24 20 20Z" stroke="#3D6B52" strokeWidth="1.3" fill="none" />
                    <path d="M28 30 C18 18 8 18 10 28 C12 38 26 36 28 30Z" stroke="#3D6B52" strokeWidth="1.3" fill="none" />
                  </svg>
                </div>

                {/* Icon circle background */}
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#EDE8DE', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" style={{ opacity: 0.7 }}>
                    <ellipse cx="14" cy="14" rx="9" ry="6.5" stroke="#3D6B52" strokeWidth="1.5" fill="none" />
                    <path d="M5 14 L23 14" stroke="#3D6B52" strokeWidth="1" strokeLinecap="round" />
                  </svg>
                </div>

                <p style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 17, fontWeight: 600, color: '#2C3E35', marginBottom: 4 }}>
                  {p.name}
                </p>
                <p style={{ fontSize: 13, color: '#6B7C72', marginBottom: 10 }}>
                  Rp {p.price.toLocaleString('id-ID')}
                </p>
                <p style={{ fontSize: 13, color: '#6B7C72', fontStyle: 'italic', lineHeight: 1.55, marginBottom: 18 }}>
                  {p.desc}
                </p>
                <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
                  <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer"
                    className="btn-sage" style={{ padding: '9px 20px', fontSize: 12 }}>
                    <MessageCircle size={13} />
                    Pesan
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CARA PESAN — 3 steps + botanical vine
      ══════════════════════════════════════ */}
      <section className="section-py" style={{ background: '#F0EBE0' }}>
        <div className="container-jl">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p className="label-overline reveal" style={{ marginBottom: 12 }}>CARA PEMESANAN</p>
            <h2 className="heading-xl reveal" style={{ transitionDelay: '80ms' }}>
              Cara Pemesanan
            </h2>
          </div>

          {/* Steps + vine */}
          <div style={{ position: 'relative' }}>
            {/* Vine */}
            <div style={{ position: 'absolute', top: '50px', left: '10%', right: '10%', zIndex: 0 }}>
              <BotanicalVine width={undefined as unknown as number} height={60} opacity={0.2}
                style={{ width: '100%' }} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, position: 'relative', zIndex: 1 }}>
              {howToSteps.map((step, i) => (
                <div key={step.n} className="reveal" style={{ textAlign: 'center', transitionDelay: `${i * 120}ms` }}>
                  {/* Circle */}
                  <div style={{
                    width: 56, height: 56, borderRadius: '50%',
                    border: '1.5px solid #3D6B52', background: '#F0EBE0',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 20px', position: 'relative', zIndex: 2,
                  }}>
                    <span style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 22, fontWeight: 400, color: '#3D6B52' }}>
                      {step.n}
                    </span>
                  </div>
                  <h3 className="heading-md" style={{ marginBottom: 10, fontSize: 20 }}>
                    {step.title}
                  </h3>
                  <p className="body-md">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA BANNER — sage green with botanical frame
      ══════════════════════════════════════ */}
      <section style={{
        background: '#3D6B52',
        paddingTop: 96, paddingBottom: 96,
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Botanical corner frame */}
        <CTABotanicalFrame opacity={0.2} />

        <div className="container-jl" style={{ position: 'relative', zIndex: 1 }}>
          <p className="label-overline reveal" style={{ color: 'rgba(240,235,224,0.7)', marginBottom: 16 }}>
            FRESH ROASTED · SMALL BATCH
          </p>
          <h2 className="heading-xl reveal" style={{ color: '#FAF6EF', marginBottom: 16, transitionDelay: '80ms' }}>
            Siap merasakan kopi<br />Nusantara terbaik?
          </h2>
          <p className="reveal" style={{ fontSize: 16, color: 'rgba(240,235,224,0.7)', marginBottom: 36, transitionDelay: '160ms' }}>
            Dipanggang segar per pesanan.
          </p>
          <div className="reveal" style={{ transitionDelay: '240ms' }}>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-white"
            >
              <MessageCircle size={17} />
              Pesan via WhatsApp 🟢
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
