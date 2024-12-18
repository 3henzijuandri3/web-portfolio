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
          <div className='flex flex-col justify-center items-start gap-8 mb-5 tracking-wide lg:flex-row'>

            {/* About Picture */}
            <div className='w-full lg:w-[40%] xl:w-[30%]'>
              <img className='w-full' src={Image} alt="Gambar Henzi" />
            </div>

            {/* About Text */}
            <div className='w-full lg:w-[60%] xl:w-[70%]'>
              <p className='mb-4 text-base text-justify md:text-lg'>
                Hi! I’m Henzi Juandri, an enthusiastic Informatics graduate with a specialization in Software Development, particularly in front-end and mobile application development. Based in Bandung, I excel in dynamic and fast-paced environments, quickly learning and adapting to new technologies.
              </p>

              <p className='mb-4 text-base text-justify md:text-lg'>
                During my academic journey at 
                <a href="https://telkomuniversity.ac.id/" className='pl-1 text-cyan-500'>Telkom University</a>, I maintained a GPA of 3.80/4.00 and honed my skills through projects and internships. I have hands-on experience with various technologies, including React.js, Next.js, Flutter, Kotlin, and Tailwind CSS, and have contributed to impactful projects, such as the redesign of Telkom DDB internship platforms and mobile applications for Maxximum Digital.
              </p>

              <p className='mb-4 text-base text-justify md:text-lg'>
                Beyond academics, I actively participated as a laboratory assistant at the Advanced Software Engineering Laboratory, where I developed strong teamwork and organizational skills. I also pursued certifications, including Bangkit Academy’s Android Learning Path and IDCamp’s Front-End Developer program, to continuously expand my knowledge and expertise.
              </p>

              <p className='text-base text-justify md:text-lg'>
                With a curious and team-oriented mindset, I’m eager to contribute, solve challenges, and make a meaningful impact in the field of software development.
              </p>
            </div>

          </div>
        </div>
    </section>
  )
}

export default About;
