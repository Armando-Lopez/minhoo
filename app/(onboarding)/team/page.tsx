import Image from "next/image";
import React from "react";

export default function Team() {
  const team = [
    {
      name: "Eder Oquendo",
      role: "C.E.O",
      image: "/team/eder-oquendo.jpg",
    },
    {
      name: "Karol Spencer",
      role: "C.O.O",
      image: "/team/karol-spencer.jpg",
    },
    {
      name: "Esteban Marin",
      role: "Accounting Services Manager",
      image: "/team/esteban.jpg",
    },
    {
      name: "Camila Cassari",
      role: "Marketing Lead",
      image: "/team/mila.jpg",
    },
    {
      name: "Sergio Gil",
      role: "C.T.O",
      image: "/team/sergio-gil.jpg",
    },
    {
      name: "Miller García",
      role: "Graphic Desiner / UI",
      image: "/team/miller-garcía.jpg",
    },
    {
      name: "Wildelmy Colina",
      role: "Frontend Developer",
      image: "/team/wildelmy-colina.jpg",
    },
    {
      name: "Mauricio Jiménez",
      role: "Creative Lead",
      image: "/team/mauricio.jpg",
    },
    {
      name: "Robert Moreno",
      role: "Big Data",
      image: "/team/robert-moreno.jpg",
    },
    {
      name: "Maria Borja",
      role: "Community Manager",
      image: "/team/maria-borja.jpg",
    },
  ];
  return (
    <div className="container">
      <div className="text-center mb-24 md:mb-36">
        <h1>Team</h1>
        <p className="mt-5">
          To achieve 100,000 daily active users on the app within 24 months from
          its launch.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-12 lg:text-left mt-16 mx-auto">
          {team.map((member, i) => (
            <div key={i} className="">
              <Image
                width="270"
                height="270"
                src={member.image}
                alt={member.name}
                className="border-radius w-full"
              />
              <h3 className="font-bold text-xl mt-4">{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
