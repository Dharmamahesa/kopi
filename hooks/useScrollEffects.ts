'use client'

import { useEffect, useRef, useCallback } from 'react'

/**
 * useReveal — attaches IntersectionObserver to add `.is-visible`
 * to all `.reveal-element` children when they enter the viewport.
 * Apply className="reveal-element" on any element to opt in.
 */
export function useReveal() {
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const elements = container.querySelectorAll<HTMLElement>('.reveal-element')
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target) // fire once
          }
        })
      },
      { threshold: 0.12 }
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return containerRef
}

/**
 * Standalone hook that observes a single element.
 */
export function useRevealSingle(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}

/**
 * Parallax scroll effect — element moves at `factor` of scroll speed.
 * factor < 1 = slower than scroll (ghost text behind content)
 */
export function useParallax(factor = 0.3) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onScroll = () => {
      const rect  = el.parentElement?.getBoundingClientRect()
      if (!rect) return
      const offset = -rect.top * factor
      el.style.transform = `translateY(calc(-50% + ${offset}px))`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [factor])

  return ref
}

/**
 * Animated number counter — counts from 0 to `target` on reveal.
 */
export function useCountUp(target: number, duration = 1400) {
  const ref    = useRef<HTMLSpanElement>(null)
  const hasRun = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true
          observer.disconnect()
          let start: number | null = null
          const step = (timestamp: number) => {
            if (!start) start = timestamp
            const progress = Math.min((timestamp - start) / duration, 1)
            // easeOut cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            el.textContent = Math.round(eased * target).toString()
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return ref
}
