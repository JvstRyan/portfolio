import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import Slider from "@/components/SliderAbout";
import SliderProjects from "@/components/SliderProjects";
import SliderDown from "@/components/SliderTech";
import SlidingContact from "@/components/SlidingContact";
import Technologies from "@/components/Technologies";


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
