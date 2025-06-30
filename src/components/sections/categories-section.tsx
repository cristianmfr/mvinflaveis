'use client'

import {
  IconAirBalloon,
  IconBuildingBridge2,
  IconCylinder,
  IconFlag2,
  IconTent,
  IconViewportWide,
  IconZeppelin,
  IconRosetteDiscountCheck,
  IconTagsFilled,
} from '@tabler/icons-react'
import { Button } from '../ui/button'

export function CategoriesSection() {
  const categories = [
    {
      icon: IconViewportWide,
      label: 'Portal',
      href: '#',
    },
    {
      icon: IconAirBalloon,
      label: 'Réplica',
      href: '#',
    },
    {
      icon: IconZeppelin,
      label: 'Roof Top',
      href: '#',
    },

    {
      icon: IconTent,
      label: 'Tenda',
      href: '#',
    },
    {
      icon: IconCylinder,
      label: 'Totem',
      href: '#',
    },
    {
      icon: IconBuildingBridge2,
      label: 'Túnel',
      href: '#',
    },
    {
      icon: IconFlag2,
      label: 'Wind',
      href: '#',
    },
    {
      icon: IconRosetteDiscountCheck,
      label: 'Kits',
      href: '#',
    },
  ]

  return (
    <div className="flex flex-col items-center justify-center w-full gap-4 bg-[url('/bg-categories.png')] bg-cover bg-center h-[615px] -mt-12 z-10">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex items-center justify-center text-primary mb-2">
          <IconTagsFilled stroke={2} className="size-16" />
        </div>
        <span className="text-lg font-semibold tracking-tight">
          Oferecemos as melhores soluções publicitárias em
        </span>
        <span className="text-2xl font-bold text-primary -mb-1">
          Mídias não tradicionais de alta identificação
        </span>
        <span className="text-xl font-bold text-[#de2c70]">
          para a sua empresa, produto ou evento!
        </span>
      </div>
      <div className="col-span-4 flex items-center justify-center gap-4 mt-4">
        {categories.map((link, i) => (
          <a
            key={i}
            className="cursor-pointer [&_svg]:size-10 text-primary hover:text-[#de2c70] hover:bg-[#de2c70]/10 rounded-[10px] flex flex-col gap-2 items-center justify-center size-22 bg-transparent font-medium transform text-xs hover:-translate-y-1 transition duration-400"
          >
            {link.icon && <link.icon strokeWidth={2} />}
            <span data-slot="label" className="text-lg font-bold">
              {link.label}
            </span>
          </a>
        ))}
      </div>
      <Button className="hover:scale-110 transition duration-400 rounded-[10px] mt-4 w-[18rem]">
        Ver todos produtos
      </Button>
    </div>
  )
}
