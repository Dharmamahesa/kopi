'use client'

import { useState } from 'react'

const origins = [
  { id: 'aceh',     label: 'GAYO · ACEH',      note: 'Bold, smoky',    x: '18%', y: '28%' },
  { id: 'sumatra',  label: 'SUMATERA',          note: 'Earthy, herbal', x: '22%', y: '48%' },
  { id: 'java',     label: 'JAVA · JAWA TIMUR', note: 'Bold, espresso', x: '50%', y: '60%' },
  { id: 'bali',     label: 'KINTAMANI · BALI',  note: 'Citrusy, bright',x: '60%', y: '68%' },
  { id: 'flores',   label: 'FLORES · NTT',      note: 'Floral, sweet',  x: '72%', y: '64%' },
  { id: 'sulawesi', label: 'TORAJA · SULAWESI', note: 'Cokelat, fruity', x: '68%', y: '44%' },
]

export default function OriginMap() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section
      className="film-grain relative overflow-hidden"
      style={{ background: '#1B4332', paddingTop: 100, paddingBottom: 100 }}
    >
      {/* Cinematic overlays */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '10vh',
        background: '#1B4332', zIndex: 10,
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '10vh',
        background: '#1B4332', zIndex: 10,
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.45) 100%)',
        zIndex: 5, pointerEvents: 'none',
      }} />
      {/* Light leaks */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 6, pointerEvents: 'none',
        background: `
          radial-gradient(ellipse 50% 40% at 0% 0%, rgba(193,122,59,0.18) 0%, transparent 70%),
          radial-gradient(ellipse 50% 40% at 100% 100%, rgba(193,122,59,0.14) 0%, transparent 70%)
        `,
      }} />

      <div className="container-jl" style={{ position: 'relative', zIndex: 8 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 64,
            alignItems: 'center',
          }}
          className="flex-col-mobile"
        >
          {/* Left text */}
          <div>
            <p className="label-caps mb-4" style={{ color: '#C17A3B' }}>
              ASAL USUL KAMI
            </p>
            <h2 className="headline-md mb-5" style={{ color: '#F5ECD7' }}>
              dari seluruh kepulauan
            </h2>
            <p className="body-md mb-8" style={{ color: 'rgba(245,236,215,0.65)', maxWidth: 360 }}>
              Kami memilih langsung dari petani terpercaya di seluruh Nusantara.
              Setiap biji punya cerita, ketinggian, dan karakter rasa tersendiri.
            </p>

            {/* Origin list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {origins.map((o) => (
                <div
                  key={o.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    opacity: hovered === o.id ? 1 : 0.7,
                    transition: 'opacity 0.2s',
                  }}
                >
                  <div style={{
                    width: 8, height: 8, borderRadius: '50%',
                    background: '#C17A3B', flexShrink: 0,
                  }} />
                  <span className="label-caps" style={{ color: '#F5ECD7', fontSize: '10px' }}>
                    {o.label}
                  </span>
                  <span style={{ color: 'rgba(245,236,215,0.45)', fontSize: '11px', fontStyle: 'italic' }}>
                    — {o.note}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Indonesia map SVG */}
          <div style={{ position: 'relative', width: '100%', maxWidth: 480 }}>
            {/* Simplified Indonesia archipelago outline */}
            <svg
              viewBox="0 0 480 280"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: '100%', height: 'auto' }}
            >
              {/* Sumatera */}
              <ellipse cx="108" cy="134" rx="80" ry="28" transform="rotate(-20 108 134)"
                fill="rgba(245,236,215,0.08)" stroke="rgba(245,236,215,0.2)" strokeWidth="1"/>
              {/* Java */}
              <ellipse cx="240" cy="168" rx="90" ry="18" transform="rotate(-5 240 168)"
                fill="rgba(245,236,215,0.08)" stroke="rgba(245,236,215,0.2)" strokeWidth="1"/>
              {/* Kalimantan */}
              <ellipse cx="315" cy="108" rx="62" ry="52"
                fill="rgba(245,236,215,0.08)" stroke="rgba(245,236,215,0.2)" strokeWidth="1"/>
              {/* Sulawesi */}
              <path d="M368 80 C378 60, 400 70, 395 95 C410 100, 415 130, 400 135 C395 155, 380 158, 375 140 C360 130, 355 110, 368 80Z"
                fill="rgba(245,236,215,0.08)" stroke="rgba(245,236,215,0.2)" strokeWidth="1"/>
              {/* Bali */}
              <ellipse cx="290" cy="183" rx="14" ry="10"
                fill="rgba(245,236,215,0.1)" stroke="rgba(245,236,215,0.3)" strokeWidth="1"/>
              {/* Flores */}
              <ellipse cx="340" cy="193" rx="20" ry="9" transform="rotate(-10 340 193)"
                fill="rgba(245,236,215,0.08)" stroke="rgba(245,236,215,0.2)" strokeWidth="1"/>
              {/* Papua */}
              <ellipse cx="445" cy="130" rx="30" ry="45" transform="rotate(-10 445 130)"
                fill="rgba(245,236,215,0.08)" stroke="rgba(245,236,215,0.2)" strokeWidth="1"/>

              {/* Aceh label */}
              <circle cx="86" cy="80" r="5" fill="#C17A3B" opacity={hovered === 'aceh' ? 1 : 0.7}
                style={{ cursor: 'pointer', transition: 'opacity 0.2s' }}
                onMouseEnter={() => setHovered('aceh')}
                onMouseLeave={() => setHovered(null)}
              />
              {/* Sumatra label */}
              <circle cx="108" cy="130" r="5" fill="#C17A3B" opacity={hovered === 'sumatra' ? 1 : 0.7}
                style={{ cursor: 'pointer', transition: 'opacity 0.2s' }}
                onMouseEnter={() => setHovered('sumatra')}
                onMouseLeave={() => setHovered(null)}
              />
              {/* Java */}
              <circle cx="240" cy="168" r="5" fill="#C17A3B" opacity={hovered === 'java' ? 1 : 0.7}
                style={{ cursor: 'pointer', transition: 'opacity 0.2s' }}
                onMouseEnter={() => setHovered('java')}
                onMouseLeave={() => setHovered(null)}
              />
              {/* Bali */}
              <circle cx="290" cy="183" r="5" fill="#C17A3B" opacity={hovered === 'bali' ? 1 : 0.7}
                style={{ cursor: 'pointer', transition: 'opacity 0.2s' }}
                onMouseEnter={() => setHovered('bali')}
                onMouseLeave={() => setHovered(null)}
              />
              {/* Flores */}
              <circle cx="340" cy="193" r="5" fill="#C17A3B" opacity={hovered === 'flores' ? 1 : 0.7}
                style={{ cursor: 'pointer', transition: 'opacity 0.2s' }}
                onMouseEnter={() => setHovered('flores')}
                onMouseLeave={() => setHovered(null)}
              />
              {/* Sulawesi */}
              <circle cx="388" cy="108" r="5" fill="#C17A3B" opacity={hovered === 'sulawesi' ? 1 : 0.7}
                style={{ cursor: 'pointer', transition: 'opacity 0.2s' }}
                onMouseEnter={() => setHovered('sulawesi')}
                onMouseLeave={() => setHovered(null)}
              />

              {/* Tooltip for hovered pin */}
              {hovered && (() => {
                const o = origins.find(x => x.id === hovered)
                if (!o) return null
                return (
                  <g>
                    <rect x="200" y="220" width="180" height="44" rx="6"
                      fill="#3B1F0E" opacity="0.95"/>
                    <text x="210" y="238" fontSize="9" fill="#C17A3B"
                      fontFamily="sans-serif" letterSpacing="1.5" fontWeight="600">
                      {o.label}
                    </text>
                    <text x="210" y="254" fontSize="10" fill="rgba(245,236,215,0.7)"
                      fontFamily="sans-serif" fontStyle="italic">
                      {o.note}
                    </text>
                  </g>
                )
              })()}
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .flex-col-mobile { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
