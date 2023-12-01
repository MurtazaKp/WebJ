import React, { useState, useEffect } from 'react';
import { client } from '@/lib/sanity';
import Link from "next/link";

async function getData() {
    const query = `*[_type == "component"]{
        sections[16]
      }`;
    const data = await client.fetch(query);
    return data;
  }

const Error = () => {

    const [errorData, setData] = useState<any>({});

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

    return (
        <div className="flex items-center flex-col justify-center lg:flex-row py-28 px-6 md:px-24 md:py-20 lg:py-32 gap-16 lg:gap-28">
            <div className="w-full lg:w-1/2">
                <img className="hidden lg:block" src="https://i.ibb.co/v30JLYr/Group-192-2.png" alt="" />
                <img className="hidden md:block lg:hidden" src="https://i.ibb.co/c1ggfn2/Group-193.png" alt="" />
                <img className="md:hidden" src="https://i.ibb.co/8gTVH2Y/Group-198.png" alt="" />
            </div>
            <div className="w-full lg:w-1/2">
                <h1 className="py-4 text-3xl lg:text-4xl font-extrabold text-gray-800">{errorData.Title}</h1>
                <p className="py-2 text-base text-gray-800">{errorData.Description}</p>
                {errorData.Button  &&  <Link href={errorData.Button.href}>  <button className="w-full lg:w-auto my-4 border rounded-md px-1 sm:px-10 py-3 bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">{errorData.Button.label}</button></Link> }
            </div>
        </div>
    );
};

export default Error;
