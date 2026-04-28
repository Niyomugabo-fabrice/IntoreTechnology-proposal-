import { useEffect, useRef, useState } from 'react';
import { Globe, Smartphone, ShoppingCart } from "lucide-react";
// import bgVideo from "@/src/imports/bg.mp4";

const dynamicTexts = ["reputation", "presence", "brand", "identity", "value"];

/* TYPEWRITER */
function TypewriterText({ texts }: { texts: string[] }) {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  const currentText = texts[textIndex];

  useEffect(() => {
    const speed = isDeleting ? 40 : 60;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const next = currentText.substring(0, charIndex + 1);
        setDisplayedText(next);
        setCharIndex((prev) => prev + 1);

        if (next === currentText) {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        const next = currentText.substring(0, charIndex - 1);
        setDisplayedText(next);
        setCharIndex((prev) => prev - 1);

        if (charIndex - 1 <= 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
          setCharIndex(0);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentText, texts.length]);

  return (
    <span>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export function Hero() {

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7; // 🔥 slow motion
    }
  }, []);

  // 🔥 SERVICE LINK
  const goToService = (index: number) => {
    window.dispatchEvent(
      new CustomEvent("selectService", {
        detail: index,
      })
    );

    document.getElementById("services")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="home" className="relative h-screen bg-black" >

      {/* 🔥 VIDEO BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden">

        <video
          ref={videoRef}
          src="video/bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-110 blur-[1px] video-zoom"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-transparent to-black/60"></div>

      </div>

      {/* CONTENT */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">

        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-3xl font-extrabold tracking-widest uppercase flex flex-wrap justify-center py-15">

          <span className="text-white font-sans">
            Elevate your&nbsp;
          </span>

          <span style={{ color: '#B08D57' }} className="min-w-[200px] text-left font-sans">
            <TypewriterText texts={dynamicTexts} />
          </span>

        </h1>

        {/* ⭐ CARDS */}
        <div className="mt-8 w-full max-w-5xl flex flex-col md:flex-row">

          <div onClick={() => goToService(0)}
            className="flex-1 p-6 text-white text-center bg-[#B08D57]/20 rounded-lg m-2 cursor-pointer">

            <Globe className="w-14 h-14 mx-auto bg-gradient-to-br from-[#B08D57] via-[#3b2a12] to-black 
            shadow-[0_0_15px_rgba(176,141,87,0.4)] border border-[#B08D57] rounded-full p-2"/>

            <h2 className="mt-2 text-lg font-bold">
              Website Development
            </h2>

            <p className="text-sm text-white/60 mt-2 border border-[#B08D57]/20 rounded-lg p-3">
              Modern, responsive and scalable web solutions.
            </p>
          </div>

          <div onClick={() => goToService(1)}
            className="flex-1 p-6 text-white text-center bg-[#B08D57]/20 rounded-lg m-2 cursor-pointer">

            <Smartphone className="w-14 h-14 mx-auto bg-gradient-to-br from-[#B08D57] via-[#3b2a12] to-black 
            shadow-[0_0_15px_rgba(176,141,87,0.4)] border border-[#B08D57] rounded-full p-2"/>

            <h2 className="mt-2 text-lg font-bold">
              Mobile Application
            </h2>

            <p className="text-sm text-white/60 mt-2 border border-[#B08D57]/20 rounded-lg p-3">
              Android & iOS apps with smooth user experience.
            </p>
          </div>

          <div onClick={() => goToService(2)}
            className="flex-1 p-6 text-white text-center bg-[#B08D57]/20 rounded-lg m-2 cursor-pointer">

            <ShoppingCart className="w-14 h-14 mx-auto bg-gradient-to-br from-[#B08D57] via-[#3b2a12] to-black 
            shadow-[0_0_15px_rgba(176,141,87,0.4)] border border-[#B08D57] rounded-full p-2"/>

            <h2 className="mt-2 text-lg font-bold">
              Device Trading
            </h2>

            <p className="text-sm text-white/60 mt-2 border border-[#B08D57]/20 rounded-lg p-3">
              Buy and sell used electronics safely.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}