// import AppButton from "@/components/shared/AppButton";
// import AppIcon from "@/components/shared/AppIcon";
import AppVideoViewer from "@/components/shared/AppVideoViewer";
import React from "react";

export default function BePartOfOurTeam() {
  return (
    <div className="container mb-24">
      <section className="lg:flex gap-5 mb-16">
        <div className="relative mb-10 lg:mb-16">
          {/* <img
            src="/be-part-of-our-team/be-part-of-our-team.png"
            alt="Be part of our team"
            className="xl:max-w-[870px] border-radius"
          /> */}
            <div className="mx-auto mb-4 overflow-hidden lg:w-[368px] lg:h-[235px]">
              <AppVideoViewer
                className="w-full border-radius-20"
                url="https://player.vimeo.com/progressive_redirect/playback/902643841/rendition/1080p/file.mp4?loc=external&signature=db6acffd19d0976d405c109d3f3e207774a0b4baab9be5e39d545a255c5c0de4"
                urlBreakpoints={{
                  lg: "https://player.vimeo.com/progressive_redirect/playback/902463974/rendition/1080p/file.mp4?loc=external&signature=35a9b72d0b08beffa287fc537434b36836d03332db9eb85fcf44f6a0493a26dc",
                }}
                title="What is Minhoo"
              />
            </div>
            
          {/* <AppButton
            id="play-video"
            name="play video"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-max flex items-end gap-10 py-5 px-20 rounded-full bg-white text-primary-1 font-semibold"
          >
            <AppIcon icon="play" width={20} />
            Visualize
          </AppButton> */}
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
