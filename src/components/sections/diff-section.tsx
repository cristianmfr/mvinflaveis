'use client'

import {
  IconBuildingFactory2,
  IconCalendarCheck,
  IconClockHour10Filled,
  IconCoinFilled,
  IconRosetteDiscountCheckFilled,
  IconTruckFilled,
} from '@tabler/icons-react'
import React from 'react'

export function DiffSection() {
  const videoUrl =
    'https://pub-0c43a5b91b2c48b3a54b09c43b3d0b19.r2.dev/Inflatable_Ad_Video_Creation_Complete.mp4'

  const diferentials = [
    {
      icon: <IconRosetteDiscountCheckFilled />,
      content: 'Materiais e equipamentos de alta qualidade',
    },
    {
      icon: <IconTruckFilled />,
      content: 'Entregamos para todo o Brasil',
    },
    {
      icon: <IconCoinFilled />,
      content: 'Temos o melhor custo-benefício do mercado',
    },
    {
      icon: <IconBuildingFactory2 />,
      content: 'Mais de 4.000 modelos fabricados e instalados',
    },
    {
      icon: <IconClockHour10Filled />,
      content:
        'A MV Infláveis é empresa pioneira no mercado de fabricação de windbanners',
    },
    {
      icon: <IconCalendarCheck />,
      content:
        'Grande experiência no comércio de infláveis, atuante no mercado desde 2012',
    },
  ]

  return (
    <div className="relative min-h-screen bg-primary overflow-hidden flex items-center justify-center">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-90"
        src={videoUrl}
        autoPlay
        loop
        muted
        playsInline
        onError={(e) => console.error('Video failed to load:', e)}
      ></video>
      <div className="relative z-10 flex flex-col items-center justify-center text-center p-8 bg-primary/50 backdrop-blur-md bg-opacity-50 rounded-2xl shadow-lg m-4 sm:p-12 md:p-16">
        <h1 className="text-4xl font-black text-secondary mb-6">
          MV Infláveis
        </h1>
        <span className="text-xl font-bold text-white mb-16">
          Sua Parceira em Wind Banners e Infláveis
        </span>
        <div className="grid grid-cols-6 gap-8">
          {diferentials.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-start w-full [&_svg]:text-white [&_svg]:size-12 gap-6"
            >
              {item.icon}
              <p className="text-gray-200 mb-8 max-w-2xl text-sm">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75 z-0"></div>
    </div>
  )
}
