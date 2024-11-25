import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

function Slider() {
    const slides = [
        {
          id: 1,
          heading: "Make more time for the work that matters most",
          description: "Best software platform for running an internet business.",
          image: "img1.png",
        },
        {
          id: 2,
          heading: "Build more time for the work that matters most",
          description: "Best software platform for running an internet business.",
          image: "img2.png",
        },
        {
          id: 3,
          heading: "Take more time for the work that matters most",
          description: "Best software platform for running an internet business.",
          image: "img3.png",
        },
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
      const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
      };
    
      const NextSlide = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
      };
    
      const { heading, description, image } = slides[currentIndex];

      
    const logos = [
        "/logo1.png",
        "/logo2.png",
        "/logo3.png",
        "/logo4.png",
        "/logo5.png",
        "/logo6.png",
    ];

    const [offset, setOffset] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setOffset((prev) => (prev <= -20 * logos.length ? 0 : prev - 0.09));
      }, 20);
      return () => clearInterval(interval);
    }, []);;

  return (
    <>
    <section className="max-w-[1400px] py-24 px-6 md:px-12 mx-auto">
        <div className="flex flex-col justify-between md:flex-row items-center gap-20 ">
            <div className="flex flex-col justify-between w-full md:w-1/2 space-y-6">
               <img className="w-16 mb-4 md:w-24" src="/logo.png" alt="" />
               <h1 className="text-2xl md:text-5xl font-bold text-black max-w-md">{heading}</h1>
               <p className="text-gray-400 max-w-sm  text-[20px]">{description}</p>

                <div className="flex items-center space-x-4 mt-4">
                    <button onClick={prevSlide} className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition">
                        <ChevronLeft className="text-black" />
                    </button>

                    <button onClick={NextSlide} className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition">
                        <ChevronRight className="text-black" />
                    </button>
                </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
                <img className="w-full md:w-[65%] object-cover" src={image} alt="" />
            </div>
            
        </div>
        <div className="overflow-hidden mt-[61px]">
            <div
                className="flex whitespace-nowrap"
                style={{ transform: `translateX(${offset}%)`, transition: "transform 0.00s" }}>
                    {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
                        <img key={index} src={logo} alt={`Logo ${index}`} className="h-[30px] w-[85px] flex-shrink-0 mr-[90px]" />
                    ))}
            </div>
        </div>
    </section>
    </>
  )
}


export default Slider