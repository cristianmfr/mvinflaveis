import {
  IconBoltFilled,
  IconCoinFilled,
  IconHeartFilled,
} from '@tabler/icons-react'

export type HighlightData = {
  label: string
  icon: React.ReactNode
}

interface HighlightProps {
  data: HighlightData[]
}

export function Highlight({ data }: HighlightProps) {
  return (
    <div className="flex items-center justify-center w-full h-28 bg-gradient-to-bl from-primary to-[#223067]">
      <div className="flex flex-wrap gap-y-4 justify-center gap-x-16 px-8">
        {data.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 justify-center [&_svg]:text-white [&_svg]:size-6"
          >
            {item.icon}
            <span className="text-white text-xl font-semibold">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function HighlightsSection() {
  const highlightData: HighlightData[] = [
    {
      label: 'Entrega em todo o território nacional',
      icon: <IconBoltFilled />,
    },
    {
      label: 'Suporte em todo o processo',
      icon: <IconCoinFilled />,
    },
    {
      label: 'Condições especiais de pagamento',
      icon: <IconHeartFilled />,
    },
  ]

  return <Highlight data={highlightData} />
}
