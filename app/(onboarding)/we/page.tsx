import React from "react";

export default function We() {
  return (
    <div className="mb-24 md:mb-36  container-secondary">
      <h1 className="text-center">We</h1>
      <div className="grid md:grid-cols-2 md:gap-10 xl:gap-16 mb-16 lg:mb-0 md:items-center">
        <img
          src="/we/about-us.png"
          alt="About Us"
          className="md:order-2 mb-8 xl:ml-auto w-4/5 mx-auto xl:w-5/6"
        />
        <div>
          <h2 className="text-primary-1 mb-8">About us?</h2>
          <p>
            We are a passionate team dedicated to connecting users and real-time
            service providers, delivering convenience and efficiency. Our
            mission is to enhance people’s lives by empowering service providers
            and providing quality solutions.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="mb-8">Mission</h2>
          <p>
            Our mission is to enrich people’s lives by providing an innovative
            platform that connects users with a wide range of real time service
            providers. We strive to offer convenience, efficiency, and quality
            through an exceptional experience, enabling users to access
            essential services quickly and reliably. Simultaneously, we empower
            service providers to leverage their skills and generate income, all
            with an unwavering commitment to user satisfaction and continuous
            improvement.
          </p>
        </div>
        <div>
          <h2 className="mb-8">Vision</h2>
          <p>
            Our vision is to become the world’s leading platform for connecting
            people with essential real-time services. We aim to revolutionize
            the way people access and use services while creating significant
            opportunities for service providers worldwide. We aspire to be
            renowned for our innovation, quality, and unwavering commitment to
            improving people’s lives everywhere.
          </p>
        </div>
      </div>
    </div>
  );
}
