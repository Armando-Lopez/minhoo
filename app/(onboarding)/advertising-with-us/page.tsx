// import AppButton from "@components/shared/AppButton";
// import AppIcon from "@components/shared/AppIcon";
import AppVideoViewer from "@/components/shared/AppVideoViewer";
import Image from "next/image";
import React from "react";

export default function AdvertisingWithUs() {
  return (
    <div className="mb-24 md:mb-36">
      <section className="container lg:flex gap-5">
      <div className="relative mb-10 lg:mb-16">
          <div className="mx-auto mb-4 overflow-hidden w-[328px] md:w-[558px] xl:w-[870px] 2xl:w-[970px]">
            <AppVideoViewer
              className="mx-auto border-radius-20"
              poster="advertising-with-us/thumb-advertise-cuadrado.jpg"
              posterBreakpoints={{
                md: "advertising-with-us/thumb-advertise.jpg",
              }}
              url="advertising-with-us/advertise-your-brand-cuadrado.mp4"
              urlBreakpoints={{
                md: "advertising-with-us/advertise-your-brand-youtube.mp4",
              }}
              title="Advertise Your Brand"
            />
          </div>
        </div>
        <div className="text-black-1">
          <h2 className="mb-3 lg:mb-8 text-center md:text-left text-primary-1 font-bold">
            <span className="lg:block text-black-1">Advertise</span> your brand
          </h2>
          <p className="mb-5">
            We have a direct visualization of your brand in our app by users of
            all kinds in real time.
          </p>
          <p>
            We take care of creating and promoting your 10 second video or
            advertising post which is shared with you so you can show it in your
            networks. Positioning your brand in our community.
          </p>
        </div>
      </section>
      <section className="container mx-auto my-24 lg:my-36 lg:text-center">
        <h2 className="mb-8 font-bold text-primary-1 text-center">
          <span className="block md:inline text-black-1">Tell us about</span>{" "}
          your business
        </h2>
        <p className="mb-5 text-black-1">
          If you want to show your brand contact us, write us about your
          business and a sales consultant will contact you.
        </p>
        <p className="mb-16 lg:mb-8 text-black-1">
          All material must be provided in order to develop a video that meets
          your expectations.
        </p>
        <strong className="text-center block">
          Contact us at info@minhoo.com
        </strong>
      </section>
      <section className="text-center">
        <h2 className="mb-6 text-3xl md:text-4xl font-bold text-primary-1">
          <span className="text-black-1">Our</span> clients
        </h2>
        {/* <div>
          <ul className="flex gap-3 overflow-auto w-full mx-auto hide-scroll-bar">
            <li className="w-4" />
            <li className="w-32 h-32 md:w-44 md:h-44 relative flex-grow flex-shrink-0">
              <Image
                src="/advertising-with-us/our-client-urban-stove.png"
                alt="Our client UrbanStove logo"
                title="UrbanStove"
                fill
                sizes="100%"
              />
            </li>
            <li className="w-32 h-32 md:w-44 md:h-44 relative flex-grow flex-shrink-0">
              <Image
                src="/advertising-with-us/our-client-the-bartlett.png"
                alt="Our client The Bartlett logo"
                title="The Bartlett"
                fill
                sizes="100%"
              />
            </li>
            <li className="w-32 h-32 md:w-44 md:h-44 relative flex-grow flex-shrink-0">
              <Image
                src="/advertising-with-us/our-client-del-tano-pizzeria.png"
                alt="Our client DEL TANO  pizzeria logo"
                title="DEL TANO  pizzeria"
                fill
                sizes="100%"
              />
            </li>
            <li className="w-32 h-32 md:w-44 md:h-44 relative flex-grow flex-shrink-0">
              <Image
                src="/advertising-with-us/our-client-eat-weston.png"
                alt="Our client Eat weston logo"
                title="Eat weston"
                fill
                sizes="100%"
              />
            </li>
            <li className="w-32 h-32 md:w-44 md:h-44 relative flex-grow flex-shrink-0">
              <Image
                src="/advertising-with-us/our-client-australian-kitchen.png"
                alt="Our client Australian kitchen logo"
                title="Australian kitchen"
                fill
                sizes="100%"
              />
            </li>
            <li className="w-32 h-32 md:w-44 md:h-44 relative flex-grow flex-shrink-0">
              <Image
                src="/advertising-with-us/our-client-miss-demeanour.png"
                alt="Our client Miss Demeanour logo"
                title="Miss Demeanour"
                fill
                sizes="100%"
              />
            </li>
            <li className="w-4" />
          </ul>
        </div> */}
        <div className="grid grid-cols-2">
          <div className="relative w-40 lg:w-72 h-16 lg:h-28 ml-auto">
            <Image
              src="/advertising-with-us/our-client-agile-transport.png"
              alt="Our client Agile Transport"
              title="Agile Transport"
              className="opacity-60"
              sizes="100%"
              fill
            />
          </div>
          <div className="relative w-40 lg:w-72 h-16 lg:h-28 mr-auto">
            <Image
              src="/advertising-with-us/our-client-mac.png"
              alt="Our client Mac"
              title="Mac"
              className="opacity-60"
              sizes="100%"
              fill
            />
          </div>
        </div>
      </section>
    </div>
  );
}
