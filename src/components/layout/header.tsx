'use client'

import { useId } from 'react'
import {
  IconAirBalloon,
  IconBuildingBridge2,
  IconCylinder,
  IconFlag2,
  IconTent,
  IconViewportWide,
  IconZeppelin,
  IconRosetteDiscountCheck,
  IconBrandWhatsappFilled,
  IconBrandFacebook,
  IconBrandInstagramFilled,
  IconBrandLinkedin,
  IconBrandYoutubeFilled,
} from '@tabler/icons-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { Phone } from 'lucide-react'

const navigationLinks = [
  {
    icon: IconViewportWide,
    label: 'Portal',
    href: '#',
    image: '/assets/images/portal.jpeg',
  },
  {
    icon: IconAirBalloon,
    label: 'Réplica',
    href: '#',
    image: '/assets/images/replica.jpeg',
  },
  {
    icon: IconZeppelin,
    label: 'Roof Top',
    href: '#',
    image: '/assets/images/rooftop.jpeg',
  },

  {
    icon: IconTent,
    label: 'Tenda',
    href: '#',
    image: '/assets/images/kits.jpeg',
  },
  {
    icon: IconCylinder,
    label: 'Totem',
    href: '#',
    image: '/assets/images/totem.jpeg',
  },
  {
    icon: IconBuildingBridge2,
    label: 'Túnel',
    href: '#',
    image: '/assets/images/tunel.jpeg',
  },
  {
    icon: IconFlag2,
    label: 'Wind Banner',
    href: '#',
    image: '/assets/images/wind.jpeg',
  },
  {
    icon: IconRosetteDiscountCheck,
    label: 'Kit Sucesso',
    href: '#',
    image: '/assets/images/kits.jpeg',
  },
]

export function Header() {
  const id = useId()

  const links = [
    { label: 'Catálogo', url: '#' },
    { label: 'Quem somos', url: '#' },
    { label: 'Manuais', url: '#' },
    { label: 'Blog', url: '#' },
    { label: 'Dúvidas', url: '#' },
    { label: 'Contato', url: '#' },
    { label: 'Trabalhe conosco', url: '#' },
    { label: 'Agências e franquias', url: '#' },
  ]

  return (
    <header className="border-b">
      <div className="grid grid-cols-5 w-full h-10 bg-primary font-medium">
        <div className="col-span-4 flex items-center justify-center gap-4">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              className="px-6 py-2 bg-transparent text-white font-medium uppercase transform text-xs hover:-translate-x-1 transition duration-400"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center justify-center gap-2">
          <a href="#" className="hover:-translate-x-1 transition duration-400">
            <IconBrandFacebook fill="#fff" strokeWidth={0} />
          </a>
          <a href="#" className="hover:-translate-x-1 transition duration-400">
            <IconBrandInstagramFilled className="text-white" />
          </a>
          <a href="#" className="hover:-translate-x-1 transition duration-400">
            <IconBrandLinkedin className="text-white" />
          </a>
          <a href="#" className="hover:-translate-x-1 transition duration-400">
            <IconBrandYoutubeFilled className="text-white" />
          </a>
        </div>
      </div>
      <div className="grid grid-cols-12 w-full p-8">
        <div className="col-span-2 flex flex-1 items-start gap-2">
          <div className="flex items-center justify-center w-full h-full">
            <a
              href="/"
              className="text-primary hover:text-primary/90 hover:scale-105 transition duration-400"
            >
              <img
                src="/logo-text-color.png"
                alt="logo"
                className="w-[18rem]"
              />
            </a>
          </div>
        </div>
        <div className="col-span-8 flex flex-col items-center justify-center gap-2 w-full">
          <div className="grid grid-cols-2 w-[32rem] gap-6">
            <div className="col-span-2 w-full">
              <div className="flex w-full items-center">
                <Input
                  id={id}
                  placeholder="Pesquisar..."
                  type="search"
                  className="rounded-r-none border-r-none"
                />
                <Button className="rounded-l-none text-xs font-semibold">
                  Pesquisar
                </Button>
              </div>
            </div>
            <div className="cursor-pointer flex items-center w-full h-full gap-4 pl-4 transform text-xs hover:scale-110 transition duration-400">
              <div className="flex flex-col items-center justify-center size-8 text-white rounded-full bg-primary">
                <Phone fill="#fff" strokeWidth={0} className="size-4" />
              </div>
              <div className="flex flex-col">
                <span className="uppercase text-xs font-semibold text-muted-foreground">
                  Fale Conosco
                </span>
                <span className="font-bold text-xs text-primary">
                  (62) 99816-2387
                </span>
              </div>
            </div>
            <div className="cursor-pointer flex items-center justify-end w-full h-full gap-4 pr-4 transform text-xs hover:scale-110 transition duration-400">
              <div className="flex flex-col items-center justify-center size-8 text-white rounded-full bg-primary">
                <IconBrandWhatsappFilled className="size-4" />
              </div>
              <div className="flex flex-col">
                <span className="uppercase text-xs font-semibold text-muted-foreground">
                  WhatsApp
                </span>
                <span className="font-bold text-xs text-primary">
                  (62) 4103-3521
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 flex flex-1 items-start justify-end gap-6">
          <Button className="transform text-xs hover:scale-110 transition duration-400 w-[18rem]">
            Orçamento Rápido
          </Button>
          <Button
            variant="outline"
            className="transform text-xs hover:scale-110 transition duration-400 w-[10rem]"
          >
            Simulador
          </Button>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center w-full h-12 p-2 border-t">
        <NavigationMenu className="w-full">
          <NavigationMenuList className="gap-24">
            {navigationLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    href={link.href}
                    className="text-foreground hover:text-white hover:bg-blue-800/50 [&_svg]:hover:text-white flex-row items-center gap-2 py-1.5 font-medium transform text-sm hover:scale-110 transition duration-400"
                  >
                    <Icon size={22} aria-hidden="true" />
                    <span>{link.label}</span>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}
