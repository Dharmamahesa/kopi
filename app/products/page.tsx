'use client'

import { useState, useMemo } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import { products, bundles } from '@/data/products'
import { BotanicalBranch, ScatteredBeans } from '@/components/illustrations/Botanicals'

type TypeFilter  = 'Semua' | 'arabika' | 'robusta' | 'blend'
type RoastFilter = 'Semua' | 'light' | 'medium' | 'dark'
type WeightFilter = 'Semua' | '100g' | '200g' | '500g'

const allProducts = [...products, ...bundles]

export default function ProductsPage() {
  const [typeFilter,  setTypeFilter]  = useState<TypeFilter>('Semua')
  const [roastFilter, setRoastFilter] = useState<RoastFilter>('Semua')
  const [weightFilter, setWeightFilter] = useState<WeightFilter>('Semua')

  const filtered = useMemo(() => {
    return allProducts.filter(p => {
      if (typeFilter !== 'Semua' && p.type !== typeFilter) return false
      if (roastFilter !== 'Semua' && p.roast !== roastFilter && !p.roast.startsWith(roastFilter)) return false
      if (weightFilter !== 'Semua' && !p.sizes.some(s => s.weight === weightFilter)) return false
      return true
    })
  }, [typeFilter, roastFilter, weightFilter])

  return (
    <div style={{ background: '#F0EBE0', minHeight: '100vh' }}>
      <Navbar />

      {/* ── Hero Strip ── */}
      <section style={{ background: '#FAF6EF', paddingTop: 112, paddingBottom: 64, textAlign: 'center', position: 'relative', overflow: 'hidden', borderBottom: '1px solid #DDD5C8' }}>
        {/* Botanical branch decorations */}
        <div style={{ position: 'absolute', top: 0, left: -40, opacity: 0.15, pointerEvents: 'none' }}>
          <BotanicalBranch width={200} height={280} opacity={1} />
        </div>
        <div style={{ position: 'absolute', top: 0, right: -40, opacity: 0.15, transform: 'scaleX(-1)', pointerEvents: 'none' }}>
          <BotanicalBranch width={200} height={280} opacity={1} />
        </div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Small botanical branch above text */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
            <svg width="80" height="40" viewBox="0 0 80 40" fill="none" style={{ opacity: 0.4 }}>
              <path d="M40 38 C40 30 40 22 40 12" stroke="#3D6B52" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M40 28 C30 22 22 20 15 14" stroke="#3D6B52" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M15 14 C8 8 5 2 12 2 C19 2 22 10 15 14Z" stroke="#3D6B52" strokeWidth="1.3" fill="none" />
              <path d="M40 22 C50 16 58 14 65 8" stroke="#3D6B52" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M65 8 C72 2 75 -4 68 -4 C61 -4 58 4 65 8Z" stroke="#3D6B52" strokeWidth="1.3" fill="none" />
            </svg>
          </div>
          <p className="label-overline" style={{ marginBottom: 16 }}>
            SINGLE ORIGIN · SMALL BATCH · FRESH ROASTED
          </p>
          <h1 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 400, color: '#2C3E35', lineHeight: 1.25 }}>
            Koleksi Lengkap Kami
          </h1>
        </div>
      </section>

      {/* ── Sticky Filter Bar ── */}
      <div style={{
        position: 'sticky',
        top: 68,
        zIndex: 30,
        background: 'rgba(240,235,224,0.96)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #DDD5C8',
        paddingTop: 14,
        paddingBottom: 14,
      }}>
        <div className="container-jl">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>
            {/* Type */}
            {(['Semua', 'arabika', 'robusta', 'blend'] as TypeFilter[]).map(f => (
              <button
                key={f}
                className={`filter-pill${typeFilter === f ? ' active' : ''}`}
                onClick={() => setTypeFilter(f)}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}

            <div style={{ width: 1, height: 24, background: '#DDD5C8', margin: '0 4px' }} />

            {/* Weight */}
            {(['100g', '200g', '500g'] as WeightFilter[]).map(f => (
              <button
                key={f}
                className={`filter-pill${weightFilter === f ? ' active' : ''}`}
                onClick={() => setWeightFilter(prev => prev === f ? 'Semua' : f)}
              >
                {f}
              </button>
            ))}

            <div style={{ width: 1, height: 24, background: '#DDD5C8', margin: '0 4px' }} />

            {/* Roast */}
            {(['light', 'medium', 'dark'] as RoastFilter[]).map(f => (
              <button
                key={f}
                className={`filter-pill${roastFilter === f ? ' active' : ''}`}
                onClick={() => setRoastFilter(prev => prev === f ? 'Semua' : f)}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}

            {/* Count */}
            <span style={{ marginLeft: 'auto', fontSize: 13, color: '#8FAF97', fontFamily: 'var(--font-inter), sans-serif' }}>
              {filtered.length} produk
            </span>
          </div>
        </div>
      </div>

      {/* ── Product Grid ── */}
      <section className="section-py" style={{ position: 'relative' }}>
        {/* Faint scattered beans behind */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, pointerEvents: 'none' }}>
          <ScatteredBeans opacity={0.06} />
        </div>

        <div className="container-jl" style={{ position: 'relative', zIndex: 1 }}>
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 0' }}>
              <p style={{ fontSize: 16, color: '#6B7C72' }}>Tidak ada produk yang cocok dengan filter ini.</p>
              <button className="btn-sage" style={{ marginTop: 20 }}
                onClick={() => { setTypeFilter('Semua'); setRoastFilter('Semua'); setWeightFilter('Semua') }}>
                Reset Filter
              </button>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}
              className="products-grid-page">
              {filtered.map(p => (
                <ProductCard key={p.id} product={p} showWeightToggle />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA strip ── */}
      <section style={{ background: '#FAF6EF', borderTop: '1px solid #DDD5C8', textAlign: 'center', padding: '56px 24px' }}>
        <p className="label-overline" style={{ marginBottom: 12 }}>BUTUH BANTUAN MEMILIH?</p>
        <h2 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 28, fontWeight: 400, color: '#2C3E35', marginBottom: 12 }}>
          Hubungi Kami via WhatsApp
        </h2>
        <p className="body-md" style={{ marginBottom: 24, maxWidth: 400, margin: '0 auto 24px' }}>
          Tim kami siap membantu memilih kopi yang sesuai selera & metode seduhmu.
        </p>
        <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="btn-sage">
          Chat Sekarang
        </a>
      </section>

      <Footer />

      <style>{`
        @media(max-width:900px){ .products-grid-page{grid-template-columns:repeat(2,1fr)!important} }
        @media(max-width:580px){ .products-grid-page{grid-template-columns:1fr!important} }
      `}</style>
    </div>
  )
}
