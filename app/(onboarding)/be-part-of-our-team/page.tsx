// import AppButton from "@components/shared/AppButton";
// import AppIcon from "@components/shared/AppIcon";
import AppVideoViewer from "@/components/shared/AppVideoViewer";
import React from "react";

export default function BePartOfOurTeam() {
  return (
    <div className="container mb-24">
      <section className="lg:flex gap-5 mb-16">
        <div className="relative mb-10 lg:mb-16">
          <div className="mx-auto mb-4 overflow-hidden w-[328px] md:w-[558px] xl:w-[870px] 2xl:w-[970px]">
            <AppVideoViewer
              className="mx-auto border-radius-20"
              poster="/be-part-of-our-team/thumb.jpg"
              posterBreakpoints={{
                md: "/be-part-of-our-team/thumb-desktop.jpg",
              }}
              url="https://player.vimeo.com/progressive_redirect/playback/902643841/rendition/1080p/file.mp4?loc=external&signature=db6acffd19d0976d405c109d3f3e207774a0b4baab9be5e39d545a255c5c0de4"
              urlBreakpoints={{
                md: "https://player.vimeo.com/progressive_redirect/playback/902643395/rendition/1080p/file.mp4?loc=external&signature=6bfd7c2069f694affd98cc92dff9dc4583f5dde760e7b92793b221728c648986",
              }}
              title="Be part of our team"
            />
          </div>
        </div>
        <div>
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
          <span className="text-black-1">We&apos;re only</span> looking for you!
        </h2>
        <img
          src="be-part-of-our-team/we-are-only-looking-for-you.png"
          alt="We are only looking for you"
          className="mx-auto"
        />
      </div>
      <section className="max-w-xl mx-auto mb-16">
        <h2 className="mb-8 lg:text-center text-primary-1 font-bold">
          <span className="text-black-1">Let&apos;s talk</span> business
        </h2>
        <p className="mb-8 text-black-1 lg:text-center">
          If you are interested leave us your contact information and we will
          contact you to arrange a meeting to discuss the details.
        </p>
        <strong className="lg:text-center block">
          Contact us at info@minhoo.com
        </strong>
      </section>
    </div>
  );
}
