'use client'

import { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ProductCard from './ProductCard'
import type { Product } from '@/data/products'

interface ProductCarouselProps {
  products: Product[]
}

export default function ProductCarousel({ products }: ProductCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  const scroll = (dir: 'left' | 'right') => {
    const el = trackRef.current
    if (!el) return
    const amount = 280
    el.scrollBy({ left: dir === 'right' ? amount : -amount, behavior: 'smooth' })
  }

  const onScroll = () => {
    const el = trackRef.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    setScrollProgress(max > 0 ? el.scrollLeft / max : 0)
  }

  return (
    <div className="relative">
      {/* Scroll arrows (desktop) */}
      <button
        aria-label="Scroll left"
        onClick={() => scroll('left')}
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full items-center justify-center transition-all duration-200"
        style={{
          background: '#F5ECD7',
          border: '1px solid #E8E3DA',
          boxShadow: '0 4px 16px rgba(59,31,14,0.12)',
          color: '#1B4332',
        }}
      >
        <ChevronLeft size={18} />
      </button>
      <button
        aria-label="Scroll right"
        onClick={() => scroll('right')}
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full items-center justify-center transition-all duration-200"
        style={{
          background: '#F5ECD7',
          border: '1px solid #E8E3DA',
          boxShadow: '0 4px 16px rgba(59,31,14,0.12)',
          color: '#1B4332',
        }}
      >
        <ChevronRight size={18} />
      </button>

      {/* Track */}
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
        style={{ padding: '0 4px 16px' }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Scroll progress bar */}
      <div className="scroll-track">
        <div
          className="scroll-thumb"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>
    </div>
  )
}
