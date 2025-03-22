import React, { useState } from 'react';
import Bannerphonepic from '../assets/ph5.jpg'
import Bannersmall1 from '../assets/images.png'
import Bannervideo from '../assets/TiffinApp.mp4';



const Banner = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="bg-white pt-12 md:pt-24 min-h-[500px] flex items-center justify-center">
    {/* VIDEO MODAL */}
    {showVideo && (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <div className="bg-white p-4 md:p-8 rounded-lg w-full max-w-4xl relative">
          {/* CLOSE BUTTON */}
          <button 
            onClick={() => setShowVideo(false)} 
            className="absolute top-2 right-2 text-black text-2xl"
          >
            &times;
          </button>

          {/* RESPONSIVE VIDEO CONTAINER */}
          <div className="relative w-full">
            <video 
              controls 
              autoPlay 
              className="w-full max-h-[90vh] rounded-lg"
            >
              <source src={Bannervideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      )}

      <div className='container mx-auto px-6 md:px-12 xl:px-20 flex flex-col lg:flex-row items-center justify-between gap-12'>
        {/* {LEFT CONTNET} */}
        <div className='w-full lg:flex-1 text-center lg:text-left'>
            <h3 className='text-llg mt-5 md:text-xl lg:text-2xl font-bold font-comfortaa text-gray-600 mb-2 md:mb-3'>
             Bharat TiffinWala
            </h3>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-6xl font-pacifico animate-slide-up
            font-extrabold leading-tight mb-4'>
                Best Tiffin Service you get <br />
                <span className='text-orange-600'>Bharat Tiffin</span> &{" "}
                <br className='hidden md:block' />
                <span className='text-yellow-500'>Hello Bharat</span>

            </h1>
          <div className='flex flex-wrap justify-center lg:justify-start gap-4'>
            <button className='bg-red-500 text-white px-6 py-2 md:px-8 md:py-3
            rounded-full hover:bg-red-600 transition hover:scale-105 text-sm md:text-base'>
              Get Started
            </button>
            <button className='flex items-center gap-2 md:gap-3 group'
            onClick={()=> setShowVideo((true))}>
            <span className='w-10 h-10 md:w-12 md:h-12 bg-red-500 rounded-full flex items-center
            justify-center transition group-hover:bg-red-600 group-hover:scale-110 shadow-lg relative'>
            <span className='absolute inset-1.5 animate-ping rounded-full bg-red-400
            opacity-75'>
            <span className='text-white text-lg'>&#9654;</span>
            <span className='text-gray-600 group-hover:text-red-200 font-semibold text-sm md:text-base'>
             WatchVideo
            </span>
            </span>
            </span>

            </button>

          </div>
          <div className='flex flex-col sm:flex-row items-center sm:items-center gap-4 mt-6'>
            <div className='flex -space-x-3'>
              <img src={Bannersmall1} alt="customer" className='w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white shadow-md'/>

            </div>
          <div>
            <p className='text-lg md:text-xl font-bold flex items-center'>
              <span className='text-yellow-500 mr-2'>&#x2605;&#x2605;&#x2605;&#x2605;</span>4.5k

            </p>
            <p className='text-gray-600 text-sm md:text-base'>
              Our Happy Customers
            </p>
          </div>
          </div>
        </div>
        {/* // {RIGHT SECTION} */}
        <div className='w-full lg:flex-1 relative max-w-sm sm:max-w-md  md:max-w-lg lg:max-w-none mx-auto'>
          <div className='relative mx-auto'>
            <img src={Bannerphonepic} alt="Banner Phonepic" className='w-[300px] md:w-[400px] lg:w-[500px] h-auto object-cover transition duration-500'></img>

          </div>

        </div>
      </div>
    </div>
    
    
  );
};

export default Banner;

