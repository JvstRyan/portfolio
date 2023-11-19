import Image from 'next/image'

const Technologies = () => {
  return (
    <>
    <section id='tech' className="hero min-h-screen mt-20 ">
        <article className="hero-content flex-col lg:flex-row-reverse sm:ml-16 sm:gap-28">
            <article className=' flex justify-center items-center sm:-mr-20'>
                <Image
                    src="/tech3d.png"
                    alt="3d model"
                    width={550}
                    height={500}
                    style={{marginLeft: '5rem', marginTop: '2rem'}}
                  />
            </article>
          <article className="flex justify-center items-center flex-col gap-10 sm:w-1/3 ">
                <article className='justify-center items-center sm:flex-row md:flex lg:flex gap-2'>
                    <Image
                      src="/tech.png"
                      alt="3d model"
                      width={500}
                      height={200}
                      style={{marginTop: '1rem'}}
                    />
                </article>
            <p className='py6 text-black sm:text-base/[26px]'>Last year I was mostly using <b> HTML, CSS and JavaScript </b>
               for all my projects, but since then I have grown my frontend expertise out to all different kinds of <b>frameworks and libraries. </b> 
                I am honestly having a blast learning more and more about web development and look forward to learning a lot in the future. 
            </p>
           </article>
        </article>
      </section>
    </>
  )
}

export default Technologies