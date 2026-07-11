'use client'

import { useRef } from 'react'
import { useCountUp } from '@/hooks/useScrollEffects'

interface StatItem {
  overline: string
  prefix?: string
  number: number
  suffix?: string
  desc: string
  isText?: boolean
  textValue?: string
}

const stats: StatItem[] = [
  { overline: 'VARIAN',      number: 12,  suffix: '+', desc: 'Varian Single Origin' },
  { overline: 'KUALITAS',    number: 100, suffix: '%', desc: 'Arabika & Robusta Pilihan' },
  { overline: 'METODE',      number: 0,   desc: 'Dipanggang Per Pesanan', isText: true, textValue: 'SMALL BATCH' },
  { overline: 'PENGIRIMAN',  number: 0,   desc: 'Estimasi Pengiriman',    isText: true, textValue: '2–3 HARI' },
]

function StatNumber({ stat }: { stat: StatItem }) {
  const ref = useCountUp(stat.number, 1200)
  if (stat.isText) {
    return (
      <p className="stat-number mb-2" style={{ fontSize: 'clamp(22px, 3vw, 36px)' }}>
        {stat.textValue}
      </p>
    )
  }
  return (
    <p className="stat-number mb-2">
      {stat.prefix}
      <span ref={ref}>0</span>
      {stat.suffix}
    </p>
  )
}

export default function StatsStrip() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section
      ref={sectionRef}
      className="texture-washi"
      style={{ background: '#FAF7F2', paddingTop: 80, paddingBottom: 80 }}
    >
      <div className="container-jl" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 0,
        }}>
          {stats.map((stat, i) => (
            <div
              key={stat.overline}
              className="reveal-element"
              style={{
                textAlign: 'center',
                padding: '24px 24px',
                borderRight: i < stats.length - 1 ? '1px solid #C1C8C2' : 'none',
                position: 'relative',
                transitionDelay: `${i * 120}ms`,
              }}
            >
              {/* Ghost section number — very subtle */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontFamily: 'var(--font-playfair), serif',
                fontSize: 'clamp(80px, 12vw, 140px)',
                fontWeight: 800,
                color: 'transparent',
                WebkitTextStroke: '1px rgba(193,122,59,0.06)',
                lineHeight: 1,
                pointerEvents: 'none',
                userSelect: 'none',
                zIndex: 0,
              }}>
                {String(i + 1).padStart(2, '0')}
              </div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <p className="label-caps mb-3" style={{ color: '#C17A3B' }}>{stat.overline}</p>
                <StatNumber stat={stat} />
                <p className="body-md" style={{ color: '#414844', fontSize: '14px' }}>{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Auto-activate reveal on mount (since parent section doesn't have observer) */}
      <style>{`
        .texture-washi .reveal-element { animation: none; }
      `}</style>
      <RevealActivator containerRef={sectionRef} />
    </section>
  )
}

// Small helper to activate reveal-element children
function RevealActivator({ containerRef }: { containerRef: React.RefObject<HTMLElement | null> }) {
  // This just uses the hook pattern inline
  const hasSetup = useRef(false)
  if (typeof window !== 'undefined' && !hasSetup.current) {
    hasSetup.current = true
  }

  // Use IntersectionObserver on mount
  useRef(() => {
    const container = containerRef.current
    if (!container) return
    const els = container.querySelectorAll<HTMLElement>('.reveal-element')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible') }),
      { threshold: 0.15 }
    )
    els.forEach(el => observer.observe(el))
  })

  return null
}
