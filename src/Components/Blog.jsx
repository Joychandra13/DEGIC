import React from 'react'
import { ArrowForward } from "@mui/icons-material";

function Blog() {
    const CardData = [ 
        {
            id:1,
            img: '/card5.png',
            title : "Make myspace your best designed space",
            description: 'A lot of different components that will help you create the perfect look for your project',
            buttonLavel:"Design",   
        },
        {
            id: 2,
            img: '/card6.png',
            title: 'My company culture has changed today',
            description: 'A lot of different components that will help you create the perfect look for your project',
            buttonLavel: '3D Illustration ',   
        },
        {
            id: 3,
            img: '/card7.png',
            title: 'Professionals in craft! All products were super great',
            description: 'A lot of different components that will help you create the perfect look for your project',
            buttonLavel: 'Development',
       
        },
    ]
  return (
    <>
    <section className=" max-w-[1400px] mx-auto py-12 px-6">
        <div className='flex flex-col sm:flex-row justify-between items-center mb-10'>
            <div>
                <h1 className='text-3xl lg:text-6xl font-bold text-gray-800'>Get more from our blog</h1>
                <p className='max-w-lg text-[22px] mt-3 text-gray-500'>There are a lot of different components that will help you create the perfect look for your project</p>
            </div>
            <div>
                <button className="bg-indigo-100 font-semibold py-3 px-6 rounded-lg transition duration-300 text-[#5F62E2] flex items-center justify-center gap-2 hover:bg-indigo-500 hover:text-white mx-auto sm:mx-0 mt-10">
                    Learn More
                    <ArrowForward sx={{ fontSize: 24 }} />
                </button>
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 !p-5'>
            {
                CardData.map((Card)=>(
                    <div key={Card.id}>
                        <div className='bg-gray-100 rounded-xl p-3 h-[275px] '>
                            <img className='w-full object-cover' src={Card.img} alt="" />
                        </div>
                        <div className='p-6'>
                            <h3 className='text-xl md:text-2xl font-semibold mb-2'>{Card.title}</h3>
                            <p className='text-gray-600 mb-4'>{Card.description}</p>
                            <button className='text-sm py-2 px-3 rounded-lg bg-teal-50 text-teal-600 hover:bg-teal-300'>{Card.buttonLavel}</button>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
    </>
  )
}

export default Blog