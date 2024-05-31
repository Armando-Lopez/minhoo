import React from "react";

export default function AppVideoViewer({ url, title }: { url: string, title: string }) {
  return (
    <iframe
      width="100%"
      height="100%"
      src={url}
      title={title}
      allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
}
