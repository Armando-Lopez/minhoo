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
  className,
  urlBreakpoints,
}: Props) {
  const breakpoints = useBreakpoints();
  const [videoUrl, setVideoUrl] = useState(url);
  useEffect(() => {
    let newUrl = url;
    if (urlBreakpoints?.sm && breakpoints.sm) {
      newUrl = urlBreakpoints.sm;
    }
    if (urlBreakpoints?.md && breakpoints.md) {
      newUrl = urlBreakpoints.md;
    }
    if (urlBreakpoints?.lg && breakpoints.lg) {
      newUrl = urlBreakpoints.lg;
    }
    if (urlBreakpoints?.xl && breakpoints.xl) {
      newUrl = urlBreakpoints.xl;
    }
    setVideoUrl(newUrl);
  }, [breakpoints.sm, breakpoints.md, breakpoints.lg, breakpoints.xl]);
  return (
    <>
      <video
        controls
        title={title}
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
  className?: string;
  urlBreakpoints?: {
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
  };
}
