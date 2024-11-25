import React, { useState } from 'react'

function Video() {
    const [showVideo, setShowVideo] = useState(false);
    const iframeSrc = "https://www.youtube.com/embed/qV2ElyV3TCo?si=XqAFGhdAug_eWzH8?autoplay=1"; // Add autoplay=1 to start the video automatically
  const thumbnailSrc = "/thumbnail.png";

  return (
    <>
    <section className='bg-gray-50 py-24 px-12'>
        <div className="flex justify-center items-center flex-col max-w-[1400px] mx-auto ">
            <h1 className='text-2xl md:text-[55px] mb-[54px] font-semibold'>Use illustrations in UI design</h1>
            {showVideo ? (
                <iframe
                src={iframeSrc}
                title="YouTube Video"
                className="w-full sm:h-[655px] rounded-lg"
                allow="autoplay; fullscreen"
                allowFullScreen/>
            ) : (
            <img
            src= {thumbnailSrc}
            alt="Video Thumbnail"
            onClick={() => setShowVideo(true)}
            className="cursor-pointerrounded-lg shadow-lg w-full sm:h-[655px] rounded-lg"/>
            )}
        </div>
    </section>
    </>
  )
}

export default Video