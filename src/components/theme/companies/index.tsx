import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default function Company() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
      };
    return (
        <div className="2xl:px-20 md:px-10 2xl:mx-auto 2xl:container">
            <div className="md:py-12 py-8 px-4">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="lg:text-5xl md:text-4xl text-2xl font-bold leading-10 text-gray-800">Our Trusted Partners</h1>
                    <p className="text-base leading-normal text-center text-gray-600 mt-4 xl:w-1/2 w-10/12">We just got featured in the following magazines and it has been the most incredible journey. We work with the best fashion magazines across the world</p>
                </div>
                <div className="flex items-center justify-center mt-10">
                    <div className=" w-full bg-gray-50 py-10">
                        <Slider {...settings}>
                          
                        <div className=" !flex !items-center h-20 !justify-center text-center">
                           <img className="w-6/12" src="/assets/images/beko.png" alt="" />
                           
                        </div>
                        <div className=" !flex !items-center h-20 !justify-center text-center">
                           <img className="w-6/12" src="/assets/images/citrix.png" alt="" />
                           
                        </div>
                        <div className=" !flex !items-center h-20 !justify-center text-center">
                           <img className="w-6/12" src="/assets/images/github.png" alt="" />
                           
                        </div>
                        <div className=" !flex !items-center h-20 !justify-center text-center">
                           <img className="" src="/assets/images/beko.png" alt="" />
                           
                        </div>
                        <div className=" !flex !items-center h-20 !justify-center text-center">
                           <img className="" src="/assets/images/beko.png" alt="" />
                           
                        </div>
                        <div className=" !flex !items-center h-20 !justify-center text-center">
                           <img className="" src="/assets/images/beko.png" alt="" />
                           
                        </div>
                       
                        </Slider>
                    </div>
                </div>
            </div>
        </div>


    );
}
