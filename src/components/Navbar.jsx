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

    const menuShow = "top-full transition-all duration-500";
    const menuHide = "-top-[400%] transition-all duration-500";

    function handleMenuClick(){
        setMenuClicked(!menuClicked);
    };


  return (
    
    // Navbar Content Wrapper 
    <header className='w-full h-20 bg-[#eeeff1]'>
        <div className='container flex justify-between items-center w-full h-full relative'>

            {/* Nama */}
            <h1 className='text-4xl text-black font-signature font-bold'> Henzi </h1>

            {/* Navigation Tablet & Pc */}
            <nav className='hidden md:block text-[#1a1c20]'>
                <ul className='flex'>
                    {links.map(({id, nav}) => (

                        <li key={id} className='px-4 font-medium cursor-pointer capitalize hover:scale-105 duration-200 ease-in-out'> {nav} </li>
                    
                    ))}
                </ul>
            </nav>

            {/* Navigation Mobile Phone */}
            <nav className={`${!menuClicked ? menuHide : menuShow} block md:hidden w-full h-fit absolute left-0 right-0 text-[#1a1c20] bg-[#eeeff1] -z-[1]`}>
                <ul className='flex flex-col text-center'>
                    {links.map(({id, nav}) => (

                        <li key={id} className='py-4 font-medium cursor-pointer capitalize'> {nav} </li>
                    
                    ))}
                </ul>
            </nav>

            {/* Hamburger Menu */}
            <div onClick={handleMenuClick} className='cursor-pointer md:hidden'>
                { !menuClicked ? <FaBars size={22} color='#1a1c20'/> : <FaTimes size={22} color='#1a1c20'/> }
            </div>

        </div>
    </header>
  
  )
}

export default NavBar
