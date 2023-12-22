import React from 'react';
import Kophie from '../assets/Kophie.png';
import StoryApp from '../assets/StoryApp.png';
import TemanTani from '../assets/TemanTani.png';
import resepku from '../assets/resepku.png';
import ceritaku from '../assets/ceritaku.png';
import {AiOutlineGithub} from 'react-icons/ai';

const Portfolio = () => {
    const portfolios = [
        {
            id : 1,
            image : ceritaku,
            github : "https://github.com/3henzijuandri3/ceritaku",
            type : "Flutter",
            title : "Ceritaku"
        },
        {
            id : 2,
            image : resepku,
            github : "https://github.com/3henzijuandri3/resepku-main",
            type : "Flutter",
            title : "Resepku"
        },

        {
            id : 3,
            image : TemanTani,
            github : "https://github.com/Teman-Tani-Bangkit/Mobile-Development",
            type : "Kotlin",
            title : "Teman Tani"
        },

        {
            id : 4,
            image : StoryApp,
            github : "https://github.com/3henzijuandri3/Story-App",
            type : "Kotlin",
            title : "Story App"
        },
        
        {
            id : 5,
            image : Kophie,
            github : "https://github.com/3henzijuandri3/Kophie",
            type : "Kotlin",
            title : "Kophie"
        },

    ];

  return (
    <section name='portfolio' className='w-full py-20 text-white bg-gradient-to-b from-black-primary to-gray-800'>
        <div className='container'>

            {/* Portfolio Judul */}
            <div className='mb-8'>
                <h1 className='pb-1 text-3xl font-bold border-b-2 border-gray-500 inline'> Portfolio </h1>

                <p className='mt-5 md:text-lg'> Here are some of my mobile portfolio (Flutter and Kotlin) </p>
            </div>

            {/* Portfolio Container */}
            <div className='grid gap-12 sm:grid-cols-2 md:grid-cols-3'>

                {portfolios.map(({id, image, github, type, title}) => (
                    <div key={id} className='h-[230px] rounded-lg shadow-md shadow-gray-600 overflow-hidden relative group'>

                        {/* Image */}
                        <img className='w-full h-full' src={image} alt="Portfolio Image" />

                        {/* Link */}
                        <div className='flex flex-col justify-center items-center w-full h-fit bg-gradient-to-b from-black-primary to-gray-800 py-2 absolute -bottom-[100px] group-hover:bottom-0 transition-all ease-in-out duration-500'> 
                            <p className='mb-1 text-lg font-bold'> {title} </p>

                            <div className='flex items-center gap-3 cursor-pointer'>
                                <a href={github} target='_blank' className='hover:text-black ease-in-out transition-all duration-300'>  
                                    <AiOutlineGithub size={24}/>
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
