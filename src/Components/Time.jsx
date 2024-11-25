import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { ArrowForward } from "@mui/icons-material";


function Time() {
    const point  = [
        {text:"Many ways to use illustrations in design"},
        {text:"Simply explained with illustrations"},
        {text:"Make more time for the work"},
    ] 
  return (
    <section className="gap-24 py-16 px-6 lg:px-16 max-w-[1400px] mx-auto">
        {/* section 1  */}
        <div className="flex flex-col-reverse lg:flex-row  items-center justify-between">
            <div className="flex-1 items-start">
                <img className="w-full h-auto max-w-lg" src="/img2.png" alt="" />
            </div>

            <div className="flex flex-1 flex-col gap-4">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold max-w-lg">Make more time for the work</h1>
                {point.map((points) => (
                    <p className="text-black text-lg ">
                    <CheckCircleOutlineIcon className="text-green-600 me-1" />{" "}
                        <span>{points.text}</span>
                    </p>
                ))}

                <div className="gap-3 mb-10">
                    <button className="bg-indigo-100 font-semibold py-3 px-6 rounded-lg transition duration-300 text-[#5F62E2] flex items-center justify-center gap-2 hover:bg-indigo-500 hover:text-white ">
                        Learn More
                        <ArrowForward sx={{ fontSize: 24 }} />
                    </button>
                </div>
            </div>
        </div>

{/* section 2  */}

        <div className="flex flex-col lg:flex-row  items-center justify-between mt-24">

            <div className="flex flex-1 flex-col gap-4">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold max-w-lg">Make more time for the work</h1>
                {point.map((points) => (
                    <p className="text-black text-lg ">
                    <CheckCircleOutlineIcon className="text-green-600 me-1" />{" "}
                        <span>{points.text}</span>
                    </p>
                ))}

                <div className="gap-3 mb-10">
                    <button className="bg-indigo-100 font-semibold py-3 px-6 rounded-lg transition duration-300 text-[#5F62E2] flex items-center justify-center gap-2 hover:bg-indigo-500 hover:text-white ">
                        Learn More
                        <ArrowForward sx={{ fontSize: 24 }} />
                    </button>
                </div>
            </div>
            <div className="flex-1 items-start">
                <img className="w-full h-auto max-w-lg" src="/img3.png" alt="" />
            </div>
        </div>
    </section>
  );
}

export default Time;