import AppVideoViewer from "@/components/shared/AppVideoViewer";
import Image from "next/image";
import React from "react";

export default function Api() {
  return (
    <div className="grid grid-cols-12 gap-5 mb-24 md:mb-36">
      <div className="order-1 lg:order-2 col-span-12 lg:col-span-5 mb-5">
        <div className="relative w-60 h-80 md:w-[25rem] md:h-[35rem] mx-auto lg:ml-auto lg:mr-0">
          <Image
            src="/api/app-mobile-ui.png"
            alt="Minhoo mobile app"
            className="mx-auto"
            fill
            sizes="100%"
            priority
          />
        </div>
      </div>
      <section className="order-2 lg:order-1 col-span-12 lg:col-span-7">
        <h2 className="mb-8 text-primary-1">
          <span className="block md:inline text-black-1">The Minhoo </span>
          platform
        </h2>
        <div className="mb-5">
          <h4 className="mb-8">Minhoo Graph API</h4>
          <p>
            The Minhoo Graph API allows users of your application to access data
            in their Minhoo Creator accounts. The API can be used to source and
            publish their media, manage and respond to comments on their media,
            identify media where other Minhoo users, view comments, find Minhoo
            Creators, be able to apply to face-to-face or virtual job posting
            requests
          </p>
        </div>
        <div className="mb-5">
          <h4 className="mb-5">Minhoo Basic Display API</h4>
          <p>
            The Minhoo Basic Viewing API allows users of your application to get
            basic profile information, photos in their Minhoo accounts. The API
            is intended for Minhoo users who are not businesses or creators. If
            you are building an application that will allow users to post media,
            moderate comments, identify @mentioned media and get data about
            other Minhoo users, use the Minhoo Graph API.
          </p>
        </div>
        <div className="mb-5">
          <h4 className="mb-5">Minhoo Messaging</h4>
          <p>
            Support for the Messenger API for Minhoo (also known as the Minhoo
            Messaging API in our Developer Policies) allows Minhoo accounts to
            use your application to manage their Minhoo messages. The API can be
            used to send and receive messages from other Minhoo users. Messaging
            API Support
          </p>
        </div>
        <div className="mb-6">
          <h4 className="mb-4">Share to feed</h4>
          <p>
            With Minhoo Sharing, you can allow your app users to share your
            content on different digital media
          </p>
        </div>
      </section>

      <section className="order-3 col-span-12 lg:mt-20">
        <ul className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-y-12 gap-x-5 w-full">
          <li className="flex-grow min-w-60 max-w-96 lg:max-w-none aspect-video text-center">
            <div className="relative w-fit h-fit mb-4 rounded-2xl overflow-hidden">
              <AppVideoViewer
              className="aspect-video"
                url="https://player.vimeo.com/progressive_redirect/playback/902643627/rendition/1080p/file.mp4?loc=external&signature=f56c9ee59933e25b58d61a13bd045e5e720732a85f8ad8e32125ee558772945e"
                urlBreakpoints={{
                  sm: "https://player.vimeo.com/progressive_redirect/playback/902466788/rendition/1080p/file.mp4?loc=external&signature=e23ababc35d0a32161dd7547f02c940af8d44714b637888f3b0f7771910cdc87",
                }}
                title="What is Minhoo"
              />
            </div>
            <strong className="md:text-xl">What is Minhoo</strong>
          </li>
          <li className="flex-grow min-w-60 max-w-96 lg:max-w-none aspect-video text-center">
            <div className="relative w-fit h-fit mb-4 rounded-2xl overflow-hidden">
              <AppVideoViewer
              className="aspect-video"
                url="https://player.vimeo.com/progressive_redirect/playback/902643627/rendition/1080p/file.mp4?loc=external&signature=f56c9ee59933e25b58d61a13bd045e5e720732a85f8ad8e32125ee558772945e"
                urlBreakpoints={{
                  sm: "https://player.vimeo.com/progressive_redirect/playback/902466788/rendition/1080p/file.mp4?loc=external&signature=e23ababc35d0a32161dd7547f02c940af8d44714b637888f3b0f7771910cdc87",
                }}
                title="Request services"
              />
            </div>
            <strong className="md:text-xl">Request services</strong>
          </li>
          <li className="flex-grow min-w-60 max-w-96 lg:max-w-none aspect-video text-center">
            <div className="relative w-fit h-fit mb-4 rounded-2xl overflow-hidden">
              <AppVideoViewer
              className="aspect-video"
                url="https://player.vimeo.com/progressive_redirect/playback/902643627/rendition/1080p/file.mp4?loc=external&signature=f56c9ee59933e25b58d61a13bd045e5e720732a85f8ad8e32125ee558772945e"
                urlBreakpoints={{
                  sm: "https://player.vimeo.com/progressive_redirect/playback/902466788/rendition/1080p/file.mp4?loc=external&signature=e23ababc35d0a32161dd7547f02c940af8d44714b637888f3b0f7771910cdc87",
                }}
                title="Offering services"
              />
            </div>
            <strong className="md:text-xl">Offering services</strong>
          </li>
        </ul>
      </section>
    </div>
  );
}
