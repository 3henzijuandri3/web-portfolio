import React from 'react';
import {PiLinkSimpleHorizontal} from "react-icons/pi";
import AndroidIntermediate from '../assets/1.png';
import AndroidPemula from '../assets/2.png';
import Bangkit from '../assets/3.png';
import DasarWeb from '../assets/4.png';
import FrontEndPemula from '../assets/5.png';
import FundamentalAndroid from '../assets/6.png';
import HTMLCSS from '../assets/7.png';
import JavascriptES6 from '../assets/8.png';
import JetpackCompose from '../assets/9.png';
import PemrogramanKotlin from '../assets/10.png';
import SOLIDPrincliple from '../assets/11.png';
import UX from '../assets/12.png';


const Certification = () => {
  const certificates = [
    
    {
      id : 1,
      image : Bangkit,
      title : "Android Mobile Learning Path - Bangkit 2023",
      url : "https://drive.google.com/file/d/18W48n9xLZ1HOoWPL2_Iqp-8-jD2rzWkF/view?usp=sharing"
    },

    {
      id : 2,
      image : PemrogramanKotlin,
      title : "Memulai Pemrograman Dengan Kotlin - Dicoding",
      url : "https://www.dicoding.com/certificates/MRZM4JJDRXYQ"
    },

    {
      id : 3,
      image : AndroidPemula,
      title : "Belajar Membuat Aplikasi Android Untuk Pemula - Dicoding",
      url : "https://www.dicoding.com/certificates/NVP7KLQ04ZR0"
    },

    {
      id : 4,
      image : FundamentalAndroid,
      title : "Belajar Fundamental Aplikasi Android - Dicoding",
      url : "https://www.dicoding.com/certificates/2VX3JNJDQPYQ"
    },

    {
      id : 5,
      image : AndroidIntermediate,
      title : "Belajar Pengembangan Aplikasi Android Intermediate - Dicoding",
      url : "https://www.dicoding.com/certificates/L4PQG6VYVZO1"
    },

    {
      id : 6,
      image : JetpackCompose,
      title : "Belajar Membuat Aplikasi Android Dengan Jetpack Compose - Dicoding",
      url : "https://www.dicoding.com/certificates/6RPNWY504P2M"
    },

    {
      id : 7,
      image : DasarWeb,
      title : "Belajar Dasar Pemrograman Web - Dicoding",
      url : "https://www.dicoding.com/certificates/4EXG5G5DEXRL"
    },

    {
      id : 8,
      image : FrontEndPemula,
      title : "Belajar Membuat Front-End Web Untuk Pemula - Dicoding",
      url : "https://www.dicoding.com/certificates/NVP7KLQ04ZR0"
    },

    {
      id : 9,
      image : HTMLCSS,
      title : "Fundamental HTML & CSS - Progate",
      url : "https://progate.com/course_certificate/bcb57e7brhukqq"
    },

    {
      id : 10,
      image : JavascriptES6,
      title : "Javascript Untuk Pengembangan Web - Progate",
      url : "https://progate.com/course_certificate/c5d4f3c1rhy7zl"
    },
    
    {
      id : 11,
      image : SOLIDPrincliple,
      title : "Belajar Prinsip Pemrograman Solid - Dicoding",
      url : "https://www.dicoding.com/certificates/07Z6VRMGWXQR"
    },

    {
      id : 12,
      image : UX,
      title : "Belajar UX Design - Dicoding",
      url : "https://www.dicoding.com/certificates/JLX1DWOGNZ72"
    },

  ];

  return (
    <section name='certification' className='w-full py-20 text-white bg-gradient-to-b from-gray-800 to-black-primary'>
      <div className="container">

        {/* Certification Judul */}
        <div className='mb-8'>
          <h1 className='pb-1 text-3xl font-bold border-b-2 border-gray-500 inline'> Certification </h1>

          <p className='mt-5 md:text-lg'> Here are some of my accompplishment in Software Engineering </p>
        </div>

        {/* Certification Container */}
        <div className='grid gap-12 sm:grid-cols-2 md:grid-cols-3'>

          {certificates.map(({id, image, title, url}) => (
            <div key={id} className='h-[230px] rounded-lg overflow-hidden relative group hover:shadow-md hover:shadow-gray-600 transition-all ease-in-out duration-500'>

              {/* Image */}
              <img className='w-full h-full' src={image} alt="Portfolio Image" />

              {/* Link */}
              <div className='flex justify-center items-center w-full h-full bg-black opacity-0 absolute top-0 bottom-0 left-0 right-0 group-hover:opacity-80 transition-all ease-in-out duration-500'>

                <div className='flex flex-col px-5 text-center absolute -bottom-10 group-hover:bottom-14 transition-all ease-in-out duration-500'>
                  <p className='mb-3 text-xl text-white font-bold'> {title} </p>

                  <a href={url} className='mx-auto hover:text-cyan-500 transition-all ease-in-out duration-300' target='_blank'> <PiLinkSimpleHorizontal size={25}/> </a>
                </div>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  )   
}

export default Certification
