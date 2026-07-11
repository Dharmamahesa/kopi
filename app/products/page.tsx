'use client'

import { useState, useMemo } from 'react'
import AnnouncementBar from '@/components/AnnouncementBar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RoastChip from '@/components/RoastChip'
import { products } from '@/data/products'
import type { RoastLevel, CoffeeType } from '@/data/products'
import { MessageCircle } from 'lucide-react'

type SizeFilter = '100g' | '200g' | '500g' | null
type TypeFilter = CoffeeType | null
type RoastFilter = RoastLevel | null

function formatPrice(p: number) {
  return 'Rp ' + p.toLocaleString('id-ID')
}

export default function KatalogPage() {
  const [sizeFilter, setSizeFilter] = useState<SizeFilter>(null)
  const [typeFilter, setTypeFilter] = useState<TypeFilter>(null)
  const [roastFilter, setRoastFilter] = useState<RoastFilter>(null)
  const [selectedSizes, setSelectedSizes] = useState<Record<string, number>>({})

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (typeFilter && p.type !== typeFilter) return false
      if (roastFilter && p.roast !== roastFilter) return false
      if (sizeFilter && !p.sizes.find((s) => s.weight === sizeFilter)) return false
      return true
    })
  }, [sizeFilter, typeFilter, roastFilter])

  const getSelectedSizeIdx = (id: string, defaultIdx: number) =>
    selectedSizes[id] !== undefined ? selectedSizes[id] : defaultIdx

  const setSize = (id: string, idx: number) =>
    setSelectedSizes((prev) => ({ ...prev, [id]: idx }))

  return (
    <main className="flex-1">
      <AnnouncementBar />
      <Navbar />

      {/* ── Hero Strip ── */}
      <section
        className="film-grain relative overflow-hidden"
        style={{
          background: '#1B4332',
          paddingTop: 120,
          paddingBottom: 80,
          marginTop: 72, // navbar height
        }}
      >
        {/* Vignette */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)',
          zIndex: 1, pointerEvents: 'none',
        }} />
        {/* Light leak */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 55% 45% at 0% 0%, rgba(193,122,59,0.18) 0%, transparent 70%)',
        }} />
        {/* Letterbox top */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 40,
          background: '#1B4332', zIndex: 10,
        }} />
        {/* Letterbox bottom */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 40,
          background: '#1B4332', zIndex: 10,
        }} />

        <div className="container-jl" style={{ position: 'relative', zIndex: 5 }}>
          <p className="label-caps mb-4" style={{ color: '#C17A3B' }}>KATALOG LENGKAP</p>
          <h1 className="display-lg-mobile mb-4" style={{ color: '#F5ECD7' }}>semua kopi kami</h1>
          <p className="body-md" style={{ color: 'rgba(245,236,215,0.6)' }}>
            single origin · small batch · fresh roasted
          </p>
        </div>
      </section>

      {/* ── Sticky Filter ── */}
      <div
        style={{
          background: '#FAF7F2',
          borderBottom: '1px solid #E8E3DA',
          padding: '20px 0',
          position: 'sticky',
          top: 72,
          zIndex: 30,
        }}
      >
        <div className="container-jl">
          {/* Row 1 — Ukuran */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 10 }}>
            <span className="label-caps" style={{ color: '#414844', alignSelf: 'center', marginRight: 4 }}>
              Ukuran:
            </span>
            {(['100g', '200g', '500g'] as const).map((s) => (
              <button
                key={s}
                onClick={() => setSizeFilter(sizeFilter === s ? null : s)}
                style={{
                  padding: '6px 16px', borderRadius: 9999, cursor: 'pointer',
                  fontSize: 11, fontWeight: 600, fontFamily: 'var(--font-inter)',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  background: sizeFilter === s ? '#1B4332' : 'transparent',
                  color: sizeFilter === s ? '#F5ECD7' : '#1B4332',
                  border: '1px solid #1B4332',
                  transition: 'all 0.2s',
                }}
              >{s}</button>
            ))}
          </div>

          {/* Row 2 — Jenis */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 10 }}>
            <span className="label-caps" style={{ color: '#414844', alignSelf: 'center', marginRight: 4 }}>
              Jenis:
            </span>
            {(['arabika', 'robusta', 'blend'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTypeFilter(typeFilter === t ? null : t)}
                style={{
                  padding: '6px 16px', borderRadius: 9999, cursor: 'pointer',
                  fontSize: 11, fontWeight: 600, fontFamily: 'var(--font-inter)',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  background: typeFilter === t ? '#1B4332' : 'transparent',
                  color: typeFilter === t ? '#F5ECD7' : '#1B4332',
                  border: '1px solid #1B4332',
                  transition: 'all 0.2s',
                }}
              >{t}</button>
            ))}
          </div>

          {/* Row 3 — Roast */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <span className="label-caps" style={{ color: '#414844', alignSelf: 'center', marginRight: 4 }}>
              Roast:
            </span>
            {(['light', 'medium', 'dark'] as const).map((r) => (
              <button
                key={r}
                onClick={() => setRoastFilter(roastFilter === r ? null : r)}
                style={{
                  padding: '6px 16px', borderRadius: 9999, cursor: 'pointer',
                  fontSize: 11, fontWeight: 600, fontFamily: 'var(--font-inter)',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  background: roastFilter === r ? '#1B4332' : 'transparent',
                  color: roastFilter === r ? '#F5ECD7' : '#1B4332',
                  border: '1px solid #1B4332',
                  transition: 'all 0.2s',
                }}
              >{r}</button>
            ))}
            {(sizeFilter || typeFilter || roastFilter) && (
              <button
                onClick={() => { setSizeFilter(null); setTypeFilter(null); setRoastFilter(null) }}
                style={{
                  padding: '6px 16px', borderRadius: 9999, cursor: 'pointer',
                  fontSize: 11, fontWeight: 600, fontFamily: 'var(--font-inter)',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  background: 'transparent', color: '#C17A3B',
                  border: '1px solid #C17A3B',
                  transition: 'all 0.2s', marginLeft: 8,
                }}
              >Reset Filter ×</button>
            )}
          </div>
        </div>
      </div>

      {/* ── Product Grid ── */}
      <section style={{ background: '#FAF7F2', paddingTop: 48, paddingBottom: 80 }}>
        <div className="container-jl">
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 0' }}>
              <p className="body-lg" style={{ color: '#717973' }}>
                Tidak ada produk yang sesuai filter. Coba reset filter.
              </p>
            </div>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                gap: 24,
              }}
            >
              {filtered.map((product) => {
                const defaultIdx = product.sizes.findIndex(s => s.weight === '200g') >= 0
                  ? product.sizes.findIndex(s => s.weight === '200g') : 0
                const sIdx = getSelectedSizeIdx(product.id, defaultIdx)
                const selectedSize = product.sizes[sIdx]

                const waMessage = encodeURIComponent(
                  `Halo Kopi Jaya Lestari! Saya ingin memesan:\n\n` +
                  `Produk: ${product.name}\n` +
                  `Ukuran: ${selectedSize.weight}\n` +
                  `Total: Rp ${selectedSize.price.toLocaleString('id-ID')}\n\n` +
                  `Mohon konfirmasinya 🙏`
                )

                return (
                  <article
                    key={product.id}
                    className="product-card"
                    style={{ display: 'flex', flexDirection: 'column' }}
                  >
                    {/* Image */}
                    <div
                      className="image-cinematic rounded-t-lg overflow-hidden"
                      style={{
                        aspectRatio: '3/4',
                        background: 'linear-gradient(160deg, #3B1F0E 0%, #1B4332 60%, #2C1A0A 100%)',
                        position: 'relative',
                      }}
                    >
                      {/* Bean silhouettes */}
                      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', opacity: 0.08 }}>
                        {[...Array(10)].map((_, i) => (
                          <div key={i} style={{
                            position: 'absolute',
                            width: 28 + (i % 4) * 8, height: 18 + (i % 3) * 5,
                            borderRadius: '50%', background: '#C17A3B',
                            top: `${(i * 19 + 5) % 90}%`,
                            left: `${(i * 27 + 3) % 85}%`,
                            transform: `rotate(${i * 37}deg)`,
                          }} />
                        ))}
                      </div>
                      {/* Origin tag */}
                      <div style={{
                        position: 'absolute', bottom: 12, left: 12, zIndex: 3,
                        padding: '4px 10px', borderRadius: 4,
                        background: 'rgba(59,31,14,0.85)',
                      }}>
                        <span className="label-caps" style={{ color: '#C17A3B', fontSize: '9px' }}>
                          {product.region}
                        </span>
                      </div>
                      <RoastChip roast={product.roast} className="absolute top-3 right-3 z-10" />
                    </div>

                    {/* Info */}
                    <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <p className="label-caps mb-1" style={{ color: '#C17A3B', fontSize: '9px' }}>
                        {product.category}
                      </p>
                      <h3 className="headline-sm mb-1" style={{ fontSize: '20px' }}>
                        {product.name}
                      </h3>
                      <p className="body-md mb-3" style={{ color: '#717973', fontStyle: 'italic', fontSize: '13px', flex: 1 }}>
                        {product.tastingNotes}
                      </p>

                      {/* Weight toggle */}
                      <div style={{ display: 'flex', gap: 6, marginBottom: 12, flexWrap: 'wrap' }}>
                        {product.sizes.map((size, i) => (
                          <button
                            key={size.weight}
                            onClick={() => setSize(product.id, i)}
                            style={{
                              padding: '5px 12px', borderRadius: 9999, cursor: 'pointer',
                              fontSize: '10px', fontWeight: 600, letterSpacing: '0.08em',
                              textTransform: 'uppercase',
                              background: sIdx === i ? '#1B4332' : 'transparent',
                              color: sIdx === i ? '#F5ECD7' : '#1B4332',
                              border: '1px solid #1B4332',
                              transition: 'all 0.2s',
                            }}
                          >{size.weight}</button>
                        ))}
                      </div>

                      {/* Price */}
                      <p className="label-caps mb-3" style={{ color: '#1B4332', fontSize: '14px' }}>
                        {formatPrice(selectedSize.price)}
                      </p>

                      {/* WA button */}
                      <a
                        href={`https://wa.me/6281234567890?text=${waMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex items-center justify-center gap-2"
                        style={{ padding: '10px 16px', fontSize: '11px' }}
                      >
                        <MessageCircle size={13} />
                        Pesan via WA
                      </a>
                    </div>
                  </article>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* ── Info strip ── */}
      <section style={{ background: '#F5ECD7', padding: '32px 0', textAlign: 'center' }}>
        <div className="container-jl">
          <p className="label-caps mb-2" style={{ color: '#1B4332' }}>
            SEMUA KOPI DI-ROAST SETELAH PESANAN MASUK
          </p>
          <p className="body-md" style={{ color: '#414844' }}>
            Fresh guaranteed. Dikemas vakum. Pengiriman 2–3 hari kerja.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
