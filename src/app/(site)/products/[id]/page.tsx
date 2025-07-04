import { ProductCard } from '@/components/features/products/product-card'
import { ProductDetails } from '@/components/features/products/product-details'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { db } from '@/database'

export default async function Product({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const productId = (await params).id

  const product = db.products.find(
    (_, index) => (index + 1).toString() === productId
  )

  if (!product) {
    return null
  }

  return (
    <div className="flex flex-col w-full gap-2">
      <ProductDetails id={Number(productId)} />
      <div className="flex flex-col items-center justify-center w-full p-8 gap-8">
        <Separator />
        <Label className="font-bold text-xl mt-4 text-primary">
          Mais Produtos
        </Label>
        <div className="grid grid-cols-4 gap-4">
          {db.products
            .filter((item) => item.id <= 4)
            .map((product, i) => (
              <ProductCard
                key={i}
                id={product.id.toString()}
                name={product.name}
                image={product.image}
              />
            ))}
        </div>
        <Button className="hover:scale-110 transition duration-400 rounded-[10px] mt-4">
          Ver mais produtos
        </Button>
      </div>
    </div>
  )
}
