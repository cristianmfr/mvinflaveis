'use client'

import { SendContactModal } from '@/components/modals/send-contact-modal'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { IconBrandWhatsappFilled } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'

export type ProductItem = {
  id: string
  name: string
  image: string
}

export function ProductCard({ id, name, image }: ProductItem) {
  const router = useRouter()

  return (
    <Card className="hover:border-primary/30 transition ease-in w-[22rem] hover:scale-105">
      <CardContent>
        <div className="flex flex-col w-full">
          <div className="flex flex-col gap-2 truncate text-ellipsis mb-4 items-center">
            <Label className="text-lg font-black subpixel-antialiased tracking-widest uppercase text-primary">
              {name}
            </Label>
          </div>
          <div className="bg-white/10 w-full overflow-hidden cursor-pointer">
            <img src={image} alt={name} className="rounded-lg rounded-b-none" />
          </div>
          <div className="flex flex-col w-full gap-2">
            <div className="w-full grid grid-cols-3">
              <Button
                onClick={() => router.push(`/products/${id}`)}
                className="w-full bg-[#ff8000] hover:bg-[#ff5e00] transition ease-in rounded-none rounded-bl-md h-10"
              >
                Detalhes
              </Button>
              <SendContactModal />
            </div>
          </div>
          <div className="flex flex-col w-full gap-2 mt-2">
            <Button className="w-full bg-green-600 transition ease-in">
              <IconBrandWhatsappFilled />
              Comprar agora
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
