import { IconShoppingBagCheck } from '@tabler/icons-react'
import { ContactForm } from '../forms/contact-form'
import { Button } from '../ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'

export const SendContactModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full col-span-2 bg-primary transition ease-in rounded-none rounded-br-md h-10">
          Orçamento Rápido
          <IconShoppingBagCheck className="size-6" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center font-bold text-xl text-secondary">
            Orçamento rápido
          </DialogTitle>
          <DialogDescription className="text-center">
            Preencha o formulário com suas informações. Em breve nossa equipe
            entrará em contato com você.
          </DialogDescription>
        </DialogHeader>
        <ContactForm />
      </DialogContent>
    </Dialog>
  )
}
