import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { client } from '@/lib/sanity';
import { urlForImage } from '@/lib/image';


async function getData() {
    const query = `*[_type == "component"]{
      sections[14]
    }`;
    const data = await client.fetch(query);
   
    return data;
   
    
  }

// const partnersData = [
//   { id: 1, logo: "https://cdn.tuk.dev/assets/adidas-dark.png" },
//   { id: 2, logo: "https://cdn.tuk.dev/assets/channel-dark.png" },
//   { id: 3, logo: "https://cdn.tuk.dev/assets/nike-dark.png" },
//   { id: 4, logo: "https://cdn.tuk.dev/assets/toyota-dark.png" },
//   { id: 5, logo: "https://cdn.tuk.dev/assets/gs1-dark.png" },
//   { id: 6, logo: "https://cdn.tuk.dev/assets/berry-dark.png" },
//   { id: 7, logo: "https://cdn.tuk.dev/assets/min-dark.png" },
//   { id: 8, logo: "https://cdn.tuk.dev/assets/honda-dark.png" },
// ];

function Index() {
  const [partnersData, setData] = useState<any>({});

    
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

    console.log(partnersData,"======here");
  return (
    <div className="container mx-auto pt-16">
      <div className="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-16">
        <h1 className="xl:text-5xl md:text-3xl text-xl text-center text-gray-800 font-extrabold mb-5 pt-4">
          {partnersData.heading}
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-center text-gray-600 font-normal xl:w-10/12 xl:mx-auto">
          {partnersData.description}
        </p>
      </div>
      <div className="my-16 sm:px-15 mx-5  flex flex-wrap border">
      {partnersData.partnerLogo &&
    partnersData.partnerLogo.map((partner: any, index: number) => {
      return (
        <div
          key={index}
          className={`w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:py-10 py-16 items-center`}
        >
          <img
            src={urlForImage(partner.logo.src).url()}
            alt={`Display Avatar of ${partner.logo.alt}`}
            role="img"
          />
        </div>
      );
    })}
      </div>
    </div>
  );
}

export default Index;
