import Image from "next/image";
import React from "react";

export default function Api() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12">
        <Image
          src="/api/app-mobile-ui.png"
          alt="Minhoo mobile app"
          className="mx-auto  mb-5"
          width={229}
          height={328}
        />
      </div>
      <section className="col-span-12">
        <h3 className="mb-6 text-3xl md:text-4xl text-primary-1">
          <span className="block md:inline text-black-1">The Minhoo </span>
          platform
        </h3>
        <div className="mb-6">
          <h4 className="mb-4">Minhoo Graph API</h4>
          <p>
            The Minhoo Graph API allows users of your application to access data
            in their Minhoo Creator accounts. The API can be used to source and
            publish their media, manage and respond to comments on their media,
            identify media where other Minhoo users, view comments, find Minhoo
            Creators, be able to apply to face-to-face or virtual job posting
            requests
          </p>
        </div>
        <div className="mb-6">
          <h4 className="mb-4">Minhoo Basic Display API</h4>
          <p>
            The Minhoo Basic Viewing API allows users of your application to get
            basic profile information, photos in their Minhoo accounts. The API
            is intended for Minhoo users who are not businesses or creators. If
            you are building an application that will allow users to post media,
            moderate comments, identify @mentioned media and get data about
            other Minhoo users, use the Minhoo Graph API.
          </p>
        </div>
        <div className="mb-6">
          <h4 className="mb-4">Minhoo Messaging</h4>
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
      <div className="col-span-12 flex flex-wrap gap-4 justify-center">
        <div className="flex flex-col items-center">
          <Image
            src="/api/what-is-minhoo.png"
            alt="Minhoo mobile app"
            className="mx-auto  mb-3"
            width={229}
            height={328}
          />
          <strong>What is Minhoo</strong>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/api/what-is-minhoo.png"
            alt="Minhoo mobile app"
            className="mx-auto  mb-3"
            width={229}
            height={328}
          />
          <strong>Request services</strong>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/api/what-is-minhoo.png"
            alt="Minhoo mobile app"
            className="mx-auto  mb-3"
            width={229}
            height={328}
          />
          <strong>Offering services</strong>
        </div>
      </div>
    </div>
  );
}
