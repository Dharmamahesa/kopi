/**
 * Botanical SVG Illustrations for Jaya Lestari
 * All: stroke #3D6B52, thin 1.5px, opacity 15-30%
 * Hand-drawn organic feel — NOT geometric
 */

// ── Coffee Branch with Cherries ───────────────────────────
export function BotanicalBranch({
  width = 280,
  height = 380,
  opacity = 0.22,
  className = '',
  style = {},
}: {
  width?: number
  height?: number
  opacity?: number
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 280 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity, pointerEvents: 'none', ...style }}
      aria-hidden
    >
      {/* Main stem */}
      <path d="M60 370 C65 310 70 250 80 190 C90 130 100 90 120 50" stroke="#3D6B52" strokeWidth="1.5" strokeLinecap="round" />
      {/* Branch left 1 */}
      <path d="M75 300 C55 280 30 275 10 260" stroke="#3D6B52" strokeWidth="1.5" strokeLinecap="round" />
      {/* Branch right 1 */}
      <path d="M78 260 C100 240 130 238 150 225" stroke="#3D6B52" strokeWidth="1.5" strokeLinecap="round" />
      {/* Branch left 2 */}
      <path d="M85 210 C60 195 40 185 15 178" stroke="#3D6B52" strokeWidth="1.5" strokeLinecap="round" />
      {/* Branch right 2 */}
      <path d="M90 170 C115 152 145 148 170 135" stroke="#3D6B52" strokeWidth="1.5" strokeLinecap="round" />
      {/* Branch left 3 */}
      <path d="M100 130 C78 115 58 110 35 102" stroke="#3D6B52" strokeWidth="1.5" strokeLinecap="round" />

      {/* Leaves on branch left 1 */}
      <path d="M10 260 C-5 248 -8 232 5 228 C18 224 28 238 10 260Z" stroke="#3D6B52" strokeWidth="1.5" fill="none" />
      <path d="M25 268 C15 253 18 237 30 236 C42 235 46 250 25 268Z" stroke="#3D6B52" strokeWidth="1.5" fill="none" />
      {/* Leaf vein */}
      <path d="M10 260 L3 244" stroke="#3D6B52" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M25 268 L21 252" stroke="#3D6B52" strokeWidth="0.8" strokeLinecap="round" />

      {/* Leaves on branch right 1 */}
      <path d="M150 225 C162 210 178 210 180 222 C182 234 168 240 150 225Z" stroke="#3D6B52" strokeWidth="1.5" fill="none" />
      <path d="M132 230 C144 215 160 215 162 226 C164 237 150 243 132 230Z" stroke="#3D6B52" strokeWidth="1.5" fill="none" />
      <path d="M150 225 L166 218" stroke="#3D6B52" strokeWidth="0.8" strokeLinecap="round" />

      {/* Leaves on branch left 2 */}
      <path d="M15 178 C0 164 -2 148 10 146 C22 144 32 158 15 178Z" stroke="#3D6B52" strokeWidth="1.5" fill="none" />
      <path d="M30 183 C18 168 22 153 34 152 C46 151 50 166 30 183Z" stroke="#3D6B52" strokeWidth="1.5" fill="none" />
      <path d="M15 178 L8 162" stroke="#3D6B52" strokeWidth="0.8" strokeLinecap="round" />

      {/* Leaves on branch right 2 */}
      <path d="M170 135 C182 118 198 118 200 130 C202 142 186 148 170 135Z" stroke="#3D6B52" strokeWidth="1.5" fill="none" />
      <path d="M155 140 C167 123 183 123 185 135 C187 147 171 153 155 140Z" stroke="#3D6B52" strokeWidth="1.5" fill="none" />
      <path d="M170 135 L183 124" stroke="#3D6B52" strokeWidth="0.8" strokeLinecap="round" />

      {/* Coffee cherries — small circles in clusters */}
      <circle cx="38" cy="273" r="5" stroke="#3D6B52" strokeWidth="1.5" fill="none" />
      <circle cx="48" cy="268" r="5" stroke="#3D6B52" strokeWidth="1.5" fill="none" />
      <circle cx="43" cy="280" r="5" stroke="#3D6B52" strokeWidth="1.5" fill="none" />

      <circle cx="142" cy="234" r="5" stroke="#3D6B52" strokeWidth="1.5" fill="none" />
      <circle cx="152" cy="238" r="5" stroke="#3D6B52" strokeWidth="1.5" fill="none" />

      <circle cx="20" cy="190" r="4.5" stroke="#3D6B52" strokeWidth="1.5" fill="none" />
      <circle cx="29" cy="185" r="4.5" stroke="#3D6B52" strokeWidth="1.5" fill="none" />
      <circle cx="34" cy="194" r="4.5" stroke="#3D6B52" strokeWidth="1.5" fill="none" />

      <circle cx="162" cy="144" r="4.5" stroke="#3D6B52" strokeWidth="1.5" fill="none" />
      <circle cx="172" cy="140" r="4.5" stroke="#3D6B52" strokeWidth="1.5" fill="none" />

      {/* Top of stem - small leaves */}
      <path d="M120 50 C105 30 95 15 110 8 C125 1 135 18 120 50Z" stroke="#3D6B52" strokeWidth="1.5" fill="none" />
      <path d="M120 50 C135 30 145 15 132 8 C119 1 108 18 120 50Z" stroke="#3D6B52" strokeWidth="1.5" fill="none" />
    </svg>
  )
}

// ── Chemex Pour-Over ─────────────────────────────────────
export function ChemexIllustration({
  width = 200,
  height = 300,
  opacity = 0.2,
  className = '',
  style = {},
}: {
  width?: number
  height?: number
  opacity?: number
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity, pointerEvents: 'none', ...style }}
      aria-hidden
    >
      {/* Steam lines */}
      <path d="M90 18 C88 12 92 6 90 0" stroke="#3D6B52" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M100 22 C98 14 103 7 101 0" stroke="#3D6B52" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M110 18 C108 12 112 6 110 0" stroke="#3D6B52" strokeWidth="1.5" strokeLinecap="round" />

      {/* Filter cone top */}
      <path d="M72 28 C75 28 125 28 128 28 L100 85 Z" stroke="#3D6B52" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      {/* Filter fold line */}
      <path d="M100 28 L100 85" stroke="#3D6B52" strokeWidth="0.8" strokeLinecap="round" />

      {/* Hourglass neck */}
      <path d="M100 85 C100 85 88 95 88 105 C88 115 100 118 100 118 C100 118 112 115 112 105 C112 95 100 85 100 85Z" stroke="#3D6B52" strokeWidth="1.5" fill="none" />

      {/* Wooden collar */}
      <rect x="80" y="108" width="40" height="10" rx="3" stroke="#3D6B52" strokeWidth="1.5" fill="none" />
      {/* Collar knot/band detail */}
      <path d="M83 113 L117 113" stroke="#3D6B52" strokeWidth="0.8" strokeLinecap="round" />

      {/* Lower flask body */}
      <path d="M100 118 C100 118 75 130 65 155 C58 172 60 200 62 220 C64 240 72 260 100 262 C128 264 136 240 138 220 C140 200 142 172 135 155 C125 130 100 118 100 118Z" stroke="#3D6B52" strokeWidth="1.5" fill="none" />

      {/* Coffee level in flask */}
      <path d="M68 235 C75 240 125 240 132 235" stroke="#3D6B52" strokeWidth="1" strokeLinecap="round" />

      {/* Handle / spout detail */}
      <path d="M62 180 C45 175 38 190 42 205 C46 218 62 215 62 215" stroke="#3D6B52" strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* Base ring */}
      <ellipse cx="100" cy="262" rx="38" ry="6" stroke="#3D6B52" strokeWidth="1.5" fill="none" />

      {/* Scattered beans near chemex */}
      <ellipse cx="155" cy="120" rx="9" ry="6" stroke="#3D6B52" strokeWidth="1.3" fill="none" transform="rotate(-20 155 120)" />
      <path d="M155 115 L155 126" stroke="#3D6B52" strokeWidth="0.8" strokeLinecap="round" transform="rotate(-20 155 120)" />

      <ellipse cx="48" cy="200" rx="8" ry="5.5" stroke="#3D6B52" strokeWidth="1.3" fill="none" transform="rotate(15 48 200)" />
      <path d="M48 195 L48 206" stroke="#3D6B52" strokeWidth="0.8" strokeLinecap="round" transform="rotate(15 48 200)" />

      <ellipse cx="165" cy="240" rx="8" ry="5.5" stroke="#3D6B52" strokeWidth="1.3" fill="none" transform="rotate(-10 165 240)" />
      <path d="M165 235 L165 246" stroke="#3D6B52" strokeWidth="0.8" strokeLinecap="round" transform="rotate(-10 165 240)" />
    </svg>
  )
}

// ── Scattered Coffee Beans ────────────────────────────────
export function ScatteredBeans({
  opacity = 0.18,
  className = '',
  style = {},
}: {
  opacity?: number
  className?: string
  style?: React.CSSProperties
}) {
  const beans = [
    { x: 80,  y: 60,  rx: 10, ry: 7,  rot: 30  },
    { x: 200, y: 40,  rx: 9,  ry: 6,  rot: -15 },
    { x: 340, y: 80,  rx: 11, ry: 7,  rot: 50  },
    { x: 480, y: 30,  rx: 9,  ry: 6,  rot: -40 },
    { x: 620, y: 70,  rx: 10, ry: 7,  rot: 20  },
    { x: 760, y: 45,  rx: 8,  ry: 5.5,rot: -60 },
    { x: 900, y: 80,  rx: 10, ry: 7,  rot: 35  },
    { x: 130, y: 140, rx: 8,  ry: 5.5,rot: -25 },
    { x: 290, y: 160, rx: 11, ry: 7,  rot: 45  },
    { x: 440, y: 130, rx: 9,  ry: 6,  rot: -10 },
    { x: 580, y: 155, rx: 10, ry: 7,  rot: 60  },
    { x: 720, y: 140, rx: 8,  ry: 5.5,rot: -35 },
    { x: 860, y: 160, rx: 9,  ry: 6,  rot: 15  },
  ]
  return (
    <svg
      width="100%"
      height="200"
      viewBox="0 0 960 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity, pointerEvents: 'none', ...style }}
      aria-hidden
    >
      {beans.map((b, i) => (
        <g key={i} transform={`rotate(${b.rot} ${b.x} ${b.y})`}>
          <ellipse cx={b.x} cy={b.y} rx={b.rx} ry={b.ry} stroke="#3D6B52" strokeWidth="1.3" fill="none" />
          <line x1={b.x} y1={b.y - b.ry} x2={b.x} y2={b.y + b.ry} stroke="#3D6B52" strokeWidth="0.8" strokeLinecap="round" />
        </g>
      ))}
      {/* Small circle dots */}
      {[50,170,310,455,590,730,870,40,200,380,520,670,810,950].map((x, i) => (
        <circle key={`dot-${i}`} cx={x} cy={i % 2 === 0 ? 100 : 120} r="3" stroke="#3D6B52" strokeWidth="1" fill="none" />
      ))}
    </svg>
  )
}

// ── Small Leaf Sprig (corner decoration for cards) ────────
export function LeafSprig({
  width = 60,
  height = 60,
  opacity = 0.25,
  className = '',
  style = {},
}: {
  width?: number
  height?: number
  opacity?: number
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity, pointerEvents: 'none', ...style }}
      aria-hidden
    >
      {/* Stem */}
      <path d="M50 55 C40 45 30 35 20 20" stroke="#3D6B52" strokeWidth="1.5" strokeLinecap="round" />
      {/* Leaf 1 */}
      <path d="M20 20 C10 8 2 5 5 15 C8 25 18 24 20 20Z" stroke="#3D6B52" strokeWidth="1.3" fill="none" />
      {/* Leaf 2 */}
      <path d="M28 30 C18 18 8 18 10 28 C12 38 26 36 28 30Z" stroke="#3D6B52" strokeWidth="1.3" fill="none" />
      {/* Leaf veins */}
      <path d="M20 20 L12 13" stroke="#3D6B52" strokeWidth="0.7" strokeLinecap="round" />
      <path d="M28 30 L18 25" stroke="#3D6B52" strokeWidth="0.7" strokeLinecap="round" />
    </svg>
  )
}

// ── Botanical Vine / Connecting Line for Timeline ─────────
export function BotanicalVine({
  width = 800,
  height = 80,
  opacity = 0.2,
  className = '',
  style = {},
}: {
  width?: number
  height?: number
  opacity?: number
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity, pointerEvents: 'none', ...style }}
      aria-hidden
    >
      {/* Main vine */}
      <path d={`M 20 40 C 120 25 200 55 ${width/2} 40 C ${width/2 + 100} 25 ${width - 120} 55 ${width - 20} 40`}
        stroke="#3D6B52" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Small leaf at 1/3 */}
      <g transform={`translate(${width/3} 35)`}>
        <path d="M0 0 C-8 -12 -18 -10 -15 -2 C-12 6 -4 4 0 0Z" stroke="#3D6B52" strokeWidth="1.2" fill="none" />
        <path d="M0 0 C8 -10 18 -8 15 0 C12 8 4 6 0 0Z" stroke="#3D6B52" strokeWidth="1.2" fill="none" />
      </g>
      {/* Small leaf at 2/3 */}
      <g transform={`translate(${width * 2/3} 45)`}>
        <path d="M0 0 C-8 -12 -18 -10 -15 -2 C-12 6 -4 4 0 0Z" stroke="#3D6B52" strokeWidth="1.2" fill="none" />
        <path d="M0 0 C8 -10 18 -8 15 0 C12 8 4 6 0 0Z" stroke="#3D6B52" strokeWidth="1.2" fill="none" />
      </g>
      {/* Small beans scattered */}
      <g transform="translate(180, 55) rotate(25)">
        <ellipse rx="7" ry="5" stroke="#3D6B52" strokeWidth="1.2" fill="none" />
        <line y1="-5" y2="5" stroke="#3D6B52" strokeWidth="0.8" />
      </g>
      <g transform={`translate(${width - 180}, 25) rotate(-20)`}>
        <ellipse rx="7" ry="5" stroke="#3D6B52" strokeWidth="1.2" fill="none" />
        <line y1="-5" y2="5" stroke="#3D6B52" strokeWidth="0.8" />
      </g>
    </svg>
  )
}

// ── CTA Frame (corner botanical decorations) ──────────────
export function CTABotanicalFrame({
  opacity = 0.2,
  className = '',
  style = {},
}: {
  opacity?: number
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 800 320"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity, pointerEvents: 'none', position: 'absolute', inset: 0, ...style }}
      aria-hidden
    >
      {/* Top-left branch */}
      <path d="M20 20 C35 40 30 70 20 100" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 40 C5 30 -5 15 5 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5 8 C-5 -2 5 -8 12 0 C19 8 10 16 5 8Z" stroke="white" strokeWidth="1.3" fill="none" />
      <path d="M20 60 C35 50 45 38 52 28" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M52 28 C58 18 68 14 72 22 C76 30 66 36 52 28Z" stroke="white" strokeWidth="1.3" fill="none" />

      {/* Top-right mirror */}
      <path d="M780 20 C765 40 770 70 780 100" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M780 40 C795 30 805 15 795 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M795 8 C805 -2 795 -8 788 0 C781 8 790 16 795 8Z" stroke="white" strokeWidth="1.3" fill="none" />
      <path d="M780 60 C765 50 755 38 748 28" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M748 28 C742 18 732 14 728 22 C724 30 734 36 748 28Z" stroke="white" strokeWidth="1.3" fill="none" />

      {/* Bottom-left */}
      <path d="M20 300 C35 280 30 250 20 220" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 280 C5 290 -5 305 5 312" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5 312 C-5 322 5 328 12 320 C19 312 10 304 5 312Z" stroke="white" strokeWidth="1.3" fill="none" />

      {/* Bottom-right */}
      <path d="M780 300 C765 280 770 250 780 220" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M780 280 C795 290 805 305 795 312" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M795 312 C805 322 795 328 788 320 C781 312 790 304 795 312Z" stroke="white" strokeWidth="1.3" fill="none" />
    </svg>
  )
}

// ── Small Coffee Bean (inline icon) ──────────────────────
export function BeanIcon({
  size = 20,
  opacity = 0.4,
  className = '',
}: {
  size?: number
  opacity?: number
  className?: string
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none"
      className={className} style={{ opacity, flexShrink: 0 }} aria-hidden>
      <ellipse cx="10" cy="10" rx="8" ry="5.5" stroke="#3D6B52" strokeWidth="1.5" fill="none" transform="rotate(-20 10 10)" />
      <path d="M4 7 L16 13" stroke="#3D6B52" strokeWidth="1" strokeLinecap="round" transform="rotate(-20 10 10)" />
    </svg>
  )
}

// ── Logo Icon (coffee branch small) ──────────────────────
export function LogoBranchIcon({
  size = 28,
  color = '#3D6B52',
}: {
  size?: number
  color?: string
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" aria-hidden>
      {/* Mini coffee branch */}
      <path d="M8 26 C9 20 11 14 14 8" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M10 20 C6 17 3 16 1 13" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M1 13 C-1 9 3 7 6 11 C9 15 4 17 1 13Z" stroke={color} strokeWidth="1.3" fill="none" />
      <path d="M11 16 C15 13 18 12 20 9" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 9 C22 6 26 6 25 10 C24 14 19 13 20 9Z" stroke={color} strokeWidth="1.3" fill="none" />
      <circle cx="8" cy="21" r="2.5" stroke={color} strokeWidth="1.3" fill="none" />
      <circle cx="12" cy="17" r="2" stroke={color} strokeWidth="1.3" fill="none" />
    </svg>
  )
}
