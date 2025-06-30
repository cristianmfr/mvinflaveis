import { ProductCard } from '@/components/features/products/product-card'
import { ProductDetails } from '@/components/features/products/product-details'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { db } from '@/database'

export default function Product() {
  return (
    <div className="flex flex-col w-full gap-2">
      <ProductDetails id={1} />
      <div className="flex flex-col items-center justify-center w-full p-8 gap-8">
        <Separator />
        <Label className="font-bold text-xl mt-4 text-primary">
          Mais Produtos
        </Label>
        <div className="grid grid-cols-4 gap-4">
          {db.products
            .filter((item) => item.id <= 4)
            .map((product, i) => (
              <ProductCard key={i} name={product.name} image={product.image} />
            ))}
        </div>
        <Button className="hover:scale-110 transition duration-400 rounded-[10px] mt-4">
          Ver mais produtos
        </Button>
      </div>
    </div>
  )
}
