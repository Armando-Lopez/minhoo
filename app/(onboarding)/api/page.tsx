import AppVideoViewer from "@/components/shared/AppVideoViewer";
import Image from "next/image";
import React from "react";

export default function Api() {
  return (
    <div className="mb-24 md:mb-36">
      <div className="container grid grid-cols-12 gap-5">
        <div className="order-1 lg:order-2 col-span-12 lg:col-span-5 mb-5">
          <div className="relative w-60 h-80 md:w-[25rem] md:h-[35rem] mx-auto lg:ml-auto">
            <Image
              src="/api/img.png"
              alt="Minhoo mobile app"
              className="mx-auto z-0"
              fill
              sizes="100%"
              priority
            />
          </div>
        </div>
        <section className="order-2 lg:order-1 col-span-12 lg:col-span-7">
          <h2 className="mb-8 text-primary-1">
            <span className="block md:inline text-black-1">The Minhoo </span>
            Platform
          </h2>
          <div className="mb-5">
            <h4 className="mb-8">Minhoo Graph API</h4>
            <p>
              The Minhoo Graph API allows users of your application to access
              data in their Minhoo Creator accounts. The API can be used to
              source and publish their media, manage and respond to comments on
              their media, identify media where other Minhoo users view
              comments, and find Minhoo Creators. It enables them to apply to
              face-to-face or virtual job posting requests.
            </p>
          </div>
          <div className="mb-5">
            <h4 className="mb-5">Minhoo Basic Display API</h4>
            <p>
              The Minhoo Basic Viewing API allows users of your application to
              get basic profile information and photos in their Minhoo accounts.
              The API is intended for Minhoo users who are not businesses or
              creators. If you are building an application that will allow users
              to post media, moderate comments, identify @mentioned media, and
              get data about other Minhoo users, use the Minhoo Graph API.
            </p>
          </div>
          <div className="mb-5">
            <h4 className="mb-5">Minhoo Messaging API</h4>
            <p>
              Support for the Messenger API for Minhoo (also known as the Minhoo
              Messaging API in our Developer Policies) allows Minhoo accounts to
              use your application to manage their Minhoo messages. The API can
              be used to send and receive messages from other Minhoo users.
            </p>
          </div>
          <div className="mb-6">
            <h4 className="mb-4">Share to feed</h4>
            <p>
              With Minhoo Sharing, you can allow your app users to share your
              content on different digital media
            </p>
          </div>
          <div className="mb-5">
            <h4 className="mb-5">What is Minhoo</h4>
            <ul>
              <li>Request services</li>
              <li>Offering services</li>
            </ul>
          </div>
        </section>
      </div>

      <section className="order-3 col-span-12 mt-20 lg:container">
        <ul className="overflow-auto lg:mx-auto hide-scroll-bar flex gap-y-12 gap-x-5 lg:gap-x-3 w-full">
          <li className="w-4 lg:hidden" />

          <li className="text-center relative flex-grow flex-shrink-0">
            <div className="relative mb-4 overflow-hidden w-[220px] lg:w-[368px] h-[390px] lg:h-[235px]">
              <AppVideoViewer
                className="w-full border-radius-20"
                poster="/api/what-is-minhoo.jpg"
                posterBreakpoints={{
                  lg: "/api/what-is-minhoo-desktop.jpg",
                }}
                url="https://player.vimeo.com/progressive_redirect/playback/902464521/rendition/720p/file.mp4?loc=external&signature=c99abf8db7e6d4762d7fb638a2cf1c8cfc0099489a5ffd9510d90df7eec4a8d0"
                urlBreakpoints={{
                  lg: "https://player.vimeo.com/progressive_redirect/playback/902463974/rendition/1080p/file.mp4?loc=external&signature=35a9b72d0b08beffa287fc537434b36836d03332db9eb85fcf44f6a0493a26dc",
                }}
                title="What is Minhoo"
              />
            </div>
            <strong className="text-xl block w-[220px] lg:w-[378px]">
              What is Minhoo
            </strong>
          </li>

          <li className="text-center relative flex-grow flex-shrink-0">
            <div className="relative mb-4 overflow-hidden w-[220px] lg:w-[368px] h-[390px] lg:h-[235px]">
              <AppVideoViewer
                className="w-full border-radius-20"
                poster="/api/request-services.jpg"
                posterBreakpoints={{
                  lg: "/api/request-services-desktop.jpg",
                }}
                url="https://player.vimeo.com/progressive_redirect/playback/1018169000/rendition/1080p/file.mp4?loc=external&signature=ecc45917fe8d9be1d43576a5e5d7604eb2b07a669a8138f35407a95e3b34f9df"
                urlBreakpoints={{
                  lg: "https://player.vimeo.com/progressive_redirect/playback/1018168712/rendition/1080p/file.mp4?loc=external&signature=5c7bfcba387f2a29b3a76abb0ad865413b2bfeab2ab701fcddfa9d8365d8fcab",
                }}
                title="Request Services"
              />
            </div>
            <strong className="text-xl block w-[220px] lg:w-[378px]">
              Request Services
            </strong>
          </li>

          <li className="text-center relative flex-grow flex-shrink-0">
            <div className="relative mb-4 overflow-hidden w-[220px] lg:w-[368px] h-[390px] lg:h-[235px]">
              <AppVideoViewer
                className="w-full border-radius-20"
                poster="/api/offerting-services.jpg"
                posterBreakpoints={{
                  lg: "/api/offerting-services-desktop.jpg",
                }}
                url="https://player.vimeo.com/progressive_redirect/playback/1018167054/rendition/1080p/file.mp4?loc=external&signature=3fedff02604adebb913c645910c99f26ab91c85742f32f250b51da3c96f93d98"
                urlBreakpoints={{
                  lg: "https://player.vimeo.com/progressive_redirect/playback/1018167019/rendition/1080p/file.mp4?loc=external&signature=63cc75152b6e65c01e993a5694171de5e8e2e4c6906babd35251c97dc036509e",
                }}
                title="Offerting Services"
              />
            </div>
            <strong className="text-xl block w-[220px] lg:w-[378px]">
              Offerting Services
            </strong>
          </li>
          <li className="w-4 lg:hidden" />
        </ul>
      </section>
    </div>
  );
}
