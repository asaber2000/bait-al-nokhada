"use client";

import { useEffect, useRef, useState } from "react";

interface SmartVideoPlayerProps {
  url: string;
  title?: string;
  poster?: string;
}

export default function SmartVideoPlayer({ url, title = "Project Video", poster }: SmartVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  // استخراج معرّف يوتيوب النظيف
  const getYouTubeEmbedUrl = (rawUrl: string) => {
    if (!rawUrl) return "";
    if (rawUrl.includes("embed/")) return rawUrl;

    const match = rawUrl.match(
      /(?:youtube\.com\/(?:watch\?v=|shorts\/|v\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    const videoId = match?.[1] || "";
    return videoId
      ? `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=1&mute=1&loop=1&playlist=${videoId}&playsinline=1`
      : rawUrl;
  };

  const isYouTube = url?.includes("youtube.com") || url?.includes("youtu.be");

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting) {
          setHasLoaded(true);
          videoRef.current?.play().catch(() => { });
        } else {
          videoRef.current?.pause();
        }
      },
      { rootMargin: "400px 0px", threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [url]);

  if (!url) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-slate-900 text-slate-400 text-xs">
        No video source available
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative w-full h-full bg-black">
      {isYouTube ? (
        hasLoaded ? (
          <iframe
            className="w-full h-full"
            src={getYouTubeEmbedUrl(url)}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="relative w-full h-full flex items-center justify-center bg-slate-950 text-slate-400 text-xs">
            {poster && (
              <img
                src={poster}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
            )}
            <span className="relative z-10">Loading player...</span>
          </div>
        )
      ) : (
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted
          loop
          playsInline
          controls
          preload="none"
          poster={poster}
        >
          {isInView && (
            <source
              src={url}
              type={url.toLowerCase().includes(".webm") ? "video/webm" : "video/mp4"}
            />
          )}
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}