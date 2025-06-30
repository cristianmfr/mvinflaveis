import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function CatalogForm() {
  return (
    <div className="w-sm space-y-2">
      <div className="relative flex items-center rounded-md border focus-within:ring-1 focus-within:ring-ring pl-2">
        <Input
          type="name"
          placeholder="Nome"
          className="border-0 focus-visible:ring-0 shadow-none"
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="relative flex items-center rounded-md border focus-within:ring-1 focus-within:ring-ring pl-2">
          <Input
            type="email"
            placeholder="Email"
            className="border-0 focus-visible:ring-0 shadow-none"
          />
        </div>
        <div className="relative flex items-center rounded-md border focus-within:ring-1 focus-within:ring-ring pl-2">
          <Input
            type="phone"
            placeholder="Telefone"
            className="border-0 focus-visible:ring-0 shadow-none"
          />
        </div>
      </div>
      <Button className="w-full hover:scale-110 transition duration-400">
        Baixar Catálogo
      </Button>
    </div>
  )
}
