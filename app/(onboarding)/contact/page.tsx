import AppIcon from "@/components/shared/AppIcon";
import React from "react";

export default function Contact() {
  return (
    <div className="container">
      <section className="flex-grow container-secondary mb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-primary-1 text-center">Contact Us</h1>
          <p className="text-center mt-8 mb-11">
            Thank you for your interest in Minhoo. Do you want to know more
            about the application? Do you have questions or doubts about Minhoo?
            - Whatever you want to tell us, get in touch via our email or
             through our social networks.
          </p>
          <div className="md:grid md:grid-cols-2 md:gap-20 md:items-center">
            <div className="md:ml-auto">
              <img
                src="/contact/contact.png"
                alt="About Us"
                className="mx-auto w-[200px]"
              />
            </div>
            <div className="md:mr-auto mt-8 md:mt-0">
              <p className="font-bold text-center">info@minhoo.com</p>
              <div className="flex justify-center mt-3 gap-3">
                <a href="https://www.facebook.com/minhooapp" target="_blank">
                  <AppIcon icon="facebook" width="28" />
                </a>
                <a href="https://www.instagram.com/minhoo.app/" target="_blank">
                  <AppIcon icon="instagram" width="21" className="mt-1" />
                </a>
                {/* <AppIcon icon="twitter" width="21" className="mt-1" /> */}
                {/* <AppIcon icon="tiktok" width="28" /> */}
                <a
                  href="https://www.youtube.com/channel/UCZVYzrrkIrCT4xDMmzpMhWg"
                  target="_blank"
                >
                  <AppIcon icon="youtube" width="28" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
