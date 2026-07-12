'use client'

import { useState } from 'react'
import type { Product } from '@/data/products'
import { LeafSprig } from './illustrations/Botanicals'
import { MessageCircle, Eye } from 'lucide-react'

interface ProductCardProps {
  product: Product
  showWeightToggle?: boolean
  variant?: 'grid' | 'carousel'
}

const roastLabel = { light: 'Light', medium: 'Medium', 'medium-dark': 'Med-Dark', dark: 'Dark' }
const roastChipClass = { light: 'chip-light', medium: 'chip-medium', 'medium-dark': 'chip-medium', dark: 'chip-dark' }

const originBgs: Record<string, string> = {
  'Sulawesi':  '#D6E5DB',
  'Aceh':      '#C8D9CE',
  'NTT':       '#E5DDD4',
  'Bali':      '#DBE9DE',
  'Jawa':      '#E8E0D6',
  'Indonesia': '#DDE6E0',
}

function formatPrice(p: number) {
  return 'Rp ' + p.toLocaleString('id-ID')
}

export default function ProductCard({ product, showWeightToggle = true, variant = 'grid' }: ProductCardProps) {
  const defaultIdx = Math.max(0, product.sizes.findIndex(s => s.weight === '200g'))
  const [sizeIdx, setSizeIdx] = useState(defaultIdx)
  const size = product.sizes[sizeIdx]

  const waMsg = encodeURIComponent(
    `Halo Jaya Lestari! Saya ingin memesan:\n\n` +
    `Produk: ${product.name}\n` +
    `Ukuran: ${size.weight}\n` +
    `Total: ${formatPrice(size.price)}\n\n` +
    `Mohon konfirmasinya 🙏`
  )

  const cardBg = originBgs[product.region] || '#D6E5DB'

  if (variant === 'carousel') {
    // Compact carousel card
    return (
      <div
        className="product-card-botanical"
        style={{
          width: 240,
          minWidth: 240,
          padding: '24px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          alignItems: 'center',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        {/* Leaf corner */}
        <div style={{ position: 'absolute', top: 12, right: 12 }}>
          <LeafSprig width={48} height={48} opacity={0.3} />
        </div>

        {/* Product image / placeholder */}
        <div style={{
          width: '100%',
          aspectRatio: '4/3',
          borderRadius: 14,
          background: cardBg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          position: 'relative',
        }}>
          {product.image && !product.image.includes('placeholder') ? (
            <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <div style={{ textAlign: 'center', padding: 16 }}>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ opacity: 0.4, margin: '0 auto 8px' }}>
                <ellipse cx="24" cy="24" rx="14" ry="10" stroke="#3D6B52" strokeWidth="1.5" fill="none" />
                <path d="M10 24 L38 24" stroke="#3D6B52" strokeWidth="1" strokeLinecap="round" />
                <path d="M18 14 C16 18 16 30 18 34" stroke="#3D6B52" strokeWidth="1" strokeLinecap="round" />
                <path d="M30 14 C32 18 32 30 30 34" stroke="#3D6B52" strokeWidth="1" strokeLinecap="round" />
              </svg>
              <p style={{ fontSize: 10, color: '#6B7C72', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{product.region}</p>
            </div>
          )}
        </div>

        <div style={{ flex: 1 }}>
          <p style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 18, fontWeight: 600, color: '#2C3E35', marginBottom: 4 }}>
            {product.name}
          </p>
          <p style={{ fontSize: 13, color: '#6B7C72', fontStyle: 'italic', marginBottom: 8 }}>
            {product.tastingNotes}
          </p>
          <p style={{ fontFamily: 'var(--font-playfair), serif', fontWeight: 700, fontSize: 16, color: '#2C3E35', marginBottom: 12 }}>
            {formatPrice(size.price)}
            <span style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 11, fontWeight: 400, color: '#6B7C72', marginLeft: 4 }}>
              / {size.weight}
            </span>
          </p>
          <p style={{ fontSize: 12, color: '#6B7C72', lineHeight: 1.6, marginBottom: 16 }}>
            {product.description.slice(0, 80)}…
          </p>
        </div>

        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <button className="btn-icon-circle" title="Quick view" aria-label="Quick view">
            <Eye size={16} />
          </button>
          <a
            href={`https://wa.me/6281234567890?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-icon-circle"
            title="Pesan via WhatsApp"
            aria-label="Pesan via WhatsApp"
          >
            <MessageCircle size={16} />
          </a>
        </div>
        <p style={{ fontSize: 11, color: '#8FAF97', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'var(--font-inter), sans-serif' }}>
          Quick View &nbsp;·&nbsp; WhatsApp Order
        </p>
      </div>
    )
  }

  // Grid card
  return (
    <div className="product-card-botanical" style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Leaf sprig corner */}
      <div style={{ position: 'absolute', top: 12, right: 12, zIndex: 2 }}>
        <LeafSprig width={56} height={56} opacity={0.25} />
      </div>

      {/* Product image */}
      <div style={{
        background: cardBg,
        aspectRatio: '4/3',
        borderRadius: '18px 18px 0 0',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {product.image && !product.image.includes('placeholder') ? (
          <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          /* Illustrated placeholder */
          <div style={{ padding: 24, textAlign: 'center' }}>
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" style={{ opacity: 0.5, margin: '0 auto 10px' }}>
              {/* Coffee bag icon */}
              <rect x="16" y="20" width="40" height="44" rx="6" stroke="#3D6B52" strokeWidth="1.5" fill="none" />
              <path d="M24 20 C24 14 32 10 36 10 C40 10 48 14 48 20" stroke="#3D6B52" strokeWidth="1.5" fill="none" />
              <path d="M24 35 L48 35" stroke="#3D6B52" strokeWidth="1" strokeLinecap="round" />
              <rect x="28" y="40" width="16" height="12" rx="3" stroke="#3D6B52" strokeWidth="1.2" fill="none" />
              <ellipse cx="36" cy="46" rx="4" ry="3" stroke="#3D6B52" strokeWidth="0.8" fill="none" />
            </svg>
            <p style={{ fontSize: 11, color: '#3D6B52', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'var(--font-inter), sans-serif' }}>
              {product.region}
            </p>
          </div>
        )}
        {/* Roast chip */}
        <div style={{ position: 'absolute', top: 12, left: 12 }}>
          <span className={roastChipClass[product.roast]}>
            {roastLabel[product.roast]}
          </span>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '20px 20px 24px', flex: 1, display: 'flex', flexDirection: 'column', gap: 0 }}>
        {/* Name + bean icon */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 4 }}>
          <div>
            <h3 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 20, fontWeight: 600, color: '#2C3E35', lineHeight: 1.25, marginBottom: 3 }}>
              {product.name}
            </h3>
            <p style={{ fontSize: 12, color: '#8FAF97', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'var(--font-inter), sans-serif' }}>
              {product.category.replace('·', '—')}
            </p>
          </div>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" style={{ opacity: 0.35, flexShrink: 0, marginTop: 4 }} aria-hidden>
            <path d="M11 2 C7 2 2 6 2 11 C2 16 6 20 11 20" stroke="#3D6B52" strokeWidth="1.3" strokeLinecap="round" />
            <path d="M8 6 C4 8 3 13 5 16" stroke="#3D6B52" strokeWidth="1" strokeLinecap="round" />
            <ellipse cx="16" cy="16" rx="5" ry="3.5" stroke="#3D6B52" strokeWidth="1.3" fill="none" transform="rotate(-30 16 16)" />
            <line x1="16" y1="12.5" x2="16" y2="19.5" stroke="#3D6B52" strokeWidth="0.8" transform="rotate(-30 16 16)" />
          </svg>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: '#DDD5C8', margin: '12px 0' }} />

        {/* Flavor */}
        <div style={{ marginBottom: 12 }}>
          <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8FAF97', fontFamily: 'var(--font-inter), sans-serif' }}>
            FLAVOR PROFILE
          </span>
          <p style={{ marginTop: 4, fontSize: 14, color: '#6B7C72', fontStyle: 'italic' }}>
            {product.tastingNotes}
          </p>
        </div>

        {/* Weight toggle */}
        {showWeightToggle && (
          <div style={{ display: 'flex', gap: 6, marginBottom: 14, flexWrap: 'wrap' }}>
            {product.sizes.map((s, i) => (
              <button
                key={s.weight}
                onClick={() => setSizeIdx(i)}
                style={{
                  padding: '5px 14px',
                  borderRadius: 9999,
                  fontSize: 12,
                  fontWeight: 500,
                  fontFamily: 'var(--font-inter), sans-serif',
                  cursor: 'pointer',
                  border: '1.5px solid',
                  borderColor: sizeIdx === i ? '#3D6B52' : '#DDD5C8',
                  background: sizeIdx === i ? '#3D6B52' : 'transparent',
                  color: sizeIdx === i ? 'white' : '#6B7C72',
                  transition: 'all 0.2s',
                }}
              >
                {s.weight}
              </button>
            ))}
          </div>
        )}

        {/* Price */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16, marginTop: 'auto' }}>
          <span style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 22, fontWeight: 700, color: '#2C3E35' }}>
            {formatPrice(size.price)}
          </span>
          {product.oldPrice && (
            <span style={{ fontSize: 13, color: '#B2C9BB', textDecoration: 'line-through' }}>
              {formatPrice(product.oldPrice)}
            </span>
          )}
        </div>

        {/* CTA */}
        <a
          href={`https://wa.me/6281234567890?text=${waMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-sage-full"
        >
          <MessageCircle size={15} />
          Pesan via WhatsApp
        </a>
      </div>
    </div>
  )
}
