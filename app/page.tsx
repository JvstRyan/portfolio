import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Slider from './components/SliderAbout'
import About from './components/About'
import SliderDown from './components/SliderTech'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import SliderProjects from './components/SliderProjects'
import SlidingContact from './components/SlidingContact'
import Contact from './components/Contact'

export default function Home() {
  return (
   <>
    <NavBar />
    <Hero />
    <Slider />
    <About />
    <SliderDown />
    <Technologies />
    <SliderProjects />
    <Projects />
    <SlidingContact />
    <Contact />
   </>
  )
}
