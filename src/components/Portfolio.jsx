import React, { useState } from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { AiFillPlayCircle } from 'react-icons/ai';

import Kophie from '../assets/Kophie.png';
import StoryApp from '../assets/StoryApp.png';
import TemanTani from '../assets/TemanTani.png';
import resepku from '../assets/resepku.png';
import ceritaku from '../assets/ceritaku.png';
import bukuku from '../assets/bukuku.png';

import Kuphie from '../assets/Kuphie.jpg';
import Rack from '../assets/Rack.jpg';
import Silidi from '../assets/Silidi.jpg';


const Portfolio = () => {
    const [isMobile, setIsMobile] = useState(true);

    const webPortfolios = [
        {
            id: 1,
            image: Kuphie,
            github: "https://github.com/3henzijuandri3/Kuphie",
            link: "https://3henzijuandri3.github.io/Kuphie",
            title: "Kuphie"
        },
        {
            id: 2,
            image: Rack,
            github: "https://github.com/3henzijuandri3/Book-Shelf",
            link: "https://3henzijuandri3.github.io/Book-Shelf",
            title: "Rack"
        },
        {
            id: 3,
            image: Silidi,
            github: "https://github.com/3henzijuandri3/siLidi",
            link: "https://silidi-front-end.netlify.app",
            title: "Silidi"
        },
    ];

    const mobilePortfolios = [
        {
            id: 1,
            image: ceritaku,
            github: "https://github.com/3henzijuandri3/ceritaku",
            type: "Flutter",
            title: "Ceritaku"
        },
        {
            id: 2,
            image: bukuku,
            github: "https://github.com/3henzijuandri3/bukuku",
            type: "Flutter",
            title: "Bukuku"
        },
        {
            id: 3,
            image: resepku,
            github: "https://github.com/3henzijuandri3/resepku-main",
            type: "Flutter",
            title: "Resepku"
        },
        {
            id: 4,
            image: TemanTani,
            github: "https://github.com/Teman-Tani-Bangkit/Mobile-Development",
            type: "Kotlin",
            title: "Teman Tani"
        },
        {
            id: 5,
            image: StoryApp,
            github: "https://github.com/3henzijuandri3/Story-App",
            type: "Kotlin",
            title: "Story App"
        },
        {
            id: 6,
            image: Kophie,
            github: "https://github.com/3henzijuandri3/Kophie",
            type: "Kotlin",
            title: "Kophie"
        },
    ];

    return (
        <section name='portfolio' className='w-full py-20 text-white bg-gradient-to-b from-black-primary to-gray-800'>
            <div className='container'>

                {/* Portfolio Judul */}
                <div className='mb-4'>
                    <h1 className='text-3xl font-bold border-b-2 border-gray-500 inline'> Portfolio </h1>

                    {/* Buttons */}
                    <div className="flex mt-5">
                        <button
                            onClick={() => setIsMobile(true)}
                            className={`mr-4 px-4 py-2 ${isMobile ? 'bg-gradient-to-r from-cyan-500 to-blue-500' : 'bg-gray-700'} text-white rounded-lg`}
                        >
                            Mobile
                        </button>

                        <button
                            onClick={() => setIsMobile(false)}
                            className={`px-4 py-2 ${!isMobile ? 'bg-gradient-to-r from-cyan-500 to-blue-500' : 'bg-gray-700'} text-white rounded-lg`}
                        >
                            Website
                        </button>
                    </div>

                    <p className='mt-8 md:text-lg'> Here are some of my {isMobile ? 'mobile' : 'website'} portfolio </p>
                </div>

                {/* Portfolio Container */}
                <div className='grid gap-12 sm:grid-cols-2 md:grid-cols-3'>

                    {!isMobile && webPortfolios.map(({ id, image, github, link, title }) => (
                        <div key={id} className='h-[230px] rounded-lg shadow-md shadow-gray-600 overflow-hidden relative group'>

                            {/* Image */}
                            <img className='w-full h-full' src={image} alt="Portfolio Image" />

                            {/* Link */}
                            <div className='flex flex-col justify-center items-center w-full h-fit bg-gradient-to-b from-black-primary to-gray-800 py-2 absolute -bottom-[100px] group-hover:bottom-0 transition-all ease-in-out duration-500'>
                                <p className='mb-1 text-lg font-bold'> {title} </p>

                                <div className='flex items-center gap-3 cursor-pointer'>
                                    <a href={github} target='_blank' className='hover:text-black ease-in-out transition-all duration-300'>
                                        <AiOutlineGithub size={24} />
                                    </a>
                                    <a href={link} target='_blank' className='hover:text-black ease-in-out transition-all duration-300'>
                                        <AiFillPlayCircle size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}

                    {isMobile && mobilePortfolios.map(({ id, image, github, type, title }) => (
                        <div key={id} className='h-[230px] rounded-lg shadow-md shadow-gray-600 overflow-hidden relative group'>

                            {/* Image */}
                            <img className='w-full h-full' src={image} alt="Portfolio Image" />

                            {/* Link */}
                            <div className='flex flex-col justify-center items-center w-full h-fit bg-gradient-to-b from-black-primary to-gray-800 py-2 absolute -bottom-[100px] group-hover:bottom-0 transition-all ease-in-out duration-500'>
                                <p className='mb-1 text-lg font-bold'> {title} </p>

                                <div className='flex items-center gap-3 cursor-pointer'>
                                    <a href={github} target='_blank' className='hover:text-black ease-in-out transition-all duration-300'>
                                        <AiOutlineGithub size={24} />
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

export default Portfolio;
