import React, { useState, useEffect } from 'react';
import { client } from '@/lib/sanity';
import { urlForImage } from '@/lib/image';


async function getData() {
    const query = `*[_type == "component"]{
        sections[2]
      }`;
    const data = await client.fetch(query);
    return data;
  }
export default function Pricing() {

    const [pricingData, setData] = useState<any>({});

    
    useEffect(() => {
      async function fetchData() {
        try {
          const result = await getData();
          setData(result[0]?.sections);
          console.log(result);
          
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
  
      fetchData();
    }, []);

    console.log(pricingData);
    
    
    return (
        <>
            <div className="xl:mx-auto xl:container py-20 2xl:px-0 px-6">
                <div className="lg:flex items-center justify-between">
                    <div className=" lg:w-1/2 w-full">
                        <p className="text-base leading-4 text-gray-600">{pricingData.subheading}</p>
                        <h1 role="heading" className="md:text-5xl text-3xl font-bold leading-10 mt-3 text-gray-800">
                           {pricingData.heading}
                        </h1>
                        <p role="contentinfo" className="text-base leading-5 mt-5 w-10/12 text-gray-600">
                            {pricingData.mainDescription}
                        </p>
                        
                    </div>
                    <div className="xl:w-1/2 lg:w-7/12 relative w-full lg:mt-0 mt-12 md:px-8" role="list">
                        <img src="https://i.ibb.co/0n6DSS3/bgimg.png" className="absolute w-full -ml-12 mt-24" alt="background circle images" />
                        {pricingData.pricingCard && pricingData.pricingCard.map((card:any,index:number)=>{
                            return (
                                <div role="listitem" key={index} className="bg-white group cursor-pointer shadow rounded-lg mt-3 flex relative z-30">
                                <div className="w-2.5  h-auto group-hover:bg-indigo-700 group-hover:rounded-tl-md group-hover:rounded-bl-md" />
                                <div className="w-full p-8">
                                    <div className="md:flex items-center justify-between">
                                        <h2 className="text-2xl font-semibold leading-6 text-gray-800">{card.title}</h2>
                                        <p className="text-2xl font-semibold md:mt-0 mt-4 leading-6 text-gray-800">{card.Plan}</p>
                                    </div>
                                    <p className="md:w-80 text-base leading-6 mt-4 text-gray-600">{card.description}</p>
                                </div>
                            </div>
                            )
                        })}
                       
                       
                    </div>
                </div>
            </div>
        </>
    );
}
