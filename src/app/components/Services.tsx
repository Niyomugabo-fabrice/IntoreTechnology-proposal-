import { useState, useRef, useEffect } from "react";
import { Globe, Smartphone, ShoppingCart, MessageCircle } from "lucide-react";

import djangoimage from "../../imports/django.png";
import javascriptimage from "../../imports/javascript.png";
import mysqlimage from "../../imports/sql.png";
import nodejsimage from "../../imports/nodejs.png";
import reactimage from "../../imports/react.png";
import flutterimage from "../../imports/flutter.png";
import reactnativeimage from "../../imports/reactnative.png";
import firebaseimage from "../../imports/firebase.png";
import cssimage from "../../imports/css.png";
import htmlimage from "../../imports/html.png";
import mangodbimage from "../../imports/mangodb.png";

export function Services({ activeService }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const cardRefs = useRef([]);

  const whatsappMessage = encodeURIComponent("Hello IntoreTech");
  const whatsappLink = `https://wa.me/250791905573?text=${whatsappMessage}`;

  // 🔥 Auto activate when clicking top cards
  useEffect(() => {
    if (activeService !== null) {
      setActiveIndex(activeService);

      setTimeout(() => {
        cardRefs.current[activeService]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 100);
    }
  }, [activeService]);
  const [techIndex, setTechIndex] = useState(0);
  useEffect(() => {
  const interval = setInterval(() => {
    setTechIndex((prev) => (prev + 1) % 8);
  }, 4000); // speed

  return () => clearInterval(interval);
}, []);

  const services = [
    {
      title: "Website Development",
      icon: (
        <Globe className="w-20 h-20 bg-gradient-to-br from-[#B08D57] via-[#3b2a12] to-black 
        shadow-[0_0_15px_rgba(176,141,87,0.4)] border border-[#B08D57] rounded-full p-4"/>
      ),
      description: (
        <div className="text-sm space-y-2 text-left">
          <p>We build modern, fast, and responsive websites, both frontend and backend.</p>

          <p className="font-bold">Technologies:</p>
        <div className="overflow-hidden whitespace-nowrap">
          <div className="flex justify-center items-center h-20">
  {[
    reactimage,
    htmlimage,
    cssimage,
    nodejsimage,
    djangoimage,
    javascriptimage,
    mysqlimage,
    mangodbimage,
  ].map((img, i) => (
    <img
      key={i}
      src={img}
      className={`w-16 h-16 border border-[#B08D57] rounded-full absolute transition-all duration-500
      ${techIndex === i ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
    />
  ))}
</div>
          </div>

          <p className="font-bold">Web Types:</p>
          <ul className="list-disc list-inside">
            <li>Business</li>
            <li>Portfolio</li>
            <li>E-commerce</li>
            <li>Booking systems</li>
          </ul>

          <p className="font-bold">Pricing:</p>
          <p>From 250,000 RWF</p>

          <a href={whatsappLink} className="flex items-center gap-2 mt-3 text-green-400 font-bold">
            <MessageCircle className="w-5 h-5" />
            Contact on WhatsApp
          </a>
        </div>
      ),
    },

    {
      title: "Mobile Application Development",
      icon: (
        <Smartphone className="w-15 h-15 bg-gradient-to-br from-[#B08D57] via-[#3b2a12] to-black 
        shadow-[0_0_15px_rgba(176,141,87,0.4)] border border-[#B08D57] rounded-full p-2"/>
      ),
      description: (
        <div className="text-sm space-y-2 text-left">
          <p>We build Android & iOS mobile applications.</p>

          <p className="font-bold">Technologies:</p>
          <ul className="list-disc list-inside">
            <li>Flutter</li>
            <li>React Native</li>
            <li>Firebase</li>
          </ul>

          <p className="font-bold">Apps:</p>
          <ul className="list-disc list-inside">
            <li>Business apps</li>
            <li>E-commerce apps</li>
            <li>Fintech apps</li>
          </ul>

          <p className="font-bold">Features:</p>
          <ul className="list-disc list-inside">
            <li>Fast</li>
            <li>Secure</li>
            <li>Clean UI</li>
          </ul>

          <a href={whatsappLink} className="flex items-center gap-2 mt-3 text-green-400 font-bold">
            <MessageCircle className="w-5 h-5" />
            Contact on WhatsApp
          </a>
        </div>
      ),
    },

    {
      title: "Second Hand Devices",
      icon: (
        <ShoppingCart className="w-15 h-15 bg-gradient-to-br from-[#B08D57] via-[#3b2a12] to-black 
        shadow-[0_0_15px_rgba(176,141,87,0.4)] border border-[#B08D57] rounded-full p-2"/>
      ),
      description: (
        <div className="text-sm space-y-2 text-left">
          <p>Buy and sell second-hand smartphones and laptops.</p>

          <p className="font-bold">Categories:</p>
          <ul className="list-disc list-inside">
            <li>Smartphones</li>
            <li>Laptops</li>
          </ul>

          <p className="font-bold">Services:</p>
          <ul className="list-disc list-inside">
            <li>Buying devices</li>
            <li>Selling devices</li>
          </ul>

          <p className="font-bold">Benefits:</p>
          <ul className="list-disc list-inside">
            <li>Affordable</li>
            <li>Tested</li>
            <li>Secure</li>
          </ul>

          <a href={whatsappLink} className="flex items-center gap-2 mt-3 text-green-400 font-bold">
            <MessageCircle className="w-5 h-5" />
            Contact on WhatsApp
          </a>
        </div>
      ),
    },
  ];

  const handleClick = (i) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  return (
    <section id="services" className="py-16 bg-gradient-to-br from-[#001D57] via-[#3b2a12] to-black 
                  shadow-[0_0_15px_rgba(176,141,87,0.4)] text-[#B08D57]">
      <div className="max-w-7xl mx-auto px-2 py-8 sm:px-6 lg:px-8 bg-[#000000]/20 border border-[#B08D57] rounded-xl">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service, index) => {
            const isActive = activeIndex === index;
            const isDim = activeIndex !== null && activeIndex !== index;

            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                onClick={() => handleClick(index)}
                className={`relative cursor-pointer bg-[#B08D57]/15 text-white rounded-4xl shadow-md p-6 text-center 
                transition-all duration-300 overflow-hidden
                ${isActive ? "scale-110 z-20" : ""}
                ${isDim ? "opacity-60" : "opacity-100"}`}
              >

                {isDim && (
                  <div className="absolute inset-0 bg-black/80 rounded-4xl z-10"></div>
                )}

                <div className="relative z-20 flex flex-col items-center gap-3">
                  {service.icon}
                  <h3 className="text-lg">{service.title}</h3>
                  <p className="text-sm opacity-80">Click to focus</p>
                </div>

                <div className="relative z-20 mt-4 text-left">
                  {service.description}
                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}