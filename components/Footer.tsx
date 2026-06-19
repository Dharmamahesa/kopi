import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#3B1F0E] text-[#F5ECD7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div>
            <h3 className="font-serif tracking-[0.25em] text-lg uppercase mb-3">
              KOPI NUSANTARA
            </h3>
            <p className="text-sm text-[#F5ECD7]/70 leading-relaxed max-w-xs">
              Kopi single origin Indonesia, dipanggang tangan dengan penuh cinta sejak 2018.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-sm font-medium tracking-wider uppercase mb-4 text-[#C17A3B]">
              Navigasi
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Produk', href: '/products' },
                { label: 'Tentang Kami', href: '/about' },
                { label: 'Jurnal', href: '#' },
                { label: 'Pesan Sekarang', href: '/order' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#F5ECD7]/70 hover:text-[#F5ECD7] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-medium tracking-wider uppercase mb-4 text-[#C17A3B]">
              Ikuti Kami
            </h4>
            <div className="flex gap-4">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#F5ECD7]/20 flex items-center justify-center hover:border-[#C17A3B] hover:text-[#C17A3B] transition-all duration-300"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#F5ECD7]/20 flex items-center justify-center hover:border-[#C17A3B] hover:text-[#C17A3B] transition-all duration-300"
                aria-label="WhatsApp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </a>
              {/* TikTok */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#F5ECD7]/20 flex items-center justify-center hover:border-[#C17A3B] hover:text-[#C17A3B] transition-all duration-300"
                aria-label="TikTok"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-[#F5ECD7]/10 text-center">
          <p className="text-xs text-[#F5ECD7]/50">
            © {new Date().getFullYear()} Kopi Nusantara. Seluruh hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  )
}
