import React from "react";

export default function Team() {
  return (
    <div className="container-secondary text-center mb-24 md:mb-36">
      <h1>Team</h1>
      <p className="mt-5">
        To achieve 100,000 daily active users on the app within 24 months from
        its launch.
      </p>
      <div className="grid sm:grid-cols-3 gap-10 sm:gap-5 sm:gap-y-[50px] mt-16 lg:max-w-[80%] mx-auto">
        <div className="lg:text-left">
          <img
            src="/team/eder-oquendo.jpg"
            alt="Eder Oquendo"
            className="border-radius"
          />
          <p className="font-bold text-xl mt-5">Eder Oquendo</p>
          <p>CEO</p>
        </div>
        <div className="lg:text-left">
          <img
            src="/team/sergio-gil.jpg"
            alt="Sergio Gil"
            className="border-radius"
          />
          <p className="font-bold text-xl mt-5">Sergio Gil</p>
          <p>CTO</p>
        </div>
        <div className="lg:text-left">
          <img
            src="/team/miller-garcía.jpg"
            alt="Miller García"
            className="border-radius"
          />
          <p className="font-bold text-xl mt-5">Miller García</p>
          <p>Graphic Desiner / UI</p>
        </div>
        <div className="lg:text-left">
          <img
            src="/team/wildelmy-colina.jpg"
            alt="Wildelmy Colina"
            className="border-radius"
          />
          <p className="font-bold text-xl mt-5">Wildelmy Colina</p>
          <p>Frontend Developer</p>
        </div>
        <div className="lg:text-left">
          <img
            src="/team/robert-moreno.jpg"
            alt="Robert Moreno"
            className="border-radius"
          />
          <p className="font-bold text-xl mt-5">Robert Moreno</p>
          <p>Big Data</p>
        </div>
        <div className="lg:text-left">
          <img
            src="/team/maria-borja.jpg"
            alt="Maria Borja"
            className="border-radius"
          />
          <p className="font-bold text-xl mt-5">Maria Borja</p>
          <p>Community Manager</p>
        </div>
      </div>
    </div>
  );
}
