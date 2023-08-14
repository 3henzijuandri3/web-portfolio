import React from 'react';
import Image from "../assets/HENZI.png";

const About = () => {
  return (
    <section name="about" className='w-full py-20 text-white bg-gradient-to-b from-gray-800 to-black-primary'>
        <div className='container flex flex-col w-full'>

          {/* About Judul */}
          <div className='mb-5'>
            <h1 className='pb-1 text-3xl font-bold border-b-2 border-gray-500 inline'> About Me </h1>
          </div>

          {/* About Content */}
          <div className='flex flex-col justify-center items-start gap-8 tracking-wide lg:flex-row'>

            {/* About Picture */}
            <div className='w-full lg:w-[40%] xl:w-[30%]'>
              <img className='w-full' src={Image} alt="Gambar Henzi" />
            </div>

            {/* About Text */}
            <div className='w-full lg:w-[60%] xl:w-[70%]'>
              <p className='mb-4 text-base text-justify md:text-lg'>I am Henzi Juandri a fourth-year student at 
                <a  href="https://telkomuniversity.ac.id/" target="_blank" className='pl-1 text-cyan-500'>Telkom University</a>
                , currently in 7th semester, majoring in Informatics. I focused on Mobile Development and Web Front-End Development, mainly in Mobile Development. 
              </p>

              <p className='mb-4 text-base text-justify md:text-lg'>
                I have studied subjects that are fundamental for software development, such as programming, data structure, databases, etc. I also learn HTML, CSS, and Javascript for the basics of web development from several online web development courses. Furthermore, in order to expand my knowledge in Software Engineering, I joined 
                <a href="https://grow.google/intl/id_id/bangkit/?tab=machine-learning" target="_blank" className='px-1 text-cyan-500'>Bangkit Academy led by Google, GoTo, & Traveloka - Android Learning Path</a> 
                and successfully be in Top 68 Team (out of 750+ team) in final Capstone Project.
              </p>

              <p className='text-base text-justify md:text-lg'>Besides my programming experience, I participate in my faculty laboratory (ASE Laboratory) as a laboratory assistant in the logistic division. I help maintain the laboratory inventory and other logistic-related tasks. Being a laboratory assistant increases my soft-skills in teamwork and organizing.</p>
            </div>

          </div>

        </div>
    </section>
  )
}

export default About
