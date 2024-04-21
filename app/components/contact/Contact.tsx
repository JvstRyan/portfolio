import React from 'react'
import Image from 'next/image'
import { ContactForm } from './ContactForm'


const Contact = () => {
  return (
    <section id='contact' className="hero min-h-screen mt-20 flex justify-center items-center ">
        <article className="hero-content flex-col lg:flex-row-reverse sm:gap-32">
            <article className=' flex justify-center items-center sm:-mr-20'>
                <Image
                    src="/contactt.svg"
                    alt="3d model"
                    width={550}
                    height={550}
                  />
            </article>
            <article>
                <ContactForm />
            </article>
        </article>
      </section>
  )
}

export default Contact