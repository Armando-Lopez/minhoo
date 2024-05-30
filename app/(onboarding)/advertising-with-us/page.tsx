import AppIcon from "@/components/shared/AppIcon";
import Image from "next/image";
import React from "react";

export default function AdvertisingWithUs() {
  return (
    <div className="mb-24 md:mb-36">
      <section className="grid grid-cols-12 gap-5 mb-16">
        <div className="col-span-12 md:col-span-8 lg:col-span-9 2xl:col-span-8 relative">
          <img
            src="/advertising-with-us/advertising-with-us.png"
            alt="Advertising with us"
          />
          <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-max flex items-end gap-10 py-5 px-20 rounded-full bg-white text-primary-1 font-semibold">
            <AppIcon icon="play" width={20} />
            Visualize
          </button>
        </div>
        <div className="col-span-12 md:col-span-4 lg:col-span-3 2xl:col-span-4">
          <h3 className="mb-6 text-3xl lg:text-4xl text-center md:text-left text-primary-1 font-bold">
            <span className="lg:block text-black-1">Advertise</span> your brand
          </h3>
          <p className="mb-7 text-black-1">
            We have a direct visualization of your brand in our app by users of
            all kinds in real time.
          </p>
          <p className="text-black-1">
            We take care of creating and promoting your 10 second video or
            advertising post which is shared with you so you can show it in your
            networks. Positioning your brand in our community.
          </p>
        </div>
      </section>
      <section className="max-w-3xl mx-auto mb-16 text-center">
        <h3 className="mb-6 text-3xl md:text-4xl font-bold text-primary-1">
          <span className="block md:inline text-black-1">Tell us about</span>{" "}
          your business
        </h3>
        <p className="mb-7 text-black-1">
          If you want to show your brand contact us, write us about your
          business and a sales consultant will contact you.
        </p>
        <p className="mb-7 text-black-1">
          All material must be provided in order to develop a video that meets
          your expectations.
        </p>
        <strong>Contact us at info@minhoo.com</strong>
      </section>
      <section className="text-center">
        <h3 className="mb-6 text-3xl md:text-4xl font-bold text-primary-1">
          <span className="text-black-1">Our</span> clients
        </h3>
        <div>
          <ul className="flex gap-3 overflow-auto w-full mx-auto hide-scroll-bar">
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
          </ul>
        </div>
      </section>
    </div>
  );
}
