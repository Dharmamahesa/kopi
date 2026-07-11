'use client'

import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const pos     = useRef({ x: -100, y: -100 })
  const ringPos = useRef({ x: -100, y: -100 })
  const raf     = useRef<number>(0)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
    }
    const onEnter = () => setHovering(true)
    const onLeave = () => setHovering(false)

    window.addEventListener('mousemove', onMove, { passive: true })

    const targets = document.querySelectorAll<HTMLElement>(
      'a, button, [role="button"], .product-card, label, select, input, textarea'
    )
    targets.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    const tick = () => {
      const dot  = dotRef.current
      const ring = ringRef.current
      if (dot && ring) {
        // Dot: instant
        dot.style.left = pos.current.x + 'px'
        dot.style.top  = pos.current.y + 'px'

        // Ring: lerp (lag effect)
        const lerpFactor = 0.14
        ringPos.current.x += (pos.current.x - ringPos.current.x) * lerpFactor
        ringPos.current.y += (pos.current.y - ringPos.current.y) * lerpFactor
        ring.style.left = ringPos.current.x + 'px'
        ring.style.top  = ringPos.current.y + 'px'
      }
      raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      targets.forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="cursor-dot" />
      <div ref={ringRef} className={`cursor-ring${hovering ? ' is-hovering' : ''}`} />
    </>
  )
}
