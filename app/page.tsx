import About from "@/app/components/About";
import Contact from "@/app/components/Contact";
import Hero from "@/app/components/Hero";
import NavBar from "@/app/components/NavBar";
import Projects from "@/app/components/Projects";
import Slider from "@/app/components/SliderAbout";
import SliderProjects from "@/app/components/SliderProjects";
import SliderDown from "@/app/components/SliderTech";
import SlidingContact from "@/app/components/SlidingContact";
import Technologies from "@/app/components/Technologies";


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
