import React from 'react'
import Image from 'next/image'


const Projects = () => {
  return (
    <>
    <section className="hero min-h-screen mt-20 ">
        <article className="hero-content flex-col gap-10 lg:flex-row-reverse">
           <Image 
           src='/portfolio.svg'
           alt='portfolio showcase'
           width={700}
           height={700}
           />
          <article className="flex flex-col gap-10 sm:w-1/3 sm:-mt-40 ">
                <article className='flex flex-col items-start gap-5'>
                   <h1 className='text-black font-bold text-4xl'>PORTFOLIO</h1>
                   <ul className='flex text-gray-400 gap-2'>
                    <li>Next.Js,</li>
                    <li>Tailwind,</li>
                    <li>DaisyUI,</li>
                    <li>Figma</li>
                   </ul>
                   <p className='text-black text-sm w-86'>I created this portfolio to showcase what my skills that I&apos;ve built up so far. I am looking forward to showcasing more of my projects.</p>
                   <article className="flex gap-2 mt-3">
                        <button className='btn  btn-primary'>Github</button>
                        <button className='btn  btn-outline btn-secondary'>Live site</button>
                   </article>
                </article>
           </article>
        </article>
      </section>
      <section className="hero min-h-screen border-t border-black ">
        <article className="hero-content flex-col gap-10 lg:flex-row-reverse">
           <Image 
           src='/placeholder.svg'
           alt='placeholder'
           width={700}
           height={700}
           />
          <article className="flex flex-col gap-10  sm:-mt-40 ">
                <article className='flex flex-col items-start gap-5'>
                   <h1 className='text-black font-bold text-4xl'>SOON</h1>
                   <ul className='flex text-gray-400 gap-2'>
                    <li>Next.Js,</li>
                    <li>Tailwind,</li>
                    <li>DaisyUI,</li>
                    <li>Figma</li>
                   </ul>
                   <p className='text-black text-sm w-86'>So far I haven&apos;t made huge projects yet, for smaller projects check out my github. I am busy creating 2 big projects and will be showcasing them here when they are done.</p>
                   <article className="flex gap-2 mt-3">
                        <button className='btn  btn-primary'>Github</button>
                        <button className='btn  btn-outline btn-secondary'>Live site</button>
                   </article>
                </article>
           </article>
        </article>
      </section>
    </>
  )
}

export default Projects