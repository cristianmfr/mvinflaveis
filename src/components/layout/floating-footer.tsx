'use client'

import { IconBrandWhatsappFilled } from '@tabler/icons-react'
import { Phone } from 'lucide-react'
import { Button } from '../ui/button'
import React, { useState } from 'react'
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'motion/react'

export const FloatingFooter = () => {
  const { scrollYProgress } = useScroll()

  const [visible, setVisible] = useState(false)

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    if (typeof current === 'number') {
      const direction = current! - scrollYProgress.getPrevious()!

      if (scrollYProgress.get() < 0.1) {
        setVisible(false)
      } else {
        if (direction > 0) {
          setVisible(true)
        }
      }
    }
  })

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 100,
        }}
        animate={{
          y: visible ? 0 : 100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className="fixed w-full h-[4rem] bottom-0 bg-white border border-t-primary z-50"
      >
        <div className="flex gap-4 w-full h-full items-center justify-center">
          <div className="grid grid-cols-2 gap-8">
            <div className="cursor-pointer flex items-center w-full h-full gap-4 pl-4 transform text-xs hover:scale-110 transition duration-400">
              <div className="flex flex-col items-center justify-center size-8 text-white rounded-full bg-primary">
                <Phone fill="#fff" strokeWidth={0} className="size-4" />
              </div>
              <div className="flex flex-col">
                <span className="uppercase text-xs font-semibold text-muted-foreground">
                  Fale Conosco
                </span>
                <span className="font-bold text-xs text-primary">
                  (62) 99816-2387
                </span>
              </div>
            </div>
            <div className="cursor-pointer flex items-center justify-end w-full h-full gap-4 pr-4 transform text-xs hover:scale-110 transition duration-400">
              <div className="flex flex-col items-center justify-center size-8 text-white rounded-full bg-primary">
                <IconBrandWhatsappFilled className="size-4" />
              </div>
              <div className="flex flex-col">
                <span className="uppercase text-xs font-semibold text-muted-foreground">
                  WhatsApp
                </span>
                <span className="font-bold text-xs text-primary">
                  (62) 4103-3521
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button>Faça um orçamento</Button>
            <Button className="bg-green-500 hover:bg-green-600">
              Comprar pelo Whatsapp
            </Button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
