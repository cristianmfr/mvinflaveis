import { IconLibraryFilled } from '@tabler/icons-react'
import { CatalogForm } from '../forms/catalog-form'

export function CatalogSection() {
  return (
    <div className="grid grid-cols-4 w-full gap-4 px-4 py-24 bg-gradient-to-tl from-primary/5 to-primary/10">
      <div className="col-start-2 flex flex-col items-center justify-center w-full h-full">
        <div className="flex flex-col w-full items-start justify-center">
          <IconLibraryFilled className="text-primary mb-2 size-12" />
          <span className="text-primary font-bold text-2xl mb-2">
            Baixe nosso catálogo!
          </span>
          <span>
            Baixe aqui o nosso{' '}
            <strong className="text-primary">catálogo</strong> completo e <br />
            <strong className="text-primary">
              fique por dentro das novidades!
            </strong>
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <CatalogForm />
      </div>
    </div>
  )
}
