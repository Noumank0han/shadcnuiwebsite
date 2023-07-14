import Image from 'next/image'
import Mycard from '../components/ui/Mycard'
import Hero from '../views/Hero'
import Mybutton from '../components/ui/Mybutton'
import BelowHero from '../views/BelowHero'
import ProductList from '@/views/ProductList'
import Jewelry from '@/views/Jewelry'
import Newsletter from '@/views/Newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      <BelowHero />
      <ProductList />
      <Jewelry />
      <Newsletter />
    </>
  )

}
