import AppVideoViewer from "@/components/shared/AppVideoViewer";
import React from "react";

export default function Newsletter() {
  return (
    <section className="container grid gap-10 lg:gap-5 lg:grid-cols-2  pb-24 lg:pb-36">
      <div className="order-2 lg:order-1 text-center grid gap-5 lg:col-span-2">
        <h2>
          Subscribe and be{" "}
          <span className="text-primary-1">the first to hear about it</span>
        </h2>
        <p>
          We will inform you about our launch date, benefits and more
          information through our newsletter, subscribe!
        </p>
      </div>
      <div className="order-1 lg:mt-8">
        <div className="mx-auto">
          <AppVideoViewer
            className="mx-auto border-radius-20"
            poster="/newsletter/thumb.jpg"
            posterBreakpoints={{
              md: "/newsletter/thumb-md.jpg",
            }}
            url="https://player.vimeo.com/progressive_redirect/playback/1001773797/rendition/1080p/file.mp4?loc=external&signature=2320548f47741118afed1c2c73bec839aadfa826b816edb430a49dd28d0225c1"
            urlBreakpoints={{
              md: "https://player.vimeo.com/progressive_redirect/playback/1001773548/rendition/1080p/file.mp4?loc=external&signature=4bec5628514383632edcb7878270f1719135800ce2f72f7b5cce0fd7deeecc37",
            }}
            title="Be part of our team"
          />
        </div>
      </div>
      <div className="order-3 mt-5 lg:mt-8">
        formulario
        <input type="text" className="w-full" />
        <input type="text" className="w-full" />
        <input type="text" className="w-full" />
        <input type="text" className="w-full" />
        <input type="text" className="w-full" />
      </div>
    </section>
  );
}
