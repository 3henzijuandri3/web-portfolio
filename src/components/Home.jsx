import React from 'react';
import Typed from 'react-typed';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';

const Home = () => {
  return (
    <section name="home" className='w-full h-[100dvh] bg-gradient-to-b from-black-primary to-gray-800'>
        <div className='container flex flex-col justify-center items-center max-w-[800px] h-full mt-12 text-white text-center'>
            <p className='pb-2 text-lg text-cyan-500 font-bold sm:text-xl md:text-2xl md:pb-0'> HELLO EVERYONE </p>

            <h1 className='py-4 text-4xl font-bold sm:text-5xl md:py-5 md:text-6xl'> I am Henzi Juandri </h1>

            <p className='pt-1 text-base text-gray-500 font-bold md:text-lg'> A senior year Student at Telkom University, interested in Software Engineering, focusing in 
                
                <span>
                    <Typed className='pt-1 pl-1 text-cyan-500'
                    strings={['Web Dev', 'Mobile Dev']} 
                    typeSpeed={120}
                    backSpeed={140}
                    // loop={true}
                    />    
                </span> 
            
            </p>

            <button className='flex justify-center items-center w-[150px] mt-8 py-2 rounded-md font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer group'>
                About Me 

                <span className='pl-1 pt-[1px] group-hover:rotate-90 transition-all duration-300'>
                    <MdOutlineKeyboardArrowRight size={25}/>
                </span>
            </button>
        </div>
    </section>
  )
}

export default Home
