import React from 'react';
import { useState } from 'react';
import {FaBars, FaTimes} from "react-icons/fa";

const NavBar = () => {

    const [menuClicked, setMenuClicked] = useState(false);

    const links = [
        {
            id : 1,
            nav : "home"
        },

        {
            id : 2,
            nav : "about"
        },

        {
            id : 3,
            nav : "portfolio"
        },

        {
            id : 4,
            nav : "experience"
        },

        {
            id : 5,
            nav : "contact"
        }
    ];

    const menuShow = "opacity-100 transition-all duration-300";
    const menuHide = "hidden opacity-0 transition-all duration-300";

    function handleMenuClick(){
        setMenuClicked(!menuClicked);
    };


  return (
    
    // Navbar Content Wrapper 
    <header className='w-full h-20 bg-black-primary fixed top-0 z-10'>
        <div className='container flex justify-between items-center w-full h-full'>

            {/* Nama */}
            <h1 className='text-2xl text-white font-bold'> PORTFOLIO. </h1>

            {/* Navigation Tablet & Pc */}
            <nav className='hidden md:block text-gray-400'>
                <ul className='flex'>
                    {links.map(({id, nav}) => (

                        <li key={id} className='px-4 font-medium cursor-pointer capitalize hover:scale-105 hover:text-white duration-200 ease-in-out'> {nav} </li>
                    
                    ))}
                </ul>
            </nav>

            {/* Navigation Mobile Phone */}
            <nav className={`${!menuClicked ? menuHide : menuShow} block md:hidden w-full h-screen absolute top-full left-0 right-0 text-center text-gray-400 bg-black-primary -z-[1]`}>
                <ul className='flex flex-col h-full justify-start items-center'>
                    {links.map(({id, nav}) => (

                        <li key={id} className='py-6 font-medium cursor-pointer capitalize relative -z-[2]'> {nav} </li>
                    
                    ))}
                </ul>
            </nav>

            {/* Hamburger Menu */}
            <div onClick={handleMenuClick} className='cursor-pointer md:hidden'>
                { !menuClicked ? <FaBars size={22} color='white'/> : <FaTimes size={22} color='white'/> }
            </div>

        </div>
    </header>
  
  )
}

export default NavBar
