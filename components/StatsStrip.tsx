'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { overline: 'VARIAN', number: '12+', desc: 'Varian Single Origin' },
  { overline: 'KUALITAS', number: '100%', desc: 'Arabika & Robusta Pilihan' },
  { overline: 'METODE', number: 'SMALL BATCH', desc: 'Dipanggang Per Pesanan' },
  { overline: 'PENGIRIMAN', number: '2–3 HARI', desc: 'Estimasi Pengiriman' },
]

export default function StatsStrip() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      style={{ background: '#FAF7F2', paddingTop: 80, paddingBottom: 80 }}
    >
      <div className="container-jl">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 0,
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.overline}
              style={{
                textAlign: 'center',
                padding: '24px 24px',
                borderRight: i < stats.length - 1 ? '1px solid #C1C8C2' : 'none',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.7s ease ${i * 0.12}s, transform 0.7s ease ${i * 0.12}s`,
              }}
            >
              <p className="label-caps mb-3" style={{ color: '#C17A3B' }}>
                {stat.overline}
              </p>
              <p
                className="display-lg-mobile mb-2"
                style={{ color: '#1B4332', lineHeight: 1 }}
              >
                {stat.number}
              </p>
              <p className="body-md" style={{ color: '#414844', fontSize: '14px' }}>
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
