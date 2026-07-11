'use client'

import { useState } from 'react'
import type { Product } from '@/data/products'
import RoastChip from './RoastChip'
import { MessageCircle } from 'lucide-react'

interface ProductCardProps {
  product: Product
  showWeightToggle?: boolean
}

function formatPrice(price: number) {
  return 'Rp ' + price.toLocaleString('id-ID')
}

export default function ProductCard({ product, showWeightToggle = false }: ProductCardProps) {
  const defaultIdx = product.sizes.findIndex(s => s.weight === '200g') >= 0
    ? product.sizes.findIndex(s => s.weight === '200g') : 0
  const [selectedSizeIdx, setSelectedSizeIdx] = useState(defaultIdx)

  const selectedSize = product.sizes[selectedSizeIdx]

  const waMessage = encodeURIComponent(
    `Halo Kopi Jaya Lestari! Saya ingin memesan:\n\n` +
    `Produk: ${product.name}\n` +
    `Ukuran: ${selectedSize.weight}\n` +
    `Total: ${formatPrice(selectedSize.price)}\n\n` +
    `Mohon konfirmasinya 🙏`
  )

  // Split product name for mixed-weight typography
  const nameParts = product.name.split(' ')
  const firstWord = nameParts[0]
  const rest      = nameParts.slice(1).join(' ')

  return (
    <div
      className="product-card flex-none"
      style={{ width: '260px', minWidth: '260px' }}
    >
      {/* Rotated origin stamp — like a Japanese sake label */}
      <span className="origin-stamp">
        {product.category.split('·')[0].trim()}
      </span>

      {/* Top meta */}
      <div className="px-4 pt-4 pb-2 flex items-center justify-between">
        {/* Rotated sticker tag */}
        <span className="tag-rotated">
          {product.type}
        </span>
        <RoastChip roast={product.roast} />
      </div>

      {/* Image */}
      <div
        className="image-cinematic mx-3 rounded-lg overflow-hidden"
        style={{
          aspectRatio: '3/4',
          background: 'linear-gradient(160deg, #3B1F0E 0%, #1B4332 60%, #2C1A0A 100%)',
          position: 'relative',
        }}
      >
        {product.image && !product.image.startsWith('https://placehold') ? (
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          /* Cinematic placeholder */
          <div style={{
            width: '100%', height: '100%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexDirection: 'column', gap: 8, position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ opacity: 0.1 }}>
              {[...Array(12)].map((_, i) => (
                <div key={i} style={{
                  width: 24, height: 14, borderRadius: '50%', background: '#C17A3B',
                  position: 'absolute',
                  top: `${10 + (i * 8) % 80}%`,
                  left: `${(i * 13) % 80}%`,
                  transform: `rotate(${i * 30}deg)`,
                }} />
              ))}
            </div>
            <span style={{
              fontFamily: 'var(--font-playfair), serif', fontSize: 13,
              color: 'rgba(245,236,215,0.4)', letterSpacing: 3, zIndex: 1,
            }}>
              {product.category.split('·')[0].trim()}
            </span>
          </div>
        )}

        {/* CTA reveal layer (slides up on hover via CSS) */}
        <div className="cta-reveal flex items-center justify-center gap-2">
          <a
            href={`https://wa.me/6281234567890?text=${waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '10px 20px', borderRadius: 9999,
              background: '#F5ECD7', color: '#1B4332',
              fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', textDecoration: 'none',
              fontFamily: 'var(--font-inter), sans-serif',
            }}
          >
            <MessageCircle size={12} />
            Pesan via WA
          </a>
        </div>
      </div>

      {/* Bottom info */}
      <div className="px-4 pb-5 pt-3">
        {/* Mixed-weight product name */}
        <h3 style={{ marginBottom: 4, lineHeight: 1.2 }}>
          <span className="product-name-thin" style={{ fontSize: '22px', display: 'block' }}>
            {firstWord}
          </span>
          {rest && (
            <span className="product-name-bold" style={{ fontSize: '18px', color: '#1B4332' }}>
              {rest.toUpperCase()}
            </span>
          )}
        </h3>

        <p className="body-md" style={{ color: '#717973', fontStyle: 'italic', fontSize: '13px', marginBottom: 10 }}>
          {product.tastingNotes}
        </p>

        {/* Sumi ink divider */}
        <span className="sumi-divider" />

        {/* Weight toggle */}
        {showWeightToggle && (
          <div style={{ display: 'flex', gap: 6, marginBottom: 10, flexWrap: 'wrap' }}>
            {product.sizes.map((size, i) => (
              <button
                key={size.weight}
                onClick={() => setSelectedSizeIdx(i)}
                className="label-sm"
                style={{
                  padding: '5px 12px', borderRadius: 9999, cursor: 'pointer',
                  background: selectedSizeIdx === i ? '#1B4332' : 'transparent',
                  color: selectedSizeIdx === i ? '#F5ECD7' : '#1B4332',
                  border: '1px solid #1B4332', transition: 'all 0.2s',
                  fontSize: '10px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase',
                }}
              >
                {size.weight}
              </button>
            ))}
          </div>
        )}

        {/* Price */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
          <span className="label-caps" style={{ color: '#1B4332', fontSize: '13px' }}>
            {formatPrice(selectedSize.price)}
          </span>
          {product.oldPrice && (
            <span style={{ color: '#C1C8C2', fontSize: '12px', textDecoration: 'line-through' }}>
              {formatPrice(product.oldPrice)}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
