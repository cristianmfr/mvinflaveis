import { InfiniteMovingCards } from '../animations/inifinite-moving-cards'

export function CustomersSection() {
  const customers = [
    {
      id: 1,
      name: 'SEST',
      image: '/customers/sest.png',
    },
    {
      id: 2,
      name: 'MRV',
      image: '/customers/mrv.jpg',
    },
    {
      id: 3,
      name: 'Mariza',
      image: '/customers/mariza.png',
    },
    {
      id: 4,
      name: 'Bom Leite',
      image: '/customers/bomleite.png',
    },
    {
      id: 5,
      name: 'Refreskant',
      image: '/customers/refreskant.png',
    },
    {
      id: 6,
      name: 'Bump',
      image: '/customers/bump.png',
    },
    {
      id: 7,
      name: 'SESI',
      image: '/customers/sesi.jpg',
    },
  ]

  const customerImages = customers.map((customer) => customer.image)

  return (
    <div className="flex flex-col w-full items-center justify-center my-16 overflow-hidden ">
      <div className="flex flex-col items-center justify-center gap-4">
        <span className="text-xl font-medium text-center">
          Clientes que optaram por <br />
          <strong className="text-[#de2c70] text-xl">
            Qualidade, Garantia e Melhor Custo Benefício.
          </strong>
        </span>
      </div>
      <div className="h-[12rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards images={customerImages} />
      </div>
    </div>
  )
}
