import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import Image from 'next/image'

const About = () => {
  return (
    <section className="hero min-h-screen mt-20 ">
        <article className="hero-content flex-col gap-x-40 lg:flex-row-reverse md:ml-20 md:mr-20">
          <article className="">
            <h1 className=" text-3xl sm:text-5xl text-center sm:text-left text-black font-bold leading-tight">
              WHO AM I?
            </h1>
            <p className="py-6 text-black text-sm  text-left sm:text-left sm:text-sm/[20px]">
            Hi there I’m <b>Ryan Horrmann</b>, a 19-year-old student <br></br> currently persuing a bachelors in Media Design. <br></br> Passionate about web development, <br></br> I find joy in crafting seamless user experiences. <br></br><br></br>
            Next to web development, I also have a passion for fitness. <br></br> You can find me <b>2 - 3 days</b> a week in the gym <br></br> trying to become fitter and healthier. <br></br><br></br>
            I also game sometimes in my free time. <br></br> Ever since I was little I loved playing nintendo games, <br></br> so mario-kart or any other nintendo games are my go to. 
            <br></br> <br></br>Want to talk about <b> web development, fitness or games?</b>

            </p>
            <button className="btn btn-secondary  sm:ml-0 text-white  sm:btn-md text-center">
              Get in touch
              <BsArrowRight />
            </button>
          </article>
          <Image
            src="/about.svg"
            alt="3d model"
            width={480}
            height={490}
            style={{marginTop: '4rem'}}
          />
        </article>
      </section>
  )
}

export default About