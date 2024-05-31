import React from "react";

export default function AppVideoViewer({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  return (
    <>
      <video controls title={title} width="100%">
        <source src={url} type="video/mp4" />
      </video>
      {/* <iframe
        width="100%"
        height="100%"
        src={url}
        title={title}
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe> */}
    </>
  );
}
