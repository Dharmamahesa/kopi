'use client'

import type { RoastLevel } from '@/data/products'

interface RoastChipProps {
  roast: RoastLevel
  className?: string
}

const roastConfig: Record<RoastLevel, { label: string; bg: string; color: string; border?: string }> = {
  light: {
    label: 'Light Roast',
    bg: '#F5ECD7',
    color: '#414844',
    border: '1px solid #C1C8C2',
  },
  medium: {
    label: 'Medium Roast',
    bg: 'rgba(193,122,59,0.18)',
    color: '#3B1F0E',
  },
  'medium-dark': {
    label: 'Medium Dark',
    bg: 'rgba(59,31,14,0.65)',
    color: '#F5ECD7',
  },
  dark: {
    label: 'Dark Roast',
    bg: '#3B1F0E',
    color: '#F5ECD7',
  },
}

export default function RoastChip({ roast, className = '' }: RoastChipProps) {
  const config = roastConfig[roast]
  return (
    <span
      className={`label-sm inline-flex items-center px-3 py-1 rounded-full ${className}`}
      style={{
        background: config.bg,
        color: config.color,
        border: config.border ?? 'none',
        fontSize: '10px',
        letterSpacing: '0.08em',
        fontWeight: 600,
      }}
    >
      {config.label}
    </span>
  )
}
