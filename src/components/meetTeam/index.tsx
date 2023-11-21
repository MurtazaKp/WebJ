import React from "react";

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
  return (
    <>
      <div className="xl:mx-auto xl:container 2xl:px-20 px-6 py-20">
        <h1 className="text-5xl font-semibold leading-10 text-gray-800 text-center">
          {teamData.mainHeading}
        </h1>
        <div className="flex flex-wrap items-stretch xl:justify-between justify-center mt-16 xl:gap-24 gap-4">
          {teamData.members.map((member, index) => (
            <div key={index} className="lg:w-96 w-80">
              <img
                src={member.image.src}
                className="h-72 w-full object-cover object-center rounded-t-md"
                alt={member.image.alt}
              />
              <div className="bg-white shadow-md rounded-md py-4 text-center">
                <p className="text-base font-medium leading-6 text-gray-600">
                  {member.name}
                </p>
                <p className="text-base leading-6 mt-2 text-gray-800">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
