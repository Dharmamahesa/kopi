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
  const [selectedSizeIdx, setSelectedSizeIdx] = useState(
    product.sizes.findIndex(s => s.weight === '200g') >= 0
      ? product.sizes.findIndex(s => s.weight === '200g')
      : 0
  )
  const [hovered, setHovered] = useState(false)

  const selectedSize = product.sizes[selectedSizeIdx]

  const waMessage = encodeURIComponent(
    `Halo Kopi Jaya Lestari! Saya ingin memesan:\n\n` +
    `Produk: ${product.name}\n` +
    `Ukuran: ${selectedSize.weight}\n` +
    `Total: ${formatPrice(selectedSize.price)}\n\n` +
    `Mohon konfirmasinya, terima kasih 🙏`
  )

  return (
    <div
      className="product-card flex-none"
      style={{ width: '260px', minWidth: '260px' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top meta */}
      <div className="px-4 pt-4 pb-2 flex items-center justify-between">
        <span className="label-caps" style={{ color: '#C17A3B', fontSize: '10px' }}>
          {product.category.split('·')[0].trim()}
        </span>
        <RoastChip roast={product.roast} />
      </div>

      {/* Image */}
      <div
        className="image-cinematic mx-3 rounded-lg overflow-hidden"
        style={{
          aspectRatio: '3/4',
          background: 'linear-gradient(160deg, #3B1F0E 0%, #1B4332 60%, #2C1A0A 100%)',
          transition: 'transform 0.5s ease',
          transform: hovered ? 'scale(1.03)' : 'scale(1)',
        }}
      >
        {product.image && !product.image.startsWith('https://placehold') ? (
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          /* Cinematic placeholder with texture */
          <div
            style={{
              width: '100%', height: '100%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexDirection: 'column', gap: 8,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Bean silhouette pattern */}
            <div style={{ opacity: 0.15 }}>
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: 24,
                    height: 14,
                    borderRadius: '50%',
                    background: '#C17A3B',
                    position: 'absolute',
                    top: `${10 + (i * 8) % 80}%`,
                    left: `${(i * 13) % 80}%`,
                    transform: `rotate(${i * 30}deg)`,
                  }}
                />
              ))}
            </div>
            <span style={{
              fontFamily: 'var(--font-playfair), serif',
              fontSize: 13,
              color: 'rgba(245,236,215,0.5)',
              letterSpacing: 3,
              zIndex: 1,
            }}>
              {product.category.split('·')[0].trim()}
            </span>
          </div>
        )}
      </div>

      {/* Bottom info */}
      <div className="px-4 pb-4 pt-3">
        <h3 className="headline-sm mb-1" style={{ fontSize: '20px' }}>
          {product.name}
        </h3>
        <p className="body-md" style={{ color: '#717973', fontStyle: 'italic', fontSize: '14px', marginBottom: 8 }}>
          {product.tastingNotes}
        </p>

        {/* Weight toggle (katalog) */}
        {showWeightToggle && (
          <div className="flex gap-1 mb-3 flex-wrap">
            {product.sizes.map((size, i) => (
              <button
                key={size.weight}
                onClick={() => setSelectedSizeIdx(i)}
                className="label-sm px-3 py-1 rounded-full transition-all duration-200"
                style={{
                  background: selectedSizeIdx === i ? '#1B4332' : 'transparent',
                  color: selectedSizeIdx === i ? '#F5ECD7' : '#1B4332',
                  border: `1px solid #1B4332`,
                  cursor: 'pointer',
                  fontSize: '10px',
                }}
              >
                {size.weight}
              </button>
            ))}
          </div>
        )}

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-3">
          <span className="label-caps" style={{ color: '#1B4332', fontSize: '13px' }}>
            {formatPrice(selectedSize.price)}
          </span>
          {product.oldPrice && (
            <span style={{ color: '#C1C8C2', fontSize: '12px', textDecoration: 'line-through' }}>
              {formatPrice(product.oldPrice)}
            </span>
          )}
        </div>

        {/* Pesan WA button */}
        <a
          href={`https://wa.me/6281234567890?text=${waMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full flex items-center justify-center gap-2"
          style={{ padding: '10px 16px', fontSize: '11px' }}
        >
          <MessageCircle size={13} />
          Pesan via WA
        </a>
      </div>
    </div>
  )
}
