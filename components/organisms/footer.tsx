import Image from 'next/image'
import LogoWhite from '@/assets/brand/logo-white.svg'
import { Button } from '../atoms/button'

import InstagramIcon from '@/assets/icons/instagram-icon.svg'
import FacebookIcon from '@/assets/icons/facebook-icon.svg'
import LinkedInIcon from '@/assets/icons/linkedin-icon.svg'
import WhatsAppIcon from '@/assets/icons/whatsapp-icon.svg'
import { Label } from '../atoms/label'

export function Footer() {
    return (
        <footer className='grid grid-cols-4 w-full h-[300px] border-border border-t bg-card'>
            <div className='flex flex-col items-center justify-start py-8 w-full h-full gap-2'>
                <div className='flex items-center gap-2'>
                    <Image src={LogoWhite} alt='MV_LOGO' className='size-12' />
                    <div className='flex flex-col w-full items-start justify-start'>
                        <Label className='text-md font-bold font-heading'>
                            MV Infláveis
                        </Label>
                        <Label className='text-xs font-light font-heading text-muted-foreground'>
                            Soluções personalizadas
                        </Label>
                    </div>
                </div>
                <div className='flex items-center gap-2 justify-center w-full'>
                    <Button size='icon' className='rounded-sm'>
                        <Image
                            src={InstagramIcon}
                            alt='INSTAGRAM'
                            className='size-4'
                        />
                    </Button>
                    <Button size='icon' className='rounded-sm'>
                        <Image
                            src={FacebookIcon}
                            alt='FACEBOOK'
                            className='size-4'
                        />
                    </Button>
                    <Button size='icon' className='rounded-sm'>
                        <Image
                            src={LinkedInIcon}
                            alt='LINKEDIN'
                            className='size-4'
                        />
                    </Button>
                    <Button size='icon' className='rounded-sm'>
                        <Image
                            src={WhatsAppIcon}
                            alt='WHATSAPP'
                            className='size-4'
                        />
                    </Button>
                </div>
            </div>
            <div className='flex flex-col items-start justify-start py-8 w-full h-full gap-2'>
                <Label className='font-bold font-heading text-white text-sm'>
                    Institucional
                </Label>
                <div className='flex flex-col gap-2'>
                    <a href='#' className='text-xs hover:underline'>
                        Sobre nós
                    </a>
                    <a href='#' className='text-xs hover:underline'>
                        Fale conosco
                    </a>
                </div>
            </div>
            <div className='flex flex-col items-start justify-start py-8 w-full h-full gap-2'>
                <Label className='font-bold font-heading text-white text-sm'>
                    Nossos Produtos
                </Label>
                <div className='flex flex-col gap-2'>
                    <a href='#' className='text-xs hover:underline'>
                        Todos os produtos
                    </a>
                    <a href='#' className='text-xs hover:underline'>
                        Soluções personalizadas
                    </a>
                    <a href='#' className='text-xs hover:underline'>
                        Simulador
                    </a>
                </div>
            </div>
            <div className='flex flex-col items-start justify-start py-8 w-full h-full gap-2'>
                <Label className='font-bold font-heading text-white text-sm'>
                    Ajuda
                </Label>
                <div className='flex flex-col gap-2'>
                    <a href='#' className='text-xs hover:underline'>
                        Perguntas frequentes
                    </a>
                    <a href='#' className='text-xs hover:underline'>
                        Envie sua dúvida
                    </a>
                    <a href='#' className='text-xs hover:underline'>
                        Atendimento
                    </a>
                </div>
            </div>
            <div className='col-span-4 w-full flex items-center justify-center'>
                <p className='text-xs font-light text-muted-foreground'>
                    2025 © MV Infláveis LTDA - CNPJ: 10.268.280/0001-77
                </p>
            </div>
        </footer>
    )
}
