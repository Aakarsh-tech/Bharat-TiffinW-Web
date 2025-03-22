import React, { useState } from 'react';
import { FaUser, FaHome, FaListAlt, FaQuoteLeft, FaSearch, FaShoppingCart, FaUtensils, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { icon: <FaHome />, text: "Home" },
        { icon: <FaUtensils />, text: "Services" },
        { icon: <FaListAlt />, text: "Plan Renew" },
        { icon: <FaQuoteLeft />, text: "Review" },
    ];

    return ( 
        <nav className='fixed top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 
        shadow-lg rounded-full px-3 sm:px-4 md:px-4 lg:px-8 py-2 md:py-3 w-[95%] max-w-7xl flex items-center 
        backdrop-blur-md border border-white/20 z-50'>

            {/* {LOGO} */}
            <div className='flex items-center space-x-2'>
                <div className='p-2 bg-white/20 rounded-full backdrop-blur-sm'>
                    <FaUtensils className='text-xl text-white animate-pulse' />
                </div>
                <h1 className='text-xl font-pacifico lg:text-2xl md:text-sm font-bold text-black'>
                    Bharat TiffinWala <span className='text-orange-100 ml-2'>Service</span>
                </h1>
            </div>

            {/* {CENTER NAVIGATION} */}
            <div className='hidden md:flex space-x-4 lg:space-x-8 ml-auto'>
                {menuItems.map((item, index) => (
                    <button key={index} className='flex items-center space-x-2 text-black hover:text-orange-600
                transition-all duration-300 focus:outline-none'>
                        <span className='text-lg transition-transform group-hover:scale-125'>
                            {item.icon}
                        </span>
                        <span className='text-base font-semibold md:text-sm group-hover:underline decoration-2
                    underline-offset-4'>
                            {item.text}
                        </span>
                    </button>
                ))}
            </div>

            {/* {RIGHT SECTION} */}
            <div className='flex items-center space-x-4 ml-auto'>
                {/* SEARCH BAR */}
                <div className='relative hidden sm:block'>
                    <input
                        type="text"
                        placeholder='Search...'
                        className='w-28 md:w-32 lg:w-48 border border-gray-300 rounded-full py-1 pl-3 pr-10
                    text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent
                    transition duration-300'
                    />
                    <FaSearch
                        className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500
                    hover:scale-110 transition-transform text-base cursor-pointer'
                    />
                </div>

                {/* SHOPPING CART */}
                <button className='p-2 md:text-sm bg-white/20 rounded-full
            hover:bg-white/30 transition-all focus:outline-none'>
                    <FaShoppingCart className='text-lg text-white' />
                </button>

                {/* LOGIN BUTTON */}
                <button className='flex items-center space-x-2 bg-gradient-to-br
            from-yellow-300 to-orange-400 px-4 py-2 rounded-full hover:shadow-lg
            hover:scale-105 transition-all focus:outline-none whitespace-nowrap'>
                    <FaUser className='text-white text-lg' />
                    <span className='font-semibold text-white text-sm'>
                        Login
                    </span>
                </button>
            </div>
            {/* {MOBILE TOGGLE} */}
            <button onClick={()=> setIsOpen(!isOpen)} aria-label='Toggle Menu'
                className='md:hidden p-2 text-white hover:text-yellow-300 transition-all focus:outline-none'>
                    {isOpen ? <FaTimes className='text-xl'/> : < FaBars className='text-xl'/>}
            </button>
           {/* {MOBILE MENU} */}
           <div className={`md:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-red-500 to-orange-600 
    rounded-2xl shadow-xl mt-3 mx-4 transition-all duration-300 transform 
    ${isOpen ? "opacity-100 visible scale-110" : "opacity-0 invisible scale-95"}`}>
    <div className='p-4 space-y4'>
        {menuItems.map((item, index)=>(
            <button key={index} className='w-full flex items-center space-x-3
            text-white hover:bg-white/20 px-4 py-3 rounded-xl transition-all focus:outline-none'>
            <span className='text-xl'>{item.icon}</span>
            <span className='text-lg'>{item.text}</span>
            </button>
        ))}
        
        </div> 
         </div>
        </nav>
    );
};

export default Navbar;
