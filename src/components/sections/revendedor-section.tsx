import { IconHeartHandshake } from '@tabler/icons-react'
import { Button } from '../ui/button'

const RevendedorSection = () => {
  return (
    <div className="py-10 bg-[url('/bg-revendedor.png')] bg-contain bg-no-repeat bg-right md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4">
            <div className="flex items-center gap-2 text-primary">
              <IconHeartHandshake className="size-10" />
              <h1 className="flex items-center text-2xl font-bold">
                Seja um revendedor
              </h1>
            </div>
            <h2 className="text-lg font-medium text-primary ">
              Venha fazer parte dessa equipe mais do que{' '}
              <strong className="text-secondary font-bold">
                especial de revendedores!
              </strong>
            </h2>
            <h3 className="text-md font-medium mb-3">
              Faça seu cadastro para revender e aumente sua renda.
            </h3>
            <h4 className="text-lg font-black text-primary mb-4">
              FAÇA O SEU CADASTRO, <br />
              <strong className="text-secondary"> É GRÁTIS E RÁPIDO!</strong>
            </h4>
            <Button variant="secondary" size="lg" className="text-sm">
              Fazer cadastro
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RevendedorSection
