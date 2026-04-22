import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image1 from "../../imports/image.png";
import image2 from "../../imports/image-1.png";
import image3 from "../../imports/image-2.png";
import image4 from "../../imports/image-6.png";
import image5 from "../../imports/image-8.png";

const dynamicTexts = [
  "Your online reputation",
  "Your online presence",
  "Your digital brand",
  "Your digital identity",
  "Your digital value",
];

// 🔥 TYPEWRITER FIXED
function TypewriterText({ texts }: { texts: string[] }) {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  const currentText = texts[textIndex];

  useEffect(() => {
    const speed = isDeleting ? 30 : 60;

    const timeout = setTimeout(() => {

      // typing
      if (!isDeleting) {
        const next = currentText.substring(0, charIndex + 1);
        setDisplayedText(next);
        setCharIndex((prev) => prev + 1);

        if (next === currentText) {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      }

      // deleting
      else {
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
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: false,
  };

  const images = [image1, image2, image3, image4, image5];

  return (
    <section id="home" className="relative h-screen">

      {/* BACKGROUND SLIDER */}
      <div className="absolute inset-0 z-0">
        <Slider {...settings} className="h-full">
          {images.map((img, index) => (
            <div key={index} className="h-screen">
              <div className="relative h-full">
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/80"></div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

     {/* CONTENT */}
<div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">

  {/* TITLE */}
  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-extrabold tracking-widest uppercase flex flex-wrap justify-center">

    <span className="text-white shrink-0">
      ELEVATE&nbsp;
    </span>

    <span
      style={{ color: '#B08D57' }}
      className="inline-block min-w-[200px] sm:min-w-[260px] md:min-w-[320px] lg:min-w-[420px] text-left overflow-hidden whitespace-nowrap"
    >
      <TypewriterText texts={dynamicTexts} />
    </span>

  </h1>

  {/* ⭐ SERVICES CARDS */}
  <div className="mt-8 w-full max-w-6xl flex flex-col md:flex-row bg-white/5 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden">

    {/* Card 1 */}
    <div className="flex-1 p-6 text-white text-center">
      <h2 className="text-base sm:text-lg md:text-xl font-bold mb-2">
        Website Development
      </h2>
      <p className="text-xs sm:text-sm text-gray-300">
        Modern, responsive and scalable web solutions.
      </p>
    </div>

    {/* Divider */}
    <div className="hidden md:block w-px bg-white/20"></div>

    {/* Card 2 */}
    <div className="flex-1 p-6 text-white text-center">
      <h2 className="text-base sm:text-lg md:text-xl font-bold mb-2">
        Mobile Application Development
      </h2>
      <p className="text-xs sm:text-sm text-gray-300">
        Android & iOS apps with smooth user experience.
      </p>
    </div>

    {/* Divider */}
    <div className="hidden md:block w-px bg-white/20"></div>

    {/* Card 3 */}
    <div className="flex-1 p-6 text-white text-center">
      <h2 className="text-base sm:text-lg md:text-xl font-bold mb-2">
        Second-hand Electronics Trading
      </h2>
      <p className="text-xs sm:text-sm text-gray-300">
        Buy and sell quality used electronic devices safely.
      </p>
    </div>

  </div>

</div>
    </section>
  );
}