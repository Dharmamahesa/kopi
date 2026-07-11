'use client'

import AnnouncementBar from '@/components/AnnouncementBar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProcessTimeline from '@/components/ProcessTimeline'
import { useEffect, useRef, useState } from 'react'

const roastingSteps = [
  {
    number: '1',
    title: 'Seleksi',
    desc: 'Biji dipilih manual. Hanya grade A yang lolos ke roastery kami.',
  },
  {
    number: '2',
    title: 'Roasting',
    desc: 'Small batch. Suhu presisi. Dipantau langsung oleh roaster kami.',
  },
  {
    number: '3',
    title: 'Cooling',
    desc: 'Didinginkan cepat untuk mengunci profil rasa yang optimal.',
  },
  {
    number: '4',
    title: 'Kemas & Kirim',
    desc: 'Dikemas vakum dalam 24 jam. Dikirim langsung ke pintumu.',
  },
]

const origins = [
  {
    region: 'GAYO · ACEH', name: 'Arabika Gayo',
    desc: 'Dataran tinggi Aceh, 1200–1700 MDPL. Dikenal dengan body tebal dan keasaman sedang.',
    roast: 'dark',
  },
  {
    region: 'TORAJA · SULAWESI', name: 'Arabika Toraja',
    desc: 'Lereng Sulawesi Selatan, 1400–1800 MDPL. Karakter fruity dan rempah yang khas.',
    roast: 'medium',
  },
  {
    region: 'FLORES · NTT', name: 'Arabika Bajawa',
    desc: 'Kaki Gunung Inerie, 1000–1500 MDPL. Floral dan sweet aftertaste yang panjang.',
    roast: 'light',
  },
  {
    region: 'KINTAMANI · BALI', name: 'Arabika Kintamani',
    desc: 'Lereng Gunung Batur, 900–1500 MDPL. Citrusy, clean, favorit cold brew.',
    roast: 'medium',
  },
  {
    region: 'JAVA · JAWA TIMUR', name: 'Robusta Java',
    desc: 'Dataran Jawa Timur, 600–900 MDPL. Bold dan earthy untuk espresso terbaik.',
    roast: 'medium',
  },
  {
    region: 'SUMATERA', name: 'Arabika Sumatera',
    desc: 'Berbagai kebun pilihan Sumatera, 800–1600 MDPL. Earthly dan herbal yang kompleks.',
    roast: 'dark',
  },
]

const roastChipColors: Record<string, { bg: string; color: string }> = {
  light: { bg: '#F5ECD7', color: '#414844' },
  medium: { bg: 'rgba(193,122,59,0.18)', color: '#3B1F0E' },
  dark: { bg: '#3B1F0E', color: '#F5ECD7' },
}

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])
  return { ref, visible }
}

export default function AboutPage() {
  const { ref: storyRef, visible: storyVisible } = useInView(0.1)
  const { ref: commitRef, visible: commitVisible } = useInView(0.1)

  return (
    <main className="flex-1">
      <AnnouncementBar />
      <Navbar transparent />

      {/* ══════════════════════════════════════════
          HERO — Full viewport cinematic
      ══════════════════════════════════════════ */}
      <section
        className="film-grain relative overflow-hidden flex flex-col items-center justify-center"
        style={{
          background: 'linear-gradient(160deg, #0F2419 0%, #1B4332 45%, #243B2F 80%, #1A0A03 100%)',
          minHeight: '100vh',
        }}
      >
        {/* Letterbox bars */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '10vh',
          background: '#1B4332', zIndex: 10,
        }} />
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '10vh',
          background: '#1B4332', zIndex: 10,
        }} />
        {/* Vignette */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at center, transparent 25%, rgba(0,0,0,0.65) 100%)',
          zIndex: 2, pointerEvents: 'none',
        }} />
        {/* Light leaks */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none',
          background: `
            radial-gradient(ellipse 55% 45% at 0% 0%, rgba(193,122,59,0.22) 0%, transparent 70%),
            radial-gradient(ellipse 50% 40% at 100% 100%, rgba(193,122,59,0.16) 0%, transparent 70%)
          `,
        }} />
        {/* Floating bean particles */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', opacity: 0.06, zIndex: 1 }}>
          {[...Array(24)].map((_, i) => (
            <div key={i} style={{
              position: 'absolute',
              width: 20 + (i % 5) * 10, height: 12 + (i % 4) * 6,
              borderRadius: '50%', background: '#C17A3B',
              top: `${(i * 13 + 8) % 95}%`,
              left: `${(i * 17 + 5) % 92}%`,
              transform: `rotate(${i * 47}deg)`,
            }} />
          ))}
        </div>

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 5, textAlign: 'center', padding: '0 20px' }}>
          <h1 className="display-lg" style={{ color: '#F5ECD7', fontStyle: 'italic', maxWidth: 700 }}>
            dari hutan ke cangkirmu
          </h1>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BRAND STORY — Split layout
      ══════════════════════════════════════════ */}
      <section
        id="cerita"
        ref={storyRef}
        style={{ background: '#FAF7F2', paddingTop: 96, paddingBottom: 96 }}
      >
        <div className="container-jl">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 72,
              alignItems: 'center',
            }}
            className="story-grid"
          >
            {/* Left: cinematic photo placeholder */}
            <div
              className="image-cinematic rounded-xl overflow-hidden film-grain"
              style={{
                aspectRatio: '4/5',
                background: 'linear-gradient(160deg, #1B4332 0%, #3B1F0E 50%, #1A0A03 100%)',
                position: 'relative',
                opacity: storyVisible ? 1 : 0,
                transform: storyVisible ? 'none' : 'translateX(-24px)',
                transition: 'opacity 0.9s ease, transform 0.9s ease',
              }}
            >
              {/* Vignette */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.6) 100%)',
                zIndex: 2,
              }} />
              {/* Light leak */}
              <div style={{
                position: 'absolute', inset: 0, zIndex: 3,
                background: 'radial-gradient(ellipse 60% 50% at 100% 0%, rgba(193,122,59,0.25) 0%, transparent 70%)',
              }} />
              {/* Placeholder text */}
              <div style={{
                position: 'absolute', inset: 0, zIndex: 4,
                display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-start',
                padding: 24,
              }}>
                <div>
                  <p className="label-caps mb-1" style={{ color: '#C17A3B' }}>ROASTERY INTERIOR</p>
                  <p style={{ color: 'rgba(245,236,215,0.5)', fontSize: 12, fontStyle: 'italic' }}>
                    Hutan Cempaka, Prigen
                  </p>
                </div>
              </div>
              {/* Bean texture */}
              <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', opacity: 0.07 }}>
                {[...Array(16)].map((_, i) => (
                  <div key={i} style={{
                    position: 'absolute',
                    width: 36 + (i % 4) * 12, height: 22 + (i % 3) * 8,
                    borderRadius: '50%', background: '#C17A3B',
                    top: `${(i * 15 + 5) % 92}%`,
                    left: `${(i * 23 + 3) % 88}%`,
                    transform: `rotate(${i * 41}deg)`,
                  }} />
                ))}
              </div>
            </div>

            {/* Right: text */}
            <div
              style={{
                opacity: storyVisible ? 1 : 0,
                transform: storyVisible ? 'none' : 'translateX(24px)',
                transition: 'opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s',
              }}
            >
              <p className="label-caps mb-4" style={{ color: '#C17A3B' }}>CERITA KAMI</p>
              <h2 className="headline-md mb-8" style={{ color: '#1A1C1A' }}>
                kenapa kami berbeda
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <p className="body-md" style={{ color: '#414844' }}>
                  Berdiri di tengah kawasan Hutan Cempaka Prigen, Toko Kopi Jaya Lestari lahir dari
                  kecintaan mendalam terhadap kopi lokal Nusantara dan keindahan alam lereng
                  Gunung Arjuno.
                </p>
                <p className="body-md" style={{ color: '#414844' }}>
                  Di ketinggian 875 mdpl, udara sejuk dan tanah subur menjadi latar belakang sempurna
                  bagi roastery kami. Setiap batch dipanggang kecil — tidak pernah massal — untuk
                  menjaga karakter rasa asli dari setiap kebun asal.
                </p>
                <p className="body-md" style={{ color: '#414844' }}>
                  Kami percaya bahwa kopi yang baik dimulai dari kejujuran: jujur tentang asal usul,
                  proses, dan rasa. Tidak ada yang disembunyikan. Hanya biji terbaik, dipanggang
                  dengan presisi, dikirim segar ke tanganmu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PROSES ROASTING
      ══════════════════════════════════════════ */}
      <section
        id="proses"
        style={{ background: '#fff', paddingTop: 96, paddingBottom: 96 }}
      >
        <div className="container-jl">
          <ProcessTimeline
            steps={roastingSteps}
            overline="PROSES KAMI"
            headline="bagaimana kami memanggangnya"
            light
          />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ORIGIN STORIES — Dark section
      ══════════════════════════════════════════ */}
      <section
        className="film-grain relative overflow-hidden"
        style={{ background: '#1B4332', paddingTop: 100, paddingBottom: 100 }}
      >
        {/* Letterbox */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '10vh', background: '#1B4332', zIndex: 10 }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '10vh', background: '#1B4332', zIndex: 10 }} />
        {/* Vignette */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)',
          zIndex: 5, pointerEvents: 'none',
        }} />
        {/* Light leaks */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 6, pointerEvents: 'none',
          background: `
            radial-gradient(ellipse 50% 40% at 0% 0%, rgba(193,122,59,0.18) 0%, transparent 70%),
            radial-gradient(ellipse 50% 40% at 100% 100%, rgba(193,122,59,0.14) 0%, transparent 70%)
          `,
        }} />

        <div className="container-jl" style={{ position: 'relative', zIndex: 8 }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p className="label-caps mb-4" style={{ color: '#C17A3B' }}>ASAL KOPI KAMI</p>
            <h2 className="headline-md" style={{ color: '#F5ECD7' }}>dari seluruh kepulauan</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
          }} className="origins-grid">
            {origins.map((origin, i) => {
              const chip = roastChipColors[origin.roast] ?? roastChipColors.medium
              return (
                <div
                  key={origin.region}
                  style={{
                    background: 'rgba(245,236,215,0.08)',
                    border: '1px solid rgba(245,236,215,0.12)',
                    borderRadius: '1rem',
                    padding: '24px',
                  }}
                >
                  <p className="label-caps mb-2" style={{ color: '#C17A3B' }}>{origin.region}</p>
                  <h3 className="headline-sm mb-3" style={{ color: '#F5ECD7', fontSize: '20px' }}>
                    {origin.name}
                  </h3>
                  <p className="body-md mb-4" style={{ color: 'rgba(245,236,215,0.6)', fontSize: '14px' }}>
                    {origin.desc}
                  </p>
                  <span style={{
                    display: 'inline-block',
                    padding: '4px 12px', borderRadius: 9999,
                    background: chip.bg, color: chip.color,
                    fontSize: '10px', fontWeight: 600, letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}>
                    {origin.roast} roast
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          KOMITMEN KAMI
      ══════════════════════════════════════════ */}
      <section
        ref={commitRef}
        style={{ background: '#FAF7F2', paddingTop: 96, paddingBottom: 96 }}
      >
        <div className="container-jl">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p className="label-caps mb-3" style={{ color: '#C17A3B' }}>NILAI KAMI</p>
            <h2 className="headline-md">komitmen kami</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
          }} className="commit-grid">
            {[
              {
                icon: '🌿',
                overline: 'SINGLE ORIGIN',
                title: 'Kami tau persis kopimu dari mana',
                desc: 'Setiap produk kami mencantumkan daerah asal, ketinggian kebun, dan proses pasca panen secara transparan.',
              },
              {
                icon: '🔥',
                overline: 'FRESH ROASTED',
                title: 'Dipanggang setelah pesananmu masuk',
                desc: 'Tidak ada stok lama. Tidak ada kopi yang duduk berminggu-minggu di rak. Selalu segar.',
              },
              {
                icon: '📦',
                overline: 'VAKUM SEALED',
                title: 'Kesegaran terjaga hingga ke tanganmu',
                desc: 'Dikemas dengan one-way valve agar CO₂ keluar tapi oksigen tidak masuk. Standar specialty coffee.',
              },
            ].map((val, i) => (
              <div
                key={val.overline}
                style={{
                  background: '#F5ECD7',
                  border: '1px solid #E8E3DA',
                  borderRadius: '1rem',
                  padding: '32px',
                  opacity: commitVisible ? 1 : 0,
                  transform: commitVisible ? 'none' : 'translateY(24px)',
                  transition: `opacity 0.7s ease ${i * 0.15}s, transform 0.7s ease ${i * 0.15}s`,
                }}
              >
                <div style={{ fontSize: 32, marginBottom: 16 }}>{val.icon}</div>
                <p className="label-caps mb-3" style={{ color: '#C17A3B' }}>{val.overline}</p>
                <h3 className="headline-sm mb-3" style={{ fontSize: '20px' }}>{val.title}</h3>
                <p className="body-md" style={{ color: '#414844', fontSize: '15px' }}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .story-grid { grid-template-columns: 1fr !important; }
          .origins-grid { grid-template-columns: 1fr !important; }
          .commit-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 1024px) {
          .origins-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .commit-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </main>
  )
}
