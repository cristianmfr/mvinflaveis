import { ProductCard } from '@/components/features/products/product-card'
import { Label } from '@/components/ui/label'
import { db } from '@/database'

export default function Products() {
  return (
    <div className="flex flex-1 flex-col w-full antialiased gap-8 p-8">
      <div className="flex flex-col w-full">
        <Label className="font-bold text-2xl mt-4 text-primary">
          Nossos Produtos
        </Label>
      </div>
      <div className="grid grid-cols-4 gap-8">
        {db.products.map((product, i) => (
          <ProductCard key={i} name={product.name} image={product.image} />
        ))}
      </div>
    </div>
  )
}
