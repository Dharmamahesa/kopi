'use client'

import { useState, useMemo } from 'react'
import AnnouncementBar from '@/components/AnnouncementBar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { products, bundles } from '@/data/products'
import { MessageCircle, Minus, Plus } from 'lucide-react'

type Weight = '100g' | '200g' | '500g'
type Grind = 'Biji Utuh' | 'Halus' | 'Medium' | 'Kasar'

const allProductOptions = [
  ...products.map(p => p.name),
  ...bundles.map(b => b.name),
]

function formatPrice(p: number) {
  return 'Rp ' + p.toLocaleString('id-ID')
}

export default function OrderPage() {
  const [form, setForm] = useState({
    nama: '',
    whatsapp: '',
    produk: '',
    ukuran: '200g' as Weight,
    gilingan: 'Biji Utuh' as Grind,
    jumlah: 1,
    alamat: '',
    catatan: '',
  })

  const [focused, setFocused] = useState<string | null>(null)

  const selectedProduct = useMemo(() => {
    const found = products.find(p => p.name === form.produk)
      || bundles.find(b => b.name === form.produk)
    return found
  }, [form.produk])

  const selectedSize = useMemo(() => {
    if (!selectedProduct) return null
    return (
      selectedProduct.sizes.find(s => s.weight === form.ukuran)
      || selectedProduct.sizes[0]
    )
  }, [selectedProduct, form.ukuran])

  const subtotal = selectedSize ? selectedSize.price * form.jumlah : 0
  const freeShipping = subtotal >= 150000

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.nama || !form.whatsapp || !form.produk || !form.alamat) {
      alert('Mohon lengkapi semua field yang diperlukan.')
      return
    }
    const msg = encodeURIComponent(
      `Halo Kopi Jaya Lestari! Saya ingin memesan:\n\n` +
      `Nama: ${form.nama}\n` +
      `Produk: ${form.produk}\n` +
      `Ukuran: ${selectedSize?.weight || form.ukuran}\n` +
      `Preferensi Gilingan: ${form.gilingan}\n` +
      `Jumlah: ${form.jumlah} pcs\n` +
      `Total: ${formatPrice(subtotal)}\n` +
      (freeShipping ? '✅ Gratis ongkir\n' : '') +
      `\nAlamat Pengiriman:\n${form.alamat}` +
      (form.catatan ? `\n\nCatatan: ${form.catatan}` : '') +
      `\n\nMohon konfirmasinya, terima kasih 🙏`
    )
    window.open(`https://wa.me/6281234567890?text=${msg}`, '_blank')
  }

  const inputField = (
    id: string,
    label: string,
    value: string,
    onChange: (v: string) => void,
    type: 'text' | 'tel' | 'textarea' = 'text',
    required = true,
  ) => (
    <div className="input-group" style={{ marginBottom: 36 }}>
      <label
        htmlFor={id}
        className="floating-label"
        style={{
          color: focused === id ? '#C17A3B' : '#414844',
          transition: 'color 0.2s',
        }}
      >
        {label}{!required && ' (opsional)'}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          required={required}
          rows={3}
          value={value}
          onChange={e => onChange(e.target.value)}
          onFocus={() => setFocused(id)}
          onBlur={() => setFocused(null)}
          className="input-underline"
          style={{ resize: 'none', paddingTop: 24 }}
        />
      ) : (
        <input
          id={id}
          type={type}
          required={required}
          value={value}
          onChange={e => onChange(e.target.value)}
          onFocus={() => setFocused(id)}
          onBlur={() => setFocused(null)}
          className="input-underline"
          style={{ paddingTop: 24 }}
        />
      )}
    </div>
  )

  return (
    <main className="flex-1">
      <AnnouncementBar />
      <Navbar />

      {/* ══════════════════════════════════════════
          SPLIT LAYOUT — Full height
      ══════════════════════════════════════════ */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: '100vh',
          paddingTop: 72,
        }}
        className="order-grid"
      >
        {/* LEFT — Cinematic Vignette */}
        <div
          className="film-grain relative overflow-hidden flex flex-col items-center justify-center"
          style={{
            background: 'linear-gradient(160deg, #1A0A03 0%, #3B1F0E 40%, #1B4332 100%)',
            minHeight: '100%',
            padding: '80px 48px',
          }}
        >
          {/* Letterbox */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 48, background: '#3B1F0E', zIndex: 10 }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 48, background: '#3B1F0E', zIndex: 10 }} />
          {/* Vignette */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.65) 100%)',
            zIndex: 2, pointerEvents: 'none',
          }} />
          {/* Light leaks */}
          <div style={{
            position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none',
            background: `
              radial-gradient(ellipse 55% 45% at 0% 0%, rgba(193,122,59,0.22) 0%, transparent 70%),
              radial-gradient(ellipse 50% 40% at 100% 100%, rgba(193,122,59,0.15) 0%, transparent 70%)
            `,
          }} />
          {/* Bean texture */}
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', opacity: 0.07, zIndex: 1 }}>
            {[...Array(20)].map((_, i) => (
              <div key={i} style={{
                position: 'absolute',
                width: 30 + (i % 5) * 10, height: 18 + (i % 4) * 6,
                borderRadius: '50%', background: '#C17A3B',
                top: `${(i * 13 + 5) % 95}%`,
                left: `${(i * 19 + 3) % 90}%`,
                transform: `rotate(${i * 43}deg)`,
              }} />
            ))}
          </div>

          {/* Content */}
          <div style={{ position: 'relative', zIndex: 5, textAlign: 'center', maxWidth: 360 }}>
            <p className="label-caps mb-4" style={{ color: '#C17A3B' }}>PESAN SEKARANG</p>
            <h2
              className="display-lg-mobile mb-10"
              style={{ color: '#F5ECD7', fontStyle: 'italic' }}
            >
              pesan kopimu sekarang
            </h2>

            {/* Trust badges */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center' }}>
              {[
                '✅ Fresh roasted per pesanan',
                '✅ Dikemas vakum & rapi',
                '✅ Gratis ongkir > Rp 150.000',
              ].map(badge => (
                <span
                  key={badge}
                  style={{
                    display: 'inline-block',
                    padding: '8px 18px', borderRadius: 9999,
                    background: 'rgba(245,236,215,0.08)',
                    border: '1px solid rgba(245,236,215,0.18)',
                    color: 'rgba(245,236,215,0.85)',
                    fontSize: '12px',
                    fontFamily: 'var(--font-inter)',
                    letterSpacing: '0.02em',
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — Order form */}
        <div style={{ background: '#FAF7F2', padding: '64px' }} className="order-form-pad">
          <p className="label-caps mb-3" style={{ color: '#C17A3B' }}>FORMULIR PESANAN</p>
          <h1 className="headline-md mb-2">buat pesanan</h1>
          <p className="body-md mb-10" style={{ color: '#714844', fontSize: '14px' }}>
            Isi form, kami konfirmasi via WhatsApp dalam 1×24 jam.
          </p>

          <form onSubmit={handleSubmit} noValidate>
            {/* Nama */}
            {inputField('nama', 'Nama Lengkap', form.nama, v => setForm(f => ({ ...f, nama: v })), 'text', true)}

            {/* WhatsApp */}
            {inputField('whatsapp', 'Nomor WhatsApp', form.whatsapp, v => setForm(f => ({ ...f, whatsapp: v })), 'tel', true)}

            {/* Pilih Kopi */}
            <div className="input-group" style={{ marginBottom: 36 }}>
              <label htmlFor="produk" className="floating-label" style={{
                color: focused === 'produk' ? '#C17A3B' : '#414844', transition: 'color 0.2s',
              }}>
                Pilih Kopi
              </label>
              <select
                id="produk"
                required
                value={form.produk}
                onChange={e => setForm(f => ({ ...f, produk: e.target.value }))}
                onFocus={() => setFocused('produk')}
                onBlur={() => setFocused(null)}
                style={{
                  width: '100%', background: 'transparent', border: 'none',
                  borderBottom: `1px solid ${focused === 'produk' ? '#C17A3B' : '#C1C8C2'}`,
                  padding: '24px 0 8px',
                  fontFamily: 'var(--font-inter)', fontSize: 16, color: '#1A1C1A',
                  outline: 'none', cursor: 'pointer',
                  transition: 'border-color 0.3s',
                  appearance: 'none',
                }}
              >
                <option value="">— Pilih produk —</option>
                {allProductOptions.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            {/* Ukuran */}
            <div style={{ marginBottom: 36 }}>
              <p className="label-caps mb-3" style={{ color: '#414844' }}>Ukuran</p>
              <div style={{ display: 'flex', gap: 8 }}>
                {(['100g', '200g', '500g'] as Weight[]).map(w => (
                  <button
                    key={w} type="button"
                    onClick={() => setForm(f => ({ ...f, ukuran: w }))}
                    style={{
                      padding: '8px 20px', borderRadius: 9999, cursor: 'pointer',
                      fontFamily: 'var(--font-inter)', fontSize: 12,
                      fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
                      background: form.ukuran === w ? '#1B4332' : 'transparent',
                      color: form.ukuran === w ? '#F5ECD7' : '#1B4332',
                      border: '1px solid #1B4332', transition: 'all 0.2s',
                    }}
                  >{w}</button>
                ))}
              </div>
            </div>

            {/* Gilingan */}
            <div style={{ marginBottom: 36 }}>
              <p className="label-caps mb-3" style={{ color: '#414844' }}>Preferensi Gilingan</p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {(['Biji Utuh', 'Halus', 'Medium', 'Kasar'] as Grind[]).map(g => (
                  <button
                    key={g} type="button"
                    onClick={() => setForm(f => ({ ...f, gilingan: g }))}
                    style={{
                      padding: '8px 16px', borderRadius: 9999, cursor: 'pointer',
                      fontFamily: 'var(--font-inter)', fontSize: 12,
                      fontWeight: 600, letterSpacing: '0.08em',
                      background: form.gilingan === g ? '#1B4332' : 'transparent',
                      color: form.gilingan === g ? '#F5ECD7' : '#1B4332',
                      border: '1px solid #1B4332', transition: 'all 0.2s',
                    }}
                  >{g}</button>
                ))}
              </div>
            </div>

            {/* Jumlah */}
            <div style={{ marginBottom: 36 }}>
              <p className="label-caps mb-3" style={{ color: '#414844' }}>Jumlah</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <button
                  type="button"
                  id="qty-minus"
                  onClick={() => setForm(f => ({ ...f, jumlah: Math.max(1, f.jumlah - 1) }))}
                  style={{
                    width: 36, height: 36, borderRadius: '50%', border: '1px solid #C1C8C2',
                    background: 'transparent', cursor: 'pointer', color: '#1B4332',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >
                  <Minus size={14} />
                </button>
                <span style={{
                  fontFamily: 'var(--font-playfair), serif',
                  fontSize: 24, fontWeight: 600, minWidth: 32, textAlign: 'center',
                }}>
                  {form.jumlah}
                </span>
                <button
                  type="button"
                  id="qty-plus"
                  onClick={() => setForm(f => ({ ...f, jumlah: f.jumlah + 1 }))}
                  style={{
                    width: 36, height: 36, borderRadius: '50%', border: '1px solid #C1C8C2',
                    background: 'transparent', cursor: 'pointer', color: '#1B4332',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Alamat */}
            {inputField('alamat', 'Alamat Pengiriman', form.alamat, v => setForm(f => ({ ...f, alamat: v })), 'textarea', true)}

            {/* Catatan */}
            {inputField('catatan', 'Catatan', form.catatan, v => setForm(f => ({ ...f, catatan: v })), 'textarea', false)}

            {/* Price Summary */}
            <div style={{
              background: '#F5ECD7', border: '1px solid #E8E3DA', borderRadius: '1rem',
              padding: '20px', marginBottom: 24,
            }}>
              <p className="label-caps mb-4" style={{ color: '#414844' }}>RINGKASAN PESANAN</p>
              {selectedProduct ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span className="body-md" style={{ color: '#414844' }}>Produk</span>
                    <span className="body-md">{selectedProduct.name}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span className="body-md" style={{ color: '#414844' }}>Ukuran</span>
                    <span className="body-md">{selectedSize?.weight || form.ukuran}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span className="body-md" style={{ color: '#414844' }}>Qty</span>
                    <span className="body-md">{form.jumlah}×</span>
                  </div>
                </div>
              ) : (
                <p className="body-md mb-4" style={{ color: '#717973', fontStyle: 'italic' }}>
                  Pilih produk untuk melihat estimasi harga.
                </p>
              )}
              <div style={{ borderTop: '1px solid #C1C8C2', paddingTop: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span className="label-caps" style={{ color: '#414844' }}>Total Estimasi</span>
                  <span className="body-lg" style={{ color: '#1B4332', fontWeight: 700, fontFamily: 'var(--font-playfair)' }}>
                    {subtotal > 0 ? formatPrice(subtotal) : '—'}
                  </span>
                </div>
                {freeShipping && (
                  <p className="label-sm mt-2" style={{ color: '#1B4332' }}>
                    ✅ Gratis ongkir berlaku!
                  </p>
                )}
                {subtotal > 0 && !freeShipping && (
                  <p className="label-sm mt-2" style={{ color: '#717973' }}>
                    Gratis ongkir di atas Rp 150.000
                  </p>
                )}
              </div>
            </div>

            {/* Submit */}
            <button
              id="submit-order"
              type="submit"
              className="btn-primary w-full flex items-center justify-center gap-2"
              style={{ padding: '16px 24px', fontSize: '12px', marginBottom: 12 }}
            >
              <MessageCircle size={16} />
              KIRIM PESANAN VIA WHATSAPP 🟢
            </button>

            <p className="label-sm text-center" style={{ color: '#717973' }}>
              Kami akan membalas dan mengirimkan invoice dalam 1×24 jam
            </p>
          </form>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .order-grid { grid-template-columns: 1fr !important; }
          .order-form-pad { padding: 24px !important; }
        }
      `}</style>
    </main>
  )
}
