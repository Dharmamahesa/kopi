'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BotanicalBranch, BotanicalVine, LeafSprig } from '@/components/illustrations/Botanicals'
import { useEffect, useRef } from 'react'

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    el.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
  return ref
}

const processSteps = [
  {
    n: '01',
    title: 'Seleksi Biji',
    desc: 'Kami hanya memilih biji kopi grade specialty dari petani mitra yang kami percaya. Setiap lot dievaluasi secara sensoris sebelum diproses.',
  },
  {
    n: '02',
    title: 'Washing & Sorting',
    desc: 'Biji diproses basah (wet-processed) atau natural sesuai karakteristik origin-nya. Sorting manual menghilangkan biji cacat.',
  },
  {
    n: '03',
    title: 'Small Batch Roasting',
    desc: 'Dipanggang kecil 5–10 kg per batch di roaster drum kami. Profil roasting disesuaikan per origin untuk menonjolkan karakter terbaik.',
  },
  {
    n: '04',
    title: 'Dikemas & Dikirim',
    desc: 'Dikemas dalam kantong vakum dengan one-way valve dalam 24 jam setelah roasting. Siap dikirim ke pintumu.',
  },
]

const origins = [
  { region: 'Toraja, Sulawesi', island: 'Sulawesi', roast: 'Medium', price: 'Rp 75.000 / 200g', color: '#D6E5DB' },
  { region: 'Gayo, Aceh',       island: 'Sumatera', roast: 'Dark',   price: 'Rp 80.000 / 200g', color: '#C8D9CE' },
  { region: 'Flores Bajawa',     island: 'NTT',      roast: 'Light',  price: 'Rp 85.000 / 200g', color: '#E5DDD4' },
  { region: 'Kintamani, Bali',   island: 'Bali',     roast: 'Medium', price: 'Rp 90.000 / 200g', color: '#DBE9DE' },
  { region: 'Java, Jawa Timur',  island: 'Jawa',     roast: 'Medium', price: 'Rp 60.000 / 200g', color: '#E8E0D6' },
  { region: 'Wamena, Papua',     island: 'Papua',    roast: 'Light',  price: 'Rp 95.000 / 200g', color: '#DDE6E0' },
]

const values = [
  { icon: '🌿', title: 'Single Origin', desc: 'Setiap kopi kami berasal dari satu sumber yang jelas — kamu tahu persis dari mana kopimu berasal.' },
  { icon: '🔥', title: 'Fresh Roasted', desc: 'Dipanggang kecil per batch, paling lambat 7 hari sebelum dikirim agar kamu mendapat cita rasa terbaik.' },
  { icon: '📦', title: 'Vakum Sealed',  desc: 'Dikemas dengan kantong vakum one-way valve untuk menjaga kesegaran dan aroma kopi selama perjalanan.' },
]

export default function AboutPage() {
  const mainRef = useReveal()

  return (
    <div ref={mainRef} style={{ background: '#F0EBE0', minHeight: '100vh' }}>
      <Navbar />

      {/* ── Hero ── */}
      <section style={{
        background: '#F0EBE0',
        paddingTop: 128, paddingBottom: 80,
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Botanical frame */}
        <div style={{ position: 'absolute', left: '5%', top: 80, pointerEvents: 'none' }}>
          <BotanicalBranch width={180} height={260} opacity={0.18} />
        </div>
        <div style={{ position: 'absolute', right: '5%', top: 80, transform: 'scaleX(-1)', pointerEvents: 'none' }}>
          <BotanicalBranch width={180} height={260} opacity={0.18} />
        </div>

        <div className="container-jl" style={{ position: 'relative', zIndex: 1 }}>
          {/* Circular botanical frame illustration */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
            <svg width="120" height="80" viewBox="0 0 120 80" fill="none" style={{ opacity: 0.35 }}>
              {/* Decorative arc with leaves */}
              <path d="M10 70 C20 50 40 30 60 20 C80 30 100 50 110 70"
                stroke="#3D6B52" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              <path d="M60 20 C50 8 42 2 50 -2 C58 -6 64 4 60 20Z"
                stroke="#3D6B52" strokeWidth="1.3" fill="none" />
              <path d="M35 40 C25 30 20 22 28 18 C36 14 40 24 35 40Z"
                stroke="#3D6B52" strokeWidth="1.3" fill="none" />
              <path d="M85 40 C95 30 100 22 92 18 C84 14 80 24 85 40Z"
                stroke="#3D6B52" strokeWidth="1.3" fill="none" />
            </svg>
          </div>

          <p className="label-overline reveal" style={{ marginBottom: 16 }}>CERITA KAMI</p>
          <h1 className="heading-hero reveal" style={{ marginBottom: 16, transitionDelay: '80ms' }}>
            Cerita di Balik<br />Secangkir Kopi
          </h1>
          <p className="body-lg reveal" style={{ maxWidth: 480, margin: '0 auto', transitionDelay: '160ms' }}>
            Dari Hutan Cempaka, Prigen, ke cangkirmu.
          </p>
        </div>
      </section>

      {/* ── Brand Story — split ── */}
      <section style={{ background: '#FAF6EF', borderTop: '1px solid #DDD5C8', borderBottom: '1px solid #DDD5C8' }}>
        <div className="container-jl section-py">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}
            className="split-grid">
            {/* Left: photo / illustration */}
            <div className="reveal" style={{
              background: '#D6E5DB',
              borderRadius: 20,
              aspectRatio: '4/3',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              position: 'relative',
            }}>
              {/* Illustrated kraft paper bag mockup */}
              <svg width="200" height="240" viewBox="0 0 200 240" fill="none" style={{ opacity: 0.65 }}>
                {/* Bag body */}
                <path d="M50 60 C50 50 55 44 65 42 L100 38 L135 42 C145 44 150 50 150 60 L155 190 C155 200 148 208 138 208 L62 208 C52 208 45 200 45 190 Z"
                  stroke="#3D6B52" strokeWidth="1.5" fill="#FAF6EF" />
                {/* Bag top fold */}
                <path d="M65 42 L100 30 L135 42" stroke="#3D6B52" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                {/* Label area */}
                <rect x="62" y="80" width="76" height="88" rx="8" stroke="#3D6B52" strokeWidth="1.2" fill="rgba(61,107,82,0.08)" />
                {/* Label text lines */}
                <path d="M75 100 L125 100" stroke="#3D6B52" strokeWidth="1" strokeLinecap="round" />
                <path d="M80 112 L120 112" stroke="#3D6B52" strokeWidth="0.8" strokeLinecap="round" />
                <path d="M85 122 L115 122" stroke="#3D6B52" strokeWidth="0.6" strokeLinecap="round" />
                {/* Coffee bean illustration on label */}
                <ellipse cx="100" cy="145" rx="14" ry="10" stroke="#3D6B52" strokeWidth="1.2" fill="none" />
                <path d="M86 145 L114 145" stroke="#3D6B52" strokeWidth="0.8" strokeLinecap="round" />
                <path d="M88 138 C94 142 100 145 106 142" stroke="#3D6B52" strokeWidth="0.6" strokeLinecap="round" fill="none" />
              </svg>
              {/* Leaf in corner */}
              <div style={{ position: 'absolute', bottom: 16, right: 16 }}>
                <LeafSprig width={64} height={64} opacity={0.35} />
              </div>
            </div>

            {/* Right: text */}
            <div>
              <p className="label-overline reveal" style={{ marginBottom: 16 }}>CERITA KAMI</p>
              <h2 className="heading-xl reveal" style={{ marginBottom: 24, transitionDelay: '80ms' }}>
                Dari Lereng Arjuno
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  'Toko Kopi Jaya Lestari lahir dari kecintaan mendalam pada kopi Indonesia. Berlokasi di Hutan Cempaka, Prigen, Pasuruan — di ketinggian 875 mdpl dengan udara sejuk khas lereng Arjuno.',
                  'Kami percaya setiap cangkir kopi adalah sebuah cerita. Cerita tentang tanah, petani, dan tangan-tangan yang merawatnya dengan penuh dedikasi. Itulah mengapa kami hanya bekerja dengan single origin — satu kopi, satu cerita.',
                  'Dengan metode small batch roasting, kami memastikan setiap biji dipanggang dengan perhatian penuh. Tidak massal. Tidak terburu-buru. Hanya kopi terbaik, untuk kamu.',
                ].map((para, i) => (
                  <p key={i} className="body-md reveal" style={{ transitionDelay: `${160 + i * 80}ms` }}>
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Proses ── */}
      <section id="proses" className="section-py" style={{ background: '#F0EBE0' }}>
        <div className="container-jl">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p className="label-overline reveal" style={{ marginBottom: 12 }}>ROASTERY</p>
            <h2 className="heading-xl reveal" style={{ transitionDelay: '80ms' }}>
              Proses Kami
            </h2>
          </div>

          {/* Vine connector above steps */}
          <div style={{ position: 'relative', marginBottom: 40 }}>
            <div style={{ position: 'absolute', top: 28, left: '10%', right: '10%', zIndex: 0 }}>
              <BotanicalVine width={undefined as unknown as number} height={56} opacity={0.2} style={{ width: '100%' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, position: 'relative', zIndex: 1 }}
              className="process-grid">
              {processSteps.map((step, i) => (
                <div key={step.n} className="reveal" style={{ textAlign: 'center', transitionDelay: `${i * 100}ms` }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: '50%',
                    border: '1.5px solid #3D6B52', background: '#F0EBE0',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 20px', zIndex: 2, position: 'relative',
                  }}>
                    <span style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 18, fontWeight: 400, color: '#3D6B52' }}>
                      {step.n}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 18, fontWeight: 600, color: '#2C3E35', marginBottom: 10 }}>
                    {step.title}
                  </h3>
                  <p className="body-md" style={{ fontSize: 14 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Origin ── */}
      <section className="section-py" style={{ background: '#FAF6EF', borderTop: '1px solid #DDD5C8', borderBottom: '1px solid #DDD5C8' }}>
        <div className="container-jl">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p className="label-overline reveal" style={{ marginBottom: 12 }}>PERJALANAN RASA</p>
            <h2 className="heading-xl reveal" style={{ transitionDelay: '80ms' }}>
              Origin Kami
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}
            className="origin-grid">
            {origins.map((o, i) => (
              <div key={o.region} className="reveal"
                style={{
                  background: o.color,
                  borderRadius: 16,
                  border: '1px solid #DDD5C8',
                  padding: '20px 20px',
                  position: 'relative',
                  transitionDelay: `${(i % 3) * 80}ms`,
                }}>
                <LeafSprig width={44} height={44} opacity={0.3}
                  style={{ position: 'absolute', top: 12, right: 12 }} />
                <p style={{ fontSize: 10, color: '#6B7C72', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'var(--font-inter), sans-serif', marginBottom: 6 }}>
                  {o.island}
                </p>
                <h3 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 18, fontWeight: 600, color: '#2C3E35', marginBottom: 6 }}>
                  {o.region}
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span className={`chip-${o.roast.toLowerCase() as 'light'|'medium'|'dark'}`}>{o.roast}</span>
                  <span style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 14, fontWeight: 700, color: '#3D6B52' }}>{o.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="section-py" style={{ background: '#F0EBE0' }}>
        <div className="container-jl">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p className="label-overline reveal" style={{ marginBottom: 12 }}>KOMITMEN KAMI</p>
            <h2 className="heading-xl reveal" style={{ transitionDelay: '80ms' }}>
              Nilai-Nilai Kami
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}
            className="values-grid">
            {values.map((v, i) => (
              <div key={v.title} className="reveal product-card-botanical"
                style={{ padding: '32px 28px', textAlign: 'center', transitionDelay: `${i * 100}ms` }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{v.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 20, fontWeight: 600, color: '#2C3E35', marginBottom: 12 }}>
                  {v.title}
                </h3>
                <p className="body-md" style={{ fontSize: 14 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media(max-width:768px){
          .split-grid{grid-template-columns:1fr!important}
          .process-grid{grid-template-columns:repeat(2,1fr)!important}
          .origin-grid{grid-template-columns:repeat(2,1fr)!important}
          .values-grid{grid-template-columns:1fr!important}
        }
        @media(max-width:480px){
          .origin-grid{grid-template-columns:1fr!important}
          .process-grid{grid-template-columns:1fr!important}
        }
      `}</style>
    </div>
  )
}
