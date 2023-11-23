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
import Pricing from "@/components/theme/pricing";
import Partners from "@/components/partners/partners";

// async function getData() {
//   const query = `*[_type == "home"]`;
//   const data = await client.fetch(query);
//   return data;
// }

export default function Index({}) {


  
  

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
      <Pricing/>
      <Testimonial/>
      <Partners/>
      <Blogs/>
    
      {/* 
        <HeroSection/>
        
        <Features/>
        <Newsletter/>
        
        <Company/> */}
    </>
  );
}

// export const getServerSideProps = async () => {
//   const url = "https://u4gtpcrb.api.sanity.io/v2022-03-07/data/query/production?query=*%5B+_type+%3D%3D+%22post%22+%5D%7B%0A++...%0A%7D&perspective=published";
//   const data = await fetch(url).then((res) => res.json());
//   const posts = data.result
  
// console.log(posts);

//   if (!data) {
//     return {
//       props: {
//         posts: [],
        
//       },
//     };
//   } else {
//     return {
//       props: {
//         posts:data,
      
//       },
//     };
//   }
// };
