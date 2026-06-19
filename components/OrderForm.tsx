'use client'

import { useState, type FormEvent } from 'react'
import { products } from '@/data/products'

export default function OrderForm() {
  const [formData, setFormData] = useState({
    nama: '',
    whatsapp: '',
    produk: '',
    jumlah: 1,
    gilingan: '',
    alamat: '',
    catatan: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {}
    if (!formData.nama.trim()) newErrors.nama = 'Nama lengkap wajib diisi'
    if (!formData.whatsapp.trim()) newErrors.whatsapp = 'Nomor WhatsApp wajib diisi'
    if (!formData.produk) newErrors.produk = 'Pilih produk terlebih dahulu'
    if (formData.jumlah < 1) newErrors.jumlah = 'Jumlah minimal 1'
    if (!formData.gilingan) newErrors.gilingan = 'Pilih preferensi gilingan'
    if (!formData.alamat.trim()) newErrors.alamat = 'Alamat pengiriman wajib diisi'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    const selectedProduct = products.find((p) => p.id === formData.produk)
    const message = `Halo, saya ingin memesan:\n\n` +
      `📋 *Detail Pesanan*\n` +
      `Nama: ${formData.nama}\n` +
      `WhatsApp: ${formData.whatsapp}\n` +
      `Produk: ${selectedProduct?.name ?? ''}\n` +
      `Jumlah: ${formData.jumlah}\n` +
      `Gilingan: ${formData.gilingan}\n` +
      `Alamat: ${formData.alamat}\n` +
      (formData.catatan ? `Catatan: ${formData.catatan}\n` : '') +
      `\nTerima kasih! 🙏`

    const encoded = encodeURIComponent(message)
    window.open(`https://wa.me/6281234567890?text=${encoded}`, '_blank')
  }

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-xl border ${
      errors[field] ? 'border-red-400 bg-red-50/50' : 'border-[#E8DDD0] bg-[#FAF7F2]'
    } text-sm text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C17A3B]/30 focus:border-[#C17A3B] transition-all duration-300`

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Nama Lengkap */}
      <div>
        <label htmlFor="nama" className="block text-sm font-medium text-[#3B1F0E] mb-1.5">
          Nama Lengkap *
        </label>
        <input
          id="nama"
          type="text"
          value={formData.nama}
          onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
          className={inputClass('nama')}
          placeholder="Masukkan nama lengkap"
        />
        {errors.nama && <p className="text-xs text-red-500 mt-1">{errors.nama}</p>}
      </div>

      {/* Nomor WhatsApp */}
      <div>
        <label htmlFor="whatsapp" className="block text-sm font-medium text-[#3B1F0E] mb-1.5">
          Nomor WhatsApp *
        </label>
        <input
          id="whatsapp"
          type="tel"
          value={formData.whatsapp}
          onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
          className={inputClass('whatsapp')}
          placeholder="08xxxxxxxxxx"
        />
        {errors.whatsapp && <p className="text-xs text-red-500 mt-1">{errors.whatsapp}</p>}
      </div>

      {/* Pilih Produk */}
      <div>
        <label htmlFor="produk" className="block text-sm font-medium text-[#3B1F0E] mb-1.5">
          Pilih Produk *
        </label>
        <select
          id="produk"
          value={formData.produk}
          onChange={(e) => setFormData({ ...formData, produk: e.target.value })}
          className={inputClass('produk')}
        >
          <option value="">-- Pilih produk --</option>
          {products.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name} — Rp {p.price.toLocaleString('id-ID')}
            </option>
          ))}
        </select>
        {errors.produk && <p className="text-xs text-red-500 mt-1">{errors.produk}</p>}
      </div>

      {/* Jumlah */}
      <div>
        <label htmlFor="jumlah" className="block text-sm font-medium text-[#3B1F0E] mb-1.5">
          Jumlah *
        </label>
        <input
          id="jumlah"
          type="number"
          min={1}
          value={formData.jumlah}
          onChange={(e) => setFormData({ ...formData, jumlah: parseInt(e.target.value) || 1 })}
          className={inputClass('jumlah')}
        />
        {errors.jumlah && <p className="text-xs text-red-500 mt-1">{errors.jumlah}</p>}
      </div>

      {/* Preferensi Gilingan */}
      <div>
        <label htmlFor="gilingan" className="block text-sm font-medium text-[#3B1F0E] mb-1.5">
          Preferensi Gilingan *
        </label>
        <select
          id="gilingan"
          value={formData.gilingan}
          onChange={(e) => setFormData({ ...formData, gilingan: e.target.value })}
          className={inputClass('gilingan')}
        >
          <option value="">-- Pilih gilingan --</option>
          <option value="Biji Utuh">Biji Utuh</option>
          <option value="Halus">Halus</option>
          <option value="Medium">Medium</option>
          <option value="Kasar">Kasar</option>
        </select>
        {errors.gilingan && <p className="text-xs text-red-500 mt-1">{errors.gilingan}</p>}
      </div>

      {/* Alamat Pengiriman */}
      <div>
        <label htmlFor="alamat" className="block text-sm font-medium text-[#3B1F0E] mb-1.5">
          Alamat Pengiriman *
        </label>
        <textarea
          id="alamat"
          rows={3}
          value={formData.alamat}
          onChange={(e) => setFormData({ ...formData, alamat: e.target.value })}
          className={inputClass('alamat')}
          placeholder="Masukkan alamat lengkap"
        />
        {errors.alamat && <p className="text-xs text-red-500 mt-1">{errors.alamat}</p>}
      </div>

      {/* Catatan */}
      <div>
        <label htmlFor="catatan" className="block text-sm font-medium text-[#3B1F0E] mb-1.5">
          Catatan <span className="text-gray-400 font-normal">(opsional)</span>
        </label>
        <textarea
          id="catatan"
          rows={2}
          value={formData.catatan}
          onChange={(e) => setFormData({ ...formData, catatan: e.target.value })}
          className={inputClass('catatan')}
          placeholder="Catatan tambahan untuk pesanan"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="btn-primary w-full py-4 bg-[#3B1F0E] text-[#F5ECD7] rounded-xl text-sm font-medium tracking-wide hover:bg-[#2C1A0A] transition-colors duration-300"
      >
        Kirim Pesanan via WhatsApp
      </button>
    </form>
  )
}
