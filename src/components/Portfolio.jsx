import React from 'react';
import Kuphie from '../assets/Kuphie.jpg';
import Kophie from '../assets/Kophie.png';
import Rack from '../assets/Rack.jpg';
import Silidi from '../assets/Silidi.jpg';
import StoryApp from '../assets/StoryApp.png';
import TemanTani from '../assets/TemanTani.png';
import {AiOutlinePlayCircle, AiOutlineGithub} from 'react-icons/ai';

const Portfolio = () => {
    const portfolios = [
        {
            id : 1,
            image : TemanTani,
            github : "https://github.com/Teman-Tani-Bangkit/Mobile-Development",
            web : null,
            type : "Mobile",
            title : "Teman Tani"
        },

        {
            id : 2,
            image : StoryApp,
            github : "https://github.com/3henzijuandri3/Story-App",
            web : null,
            type : "Mobile",
            title : "Story App"
        },
        
        {
            id : 3,
            image : Kophie,
            github : "https://github.com/3henzijuandri3/Kophie",
            web : null,
            type : "Mobile",
            title : "Kophie"
        },

        {
            id : 4,
            image : Silidi,
            github : "https://github.com/3henzijuandri3/siLidi",
            web : "https://silidi-front-end.netlify.app",
            type : "Website",
            title : "Silidi"
        },

        {
            id : 5,
            image : Rack,
            github : "https://github.com/3henzijuandri3/Book-Shelf",
            web : "https://3henzijuandri3.github.io/Book-Shelf",
            type : "Website",
            title : "Rack"
        },

        {
            id : 6,
            image : Kuphie,
            github : "https://github.com/3henzijuandri3/Kuphie",
            web : "https://3henzijuandri3.github.io/Kuphie",
            type : "Website",
            title : "Kuphie"
        },

    ];

  return (
    <section name='portfolio' className='w-full py-20 text-white bg-gradient-to-b from-black-primary to-gray-800'>
        <div className='container'>

            {/* Portfolio Judul */}
            <div className='mb-8'>
                <h1 className='pb-1 text-3xl font-bold border-b-2 border-gray-500 inline'> Portfolio </h1>

                <p className='mt-5 md:text-lg'> Here are some of my website and mobile portfolio </p>
            </div>

            {/* Portfolio Container */}
            <div className='grid gap-12 sm:grid-cols-2 md:grid-cols-3'>

                {portfolios.map(({id, image, github, web, type, title}) => (
                    <div key={id} className='h-[230px] rounded-lg shadow-md shadow-gray-600 overflow-hidden relative group'>

                        {/* Image */}
                        <img className='w-full h-full' src={image} alt="Portfolio Image" />

                        {/* Link */}
                        <div className='flex flex-col justify-center items-center w-full h-fit bg-gradient-to-b from-black-primary to-gray-800 py-2 absolute -bottom-[100px] group-hover:bottom-0 transition-all ease-in-out duration-500'> 
                            <p className='mb-1 text-lg font-bold'> {title} </p>

                            <div className='flex items-center gap-3 cursor-pointer'>
                                <a href={web} target='_blank' className={`${type == 'Mobile' ? "hidden" : "block"}`}>
                                    <AiOutlinePlayCircle color='white' size={24}/>
                                </a>

                                <a href={github} target='_blank'>  
                                    <AiOutlineGithub color='white' size={24}/>
                                </a>
                            </div>
                        </div>

                        {/* Category */}
                        <div className='px-3 py-2 text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg absolute top-2 right-2'>
                            <p className='text-sm font-bold'>{type}</p>
                        </div>

                    </div>
                ))}

            </div>

        </div>
    </section>
  )
}

export default Portfolio
