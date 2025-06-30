import * as React from 'react'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { db } from '@/database'

export function TestimonialsSection() {
  const testimonials = db.testimonials

  return (
    <div className="flex flex-col w-full px-24 mt-12">
      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full"
      >
        <CarouselContent className="px-6">
          {testimonials.map((item, i) => (
            <CarouselItem key={i} className="pl-1 md:basis-1/2 lg:basis-1/4">
              <Card className="h-[10rem] border-primary">
                <CardContent>
                  <div className="flex flex-col gap-2 text-primary">
                    <span className="text-md font-black">{item.customer}</span>
                    <p className="text-[14px] font-medium">"{item.content}"</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
