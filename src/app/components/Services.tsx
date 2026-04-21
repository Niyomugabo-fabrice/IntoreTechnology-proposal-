import { Globe, Smartphone, ShoppingCart } from 'lucide-react';

export function Services() {
  const services = [
    {
      title: 'Website Development',
      icon: <Globe className="w-16 h-16 mb-4" />,
      description: 'Professional web development services tailored to your business needs.',
    },
    {
      title: 'Mobile Application Development',
      icon: <Smartphone className="w-16 h-16 mb-4" />,
      description: 'Native and cross-platform mobile apps that engage your users.',
    },
    {
      title: 'Buy and Sell Second Hand Electronic Devices',
      icon: <ShoppingCart className="w-16 h-16 mb-4" />,
      description: 'Quality pre-owned electronics at affordable prices.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-center text-blue-600">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
