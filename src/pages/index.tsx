import Header from 'components/Header'
// import HeroSection from 'components/HeroSection'
import ProductsSection from 'components/ProductsSection'
import ContactSection from 'components/ContactSection'
import WhatsappFloat from 'components/WhatsappFloat'
import Footer from 'components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      {/* <HeroSection /> */}
      <ProductsSection />
      <ContactSection />
      <WhatsappFloat />
      <Footer />
    </>
  )
}
