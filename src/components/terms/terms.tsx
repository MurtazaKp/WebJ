import React, { useState, useEffect } from 'react';
import { client } from '@/lib/sanity';
import { PortableText } from '@portabletext/react';

async function getData() {
    const query = `*[_type == "component"]{
        sections[13]
      }`;
    const data = await client.fetch(query);
    return data;
  }

const Terms = () => {
    const [termsData, setData] = useState<any>({});

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
    <div className='p-5 lg:p-20'>
        <h1 className='text-5xl mb-10'>{termsData.termsHeading}</h1>
        <PortableText value={termsData.terms}/>
    </div>
  )
}

export default Terms