'use client'

import { Button } from '../atoms/button'
import { Card, CardContent, CardHeader } from '../atoms/card'
import { Input } from '../atoms/input'
import { Label } from '../atoms/label'
import { Textarea } from '../atoms/textarea'

export function Contact() {
    return (
        <div className='flex flex-col w-full gap-4 p-8'>
            <Card>
                <CardHeader className='flex items-center justify-center'>
                    <Label className='text-2xl font-bold font-heading'>
                        Entre em contato
                    </Label>
                    <Label className='text-sm font-normal text-muted-foreground'>
                        Ficou com alguma dúvida e quer falar diretamente com a
                        nossa equipe?
                    </Label>
                </CardHeader>
                <CardContent>
                    <div className='grid grid-cols-2 w-full gap-4'>
                        <div className='flex flex-col w-full h-full rounded-lg bg-white'></div>
                        <form
                            onSubmit={() => {}}
                            className='flex flex-col gap-4'
                        >
                            <div className='flex flex-col gap-2'>
                                <Label htmlFor='name'>Nome completo</Label>
                                <Input
                                    id='name'
                                    type='text'
                                    required
                                    placeholder='Seu nome'
                                />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <Label htmlFor='email'>Seu e-mail</Label>
                                <Input
                                    id='email'
                                    type='email'
                                    placeholder='seu@email.com'
                                />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <Label htmlFor='phone'>Seu telefone</Label>
                                <Input
                                    id='phone'
                                    type='text'
                                    required
                                    placeholder='(00) 0 0000-0000'
                                />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <Label htmlFor='name'>Sua mensagem</Label>
                                <Textarea
                                    id='mensage'
                                    required
                                    placeholder='Digite sua mensagem'
                                    className='resize-none h-[200px]'
                                />
                            </div>
                            <div className='flex items-center justify-center w-full gap-2'>
                                <Button className='w-full'>
                                    Enviar mensagem
                                </Button>
                                <Button className='w-full' variant='outline'>
                                    Ir para o nosso WhatsApp
                                </Button>
                            </div>
                        </form>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
