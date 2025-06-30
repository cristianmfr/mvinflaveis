import { db } from '@/database'
import { IconCircleCheckFilled } from '@tabler/icons-react'

export function WindSection() {
  return (
    <div className="grid grid-cols-3 w-full gap-4 p-12 bg-primary bg-[url('/bg-wind.png')] bg-center bg-cover">
      <div className="col-span-2 flex flex-col items-center justify-center w-full h-full">
        <span>
          <h4 className="font-bold text-2xl text-white drop-shadow-md">
            Porque utilizar
          </h4>
          <h4 className="font-black text-2xl text-[#de2c70] drop-shadow-md">
            Wind Banners
          </h4>
          <ul className="text-lg mt-4 space-y-2">
            {db.wind.windBannerBenefits.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 font-medium text-white drop-shadow-md"
              >
                <IconCircleCheckFilled className="size-4 text-[#de2c70]" />
                {item.title}
              </li>
            ))}
          </ul>
        </span>
      </div>
      <div className="flex w-full h-full items-center justify-center"></div>
    </div>
  )
}
