import Link from 'next/link'

type CategoryCardProps = {
  name: string
  videoSrc: string
}

export default function CategoryCard({ name, videoSrc }: CategoryCardProps) {
  return (
    <div className="group relative min-h-[400px] sm:min-h-[500px] md:min-h-[750px] p-6 sm:p-8 md:p-12 overflow-hidden flex flex-col justify-between">
      {/* Background video */}
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-500" />

      {/* Vertical text */}
      <div className="relative z-10 flex-1 flex items-start">
        <span
          className="font-serif text-6xl md:text-8xl font-medium text-white transition-transform duration-300 group-hover:-translate-y-0.5"
          style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}
        >
          {name}
        </span>
      </div>

      {/* Shop button */}
      <div className="relative z-10">
        <Link
          href="/products"
          className="btn-primary inline-block px-8 py-3 bg-[#F5ECD7] text-[#3B1F0E] rounded-full text-sm font-medium tracking-wide"
        >
          shop {name}
        </Link>
      </div>
    </div>
  )
}
