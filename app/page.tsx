import About from "@/app/components/about/About";
import Contact from "@/app/components/contact/Contact";
import Hero from "@/app/components/Hero";
import NavBar from "@/app/components/navbar/NavBar";
import Projects from "@/app/components/projects/Projects";
import Slider from "@/app/components/about/SliderAbout";
import SliderProjects from "@/app/components/projects/SliderProjects";
import SliderDown from "@/app/components/tech/SliderTech";
import SlidingContact from "@/app/components/contact/SlidingContact";
import Technologies from "@/app/components/tech/Technologies";


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
