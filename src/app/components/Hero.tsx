import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Globe, Smartphone, ShoppingCart } from "lucide-react";

import image1 from "../../imports/image.png";
import image2 from "../../imports/image-1.png";
import image3 from "../../imports/image-2.png";
import image4 from "../../imports/image-6.png";
import image5 from "../../imports/image-8.png";

const dynamicTexts = ["reputation", "presence", "brand", "identity", "value"];

/* TYPEWRITER (UNCHANGED) */
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 0,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  const images = [image1, image2, image3, image4, image5];

  // 🔥 ONLY ADDITION (DO NOT CHANGE UI)
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
    <section id="home" className="relative h-screen">

      <div className="absolute inset-0 z-0">
        <Slider {...settings} className="h-full">
          {images.map((img, index) => (
            <div key={index} className="h-screen">
              <div className="relative h-full">
                <img src={img} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/90"></div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">

        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-widest uppercase flex flex-wrap justify-center py-15">

          <span className="text-white font-sans">
            Elevate your&nbsp;
          </span>

          <span style={{ color: '#B08D57' }} className="min-w-[200px] text-left font-sans">
            <TypewriterText texts={dynamicTexts} />
          </span>

        </h1>

        {/* ⭐ YOUR ORIGINAL CARDS (UNCHANGED STYLE) */}
        <div className="mt-8 w-full max-w-5xl flex flex-col md:flex-row border border-/20">

          <div onClick={() => goToService(0)}
            className="flex-1 p-6 text-[#FFFF] text-center bg-[#B08D57]/20 rounded-lg p-4 m-2 border-[#B08D57] cursor-pointer">
            <Globe className="w-15 h-15 bg-gradient-to-br from-[#B08D57] via-[#3b2a12] to-black 
            shadow-[0_0_15px_rgba(176,141,87,0.4)] border border-[#B08D57] rounded-full p-2"/>
            <h2 className="text-base sm:text-lg md:text-xl mb-2">
              Website & Web Application Development
            </h2>
            <p className="text-xs sm:text-sm text-[#FFFFFF]/60 border border-[#B08D57]/20 rounded-lg p-4">
              Modern, responsive and scalable web solutions.
            </p>
          </div>

          <div onClick={() => goToService(1)}
            className="flex-1 p-6 text-[#FFFFFF] text-center bg-[#B08D57]/20 rounded-lg p-4 m-2 border-[#B08D57] cursor-pointer">
            <Smartphone className="w-15 h-15 bg-gradient-to-br from-[#B08D57] via-[#3b2a12] to-black 
            shadow-[0_0_15px_rgba(176,141,87,0.4)] border border-[#B08D57] rounded-full p-2"/>
            <h2 className="text-base sm:text-lg md:text-xl mb-2">
              Mobile Application Development
            </h2>
            <p className="text-xs sm:text-sm text-[#FFFFFF]/60 border border-[#B08D57]/20 rounded-lg p-4">
              Android & iOS apps with smooth user experience.
            </p>
          </div>

          <div onClick={() => goToService(2)}
            className="flex-1 p-6 text-[#FFFFFF] text-center bg-[#B08D57]/20 rounded-lg p-4 m-2 cursor-pointer">
            <ShoppingCart className="w-15 h-15 bg-gradient-to-br from-[#B08D57] via-[#3b2a12] to-black 
            shadow-[0_0_15px_rgba(176,141,87,0.4)] border border-[#B08D57] rounded-full p-2"/>
            <h2 className="text-base sm:text-lg md:text-xl mb-2 text-[#ffffff]">
              Second-hand Electronics Trading
            </h2>
            <p className="text-xs sm:text-sm text-[#FFFFFF]/60 border border-[#B08D57]/20 rounded-lg p-4">
              Buy and sell quality used electronic devices safely.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}