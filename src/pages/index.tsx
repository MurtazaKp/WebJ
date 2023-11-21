import { useState, useEffect } from "react";
import NavBar from "@/components/Navbar/Navbar";
import Hero from "@/components/hero";
import Cta from "@/components/cta";
import Statistics from "@/components/Statsistics";
import Blogs from "@/components/blogs";
import Testimonial from "@/components/testimonial";
import Features from "@/components/features";
import Newsletter from "@/components/Newsletter";
import { client } from "@/lib/sanity";

// async function getData() {
//   const query = `*[_type == "home"]`;
//   const data = await client.fetch(query);
//   return data;
// }

export default function Index() {
  

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const result = await getData();
  //       setData(result);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   }

  //   fetchData();
  // }, []);

  // console.log("data", data);

  return (
    <>
      <Hero />
      <Features/>
      <Cta />
      <Newsletter/>
      <Statistics/>
      <Testimonial/>
      <Blogs/>
      {/* 
        <HeroSection/>
        
        <Features/>
        <Newsletter/>
        <Pricing/>
        <Company/> */}
    </>
  );
}
