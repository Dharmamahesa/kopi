'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BotanicalBranch, LeafSprig } from '@/components/illustrations/Botanicals'
import { products } from '@/data/products'
import { MessageCircle, CheckCircle } from 'lucide-react'

type Weight  = '100g' | '200g' | '500g'
type Grind   = 'Biji Utuh' | 'Halus' | 'Medium' | 'Kasar'

export default function OrderPage() {
  const [selectedProduct, setSelectedProduct] = useState(products[0].id)
  const [weight, setWeight]   = useState<Weight>('200g')
  const [grind, setGrind]     = useState<Grind>('Biji Utuh')
  const [qty, setQty]         = useState(1)
  const [name, setName]       = useState('')
  const [phone, setPhone]     = useState('')
  const [address, setAddress] = useState('')
  const [notes, setNotes]     = useState('')

  const product = products.find(p => p.id === selectedProduct) || products[0]
  const sizeObj = product.sizes.find(s => s.weight === weight) || product.sizes[1] || product.sizes[0]
  const subtotal = sizeObj.price * qty
  const freeShipping = subtotal >= 150000

  const formatPrice = (n: number) => 'Rp ' + n.toLocaleString('id-ID')

  const handleSubmit = () => {
    const msg = encodeURIComponent(
      `Halo Kopi Jaya Lestari! 🌿\n\nSaya ingin memesan:\n\n` +
      `━━━━━━━━━━━━━━\n` +
      `📦 Produk : ${product.name}\n` +
      `⚖️  Ukuran : ${weight}\n` +
      `☕ Gilingan: ${grind}\n` +
      `🔢 Jumlah  : ${qty} pcs\n` +
      `💰 Total   : ${formatPrice(subtotal)}\n` +
      `━━━━━━━━━━━━━━\n\n` +
      `👤 Nama    : ${name}\n` +
      `📱 WA      : ${phone}\n` +
      `🏠 Alamat  : ${address}\n` +
      (notes ? `📝 Catatan : ${notes}\n` : '') +
      `\nMohon konfirmasinya 🙏`
    )
    window.open(`https://wa.me/6281234567890?text=${msg}`, '_blank')
  }

  return (
    <div style={{ background: '#F0EBE0', minHeight: '100vh' }}>
      <Navbar />

      <main style={{ paddingTop: 68, minHeight: '100vh' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', minHeight: 'calc(100vh - 68px)' }}
          className="order-grid">

          {/* ── LEFT — decorative / trust ── */}
          <div style={{
            background: '#FAF6EF',
            borderRight: '1px solid #DDD5C8',
            padding: '64px 48px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Large botanical branch filling background */}
            <div style={{ position: 'absolute', bottom: -40, right: -20, zIndex: 0 }}>
              <BotanicalBranch width={300} height={460} opacity={0.15} />
            </div>
            <div style={{ position: 'absolute', top: 20, left: -30, zIndex: 0, transform: 'scaleX(-1)' }}>
              <BotanicalBranch width={200} height={300} opacity={0.1} />
            </div>

            <div style={{ position: 'relative', zIndex: 1 }}>
              <p className="label-overline" style={{ marginBottom: 16 }}>BUAT PESANANMU</p>
              <h1 style={{
                fontFamily: 'var(--font-playfair), serif',
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: 400,
                fontStyle: 'italic',
                color: '#2C3E35',
                lineHeight: 1.3,
                marginBottom: 36,
              }}>
                pesan kopimu<br />sekarang
              </h1>

              {/* Trust badges */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 40 }}>
                {[
                  'Fresh roasted per pesanan',
                  'Dikemas vakum & rapi',
                  'Gratis ongkir > Rp 150.000',
                ].map((badge) => (
                  <div key={badge} style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    background: 'white', borderRadius: 9999,
                    border: '1px solid #DDD5C8',
                    padding: '10px 18px',
                    width: 'fit-content',
                  }}>
                    <CheckCircle size={16} color="#3D6B52" />
                    <span style={{ fontSize: 14, color: '#2C3E35', fontFamily: 'var(--font-inter), sans-serif' }}>
                      {badge}
                    </span>
                  </div>
                ))}
              </div>

              {/* Product mini card */}
              {product && (
                <div style={{
                  background: 'white', borderRadius: 16, border: '1px solid #DDD5C8',
                  padding: '20px', position: 'relative',
                }}>
                  <div style={{ position: 'absolute', top: 10, right: 10 }}>
                    <LeafSprig width={44} height={44} opacity={0.25} />
                  </div>
                  <p className="label-overline" style={{ marginBottom: 8, fontSize: 10 }}>PRODUK DIPILIH</p>
                  <p style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 18, fontWeight: 600, color: '#2C3E35', marginBottom: 4 }}>
                    {product.name}
                  </p>
                  <p style={{ fontSize: 13, color: '#8FAF97', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'var(--font-inter), sans-serif' }}>
                    {product.category.replace('·', '—')}
                  </p>
                  <p style={{ marginTop: 10, fontSize: 14, color: '#6B7C72', fontStyle: 'italic' }}>
                    {product.tastingNotes}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* ── RIGHT — form ── */}
          <div style={{ background: '#F0EBE0', padding: '64px 48px', overflowY: 'auto' }}>
            <h2 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 28, fontWeight: 600, color: '#2C3E35', marginBottom: 6 }}>
              Buat Pesanan
            </h2>
            <p style={{ fontSize: 14, color: '#6B7C72', marginBottom: 36 }}>
              Isi form, kami konfirmasi via WhatsApp.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {/* Nama */}
              <div>
                <label className="label-field">Nama Lengkap</label>
                <input
                  type="text"
                  placeholder="Nama kamu"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="input-soft"
                />
              </div>

              {/* WhatsApp */}
              <div>
                <label className="label-field">Nomor WhatsApp</label>
                <input
                  type="tel"
                  placeholder="08xx-xxxx-xxxx"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  className="input-soft"
                />
              </div>

              {/* Produk */}
              <div>
                <label className="label-field">Pilih Kopi</label>
                <select
                  value={selectedProduct}
                  onChange={e => setSelectedProduct(e.target.value)}
                  className="select-soft"
                >
                  {products.map(p => (
                    <option key={p.id} value={p.id}>{p.name} — {p.category.replace('·', '—')}</option>
                  ))}
                </select>
              </div>

              {/* Ukuran pills */}
              <div>
                <label className="label-field">Ukuran</label>
                <div style={{ display: 'flex', gap: 8 }}>
                  {(['100g', '200g', '500g'] as Weight[]).map(w => (
                    <button key={w}
                      onClick={() => setWeight(w)}
                      className={`filter-pill${weight === w ? ' active' : ''}`}
                    >
                      {w}
                    </button>
                  ))}
                </div>
              </div>

              {/* Gilingan pills */}
              <div>
                <label className="label-field">Gilingan</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {(['Biji Utuh', 'Halus', 'Medium', 'Kasar'] as Grind[]).map(g => (
                    <button key={g}
                      onClick={() => setGrind(g)}
                      className={`filter-pill${grind === g ? ' active' : ''}`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>

              {/* Jumlah stepper */}
              <div>
                <label className="label-field">Jumlah</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: 0, border: '1.5px solid #DDD5C8', borderRadius: 14, background: 'white', width: 'fit-content', overflow: 'hidden' }}>
                  <button
                    onClick={() => setQty(q => Math.max(1, q - 1))}
                    style={{ padding: '12px 18px', background: 'none', border: 'none', cursor: 'pointer', fontSize: 18, color: '#3D6B52', transition: 'background 0.15s' }}
                    onMouseOver={e => (e.currentTarget.style.background = '#F0EBE0')}
                    onMouseOut={e => (e.currentTarget.style.background = 'none')}
                  >−</button>
                  <span style={{ padding: '12px 20px', fontFamily: 'var(--font-playfair), serif', fontSize: 18, fontWeight: 600, color: '#2C3E35', borderLeft: '1px solid #DDD5C8', borderRight: '1px solid #DDD5C8', minWidth: 56, textAlign: 'center' }}>
                    {qty}
                  </span>
                  <button
                    onClick={() => setQty(q => q + 1)}
                    style={{ padding: '12px 18px', background: 'none', border: 'none', cursor: 'pointer', fontSize: 18, color: '#3D6B52', transition: 'background 0.15s' }}
                    onMouseOver={e => (e.currentTarget.style.background = '#F0EBE0')}
                    onMouseOut={e => (e.currentTarget.style.background = 'none')}
                  >+</button>
                </div>
              </div>

              {/* Alamat */}
              <div>
                <label className="label-field">Alamat Pengiriman</label>
                <textarea
                  placeholder="Jl. Contoh No. 1, Kota, Provinsi"
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                  className="input-soft"
                  rows={3}
                  style={{ resize: 'vertical' }}
                />
              </div>

              {/* Catatan */}
              <div>
                <label className="label-field">Catatan (opsional)</label>
                <textarea
                  placeholder="Misalnya: titipkan di depan pintu"
                  value={notes}
                  onChange={e => setNotes(e.target.value)}
                  className="input-soft"
                  rows={2}
                  style={{ resize: 'vertical' }}
                />
              </div>

              {/* Order Summary */}
              <div style={{
                background: 'white',
                borderRadius: 20,
                border: '1px solid #DDD5C8',
                padding: '24px',
                position: 'relative',
              }}>
                <div style={{ position: 'absolute', top: 14, right: 14 }}>
                  <LeafSprig width={44} height={44} opacity={0.22} />
                </div>
                <p className="label-overline" style={{ marginBottom: 16 }}>RINGKASAN PESANAN</p>
                {[
                  { label: 'Produk', value: product.name },
                  { label: 'Ukuran', value: weight },
                  { label: 'Gilingan', value: grind },
                  { label: 'Jumlah', value: `${qty} pcs` },
                  { label: 'Harga satuan', value: formatPrice(sizeObj.price) },
                  { label: 'Ongkir', value: freeShipping ? 'GRATIS 🎉' : 'Tergantung jarak' },
                ].map(row => (
                  <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
                    <span style={{ fontSize: 13, color: '#6B7C72' }}>{row.label}</span>
                    <span style={{ fontSize: 14, color: '#2C3E35', fontWeight: 500 }}>{row.value}</span>
                  </div>
                ))}
                <div style={{ borderTop: '1px solid #DDD5C8', paddingTop: 14, marginTop: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: '#2C3E35', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'var(--font-inter), sans-serif' }}>
                    SUBTOTAL
                  </span>
                  <span style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 24, fontWeight: 700, color: '#3D6B52' }}>
                    {formatPrice(subtotal)}
                  </span>
                </div>
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                className="btn-sage-full"
                style={{ padding: '16px', fontSize: 15 }}
              >
                <MessageCircle size={18} />
                Kirim Pesanan via WhatsApp 🟢
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <style>{`
        @media(max-width:768px){
          .order-grid{grid-template-columns:1fr!important}
        }
      `}</style>
    </div>
  )
}
