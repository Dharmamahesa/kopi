'use client'

import { useEffect, useRef, useState } from 'react'

interface Step {
  number: string
  title: string
  desc: string
}

interface ProcessTimelineProps {
  steps: Step[]
  overline?: string
  headline?: string
  light?: boolean
}

export default function ProcessTimeline({
  steps,
  overline,
  headline,
  light = true,
}: ProcessTimelineProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref}>
      {(overline || headline) && (
        <div style={{ marginBottom: 48 }}>
          {overline && (
            <p className="label-caps mb-3" style={{ color: '#C17A3B' }}>{overline}</p>
          )}
          {headline && (
            <h2 className="headline-md" style={{ color: light ? '#1A1C1A' : '#F5ECD7' }}>
              {headline}
            </h2>
          )}
        </div>
      )}

      {/* Desktop horizontal / Mobile vertical */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${steps.length}, 1fr)`,
          gap: 0,
          position: 'relative',
        }}
        className="process-grid"
      >
        {/* Connector line (desktop only) */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            top: 20,
            left: '12.5%',
            right: '12.5%',
            height: 1,
            borderTop: '1px dashed #C1C8C2',
            zIndex: 0,
          }}
          className="process-connector"
        />

        {steps.map((step, i) => (
          <div
            key={step.number}
            style={{
              textAlign: 'center',
              padding: '0 16px 32px',
              position: 'relative',
              zIndex: 1,
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(24px)',
              transition: `opacity 0.7s ease ${i * 0.15}s, transform 0.7s ease ${i * 0.15}s`,
            }}
          >
            {/* Circle */}
            <div style={{
              width: 40, height: 40, borderRadius: '50%',
              background: '#C17A3B',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 16px',
              color: '#fff',
              fontFamily: 'var(--font-playfair), serif',
              fontSize: 16, fontWeight: 700,
              position: 'relative',
              zIndex: 2,
              boxShadow: '0 0 0 6px ' + (light ? '#FAF7F2' : '#1B4332'),
            }}>
              {step.number}
            </div>

            <h3 className="headline-sm mb-2" style={{
              fontSize: '18px',
              color: light ? '#1A1C1A' : '#F5ECD7',
            }}>
              {step.title}
            </h3>
            <p className="body-md" style={{
              color: light ? '#414844' : 'rgba(245,236,215,0.65)',
              fontSize: '14px',
            }}>
              {step.desc}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .process-grid {
            grid-template-columns: 1fr !important;
          }
          .process-connector {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}
