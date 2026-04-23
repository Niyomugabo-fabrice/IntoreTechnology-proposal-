import { useState } from "react";
import { Globe, Smartphone, ShoppingCart, MessageCircle } from "lucide-react";

export function Services() {
  const [activeIndex, setActiveIndex] = useState(null);

  const whatsappMessage = encodeURIComponent("Hello IntoreTech");
  const whatsappLink = `https://wa.me/250791905573?text=${whatsappMessage}`;

  const services = [
    {
      title: "Website Development",
      icon: <Globe className="w-10 h-10" />,
      description: (
        <div className="text-sm space-y-2 text-left ">
          <p>We build modern, fast, and responsive websites.</p>

          <p className="font-bold">Technologies:</p>
          <ul className="list-disc list-inside">
            <li>React / HTML / CSS</li>
            <li>Node.js / Django</li>
            <li>MySQL / MongoDB</li>
          </ul>

          <p className="font-bold">Web Types:</p>
          <ul className="list-disc list-inside">
            <li>Business</li>
            <li>Portfolio</li>
            <li>E-commerce</li>
            <li>Booking systems</li>
          </ul>

          <p className="font-bold">Pricing:</p>
          <p>From 250,000 RWF</p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 mt-3 text-green-400 hover:text-green-500"
          >
            <MessageCircle className="w-5 h-5" />
            Contact on WhatsApp
          </a>
        </div>
      ),
    },

    {
      title: "Mobile Application Development",
      icon: <Smartphone className="w-10 h-10" />,
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

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 mt-3 text-green-400 hover:text-green-500"
          >
            <MessageCircle className="w-5 h-5" />
            Contact on WhatsApp
          </a>
        </div>
      ),
    },

    {
      title: "Second Hand Devices",
      icon: <ShoppingCart className="w-10 h-10" />,
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

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 mt-3 text-green-400 hover:text-green-500"
          >
            <MessageCircle className="w-5 h-5" />
            Contact on WhatsApp
          </a>
        </div>
      ),
    },
  ];

  return (
    <section id="services" className="py-16 bg-black/90 text-white">
      <div className="max-w-7xl mx-auto px-2 py-8 sm:px-6 lg:px-8 bg-white/5 border border-white/20 rounded-xl">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Services
        </h2>

        {/* CONTENT */}
        {activeIndex === null ? (
          // SHOW ALL SERVICES (SUMMARY)
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className="cursor-pointer bg-[#B08D57] text-white rounded-2xl shadow-md p-6 text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex flex-col items-center gap-3">
                  {service.icon}
                  <h3 className="text-lg font-bold">{service.title}</h3>
                  <p className="text-sm opacity-80">Click to view details</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // SHOW SELECTED SERVICE
          <div className="bg-[#FEB933'] text-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto bg-black/10 border border-white/50">
            <div className="flex items-center gap-4 mb-4">
              {services[activeIndex].icon}
              <h3 className="text-2xl font-bold">
                {services[activeIndex].title}
              </h3>
            </div>

          {services[activeIndex].description}
           <button
              onClick={() => setActiveIndex(null)}
              className="mb-4 text-sm  hover:text-white bg-white/20 px-4 py-2 rounded-lg mt-6 transition-colors"
            >
              ← Back to services
            </button>

          </div>
        )}
      </div>
    </section>
  );
}