import AppIcon from "@/components/shared/AppIcon";
import Image from "next/image";
import React from "react";

export default function BePartOfOurTeam() {
  return (
    <div className="mb-16">
      <section className="grid grid-cols-12 gap-5 mb-16 lg:mb-24">
        <div className="col-span-12 md:col-span-8 lg:col-span-9 2xl:col-span-8 relative">
          <img
            src="/be-part-of-our-team/be-part-of-our-team.png"
            alt="Be part of our team"
          />
          <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-max flex items-end gap-10 py-5 px-20 rounded-full bg-white text-primary-1 font-semibold">
            <AppIcon icon="play" width={20} />
            Visualize
          </button>
        </div>
        <div className="col-span-12 md:col-span-4 lg:col-span-3 2xl:col-span-4">
          <h3 className="mb-6 text-3xl lg:text-4xl text-center md:text-left text-primary-1 font-bold">
            <span className="lg:block text-black-1">Be part of</span> our team
          </h3>
          <p className="mb-5 text-black-1">
            You may be the missing piece in the puzzle.
          </p>
          <p className="mb-5 text-black-1">
            We have a seat reserved for you on our board of directors. With your
            help we will conquer the world and generate opportunities and
            solutions for all. It will make life easier for many users.
          </p>
          <p>Be part of our team!</p>
        </div>
      </section>
      <div className="mb-16 lg:mb-24">
        <h3 className="mb-6 text-3xl lg:text-4xl text-center text-primary-1 font-bold">
          <span className="text-black-1">We&apos;re only</span> looking
          for you!
        </h3>
        <img
          src="be-part-of-our-team/we-are-only-looking-for-you.png"
          alt="We are only looking for you"
          className="mx-auto"
        />
      </div>
      <section className="max-w-xl mx-auto mb-16 text-center">
        <h3 className="mb-6 text-3xl lg:text-4xl text-center text-primary-1 font-bold">
          <span className="text-black-1">Let&apos;s talk</span>{" "}
          business
        </h3>
        <p className="mb-7 text-black-1">
          If you are interested leave us your contact information and we will
          contact you to arrange a meeting to discuss the details.
        </p>
        <strong>Contact us at info@minhoo.com</strong>
      </section>
    </div>
  );
}
