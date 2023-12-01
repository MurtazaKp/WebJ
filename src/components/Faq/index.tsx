// pages/index.js
import React, { useState,useEffect } from 'react';
import { client } from '@/lib/sanity';

import { useSpring, animated } from 'react-spring';

async function getData() {
    const query = `*[_type == "component"]{
        sections[17]
      }`;
    const data = await client.fetch(query);
    return data;
  }

  const FAQList = () => {
    const [faqData, setData] = useState<any>({});
    const [active, setActive] = useState<number | null>(null);
  
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
  
    const toggleAccordion = (accordionItem: number) => {
      setActive((prevActive) => (prevActive !== accordionItem ? accordionItem : null));
    };
  
    useEffect(() => {
      if (faqData.faqs && faqData.faqs.length) {
        setActive(faqData.faqs[0]?.id || null);
      }
    }, [faqData.faqs]);
  
    const fadeInOut = useSpring({
      opacity: 1,
      from: { opacity: 0 },
    });
  
    return (
      <div className='container mx-auto py-24'>
        <div className='w-10/12 mx-auto cursor-pointer'>
          <h2 className='text-center text-5xl mb-10 '>{faqData && faqData.faqTitle} </h2>
          <div className='flex flex-col gap-10 '>
            {faqData.faqs &&
              faqData.faqs.map((item: any, index: number) => (
                <div className='border-b pb-4' key={index}>
                  <h3
                    className='flex justify-between cursor-pointer'
                    onClick={() => toggleAccordion(item.id)}
                  >
                    <span className='text-3xl'>{item.question}</span>
                    <span className='text-lg'> {active === item.id ? '-' : '+'}</span>
                  </h3>
                  {active === item.id && <p className='text-xl pt-5'>{item.answer}</p>}
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  };
  


export default FAQList;
