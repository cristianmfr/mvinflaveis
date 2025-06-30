import { IconCalendarEventFilled } from '@tabler/icons-react'
import { Button } from '../ui/button'

export function EventsSection() {
  const events = [
    { id: 1, image: '/events/1.png' },
    { id: 2, image: '/events/2.png' },
    { id: 3, image: '/events/3.png' },
    { id: 4, image: '/events/4.png' },
    { id: 5, image: '/events/5.png' },
  ]

  return (
    <div className="flex flex-col w-full items-center justify-center py-12 bg-gradient-to-br from-primary/90 to-primary">
      <span className="flex flex-col items-center justify-center text-xl text-white font-bold mb-6">
        <IconCalendarEventFilled stroke={2} className="size-8" />
        Eventos
      </span>
      <div className="grid grid-cols-5 gap-4 px-4">
        {events.map((item, i) => (
          <div
            key={i}
            className="aspect-square overflow-hidden object-cover rounded-lg cursor-pointer border-4 hover:brightness-50 hover:scale-105 transition duration-400"
          >
            <img src={item.image} alt="evento" />
          </div>
        ))}
      </div>
      <Button className="rounded-[10px] bg-[#de2c70] hover:bg-[#de2c70]/90 mt-12 hover:scale-110 transition duration-400">
        Ver mais postagens
      </Button>
    </div>
  )
}
