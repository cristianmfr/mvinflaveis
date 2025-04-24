'use client'

import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from '@/components/templates/navbar'
import { useState } from 'react'

export function Header() {
    const navItems = [
        {
            name: 'Início',
            link: '#',
        },
        {
            name: 'Produtos',
            link: '#',
        },
        {
            name: 'Sobre nós',
            link: '#',
        },
        {
            name: 'Contato',
            link: '#',
        },
    ]

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <header className='fixed w-full z-100'>
            <Navbar>
                <NavBody>
                    <NavbarLogo />
                    <NavItems items={navItems} />
                    <div className='flex items-center gap-4'>
                        <NavbarButton variant='primary'>Simulador</NavbarButton>
                    </div>
                </NavBody>
                <MobileNav>
                    <MobileNavHeader>
                        <NavbarLogo />
                        <MobileNavToggle
                            isOpen={isMobileMenuOpen}
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                        />
                    </MobileNavHeader>
                    <MobileNavMenu isOpen={isMobileMenuOpen}>
                        {navItems.map((item, idx) => (
                            <a
                                key={`mobile-link-${idx}`}
                                href={item.link}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className='relative text-neutral-600 dark:text-neutral-300'
                            >
                                <span className='block'>{item.name}</span>
                            </a>
                        ))}
                        <div className='flex w-full flex-col gap-4'>
                            <NavbarButton
                                onClick={() => setIsMobileMenuOpen(false)}
                                variant='primary'
                                className='w-full'
                            >
                                Simulador
                            </NavbarButton>
                        </div>
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>
        </header>
    )
}
