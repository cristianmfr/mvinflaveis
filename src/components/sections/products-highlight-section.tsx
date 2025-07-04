import { db } from '@/database'
import { ProductCard } from '../features/products/product-card'
import { Label } from '../ui/label'
import { Button } from '../ui/button'
import Link from 'next/link'

export function ProductsHighlightSection() {
  return (
    <div className="flex w-full flex-col items-center justify-center mb-8">
      <Label className="font-medium text-md mt-4 tracking-tight">
        Conheça nossa linha de produtos
      </Label>
      <Label className="font-black text-3xl text-primary tracking-tight">
        Compre direto do fabricante!
      </Label>
      <Label className="font-medium text-md text-secondary mt-2 max-w-sm text-center leading-4 tracking-tight">
        Produtos com alta durabilidade, qualidade garantida e o melhor preço do
        mercado.
      </Label>
      <div className="flex flex-col items-center justify-center w-full p-8">
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
      </div>
      <Button
        className="hover:scale-110 transition duration-400 w-[24rem] h-11 text-sm"
        asChild
      >
        <Link href="products"> Ver todos</Link>
      </Button>
    </div>
  )
}
