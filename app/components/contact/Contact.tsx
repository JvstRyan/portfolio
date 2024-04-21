import React from 'react'
import { ContactForm } from './ContactForm'
import ContactImage from './ContactImage'


const Contact = () => {
  return (
    <section id='contact' className="  mt-20 flex justify-center items-center ">
        <article className=" flex flex-col lg:flex-row-reverse sm:gap-32">
            <ContactImage />
            <article>
                <ContactForm />
            </article>
        </article>
      </section>
  )
}

export default Contact