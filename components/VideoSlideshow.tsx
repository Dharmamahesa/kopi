'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { Pause, Play } from 'lucide-react'

const videos = [
  '/video kopi.mp4',
  '/video kopi.mp4',
  '/video kopi.mp4',
]

export default function VideoSlideshow() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startAutoAdvance = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % videos.length)
    }, 5000)
  }, [])

  useEffect(() => {
    if (!isPaused) {
      startAutoAdvance()
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isPaused, startAutoAdvance])

  const togglePause = () => {
    if (!isPaused && intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    setIsPaused(!isPaused)
  }

  return (
    <div className="relative w-full h-full">
      {videos.map((src, i) => (
        <video
          key={i}
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Controls */}
      <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3">
        {/* Dot indicators */}
        <div className="flex gap-2">
          {videos.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setCurrent(i)
                if (!isPaused) startAutoAdvance()
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? 'bg-[#F5ECD7] scale-125' : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Play/Pause */}
        <button
          onClick={togglePause}
          className="w-8 h-8 rounded-full border border-white/50 flex items-center justify-center text-white/80 hover:text-white hover:border-white transition-all duration-300"
          aria-label={isPaused ? 'Putar' : 'Jeda'}
        >
          {isPaused ? <Play size={14} /> : <Pause size={14} />}
        </button>
      </div>
    </div>
  )
}
