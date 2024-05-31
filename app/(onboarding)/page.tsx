import React from "react";

export default function Home() {
  return (
    <section className="flex-grow">
      <div className="lg:grid lg:grid-cols-2 container-secondary lg:mx-auto pb-16 lg:pb-10">
        <div>
          <video autoPlay loop muted className="mx-auto xl:mr-0 xl:max-w-[530px]">
            <source src="/home/banner.mp4" type="video/mp4" />
            Tu navegador no soporta el formato de video.
          </video>
        </div>
        <div className="lg:bg-white lg:ml-16 lg:h-full lg:grid lg:items-center border-radius-20">
          <div>
            <h2 className="text-primary-1 uppercase font-bold text-center mt-12 mb-4">
              Coming Soon
            </h2>
            <div className="grid gap-3">
              <button className="flex items-center justify-center bg-black-1 text-white rounded-xl w-40 py-2 mx-auto">
                <img
                  src="/home/logo-apple.png"
                  alt="Logo Apple"
                  className="pr-3 w-7"
                />
                <p className="text-[8px]">
                  Download on the{" "}
                  <span className="block text-sm">App Store</span>
                </p>
              </button>
              <button className="flex items-center justify-center bg-black-1 text-white rounded-xl w-40 py-2 mx-auto">
                <img
                  src="/home/logo-google-play.png"
                  alt="Logo Google Play"
                  className="pl-1.5 pr-3 w-8"
                />
                <p className="text-[8px] text-left">
                  GET IT ON <span className="block text-sm">Google Play</span>
                </p>
              </button>
            </div>
          </div>
        </div>
        {/* <div className="col-span-12 md:col-span-5 grid place-items-center">
      <app-login-form />
    </div>  */}
      </div>
    </section>
  );
}
