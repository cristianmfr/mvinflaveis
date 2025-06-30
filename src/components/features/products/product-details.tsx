import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { db } from '@/database'

export function ProductDetails({ id }: { id: number }) {
  const product = db.products.find((item) => item.id === id)

  return (
    <div className="grid grid-cols-12 w-full h-full gap-4 p-8">
      <div className="col-span-5 col-start-2 flex flex-col w-full h-full gap-4 bg-accent/20 border p-6 rounded-xl">
        <div className="w-full h-auto aspect-square rounded-xl bg-muted-foreground/20 overflow-hidden">
          <img src={product?.image} alt="img" className="w-full h-full" />
        </div>
      </div>
      <div className="col-span-5 flex flex-col w-full h-full gap-4 px-6 rounded-xl">
        <div className="flex flex-col w-full gap-4">
          <div className="flex items-center justify-between w-full">
            <Label className="text-lg font-bold">{product?.name}</Label>
          </div>
          <div className="flex flex-col w-full gap-4">
            <Label className="text-sm text-muted-foreground">
              {product?.description}
            </Label>
            <div className="grid grid-cols-2 items-center w-full">
              <Button className="w-full rounded-r-none">Comprar agora</Button>
              <Button className="w-full rounded-l-none" variant="secondary">
                Ir para simulador
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
