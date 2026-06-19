'use client'

import Link from 'next/link'
import { useInView } from '@/hooks/useInView'
import VideoSlideshow from './VideoSlideshow'

export default function HeroSection() {
  const { ref, isVisible } = useInView(0.1)

  return (
    <section className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Half */}
      <div className="relative w-full lg:w-1/2 min-h-[60vh] lg:min-h-screen flex items-center">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://placehold.co/1280x900/3B1F0E/F5ECD7?text=Kopi+Nusantara)',
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`relative z-10 px-6 sm:px-10 lg:px-14 py-20 transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
            dari kebun,
            <br />
            <span className="relative inline-block">
              ke cangkirmu.
              {/* Decorative wavy lines */}
              <svg
                className="absolute -bottom-1 left-0 w-full h-4"
                viewBox="0 0 200 16"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 8 Q 25 2, 50 8 T 100 8 T 150 8 T 200 8"
                  stroke="#C17A3B"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M0 11 Q 25 5, 50 11 T 100 11 T 150 11 T 200 11"
                  stroke="#C17A3B"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.6"
                />
                <path
                  d="M0 14 Q 25 8, 50 14 T 100 14 T 150 14 T 200 14"
                  stroke="#C17A3B"
                  strokeWidth="1"
                  fill="none"
                  opacity="0.3"
                />
              </svg>
            </span>
          </h1>

          <p className="text-white/80 text-sm md:text-base mb-10 max-w-md leading-relaxed">
            Kopi single origin Indonesia, dipanggang tangan dengan penuh cinta.
          </p>

          <Link
            href="/products"
            className="btn-primary inline-block px-10 py-4 bg-[#F5ECD7] text-[#3B1F0E] rounded-full text-sm font-medium tracking-wide"
          >
            lihat produk
          </Link>
        </div>
      </div>

      {/* Right Half — Video Slideshow */}
      <div className="relative w-full lg:w-1/2 min-h-[40vh] lg:min-h-screen">
        <VideoSlideshow />
      </div>
    </section>
  )
}
