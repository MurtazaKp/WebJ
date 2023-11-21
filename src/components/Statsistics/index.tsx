import React from 'react'
import CountUp from 'react-countup';

const Statistics = () => {
  const statisticsProps = {
    Heading: "Our Travel Expertise",
    Subheading: "Trusted by Adventurers Worldwide",
    Stats: [
      { title: "Destinations Explored", number: 75,symbol:"%" },
      { title: "Happy Travelers", number: 1000,symbol:"+" },
      { title: "Years of Experience", number: 20 ,symbol:"+"},
      { title: "Customer Satisfaction", number: 95 ,symbol:"%" },
    ]
  };
  return (
    <div>
        <div className="pb-20">
        <div className="mx-auto bg-gradient-to-l from-indigo-600 to-indigo-700 h-96">
          <div className="mx-auto container w-full flex flex-col justify-center items-center">
            <div className="flex justify-center items-center flex-col">
              <div className="mt-20">
                <h2 className="lg:text-6xl text-center md:text-5xl text-4xl font-black leading-10 text-white">{statisticsProps.Heading}</h2>
              </div>
              <div className="mt-6 mx-2 md:mx-0 text-center">
                <p className="lg:text-lg md:text-base leading-6 text-sm  text-white">{statisticsProps.Subheading}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto container md:-mt-28 -mt-32  lg:-mt-20 flex justify-center items-center">
          <div className="grid lg:grid-cols-4 md:grid-cols-4 px-5 grid-cols-2 gap-x-2 gap-y-2 lg:gap-x-6 md:gap-x-6 md:gap-y-6 md:gap-y-6">
            {
              statisticsProps.Stats.map((stat)=>{
                return(
                  <div key={stat.number} className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
                  <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800"><CountUp enableScrollSpy={true} start={0} end={stat.number}/>{stat.symbol}</h2>
                  <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">{stat.title}</p>
                </div>
                )
              })
            }
         
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default Statistics