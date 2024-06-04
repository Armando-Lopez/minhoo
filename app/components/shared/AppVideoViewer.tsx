import React from "react";
/**
 * Display videos.
 * @param {Props} props - Component props
 * @param {string} props.url - video url
 * @param {string} props.title - accessible title
 * @param {string} props.title - CSS class
 */
export default function AppVideoViewer({ url, title, className }: Props) {
  return (
    <>
      <video
        controls
        title={title}
        width="100%"
        className={className}
        playsInline
      >
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

interface Props {
  url: string;
  title: string;
  className?: string;
}
