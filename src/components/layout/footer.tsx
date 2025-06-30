'use client'

import Image from 'next/image'
import { Button } from '../ui/button'
import { Label } from '../ui/label'

export function Footer() {
  return (
    <footer>
      <div className="grid grid-cols-4 w-full bg-primary/5 border-primary h-[16rem]">
        <div className="flex flex-col items-center justify-start py-8 w-full h-full gap-4">
          <div className="flex items-center gap-2">
            <div className="flex flex-col w-full items-start justify-start">
              <Image
                src="/logo-text-color.png"
                alt="logo"
                width={150}
                height={100}
              />
            </div>
          </div>
          <div className="flex items-center gap-2 justify-center w-full">
            <Button
              size="icon"
              className="hover:scale-120 transition duration-400"
            >
              <Image
                src="/icons/instagram-icon.svg"
                alt="INSTAGRAM"
                className="size-4"
              />
            </Button>
            <Button
              size="icon"
              className="hover:scale-120 transition duration-400"
            >
              <Image
                src="/icons/facebook-icon.svg"
                alt="FACEBOOK"
                className="size-4"
              />
            </Button>
            <Button
              size="icon"
              className="hover:scale-120 transition duration-400"
            >
              <Image
                src="/icons/linkedin-icon.svg"
                alt="LINKEDIN"
                className="size-4"
              />
            </Button>
            <Button
              size="icon"
              className="hover:scale-120 transition duration-400"
            >
              <Image
                src="/icons/whatsapp-icon.svg"
                alt="WHATSAPP"
                className="size-4"
              />
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start py-8 w-full h-full gap-2">
          <Label className="font-bold font-heading text-primary text-sm">
            Institucional
          </Label>
          <div className="flex flex-col gap-2">
            <a href="#" className="text-xs hover:underline">
              Sobre nós
            </a>
            <a href="#" className="text-xs hover:underline">
              Fale conosco
            </a>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start py-8 w-full h-full gap-2">
          <Label className="font-bold font-heading text-primary text-sm">
            Nossos Produtos
          </Label>
          <div className="flex flex-col gap-2">
            <a href="#" className="text-xs hover:underline">
              Todos os produtos
            </a>
            <a href="#" className="text-xs hover:underline">
              Soluções personalizadas
            </a>
            <a href="#" className="text-xs hover:underline">
              Simulador
            </a>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start py-8 w-full h-full gap-2">
          <Label className="font-bold font-heading text-primary text-sm">
            Ajuda
          </Label>
          <div className="flex flex-col gap-2">
            <a href="#" className="text-xs hover:underline">
              Perguntas frequentes
            </a>
            <a href="#" className="text-xs hover:underline">
              Envie sua dúvida
            </a>
            <a href="#" className="text-xs hover:underline">
              Atendimento
            </a>
          </div>
        </div>
      </div>
      <div className="col-span-4 w-full flex items-center justify-center bg-primary h-8 text-white">
        <p className="text-xs font-semibold">
          2025 © MV Infláveis LTDA - CNPJ: 10.268.280/0001-77
        </p>
      </div>
    </footer>
  )
}
