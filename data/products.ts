export type Product = {
  id: string
  category: string
  subcategory?: string
  name: string
  price: number
  oldPrice?: number
  origin: string
  roast: 'light' | 'medium' | 'dark'
  type: 'arabika' | 'robusta' | 'blend'
  description: string
  image: string
}

export const products: Product[] = [
  {
    id: '1',
    category: 'TORAJA',
    name: 'Toraja Arabika',
    price: 75000,
    origin: 'Sulawesi',
    roast: 'medium',
    type: 'arabika',
    description: 'Fruity, cokelat, dan sedikit rempah khas Toraja.',
    image: 'https://placehold.co/400x533/3B1F0E/F5ECD7?text=Toraja',
  },
  {
    id: '2',
    category: 'GAYO',
    subcategory: 'DARK ROAST',
    name: 'Gayo Aceh Dark',
    price: 80000,
    origin: 'Aceh',
    roast: 'dark',
    type: 'arabika',
    description: 'Bold, smoky, dan full body dari dataran tinggi Gayo.',
    image: 'https://placehold.co/400x533/4A2512/F5ECD7?text=Gayo',
  },
  {
    id: '3',
    category: 'BUNDLE',
    subcategory: 'HEMAT',
    name: 'Paket Nusantara',
    price: 180000,
    oldPrice: 220000,
    origin: 'Indonesia',
    roast: 'medium',
    type: 'blend',
    description: 'Koleksi 3 kopi terbaik Nusantara dalam satu paket.',
    image: 'https://placehold.co/400x533/2C1A0A/F5ECD7?text=Bundle',
  },
  {
    id: '4',
    category: 'FLORES',
    subcategory: 'LIGHT ROAST',
    name: 'Flores Bajawa',
    price: 85000,
    origin: 'NTT',
    roast: 'light',
    type: 'arabika',
    description: 'Floral, cerah, dan sweet aftertaste khas Bajawa.',
    image: 'https://placehold.co/400x533/5C2E10/F5ECD7?text=Flores',
  },
  {
    id: '5',
    category: 'JAVA',
    name: 'Java Robusta',
    price: 60000,
    origin: 'Jawa Timur',
    roast: 'medium',
    type: 'robusta',
    description: 'Earthy, bold, dan cocok untuk espresso.',
    image: 'https://placehold.co/400x533/3B1F0E/F5ECD7?text=Java',
  },
  {
    id: '6',
    category: 'BALI',
    subcategory: 'MEDIUM',
    name: 'Bali Kintamani',
    price: 90000,
    origin: 'Bali',
    roast: 'medium',
    type: 'arabika',
    description: 'Citrusy, clean, dan bright dari lereng Gunung Batur.',
    image: 'https://placehold.co/400x533/4A2512/F5ECD7?text=Bali',
  },
  {
    id: '7',
    category: 'BLEND',
    name: 'Sumatra House Blend',
    price: 70000,
    oldPrice: 85000,
    origin: 'Sumatera',
    roast: 'medium',
    type: 'blend',
    description: 'Balanced, smooth, dan cocok untuk semua metode seduh.',
    image: 'https://placehold.co/400x533/2C1A0A/F5ECD7?text=Blend',
  },
]
