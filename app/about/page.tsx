'use client'

import AnnouncementBar from '@/components/AnnouncementBar'
import Navbar from '@/components/Navbar'
import ProcessStep from '@/components/ProcessStep'
import Footer from '@/components/Footer'
import { useInView } from '@/hooks/useInView'

const steps = [
  {
    icon: '🌱',
    title: 'Sourcing',
    description: 'Dipilih langsung dari petani lokal di dataran tinggi Indonesia.',
  },
  {
    icon: '🔥',
    title: 'Roasting',
    description: 'Dipanggang tangan dengan profil roast yang disesuaikan untuk setiap biji.',
  },
  {
    icon: '📦',
    title: 'Packaging',
    description: 'Dikemas segar dengan valve degassing untuk menjaga kesegaran.',
  },
  {
    icon: '🚚',
    title: 'Pengiriman',
    description: 'Dikirim langsung ke pintu rumah Anda dalam 2-3 hari kerja.',
  },
]

const values = [
  {
    title: 'Keberlanjutan',
    description:
      'Kami bekerja langsung dengan petani lokal untuk memastikan praktik pertanian yang berkelanjutan dan adil.',
    icon: '🌿',
  },
  {
    title: 'Transparansi',
    description:
      'Setiap produk kami memiliki jejak asal yang jelas — dari kebun mana, dipetik kapan, dan dipanggang oleh siapa.',
    icon: '🔍',
  },
  {
    title: 'Kualitas',
    description:
      'Hanya biji kopi grade specialty yang lolos seleksi ketat kami. Tanpa kompromi.',
    icon: '⭐',
  },
]

export default function AboutPage() {
  const { ref: storyRef, isVisible: storyVisible } = useInView(0.1)
  const { ref: processRef, isVisible: processVisible } = useInView(0.1)
  const { ref: founderRef, isVisible: founderVisible } = useInView(0.1)
  const { ref: valuesRef, isVisible: valuesVisible } = useInView(0.1)

  return (
    <main className="flex-1">
      <AnnouncementBar />
      <Navbar />

      {/* Hero */}
      <section className="relative text-[#F5ECD7] pt-32 pb-20 sm:pt-40 sm:pb-28 px-4 text-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: 'url("/background kopi tentang.png")',
            }}
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl mb-4">cerita kami</h1>
          <p className="text-sm sm:text-base text-[#F5ECD7]/70 max-w-lg mx-auto">
            Perjalanan dari biji kopi pertama hingga secangkir kopi di tangan Anda.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section
        ref={storyRef as React.RefObject<HTMLElement>}
        className={`bg-[#FAF7F2] py-16 sm:py-24 px-4 sm:px-6 lg:px-10 transition-all duration-1000 ${
          storyVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-[#E8DDD0]">
            <img
              src="https://placehold.co/800x600/3B1F0E/F5ECD7?text=Roastery"
              alt="Roastery Kopi Nusantara"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A] mb-6">
              Berawal dari Kecintaan
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
              <p>
                Kopi Nusantara lahir dari sebuah perjalanan sederhana ke dataran tinggi Toraja pada
                tahun 2018. Di sana, kami menemukan bahwa kopi Indonesia memiliki karakter yang luar
                biasa — kompleks, berani, dan penuh cerita.
              </p>
              <p>
                Kami percaya bahwa setiap biji kopi memiliki ceritanya sendiri. Dari tangan petani
                yang merawat, hingga proses roasting yang hati-hati, setiap langkah dilakukan
                dengan penuh cinta dan dedikasi.
              </p>
              <p>
                Kini, kami menghadirkan kopi-kopi terbaik dari seluruh Nusantara — dari Aceh hingga
                Papua — langsung ke cangkir Anda. Setiap tegukan adalah perjalanan ke jantung
                Indonesia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proses Kami */}
      <section
        ref={processRef as React.RefObject<HTMLElement>}
        className={`bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-10 transition-all duration-1000 ${
          processVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl text-center text-[#1A1A1A] mb-12 sm:mb-16">
            Proses Kami
          </h2>
          <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-4">
            {steps.map((step, i) => (
              <ProcessStep
                key={step.title}
                number={i + 1}
                icon={step.icon}
                title={step.title}
                description={step.description}
                isLast={i === steps.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section
        ref={founderRef as React.RefObject<HTMLElement>}
        className={`bg-[#FAF7F2] py-16 sm:py-24 px-4 sm:px-6 lg:px-10 transition-all duration-1000 ${
          founderVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl text-center text-[#1A1A1A] mb-12">
            Tim Kami
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                name: 'Andi Prasetyo',
                role: 'Founder & Head Roaster',
                bio: 'Seorang pecinta kopi yang telah mendalami seni roasting selama lebih dari 10 tahun. Perjalanannya dimulai dari warung kopi kecil di Yogyakarta.',
              },
              {
                name: 'Sari Wulandari',
                role: 'Co-Founder & Green Bean Sourcer',
                bio: 'Ahli dalam sourcing biji kopi berkualitas tinggi langsung dari petani di seluruh Nusantara. Berkomitmen pada perdagangan yang adil.',
              },
            ].map((person) => (
              <div key={person.name} className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8DDD0]">
                <div className="w-20 h-20 rounded-full bg-[#E8DDD0] mx-auto mb-4 overflow-hidden">
                  <img
                    src={`https://placehold.co/160x160/3B1F0E/F5ECD7?text=${person.name.split(' ')[0]}`}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif text-lg text-[#1A1A1A] text-center mb-1">{person.name}</h3>
                <p className="text-xs text-[#C17A3B] text-center font-medium tracking-wider uppercase mb-3">
                  {person.role}
                </p>
                <p className="text-sm text-gray-600 text-center leading-relaxed">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        ref={valuesRef as React.RefObject<HTMLElement>}
        className={`bg-[#3B1F0E] text-[#F5ECD7] py-16 sm:py-24 px-4 sm:px-6 lg:px-10 transition-all duration-1000 ${
          valuesVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl text-center mb-12">
            Nilai Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#F5ECD7]/10 hover:border-[#C17A3B]/30 transition-all duration-300"
              >
                <span className="text-4xl mb-4 block">{value.icon}</span>
                <h3 className="font-serif text-xl mb-3">{value.title}</h3>
                <p className="text-sm text-[#F5ECD7]/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
