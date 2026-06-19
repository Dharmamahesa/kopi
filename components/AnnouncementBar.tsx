'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function AnnouncementBar() {
  return (
    <div className="absolute top-0 left-0 right-0 z-30 bg-[#F5ECD7] text-[#3B1F0E]">
      <div className="flex items-center justify-center py-2.5 md:py-3 px-4">
        <ChevronLeft size={16} className="opacity-40" />
        <p className="mx-3 text-xs sm:text-sm font-medium tracking-wide text-center">
          gratis ongkir untuk pembelian di atas Rp 200.000
        </p>
        <ChevronRight size={16} className="opacity-40" />
      </div>
    </div>
  )
}
