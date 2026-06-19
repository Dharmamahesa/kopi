'use client'

import { useState } from 'react'
import AnnouncementBar from '@/components/AnnouncementBar'
import Navbar from '@/components/Navbar'
import ProductCard from '@/components/ProductCard'
import Footer from '@/components/Footer'
import { products, type Product } from '@/data/products'
import { useInView } from '@/hooks/useInView'

const filters = ['semua', 'arabika', 'robusta', 'blend'] as const

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>('semua')
  const { ref, isVisible } = useInView(0.1)

  const filteredProducts: Product[] =
    activeFilter === 'semua'
      ? products
      : products.filter((p) => p.type === activeFilter)

  return (
    <main className="flex-1">
      <AnnouncementBar />
      <Navbar />

      {/* Hero */}
      <section className="bg-[#3B1F0E] text-[#F5ECD7] pt-32 pb-16 sm:pt-36 sm:pb-20 px-4 text-center">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl mb-4">semua produk kami</h1>
        <p className="text-sm sm:text-base text-[#F5ECD7]/70 max-w-lg mx-auto">
          Pilihan kopi terbaik dari berbagai daerah di Indonesia, dipanggang sempurna untuk Anda.
        </p>
      </section>

      {/* Filter buttons */}
      <section className="bg-[#FAF7F2] pt-10 px-4">
        <div className="flex items-center justify-center gap-3 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-[#3B1F0E] text-[#F5ECD7] shadow-md'
                  : 'bg-white text-[#3B1F0E] border border-[#E8DDD0] hover:border-[#C17A3B]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Product grid */}
      <section
        ref={ref as React.RefObject<HTMLElement>}
        className="bg-[#FAF7F2] py-10 sm:py-14 px-4 sm:px-6 lg:px-10"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              index={i}
              isVisible={isVisible}
              fullWidth
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-400 py-20 text-sm">
            Tidak ada produk dalam kategori ini.
          </p>
        )}
      </section>

      <Footer />
    </main>
  )
}
