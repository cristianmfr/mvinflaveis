import { IconMailFilled } from '@tabler/icons-react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export function NewsletterSection() {
  return (
    <div className="flex items-center justify-center w-full gap-8 px-24 py-8 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="flex items-center gap-2">
        <IconMailFilled className="size-15 text-primary" />
        <div className="flex flex-col">
          <h1 className="text-primary text-lg font-bold">Newsletter</h1>
          <span className="text-sm">Receba nossas novidades no seu e-mail</span>
        </div>
      </div>
      <div className=" flex items-center justify-center gap-2 h-full">
        <Input placeholder="seu@email.com" className="w-[24rem]" />
        <Button>Cadastrar</Button>
      </div>
    </div>
  )
}
