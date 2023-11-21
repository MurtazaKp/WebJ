import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { client } from '@/lib/sanity';
import { urlForImage } from '@/lib/image';

async function getData() {
    const query = `*[_type == "component"]{
        sections[4]
      }`;
    const data = await client.fetch(query);
    return data;
  }

const Cta = () => {
    const [ctaData, setData] = useState<any>({});

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
 
    
 
const Ctaprops = {
    title:"Start Your Journey Today! Explore New Adventures and Create Lasting Memories.",
    button:{
        label:'join the commuinity',
        href:"/contact",
        target:"_blank"
    }
}
  return (
    <div className="bg-gray-100 overflow-y-hidden">
    <div className="mx-auto container py-12 px-4 lg:px-0">
        <div className="w-full flex justify-center">
            <div className="w-full md:w-11/12 xl:w-full  bg-gradient-to-r from-indigo-500 to-indigo-700 md:py-8 md:px-8 px-5 py-4 xl:px-12 xl:py-16">
                <div>
                    <div className="flex flex-wrap items-center md:flex-row flex-col-reverse">
                        <div className="md:w-2/3 w-full pb-6 md:pb-0 md:pr-6 flex-col md:block flex items-center justify-center md:pt-0 pt-4">
                            <div>
                                <h1 role="heading" className="text-xl md:text-2xl lg:text-4xl xl:text-4xl lg:w-10/12 text-white font-black leading-6 lg:leading-10 md:text-left text-center">{ctaData.ctaTitle}</h1>
                            </div>
                            <Link href={ctaData?.ctaButton?.href && ctaData?.ctaButton?.href} target={ctaData?.ctaButton?.target && ctaData?.ctaButton?.target}>
                            <button role="button" aria-label="Join the community" className="mt-5 lg:mt-8 py-3 lg:py-4 px-4 lg:px-8 bg-white font-bold text-indigo-700 rounded-lg text-sm lg:text-lg xl:text-xl hover:bg-opacity-90  focus:ring-2 focus:ring-offset-2 focus:ring-white focus:outline-none">{ctaData?.ctaButton?.label}</button>

                            </Link>
                        </div>
                        <div className="md:w-1/3 w-2/3">
                            <img src={ctaData?.ctaImage?.src && urlForImage(ctaData?.ctaImage?.src).url()} alt={ctaData.alt} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}



export default Cta