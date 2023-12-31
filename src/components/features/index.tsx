import React, { useState, useEffect } from 'react';
import { client } from '@/lib/sanity';
import { urlForImage } from '@/lib/image';
import { FeatureSvg, FeatureSvgFive, FeatureSvgFour, FeatureSvgSix, FeatureSvgThree, FeatureSvgTwo } from '../svg';

async function getData() {
  const query = `*[_type == "component"]{
      sections[5]
    }`;
  const data = await client.fetch(query);
  return data;
}

const Features = () => {
  const [featureData, setData] = useState<any>({});

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



const SvgData = [FeatureSvg,FeatureSvgTwo,FeatureSvgThree,FeatureSvgFour,FeatureSvgFive,FeatureSvgSix]

  return (
  <div>
   <section className="mx-auto container py-20 ">
     <div className="flex justify-center items-center flex-col">
       <div className="lg:text-6xl md:text-5xl text-4xl font-black leading-10 text-center text-gray-800">
         <h1>{featureData.featureTitle}</h1>
       </div>
       <div className="pt-24 grid lg:grid-cols-3 md:grid-cols-2 justify-center items-center xl:gap-y-16 gap-y-20 gap-x-16 lg:gap-x-20 xl:gap-x-0 lg:px-10 xl:px-0">
        {featureData.features && featureData.features.map((feature:any,index:any)=>{
           const SvgComponent = SvgData[index];
          return(
            <div key={feature.title} className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
            <div className="mb-6">
              <SvgComponent/>
            </div>
            <div className="text-gray-800 text-2xl font-semibold text-center">
              <h2>{feature.title}</h2>
            </div>
            <div className="text-gray-600  mt-2 text-lg text-center ">
              <p>{feature.description}</p>
            </div>
          </div>
          )
        })}
         
      
       </div>
     </div>
   </section>
 </div>
  )
}

export default Features