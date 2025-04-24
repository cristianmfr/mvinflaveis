import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/molecules/accordion'

export type FaqItemData = {
    title: string
    content: string
}

interface FaqProps {
    data: FaqItemData[]
}

export function Faq({ data }: FaqProps) {
    return (
        <div className='flex flex-col gap-8 w-full max-w-[800px] mx-auto py-10 px-4'>
            <div className='flex flex-col gap-2 items-center justify-center'>
                <h2 className='text-4xl font-bold font-heading text-primary'>
                    Perguntas Frequentes
                </h2>
                <p className='text-muted-foreground text-sm'>
                    Aqui estão as respostas para as perguntas mais frequentes.
                </p>
            </div>
            <div>
                <Accordion type='single' collapsible className='w-full'>
                    {data.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index + 1}`}>
                            <AccordionTrigger>{item.title}</AccordionTrigger>
                            <AccordionContent>{item.content}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    )
}
