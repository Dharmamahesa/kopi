'use client'

import type { ReactNode } from 'react'

interface CinematicFrameProps {
  children: ReactNode
  overline?: string
  letterboxColor?: string
  className?: string
  style?: React.CSSProperties
}

/**
 * The Roaster's Vignette — specialty cinematic wrapper component.
 * Applies letterbox bars, radial vignette, animated film grain, and
 * amber light-leak corners per the Jaya Lestari Roastery System.
 */
export default function CinematicFrame({
  children,
  overline,
  letterboxColor = '#1B4332',
  className = '',
  style,
}: CinematicFrameProps) {
  return (
    <div
      className={`relative overflow-hidden film-grain ${className}`}
      style={style}
    >
      {/* Letterbox top */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '10vh',
          background: letterboxColor,
          zIndex: 10,
          pointerEvents: 'none',
        }}
      />
      {/* Letterbox bottom */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0,
          height: '10vh',
          background: letterboxColor,
          zIndex: 10,
          pointerEvents: 'none',
        }}
      />

      {/* Radial vignette */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)',
          zIndex: 5,
          pointerEvents: 'none',
        }}
      />

      {/* Amber light leaks */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse 60% 50% at 0% 0%, rgba(193,122,59,0.20) 0%, transparent 70%),
            radial-gradient(ellipse 60% 50% at 100% 100%, rgba(193,122,59,0.15) 0%, transparent 70%)
          `,
          zIndex: 6,
          pointerEvents: 'none',
        }}
      />

      {/* Muted Gold overline */}
      {overline && (
        <div
          style={{
            position: 'absolute',
            top: '14vh',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 15,
          }}
        >
          <span
            className="label-caps"
            style={{ color: '#C17A3B', letterSpacing: '0.22em' }}
          >
            {overline}
          </span>
        </div>
      )}

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 8 }}>
        {children}
      </div>
    </div>
  )
}
