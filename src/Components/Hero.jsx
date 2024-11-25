import React from 'react'

function Hero() {
  return (
    <>
    <section className='flex flex-col-reverse lg:flex-row items-center justify-between gap-8 py-16 px-6 lg:px-16 container max-w-[1400px] mx-auto'>
        <div className='flex flex-col items-start gap-6'>
            <h1 className='text-3xl lg:text-6xl font-bold max-w-lg '>
                Simply explained with illustrations
            </h1>
            <p className='text-base sm:text-lg lg:text-xl text-gray-500 max-w-md'>
                There are a lot of different components that will help you create the perfect look for your project
            </p>
            <div className='flex flex-wrap gap-3'>
                <button className='bg-[#5F62E2] hover:bg-blue-700 text-white rounded-lg font-semibold py-2 px-5 sm:py-3 sm:px-6 transition duration-300'>Get Started</button>
                <button className='bg-indigo-100 font-semibold py-2 px-5 sm:py-3 sm:px-6 rounded-lg transition duration-300 text-[#5F62E2]'>Learn More</button>
            </div>
        </div>
        <div>
            <img className='w-full h-auto max-w-lg' src="/Hero.png" alt="Rocket illustration" />
        </div>
    </section>
    </>
  )
}

export default Hero