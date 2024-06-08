"use client";
import { useBreakpoints } from "@/hooks/useBreakpoints";
import React, { useEffect, useState } from "react";

/**
 * Display videos.
 * @param {Props} props - Component props
 * @param {string} props.url - video url
 * @param {string} props.title - accessible title
 * @param {string} props.title - CSS class
 */
export default function AppVideoViewer({
  url,
  title,
  poster,
  className,
  urlBreakpoints,
  posterBreakpoints,
}: Props) {
  const breakpoints = useBreakpoints();
  const [videoUrl, setVideoUrl] = useState(url);
  const [videoPoster, setVideoPoster] = useState<string | undefined>(url);

  useEffect(() => {
    let newUrl = url;
    let newPoster = poster;

    if (urlBreakpoints?.lg && breakpoints.lg) {
      newUrl = urlBreakpoints.lg;
    }
    if (urlBreakpoints?.md && breakpoints.md) {
      newUrl = urlBreakpoints.md;
    }
    if (posterBreakpoints?.md && breakpoints.md) {
      newPoster = posterBreakpoints.md;
    }
    if (posterBreakpoints?.lg && breakpoints.lg) {
      newPoster = posterBreakpoints.lg;
    }
    setVideoUrl(newUrl);
    setVideoPoster(newPoster);
  }, [breakpoints.lg, breakpoints.xl]);
  return (
    <>
      <video
        controls
        title={title}
        poster={videoPoster}
        width="100%"
        height="100%"
        className={className}
        playsInline
        src={videoUrl}
      ></video>
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
  poster?: string;
  className?: string;
  urlBreakpoints?: {
    md?: string;
    lg?: string;
  };
  posterBreakpoints?: {
    md?: string;
    lg?: string;
  };
}
