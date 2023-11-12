import Image from 'next/image'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Slider from './components/Slider'

export default function Home() {
  return (
   <>
    <NavBar />
    <Hero />
    <Slider />
   </>
  )
}
