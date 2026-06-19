'use client'

import Link from 'next/link'

type MobileMenuProps = {
  isOpen: boolean
  onClose: () => void
  links: { label: string; href: string }[]
}

export default function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 z-40 bg-[#1A1A1A]/95 backdrop-blur-sm flex flex-col items-center justify-center transition-all duration-500 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <nav className="flex flex-col items-center gap-8">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={onClose}
            className="text-3xl font-light text-[#F5ECD7] hover:text-[#C17A3B] transition-colors duration-300"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}
