import React from "react";

export default function Community() {
  return (
    <div className="container">
      <div className="container-secondary text-center mb-24 md:mb-36">
        <h1 className="font-bold">
          Be part of our <span className="text-primary-1">community!</span>
        </h1>
        <p className="mt-5 mb-16">
          <span className="font-bold">The power</span> of solutions and
          opportunities.
        </p>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="bg-white border-radius-20 px-4 h-96 grid place-items-center">
            <div>
              <img
                src="/community/need-help.png"
                alt="Need help"
                className="w-64 mx-auto"
              />
              <p className="font-bold text-xl mt-6">Need help?</p>
              <p>Find solutions in real-time 24/7, 365 days a year.</p>
            </div>
          </div>
          <div className="bg-white border-radius-20 px-4 xl:px-12 h-96 place-items-center grid">
            <div>
              <img
                src="/community/work-with.png"
                alt="Work with Minhoo"
                className="w-48 mx-auto"
              />
              <p className="font-bold text-xl mt-6">Work with Minhoo</p>
              <p>
                We connect you with clients looking for your services, allowing
                you to work how, when, and where you want.
              </p>
            </div>
          </div>
          <div className="bg-white border-radius-20 px-4 xl:px-12 h-96 place-items-center grid">
            <div>
              <img
                src="/community/set-your-own-rates.png"
                alt="Set your own rates"
                className="w-40 mx-auto"
              />
              <p className="font-bold text-xl mt-6">Set your own rates</p>
              <p>
                You keep 100% of what you earn, and payments are made directly
                to you.
              </p>
            </div>
          </div>
          <div className="bg-white border-radius-20 px-4 xl:px-12 h-96 place-items-center grid">
            <div>
              <img
                src="/community/our-footprint.png"
                alt="Our footprint"
                className="w-44 mx-auto"
              />
              <p className="font-bold text-xl mt-6">Our footprint</p>
              <p>
                We love what we do and continue to work to evolve and connect
                lives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
