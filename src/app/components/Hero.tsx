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
  "YOUR DIGITAL VALUE",
  "YOUR DIGITAL ASSETS",
  "YOUR DIGITAL WORLD",
  "YOUR DIGITAL LIFE",
  "YOUR DIGITAL INCOME",
  "YOUR DIGITAL IMAGE"
];

function TypewriterText({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setDisplayedText('');
    setCurrentIndex(0);
  }, [text]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return <span>{displayedText}<span className="animate-pulse">|</span></span>;
}

export function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % dynamicTexts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
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
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="relative z-20 h-full flex flex-col items-center justify-center text-white px-4">
        <div className="text-center">
          <h3 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
            ELEVATE
          </h3>
          <h4 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold min-h-[1.5em] flex items-center justify-center">
            <TypewriterText text={dynamicTexts[currentTextIndex]} />
          </h4>
        </div>
      </div>
    </section>
  );
}
