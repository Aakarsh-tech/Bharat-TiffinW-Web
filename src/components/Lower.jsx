import React from 'react'
import Lower1 from "../assets/Lower1.png";
import Lower2 from "../assets/Lower2.png";
import Lower3 from "../assets/Lower3.png";
const Lower = () => {
  return (
   <div className='w-full min-h-screen bg-gradient-to-r from-red-50 to-yellow-50 px-4 sm:px-6
   lg:px-20 py-12 md:py-20 xl:py-24'>
    <div className='mx-auto text-center max-w-7xl'>
        <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-red-600 uppercase
        font-poppins tracking-widest mb-3 animate-fade-in'>
         What we Provide
        </h2>
        <h1 className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900
        font-poppins leading-tight mb-8 md:mb-12 lg:mb-16'>
        Tiffin Service for Hostel,Pg,Flat, <br className='hidden sm:block'/> 
        Just The Way You Love!🍛🥡
        </h1>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap8 sm:gap-10
      lg:gap-12'>
     {/* {SERVICES CARDS} */}
     {[
  {
    img: Lower1,
    title: "One-Tap Ordering 📲",
    text: "Skip the hassle! With just one tap, your cravings are on their way to your doorstep!",
  },
  {
    img: Lower2,
    title: "Flash-Speed Delivery ⚡",
    text: "We don’t just deliver food, we deliver happiness—hot & fresh, faster than ever!",
  },
  {
    img: Lower3,
    title: "Five-Star Quality ⭐",
    text: "Every bite is a masterpiece! Only the best ingredients for an unforgettable experience.",
  },
].map((service,index) => (
    // <div key={index} className='group relative rounded-xl p-3 sm:p-4 md:p-5 transition-transform duration-300 w-[250px] sm:w-[300px] lg:w-[400px] mx-auto'>
    //     <div className='overflow-hidden rounded-lg'>
    //        <img src={service.img} alt={service.title} className='w-full h-[180px] sm:h-[200px] md:h-[220px] lg:h-[240px] object-cover transition-transform duration-300 hover:rotate-3'></img>
    //     </div>
    //    <h3 className='text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold text-orange-600 mt-3
    //    sm:mt-4 font-poppins text-center'>
    //     {service.title}
    //    </h3>
    //    </div>
    <div key={index} className='group relative rounded-xl p-4 sm:p-6 transition-transform duration-300'>
    <div className='overflow-hidden'>
       <img src={service.img} alt={service.title} className='w-full hover:rotate-7 h-49 sm:h-56
       md:h-48 lg:h-56 xl:h-64 object-contain lg:object-cover transition-transform duration-300'></img>
    </div>
   <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold text-orange-600 mt-4
   sm:mt-6 font-poppins'>
    {service.title}
   </h3>
   <p className='text-base sm:text-lg text-gray-700 leading-relaxed mt-2
   sm:mt-3 px-2 sm:px-0'>
     {service.text}
   </p>
   </div>
))}   
      </div>
    </div>

   </div>
  )
}

export default Lower