import React, { useState } from 'react'
import {BsArrowRight} from 'react-icons/bs'
import {ImLinkedin} from 'react-icons/im'
import {BsGithub} from 'react-icons/bs'



const NavBar = () => {


  return (
    <>
        <section className='navbar bg-primary shadow-md'>
            <article className='flex-1'>
                <p className='text-black font-bold ml-10'>Ryanhorrmann.</p>
            </article>
            <ul className='flex-1 flex navbar-end'>
                <li className='mr-10 hidden lg:block text-black font-bold text-sm '>About</li>
                <li className='mr-10 hidden lg:block text-black font-bold text-sm '>Technologies</li>
                <li className='mr-10 hidden lg:block text-black font-bold text-sm '>Project</li>
                <button className='mr-10 hidden md:flex  btn btn-secondary text-white font-bold text-xs'>Contact<BsArrowRight/></button>
                <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/ryan-horrmann-1b30b1255/' className='mr-4 '><ImLinkedin color='black' fontSize='1.5rem'/></a>
                <a target='_blank' rel='noopener noreferrer' href='https://github.com/JvstRyan?tab=repositories' className='mr-10 '><BsGithub color='black' fontSize='1.5rem'/></a>
            </ul>
        </section>
    </>
  )
}

export default NavBar