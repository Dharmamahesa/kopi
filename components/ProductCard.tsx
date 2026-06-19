import { type Product } from '@/data/products'

type ProductCardProps = {
  product: Product
  index?: number
  isVisible?: boolean
  fullWidth?: boolean
}

function formatPrice(price: number): string {
  return `Rp ${price.toLocaleString('id-ID')}`
}

export default function ProductCard({
  product,
  index = 0,
  isVisible = true,
  fullWidth = false,
}: ProductCardProps) {
  return (
    <div
      className={`border border-[#E8DDD0] bg-white transition-all duration-500 ${
        !fullWidth ? 'min-w-[260px] sm:min-w-[280px] lg:min-w-0 lg:w-[calc(25%-1px)] -ml-[1px] first:ml-0' : ''
      } ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
      style={{
        transitionDelay: isVisible ? `${200 + index * 80}ms` : '0ms',
      }}
    >
      {/* Category label */}
      <div className="px-4 h-12 flex flex-col justify-center">
        <span className="text-xs font-medium tracking-wider uppercase text-[#C17A3B]">
          {product.category}
        </span>
        {product.subcategory && (
          <span className="text-xs text-gray-500 mt-0.5">{product.subcategory}</span>
        )}
      </div>

      {/* Image */}
      <div className="mx-4 aspect-[3/4] rounded-lg overflow-hidden bg-[#F5ECD7] group">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Product info */}
      <div className="p-4 text-center">
        <h3 className="text-sm font-medium text-[#1A1A1A] mb-2">{product.name}</h3>
        <div className="flex items-center justify-center gap-2">
          <span className="text-sm font-semibold text-[#3B1F0E]">
            {formatPrice(product.price)}
          </span>
          {product.oldPrice && (
            <span className="text-xs text-gray-400 line-through">
              {formatPrice(product.oldPrice)}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
