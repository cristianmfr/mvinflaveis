import { LucideIcon } from 'lucide-react'
import { Button } from '../templates/moving-border'

export type HighlightData = {
    label: string
    icon: LucideIcon
}

interface HighlightProps {
    data: HighlightData[]
}

export function Highlight({ data }: HighlightProps) {
    return (
        <div className='mt-20 -mb-10'>
            <Button
                borderRadius='2rem'
                className='bg-white dark:bg-black/20 text-black dark:text-white border-neutral-200 dark:border-primary/20'
            >
                <div className='flex flex-wrap gap-y-4 justify-center gap-x-16 px-8'>
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className='flex items-center gap-2 justify-center'
                        >
                            {item.icon && (
                                <item.icon className='w-5 h-5 text-white' />
                            )}
                            <span className='text-white'>{item.label}</span>
                        </div>
                    ))}
                </div>
            </Button>
        </div>
    )
}
