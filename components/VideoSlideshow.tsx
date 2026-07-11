'use client'

import { useState, useEffect, useCallback } from 'react'
import { Pause, Play } from 'lucide-react'

const slides = [
  {
    id: '01',
    label: 'Dari Drum ke Cangkirmu',
    description: 'Biji kopi masuk drum roaster, panas presisi menjaga karakter rasa.',
    bg: 'linear-gradient(160deg, #1A0A03 0%, #3B1F0E 40%, #1B4332 100%)',
  },
  {
    id: '02',
    label: 'Saat yang Tepat',
    description: 'Biji yang baru dipanggang mengalir keluar — aroma menyeruak.',
    bg: 'linear-gradient(160deg, #2C1A0A 0%, #4A2512 50%, #1B4332 100%)',
  },
  {
    id: '03',
    label: 'Lereng Arjuno',
    description: 'Kabut pagi menyelimuti roastery kami di Hutan Cempaka, 875 mdpl.',
    bg: 'linear-gradient(160deg, #0F2419 0%, #1B4332 50%, #243B2F 100%)',
  },
]

const INTERVAL = 7000
const FADE_DURATION = 1200

export default function VideoSlideshow() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const [fading, setFading] = useState(false)

  const goTo = useCallback((idx: number) => {
    if (fading) return
    setFading(true)
    setTimeout(() => {
      setCurrent(idx)
      setFading(false)
    }, FADE_DURATION / 2)
  }, [fading])

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      goTo((current + 1) % slides.length)
    }, INTERVAL)
    return () => clearInterval(timer)
  }, [current, paused, goTo])

  const slide = slides[current]

  return (
    <div className="relative w-full h-full overflow-hidden" style={{ minHeight: '100%' }}>
      {/* Slide background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: slide.bg,
          opacity: fading ? 0 : 1,
          transition: `opacity ${FADE_DURATION}ms ease`,
        }}
      >
        {/* Animated steam/texture elements */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 60% 40% at 30% 70%, rgba(193,122,59,0.12) 0%, transparent 70%)',
        }} />

        {/* Coffee bean silhouettes */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', opacity: 0.08 }}>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: 32 + (i % 4) * 8,
                height: 20 + (i % 3) * 6,
                borderRadius: '50%',
                background: '#C17A3B',
                top: `${(i * 17 + 5) % 90}%`,
                left: `${(i * 23 + 3) % 90}%`,
                transform: `rotate(${i * 41}deg)`,
              }}
            />
          ))}
        </div>

        {/* Vignette */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.7) 100%)',
        }} />
      </div>

      {/* Letterbox bars */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: 48, background: '#1B4332', zIndex: 10,
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: 48, background: '#1B4332', zIndex: 10,
      }} />

      {/* Amber light leak */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 6, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 50% 40% at 100% 0%, rgba(193,122,59,0.18) 0%, transparent 70%)',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 20,
        height: '100%', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'flex-end',
        padding: '80px 40px',
        opacity: fading ? 0 : 1,
        transition: `opacity ${FADE_DURATION}ms ease`,
      }}>
        {/* Slide counter */}
        <div style={{
          position: 'absolute', top: 72, right: 32,
          fontFamily: 'monospace',
          fontSize: 11,
          color: 'rgba(245,236,215,0.4)',
          letterSpacing: '0.1em',
        }}>
          {String(current + 1).padStart(2,'0')} / {String(slides.length).padStart(2,'0')}
        </div>

        {/* Slide text */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <p className="label-caps mb-3" style={{ color: '#C17A3B' }}>
            {slide.label}
          </p>
          <p className="body-md" style={{ color: 'rgba(245,236,215,0.65)', maxWidth: 280 }}>
            {slide.description}
          </p>
        </div>

        {/* Dot indicators */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 16 }}>
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Slide ${i + 1}`}
              onClick={() => goTo(i)}
              style={{
                width: i === current ? 24 : 6,
                height: 6,
                borderRadius: 9999,
                background: i === current ? '#C17A3B' : 'rgba(245,236,215,0.3)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.4s ease',
              }}
            />
          ))}
        </div>

        {/* Pause/Play */}
        <button
          aria-label={paused ? 'Play slideshow' : 'Pause slideshow'}
          onClick={() => setPaused((p) => !p)}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '6px 16px',
            borderRadius: 9999,
            border: '1px solid rgba(245,236,215,0.25)',
            background: 'rgba(0,0,0,0.2)',
            color: 'rgba(245,236,215,0.7)',
            cursor: 'pointer',
            fontSize: 10,
            letterSpacing: '0.1em',
            fontFamily: 'var(--font-inter), sans-serif',
            textTransform: 'uppercase',
          }}
        >
          {paused ? <Play size={10} /> : <Pause size={10} />}
          {paused ? 'Play' : 'Pause'}
        </button>
      </div>
    </div>
  )
}
