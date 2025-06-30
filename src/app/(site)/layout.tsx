import { FloatingFooter } from '@/components/layout/floating-footer'
import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { Widget } from '@/components/layout/widget'

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Widget />
      <FloatingFooter />
      <div className="flex flex-1 flex-col w-full">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  )
}
