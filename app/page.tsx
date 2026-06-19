'use client'

import AnnouncementBar from '@/components/AnnouncementBar'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ProductCarousel from '@/components/ProductCarousel'
import CategoryCard from '@/components/CategoryCard'
import Footer from '@/components/Footer'
import { useInView } from '@/hooks/useInView'

const categories = [
  { name: 'biji', videoSrc: '/video kopi.mp4' },
  { name: 'bubuk', videoSrc: '/video kopi.mp4' },
  { name: 'paket', videoSrc: '/video kopi.mp4' },
]

export default function Home() {
  const { ref: categoriesRef, isVisible: categoriesVisible } = useInView(0.1)

  return (
    <main className="flex-1">
      {/* Header */}
      <AnnouncementBar />
      <Navbar />

      {/* Hero */}
      <HeroSection />

      {/* Best Sellers */}
      <ProductCarousel />

      {/* Categories */}
      <section
        ref={categoriesRef as React.RefObject<HTMLElement>}
        className={`bg-[#1A1A1A] text-white transition-all duration-1000 ${
          categoriesVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3">
          {categories.map((cat) => (
            <CategoryCard key={cat.name} name={cat.name} videoSrc={cat.videoSrc} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
