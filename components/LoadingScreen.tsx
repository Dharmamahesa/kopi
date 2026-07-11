'use client'

import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Fire after 1.4s to allow loading bar animation to complete
    const timer = setTimeout(() => setLoaded(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  if (loaded) return null // Unmount completely after transition

  return (
    <div
      className={`loading-screen${loaded ? ' is-loaded' : ''}`}
      aria-hidden="true"
    >
      {/* Hexagon logo */}
      <svg width="48" height="48" viewBox="0 0 36 36" fill="none" style={{ marginBottom: 4 }}>
        <polygon points="18,2 32,10 32,26 18,34 4,26 4,10" fill="#C17A3B" />
        <text x="18" y="23" textAnchor="middle" fontSize="13" fontWeight="700" fontFamily="serif" fill="#FAF7F2">K</text>
      </svg>

      <div className="loading-logo">Jaya Lestari</div>

      <div className="loading-bar" />

      <div className="loading-label">Memuat kopi terbaik</div>
    </div>
  )
}
