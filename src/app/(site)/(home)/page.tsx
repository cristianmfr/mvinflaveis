import { SendContactModal } from '@/components/modals/send-contact-modal'
import { AboutSection } from '@/components/sections/about-section'
import { BannerSection } from '@/components/sections/banner-section'
import { CatalogSection } from '@/components/sections/catalog-section'
import { CategoriesSection } from '@/components/sections/categories-section'
import { CustomersSection } from '@/components/sections/customers-section'
import { DiffSection } from '@/components/sections/diff-section'
import { HighlightsSection } from '@/components/sections/highlight-section'
import { LocationSection } from '@/components/sections/location-section'
import { NewsletterSection } from '@/components/sections/newsletter-section'
import { ProductsHighlightSection } from '@/components/sections/products-highlight-section'
import { WindSection } from '@/components/sections/wind-section'

export default function Home() {
  return (
    <>
      <SendContactModal />
      <BannerSection />
      <CategoriesSection />
      <ProductsHighlightSection />
      <HighlightsSection />
      <CatalogSection />
      <WindSection />
      <DiffSection />
      <NewsletterSection />
      <AboutSection />
      <CustomersSection />
      <LocationSection />
    </>
  )
}
