'use client'
import Image from 'next/image'
import React from 'react'
import { Carousel, Card } from '@/components/templates/cards-carousel'
import { TextGenerateEffect } from '../templates/text-generate-effect'

export function Products() {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    ))

    return (
        <div className='w-full h-full -mt-6'>
            <TextGenerateEffect />
            <Carousel items={cards} />
        </div>
    )
}

const DummyContent = ({ image }: { image: string }) => {
    return (
        <>
            {[...new Array(1).fill(1)].map((_, index) => {
                return (
                    <div
                        key={'dummy-content' + index}
                        className='bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4'
                    >
                        <p className='text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto'>
                            <span className='font-bold text-neutral-700 dark:text-neutral-200'>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </span>{' '}
                            Sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </p>
                        <Image
                            src={image}
                            alt='placeholder'
                            height='500'
                            width='500'
                            className='md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-lg mt-8'
                        />
                    </div>
                )
            })}
        </>
    )
}

const data = [
    {
        category: 'Inflável',
        title: 'Portal',
        src: '/assets/images/portal.jpeg',
        content: <DummyContent image='/assets/images/portal.jpeg' />,
    },
    {
        category: 'Inflável',
        title: 'Réplica',
        src: '/assets/images/replica.jpeg',
        content: <DummyContent image='/assets/images/replica.jpeg' />,
    },
    {
        category: 'Inflável',
        title: 'Roof Top',
        src: '/assets/images/rooftop.jpeg',
        content: <DummyContent image='/assets/images/rooftop.jpeg' />,
    },

    {
        category: 'Inflável',
        title: 'Tenda',
        src: '/assets/images/kits.jpeg',
        content: <DummyContent image='/assets/images/kits.jpeg' />,
    },
    {
        category: 'Inflável',
        title: 'Totem',
        src: '/assets/images/totem.jpeg',
        content: <DummyContent image='/assets/images/portal.jpeg' />,
    },
    {
        category: 'Inflável',
        title: 'Túnel',
        src: '/assets/images/tunel.jpeg',
        content: <DummyContent image='/assets/images/tunel.jpeg' />,
    },
    {
        category: 'Inflável',
        title: 'Wind Banner',
        src: '/assets/images/wind.jpeg',
        content: <DummyContent image='/assets/images/wind.jpeg' />,
    },
    {
        category: 'Inflável',
        title: 'Kit Sucesso',
        src: '/assets/images/kits.jpeg',
        content: <DummyContent image='/assets/images/kits.jpeg' />,
    },
]
