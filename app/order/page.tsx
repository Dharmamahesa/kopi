import AnnouncementBar from '@/components/AnnouncementBar'
import Navbar from '@/components/Navbar'
import OrderForm from '@/components/OrderForm'
import Footer from '@/components/Footer'

export default function OrderPage() {
  return (
    <main className="flex-1">
      <AnnouncementBar />
      <Navbar />

      {/* Hero */}
      <section className="bg-[#3B1F0E] text-[#F5ECD7] pt-32 pb-16 sm:pt-36 sm:pb-20 px-4 text-center">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl mb-4">pesan sekarang</h1>
        <p className="text-sm sm:text-base text-[#F5ECD7]/70 max-w-lg mx-auto">
          Isi formulir di bawah dan pesanan Anda akan dikirim langsung melalui WhatsApp.
        </p>
      </section>

      {/* Form */}
      <section className="bg-[#FAF7F2] py-12 sm:py-16 px-4">
        <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-sm p-6 sm:p-8 border border-[#E8DDD0]">
          <OrderForm />
        </div>
      </section>

      <Footer />
    </main>
  )
}
