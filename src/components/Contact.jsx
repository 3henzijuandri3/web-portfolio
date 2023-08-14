import React from 'react';
import {AiOutlineInstagram, AiOutlineMail, AiOutlineLinkedin, AiOutlineGithub} from 'react-icons/ai';

const Contact = () => {
  return (
    <section name='contact' className='w-full py-40 text-white bg-gradient-to-b from-black-primary to-gray-800'>
      <div className='container'>

        {/* Certification Judul */}
        <div className='flex flex-col items-center w-full'>
          <h1 className='text-4xl font-bold border-b-2 border-gray-500'> Contact Me </h1>

          <p className='mt-5 mb-4 md:text-lg'> Feel free to drop some messages here </p>

          <div className='flex items-center gap-3'>
            <a href="https://www.instagram.com/henzijuandri" target='_blank'>
                <AiOutlineInstagram size={28} className='cursor-pointer hover:text-pink-400 transition-all ease-in-out duration-300'/>
            </a>

            <a href="https://www.linkedin.com/in/henzi-juandri-514a9019a" target='_blank'>
                <AiOutlineLinkedin size={28} className='cursor-pointer hover:text-cyan-500 transition-all ease-in-out duration-300'/>
            </a>

            <a href="https://github.com/3henzijuandri3" target='_blank'>
                <AiOutlineGithub size={28} className='cursor-pointer hover:text-black transition-all ease-in-out duration-300'/>
            </a>

            <a href="mailto:henzijuandri.work@gmail.com">
                <AiOutlineMail size={28} className='cursor-pointer hover:text-red-500 transition-all ease-in-out duration-300'/>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact
