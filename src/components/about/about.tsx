import React, { useState, useEffect } from 'react';
import { client } from '@/lib/sanity';
import { urlForImage } from '@/lib/image';

async function getData() {
  const query = `*[_type == "component"]{
    sections[0]
  }`;
  const data = await client.fetch(query);
  return data;
}

const About = () => {
  const [data, setData] = useState<any>({});

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getData();
        setData(result[0]?.sections);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);



  return (
    <div>
      {data && (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
          <div className="lg:w-10/12 w-full">
            <p className="font-normal text-sm leading-3 text-indigo-700 hover:text-indigo-800 cursor-pointer">
              {data.subheading}
            </p>
            <h2 className="xl:w-8/12 lg:w-10/12 w-full font-bold text-gray-800 lg:text-4xl text-3xl lg:leading-10 leading-9 mt-2">
              {data.heading}
            </h2>
            <p className="font-normal text-base leading-6 text-gray-600 mt-6">{data.description}</p>
          </div>

          <div className="lg:mt-14 sm:mt-10 mt-12">
            <img src={data?.AboutImage?.src && urlForImage(data.AboutImage.src).url()} alt="About Image" />
          </div>

          <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
            <div className="w-full xl:w-5/12 lg:w-6/12">
              <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">{data.sectionHeading}</h2>
              {data.sectionDescription &&
                data.sectionDescription.map((desc:any, index:number) => (
                  <p key={index} className="font-normal text-base leading-6 text-gray-600 mt-4">
                    {desc.description}
                  </p>
                ))}
            </div>
            <div className="lg:flex items-start w-full lg:w-1/2">
              <img className="w-full" src="https://i.ibb.co/2kxWpNm/Group-740.png" alt="people discussing on board" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
