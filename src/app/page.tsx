import Image from 'next/image'
import Mycard from '../../components/ui/Mycard'
import Hero from '../../components/section/Hero'
import Mybutton from '../../components/ui/Mybutton'
import MainImage from '../../components/section/MainImage'
import BelowHero from '../../components/section/BelowHero'

export default function Home() {
  return (
    <>
      <div className='flex'>
        <Hero />
        <MainImage />
      </div>
      <BelowHero />
    </>
  )

}
