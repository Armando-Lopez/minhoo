import AppIcon from "@/components/shared/AppIcon";
import React from "react";

export default function BePartOfOurTeam() {
  return (
    <div className="mb-24">
      <section className="lg:flex gap-5 mb-16">
        <div className="relative mb-10 lg:mb-16">
          <img
            src="/be-part-of-our-team/be-part-of-our-team.png"
            alt="Be part of our team"
            className="xl:max-w-[870px] border-radius"
          />
          <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-max flex items-end gap-10 py-5 px-20 rounded-full bg-white text-primary-1 font-semibold">
            <AppIcon icon="play" width={20} />
            Visualize
          </button>
        </div>
        <div className="">
          <h2 className="mb-8 text-center md:text-left text-primary-1 font-bold">
            <span className="lg:block text-black-1">Be part of</span> our team
          </h2>
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
      <div className="mb-24">
        <h2 className="mb-6 lg:text-center text-primary-1 font-bold">
          <span className="text-black-1">We&apos;re only</span> looking
          for you!
        </h2>
        <img
          src="be-part-of-our-team/we-are-only-looking-for-you.png"
          alt="We are only looking for you"
          className="mx-auto"
        />
      </div>
      <section className="max-w-xl mx-auto mb-16">
        <h2 className="mb-8 lg:text-center text-primary-1 font-bold">
          <span className="text-black-1">Let&apos;s talk</span>{" "}
          business
        </h2>
        <p className="mb-8 text-black-1 lg:text-center">
          If you are interested leave us your contact information and we will
          contact you to arrange a meeting to discuss the details.
        </p>
        <strong className="lg:text-center block">Contact us at info@minhoo.com</strong>
      </section>
    </div>
  );
}
