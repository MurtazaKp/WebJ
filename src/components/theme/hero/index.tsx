import React from 'react'

const HeroSection = () => {
  return (
    <div className="bg-gray-100">
    <div className="container mx-auto flex flex-col items-center py-12 sm:py-20">
        <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl w-10/12 text-center text-gray-800 font-black ">
            Web Wizards Crafting <span className='text-indigo-700'>Digital Excellence</span> for Your Online Success
            </h1>
            <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-600 font-normal text-center text-sm sm:text-lg">we are the architects of digital transformation. With a focus on innovative web development, we turn your ideas into engaging online experiences.  </p>
        </div>
        <div className="flex justify-center items-center">
            <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm">Get Started</button>
            <button className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-transparent transition duration-150 ease-in-out hover:border-indigo-600 lg:text-xl lg:font-bold  hover:text-indigo-600 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-10 py-2 sm:py-4 text-sm">Learn More</button>
        </div>
    </div>
</div>
  )
}

export default HeroSection