import React, { useState,useEffect } from 'react';
import { client } from '@/lib/sanity';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

async function getData() {
    const query = `*[_type == "component"]{
        sections[19]
      }`;
    const data = await client.fetch(query);
    return data;
  }

const settings = {
    dots: true,
    infinite: true,
    arrows:false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

// const touristTrivia = [
//   "The Eiffel Tower Can Grow Taller in the Summer",
//   "The Great Wall of China is Not Visible from the Moon with the Naked Eye",
//   "The Louvre Museum in Paris is the Largest Art Museum in the World",
//   "The Pyramids of Giza Are Not Located in the Middle of the Desert",
//   "There are More Tourists Than Residents in Venice",
//   "Mount Everest is Not the Tallest Mountain in the World",
// ];

function TextBanner() {
    const [triviaData, setData] = useState<any>({});

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
    <div className="flex flex-col bg-accent-100 overflow-hidden bg-slate-200">
      <div className="w-11/12 sm:w-11/12 lg:w-8/12 gap-5 px-6 py-12 mx-auto ">
        <Slider {...settings}>
          {triviaData.TriviaInfo && triviaData.TriviaInfo.map((item:any, index:number) => (
            <div className="mx-2" key={index}>
              <div className="w-20 h-20 mb-5 bg-blue-700 rounded-full"></div>
              <div>
                <h3 className="text-2xl sm:text-4xl lg:text-5xl pb-10 leading-normal">{item.trivia}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default TextBanner;
