import { Globe, Smartphone, ShoppingCart } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Website Development",
      icon: <Globe className="w-10 h-10" />,
      description: (
        <div className="text-sm space-y-2 text-left">
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
            <li>Fast </li>
            <li>Secure </li>
            <li>Clean UI </li>
          </ul>
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
            <li>Affordable </li>
            <li>Tested </li>
            <li>Secure </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        </h2>

        <p className="text-center text-[#FFFFFF]-500 mb-12 max-w-2xl mx-auto">
          <h2 className='text-3xl md:text-4xl font-bold text-center mb-4 '>Services</h2>
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#B08D57] bg-black/100 text-white rounded-2xl shadow-md p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >

              {/* Icon + Title */}
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-black text-black-600 rounded-full">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <div className="text-bg-[#B08D57]-600">
                {service.description}
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}