import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { client } from '@/lib/sanity';
import { urlForImage } from '@/lib/image';



// 
async function getData() {
    const query = `*[_type == "post"]`;
    const data = await client.fetch(query);
    return data;
  }

  

function Blogs() {


 
    const BlogPropes = {
       title:"Blogs",
       blogs: [   
        {     
            img:{
               src: "/assets/images/blogImageOne.jpg",
               alt:"blog image"},
            date: "23  May 2023",
             author:"Bruce Wayne",
              title: "Unveiling the Enchanting Charms of Kyoto",
              subtitle: "A Journey Through the Cultural Heart of Japan's Ancient Capital, Where Tradition and Beauty Collide",
              blogLink:"/blogDetails"
            },
            {
                img:{
                    src: "/assets/images/blogImageTwo.jpg",
                    alt:"blog image"},
                date: "23 Dec 2022",
              author:"Peter Parker",
              title: "Solo Travel: Finding Adventure in Solitude",
              subtitle: "Embrace the Freedom and Discovery of Solo Exploration - Discover the Secrets of Traveling Alone and Growing as a Wanderer",
              blogLink:"/blogDetails"
            },
            {
                img:{
                    src: "/assets/images/blogImageThree.jpg",
                    alt:"blog image"},
                date: "13 OCT 2023",
               author :"Gold D Rogers",
              title: "Hidden Gems of Southeast Asia: Off the Path",
              subtitle: "Exploring Unforgettable Destinations Beyond the Tourist Crowds - A Quest for Authenticity and Serenity in Southeast Asia's Best-Kept Secrets",
              blogLink:"/blogDetails"
            }
        ]
        
    }


    const [blogData, setData] = useState<any>({});

    useEffect(() => {
      async function fetchData() {
        try {
          const result = await getData();
          setData(result);
          console.log(result,'here usasasdasd');
          
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
  
      fetchData();
    }, []);
    

    console.log(blogData[0],"dfdfdf")
    
    
    
    return (
        <>
            <div id="blog" className="bg-gray-100 px-4 xl:px-0 py-12">
                <div className="mx-auto container">
                    <h1 className="text-center text-3xl lg:text-5xl tracking-wider text-gray-900">Lastest From Our Blogs</h1>
                    <div className="mt-12 lg:mt-24 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                    {blogData && Array.isArray(blogData) && blogData.map((blog:any,index:number)=>{
                                        return(
                        <Link className="flex" key={index} href={blog.slug.current} >
                            
                                <div className="flex">
                                 
                                            <div  className=" flex">
                                        <div className="flex  ">
                                            <span className="bg-white rounded-bl-3xl rounded-br-3xl">
                                            <img className="w-full" loading="lazy" src={blog.BlogImage?.src && urlForImage(blog.BlogImage?.src).url()} alt={blog.alt} />
                                            <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                                                <p className="text-sm text-white font-semibold tracking-wide">{blog.author}</p>
                                                <p className="text-sm text-white font-semibold tracking-wide">{blog.date}</p>
                                            </div>
                                            
                                           
                                            <div className="px-3  lg:px-6 py-4 ">
                                                <h1 className="text-lg text-gray-900 font-semibold tracking-wider">{blog.blogTitle}</h1>
                                                <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">{blog.blogDescription}</p>
                                            </div>
                                            </span>
                                        </div>
                                        </div>
                                      
                                 
                                </div>
                               
                            
                            </Link>
                              )
                            })}
                        </div>
                    </div>
                    
                </div>
                
            
        </>
    );
};








export default Blogs;
