import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { client } from '@/lib/sanity';
import { urlForImage } from '@/lib/image';

async function getData() {
    const query = `*[_type == "component"]{
        sections[11]
      }`;
    const data = await client.fetch(query);
    return data;
  }

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);
    const [headerData, setData] = useState<any>({});

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

    const NavBarProps = {
        logo: {
            src: "/assets/images/logo.jpg",
            href: "/",
        },
        links: [
            {
                label: "Home",
                href: "/",
            },
            {
                label: "Blog",
                href: "/blogListing",
            },
            {
                label: "About Us",
                href: "/about",
            },
            {
                label: "Contact Us",
                href: "/contact",
            },
            {
                label: "Services",
                href: "/services",
            },
        ],
    };

    return (
        <nav className="w-full bg-white shadow">
            <div className="justify-between px-4 lg:px-0 container mx-auto md:items-center md:flex">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                     {headerData.navigationLinks  &&  <Link href={headerData.navigationLinks[0].href}>
                          {headerData.logo &&  <img  src={urlForImage(headerData.logo.src).url()} alt={headerData.logo.alt} />}
                        </Link>}
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 relative z-10 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            {headerData.navigationLinks && headerData.navigationLinks.map((link:any, index:number) => (
                                <li key={index} className="text-gray-600 hover:text-blue-600">
                                    <Link onClick={()=>{setNavbar(!NavBar)}} href={link.href}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
