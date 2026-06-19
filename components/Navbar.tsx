'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Search, ShoppingBag, User, Menu, X } from 'lucide-react'
import MobileMenu from './MobileMenu'

const navLinks = [
  { label: 'produk', href: '/products' },
  { label: 'tentang', href: '/about' },
  { label: 'jurnal', href: '#' },
  { label: 'pesan', href: '/order' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <nav className="absolute left-0 right-0 z-30 top-[41px] md:top-[45px]">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4">
          {/* Logo */}
          <Link href="/" className="font-serif tracking-[0.25em] text-white text-sm sm:text-base uppercase">
            KOPI NUSANTARA
          </Link>

          {/* Center nav links — hidden on mobile */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group relative text-sm text-white/90 hover:text-white transition-colors duration-300"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Currency selector — hidden on mobile */}
            <div className="hidden md:flex items-center gap-1 text-white text-sm mr-2 cursor-pointer hover:opacity-80 transition-opacity">
              <div className="flex flex-col w-6 h-4 rounded-sm overflow-hidden border border-white/20">
                <div className="h-1/2 bg-red-600" />
                <div className="h-1/2 bg-white" />
              </div>
              <span className="ml-1 text-xs">IDR Rp</span>
              <ChevronDown size={14} className="opacity-60" />
            </div>

            <div className="hidden md:block w-px h-5 bg-white/30 mx-2" />

            <button className="hidden sm:flex p-2 text-white/80 hover:text-white transition-colors" aria-label="Akun">
              <User size={20} />
            </button>
            <button className="p-2 text-white/80 hover:text-white transition-colors" aria-label="Cari">
              <Search size={20} />
            </button>
            <button className="p-2 text-white/80 hover:text-white transition-colors" aria-label="Keranjang">
              <ShoppingBag size={20} />
            </button>

            {/* Hamburger — visible below md */}
            <button
              className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} links={navLinks} />
    </>
  )
}
