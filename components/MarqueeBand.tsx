'use client'

/**
 * Horizontal marquee band — Japanese brand feel.
 * Repeating label-caps text scrolling continuously.
 * Used between sections as a decorative band.
 */

const ITEMS = [
  'TORAJA', 'GAYO', 'FLORES', 'KINTAMANI', 'JAVA', 'SUMATRA',
  'TORAJA', 'GAYO', 'FLORES', 'KINTAMANI', 'JAVA', 'SUMATRA',
]

interface MarqueeBandProps {
  bg?: string
  style?: React.CSSProperties
}

export default function MarqueeBand({ bg = '#FAF7F2', style }: MarqueeBandProps) {
  return (
    <div
      className="marquee-wrapper"
      style={{ background: bg, ...style }}
      aria-hidden="true"
    >
      <div className="marquee-track">
        {ITEMS.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-sep">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
