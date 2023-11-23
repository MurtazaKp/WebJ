import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { client } from '@/lib/sanity';
import { urlForImage } from '@/lib/image';

async function getData() {
  const query = `*[_type == "component"]{
      sections[6]
    }`;
  const data = await client.fetch(query);
  return data;
}

const teamData = {
  mainHeading: "Meet our team",
  members: [
    {
      name: "Samantha Jane",
      role: "Chief Executive Officer",
      image: {
        src: "https://i.ibb.co/Vm2T6Gj/team-1.png",
        alt: "Samantha Jane - Designer",
      },
    },
    {
      name: "Marilyn Rhodes",
      role: "Cheif Technical Officer",
      image: {
        src: "https://i.ibb.co/85Y7MG9/team-2.png",
        alt: "Marilyn Rhodes - Designer",
      },
    },
    {
      name: "Marry Smith",
      role: "Human Resource",
      image: {
        src: "https://i.ibb.co/wKq8ZCW/team-3.png",
        alt: "Marry Smith - Writer",
      },
    },
    {
      name: "John Renolds",
      role: "Developer",
      image: {
        src: "https://i.ibb.co/TKzGPFx/team-4.png",
        alt: "John Renolds - Developer",
      },
    },
    {
      name: "Annie Jackie",
      role: "Designer",
      image: {
        src: "https://i.ibb.co/Lng30RF/team-5.png",
        alt: "Annie Jackie - Designer",
      },
    },
    {
      name: "Cloe Sanders",
      role: "Writer",
      image: {
        src:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
        alt: "Cloe Sanders - Writer",
      },
    },
  ],
};

export default function MeetTeam() {
  const [teamData, setData] = useState<any>({});

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
    <>
      <div className="xl:mx-auto xl:container 2xl:px-20 px-6 lg:px-0 py-20">
        <h1 className="text-5xl font-semibold leading-10 text-gray-800 text-center">
          {teamData.meetTeam}
        </h1>
        <div className="flex flex-wrap  justify-between  gap-5 mt-16">
          {teamData.team && teamData.team.map((member:any, index:any) => (
            <div key={index} className="lg:w-96 my-5 w-80">
              <img
                src={urlForImage(member.teamMemberImage.src).url()}
                className="h-72 w-full object-cover object-center rounded-t-md"
                alt={member.teamMemberImage.alt}
              />
              <div className="bg-white shadow-md rounded-md py-4 text-center">
                <p className="text-base font-medium leading-6 text-gray-600">
                  {member.teamMemberName}
                </p>
                <p className="text-base leading-6 mt-2 text-gray-800">
                  {member.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
