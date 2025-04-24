import './globals.css'

import type { Metadata } from 'next'
import { Geist, Bricolage_Grotesque, Geist_Mono } from 'next/font/google'

import { ThemeProvider } from '@/providers/theme-provider'
import { cn } from '@/lib/cn'
import { Footer } from '@/components/organisms/footer'

const fontSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const fontMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

const fontHeading = Bricolage_Grotesque({
    variable: '--font-heading',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Início | MV Infláveis',
    description:
        'MV Infláveis: especialistas em infláveis personalizados de alta qualidade para eventos, festas e ações de marketing promocional. Fabricamos réplicas infláveis, roof tops, tendas publicitárias, totens promocionais, túneis infláveis e wind banners com materiais premium e design exclusivo. Atendemos todo o Brasil com soluções sob medida para empresas, agências de publicidade e organizadores de eventos. Destaque sua marca com produtos infláveis duráveis, chamativos e personalizados conforme sua necessidade. Solicite um orçamento e transforme sua comunicação visual com os melhores infláveis publicitários do mercado.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en' suppressHydrationWarning>
            <body
                className={cn(
                    'min-h-screen font-sans antialiased',
                    fontSans.variable,
                    fontHeading.variable,
                    fontMono.variable
                )}
            >
                <ThemeProvider
                    attribute='class'
                    defaultTheme='system'
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    )
}
