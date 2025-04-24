'use client'

import React from 'react'
import { InfiniteMovingCards } from '@/components/templates/infinite-moving-cards'

export type TestimonialsData = {
    quote: string
    name: string
    title: string
}

interface TestimonialsProps {
    data: TestimonialsData[]
}

export function Testimonials({ data }: TestimonialsProps) {
    return (
        <div className='h-[30rem] rounded-md flex flex-col antialiased bg-white dark:bg-transparent dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden'>
            <InfiniteMovingCards items={data} direction='right' speed='slow' />
        </div>
    )
}
