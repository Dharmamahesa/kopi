export type RoastLevel = 'light' | 'medium' | 'medium-dark' | 'dark'
export type CoffeeType = 'arabika' | 'robusta' | 'blend'

export type ProductSize = {
  weight: '100g' | '200g' | '500g'
  price: number
}

export type Product = {
  id: string
  slug: string
  category: string          // Origin label-caps, e.g. "TORAJA · SULAWESI"
  region: string            // Short region for filter, e.g. "Sulawesi"
  name: string
  tastingNotes: string      // 2-3 words
  description: string
  roast: RoastLevel
  type: CoffeeType
  sizes: ProductSize[]
  oldPrice?: number         // discount on default size
  altitude?: string
  image: string
  isBundle?: boolean
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'toraja-arabika',
    category: 'TORAJA · SULAWESI',
    region: 'Sulawesi',
    name: 'Toraja Arabika',
    tastingNotes: 'cokelat, fruity, rempah',
    description:
      'Single origin dari dataran tinggi Toraja. Dikenal dengan karakter cokelat yang dalam, fruity yang elegan, dan sentuhan rempah khas Sulawesi.',
    roast: 'medium',
    type: 'arabika',
    altitude: '1400–1800 MDPL',
    sizes: [
      { weight: '100g', price: 40000 },
      { weight: '200g', price: 75000 },
      { weight: '500g', price: 175000 },
    ],
    image: '/images/toraja.jpg',
  },
  {
    id: '2',
    slug: 'gayo-aceh',
    category: 'GAYO · ACEH',
    region: 'Aceh',
    name: 'Gayo Aceh',
    tastingNotes: 'bold, smoky, full body',
    description:
      'Kopi Gayo dataran tinggi Aceh. Bold dan smoky dengan full body yang memuaskan — cocok untuk pour over atau french press.',
    roast: 'dark',
    type: 'arabika',
    altitude: '1200–1700 MDPL',
    sizes: [
      { weight: '100g', price: 42000 },
      { weight: '200g', price: 80000 },
      { weight: '500g', price: 185000 },
    ],
    image: '/images/gayo.jpg',
  },
  {
    id: '3',
    slug: 'flores-bajawa',
    category: 'FLORES · NTT',
    region: 'NTT',
    name: 'Flores Bajawa',
    tastingNotes: 'floral, cerah, sweet',
    description:
      'Dari lereng Gunung Inerie, Bajawa. Karakter floral dan bright yang membuatnya unik di antara kopi Nusantara — aftertaste manis yang panjang.',
    roast: 'light',
    type: 'arabika',
    altitude: '1000–1500 MDPL',
    sizes: [
      { weight: '100g', price: 45000 },
      { weight: '200g', price: 85000 },
      { weight: '500g', price: 195000 },
    ],
    image: '/images/flores.jpg',
  },
  {
    id: '4',
    slug: 'bali-kintamani',
    category: 'KINTAMANI · BALI',
    region: 'Bali',
    name: 'Bali Kintamani',
    tastingNotes: 'citrusy, clean, bright',
    description:
      'Arabika dari lereng Gunung Batur, Kintamani. Karakter citrusy yang bersih dengan keasaman yang menyegarkan — favorit cold brew.',
    roast: 'medium',
    type: 'arabika',
    altitude: '900–1500 MDPL',
    sizes: [
      { weight: '100g', price: 48000 },
      { weight: '200g', price: 90000 },
      { weight: '500g', price: 210000 },
    ],
    image: '/images/bali.jpg',
  },
  {
    id: '5',
    slug: 'java-robusta',
    category: 'JAVA · JAWA TIMUR',
    region: 'Jawa',
    name: 'Java Robusta',
    tastingNotes: 'earthy, bold, espresso',
    description:
      'Robusta pilihan dari Jawa Timur. Earthy dan bold — karakter sempurna untuk espresso atau kopi susu yang kuat dengan body tebal.',
    roast: 'medium',
    type: 'robusta',
    altitude: '600–900 MDPL',
    sizes: [
      { weight: '100g', price: 32000 },
      { weight: '200g', price: 60000 },
      { weight: '500g', price: 140000 },
    ],
    image: '/images/java.jpg',
  },
]

export const bundles: Product[] = [
  {
    id: 'b1',
    slug: 'paket-jelajah-nusantara',
    category: 'PAKET BUNDLE',
    region: 'Indonesia',
    name: 'Paket Jelajah Nusantara',
    tastingNotes: '4 origin, 100g each',
    description:
      'Koleksi 4 single origin terbaik kami dalam satu kotak — Toraja, Gayo, Flores, dan Kintamani. Sempurna untuk hadiah atau eksplorasi rasa.',
    roast: 'medium',
    type: 'blend',
    sizes: [
      { weight: '100g', price: 275000 },
    ],
    oldPrice: 320000,
    image: '/images/bundle-nusantara.jpg',
    isBundle: true,
  },
  {
    id: 'b2',
    slug: 'paket-duo-arjuno',
    category: 'PAKET BUNDLE',
    region: 'Indonesia',
    name: 'Paket Duo Arjuno',
    tastingNotes: '2 pilihan, 200g each',
    description:
      'Dua varian pilihan kamu, masing-masing 200g. Pilih kombinasimu sendiri — biji atau bubuk, sesuai preferensi.',
    roast: 'medium',
    type: 'blend',
    sizes: [
      { weight: '200g', price: 140000 },
    ],
    oldPrice: 160000,
    image: '/images/bundle-duo.jpg',
    isBundle: true,
  },
]

export const allProducts = [...products, ...bundles]
