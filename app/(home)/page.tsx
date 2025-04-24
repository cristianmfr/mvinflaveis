import { Contact } from '@/components/organisms/contact'
import { Faq, FaqItemData } from '@/components/organisms/faq'
import { Header } from '@/components/organisms/header'
import { Hero } from '@/components/organisms/hero'
import { Highlight, HighlightData } from '@/components/organisms/highlight'
import { Products } from '@/components/organisms/products'
import {
    Testimonials,
    TestimonialsData,
} from '@/components/organisms/testimonials'
import { siteLabels } from '@/registry/translations/pt-br'
import { DollarSignIcon, HeartPlusIcon, ZapIcon } from 'lucide-react'

export default function Home() {
    const highlightData: HighlightData[] = [
        {
            label: siteLabels.home.highlights.delivery,
            icon: ZapIcon,
        },
        {
            label: siteLabels.home.highlights.payment,
            icon: DollarSignIcon,
        },
        {
            label: siteLabels.home.highlights.support,
            icon: HeartPlusIcon,
        },
    ]

    const testimonialsData: TestimonialsData[] = [
        {
            quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            name: 'Charles Dickens',
            title: 'A Tale of Two Cities',
        },
        {
            quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            name: 'William Shakespeare',
            title: 'Hamlet',
        },
        {
            quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            name: 'Edgar Allan Poe',
            title: 'A Dream Within a Dream',
        },
        {
            quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            name: 'Jane Austen',
            title: 'Pride and Prejudice',
        },
        {
            quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            name: 'Herman Melville',
            title: 'Moby-Dick',
        },
    ]

    const faqData: FaqItemData[] = [
        {
            title: 'Como funciona o processo de compra?',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
            title: 'Quais são as formas de pagamento aceitas?',
            content:
                'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            title: 'Qual é o prazo de entrega?',
            content:
                'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
        },
    ]

    return (
        <main className='flex min-h-screen w-full flex-col items-center justify-between py-4'>
            <Header />
            <Hero
                title={siteLabels.home.hero.heading}
                contrast={siteLabels.home.hero.contrast}
                subtitle={siteLabels.home.hero.subheading}
            />
            <Highlight data={highlightData} />
            <Testimonials data={testimonialsData} />
            <Products />
            <Faq data={faqData} />
            <Contact />
        </main>
    )
}
