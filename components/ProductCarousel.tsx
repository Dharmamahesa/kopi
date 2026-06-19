'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { useInView } from '@/hooks/useInView'
import { products } from '@/data/products'
import ProductCard from './ProductCard'
import ScrollProgressBar from './ScrollProgressBar'

const tabs = ['terlaris', 'paket bundle'] as const

export default function ProductCarousel() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>('terlaris')
  const scrollRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const { ref: sectionRef, isVisible } = useInView(0.1)

  const filteredProducts =
    activeTab === 'paket bundle'
      ? products.filter((p) => p.category === 'BUNDLE' || p.type === 'blend')
      : products

  const handleScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const maxScroll = el.scrollWidth - el.clientWidth
    if (maxScroll > 0) {
      setScrollProgress(el.scrollLeft / maxScroll)
    }
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.addEventListener('scroll', handleScroll, { passive: true })
    return () => el.removeEventListener('scroll', handleScroll)
  }, [handleScroll, activeTab])

  // Horizontal wheel scroll hijacking
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        const maxScroll = el.scrollWidth - el.clientWidth
        if (maxScroll > 0) {
          e.preventDefault()
          el.scrollLeft += e.deltaY
        }
      }
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [activeTab])

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="bg-[#FAF7F2] py-12 sm:py-16 px-4 lg:px-10"
    >
      {/* Tabs */}
      <div
        className={`flex items-center justify-center gap-6 sm:gap-8 mb-8 sm:mb-12 transition-all duration-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative font-serif text-3xl sm:text-5xl transition-colors duration-300 pb-2 ${
              activeTab === tab ? 'text-[#1A1A1A]' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-5 bg-[#3B1F0E] rounded-full animate-scale-in" />
            )}
          </button>
        ))}
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide lg:grid lg:grid-cols-4 gap-0"
      >
        {filteredProducts.map((product, i) => (
          <ProductCard
            key={product.id}
            product={product}
            index={i}
            isVisible={isVisible}
          />
        ))}
      </div>

      <ScrollProgressBar progress={scrollProgress} />
    </section>
  )
}
