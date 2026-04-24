import { useState } from "react";

type Product = {
  name: string;
  price: string;
  category: string;
  image: string;
};

export function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products = [
    {
      name: 'MacBook Pro 2019',
      price: '450,000 RWF',
      category: 'Laptop',
      image: 'https://images.unsplash.com/photo-1636083513967-800c0ba9371b?auto=format&fit=crop&w=1080&q=80'
    },
    {
      name: 'Dell XPS 13',
      price: '380,000 RWF',
      category: 'Laptop',
      image: 'https://images.unsplash.com/photo-1635896383799-06e1e0accda0?auto=format&fit=crop&w=1080&q=80'
    },
    {
      name: 'iPhone 12 Pro',
      price: '480,000 RWF',
      category: 'Smartphone',
      image: 'https://images.unsplash.com/photo-1662221356784-14b60d842253?auto=format&fit=crop&w=1080&q=80'
    },
    {
      name: 'Samsung Galaxy S21',
      price: '420,000 RWF',
      category: 'Smartphone',
      image: 'https://images.unsplash.com/photo-1648737963059-59ec8e2d50c5?auto=format&fit=crop&w=1080&q=80'
    }
  ];

  const phoneNumber = "250791905573";

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, index) => {
            const message = encodeURIComponent(
              `Hello, I'm interested in ${product.name} (${product.price})`
            );
            const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

            return (
              <div
                key={index}
                className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-xl"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-60 object-cover cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                />

                <div className="p-4">
                  <span className="text-xs text-gray-500 uppercase">
                    {product.category}
                  </span>

                  <h3 className="font-bold mt-1 mb-2">
                    {product.name}
                  </h3>

                  <p className="text-blue-600 font-bold">
                    {product.price}
                  </p>

                  {/* WhatsApp Button */}
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-3 bg-green-500 text-white text-center py-2 rounded hover:bg-green-600"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Next Products Button */}
        <div className="text-center mt-10">
          <button
            onClick={() => alert("Load more products...")}
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          >
            Next Products →
          </button>
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">

            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-60 object-cover mb-4"
            />

            <h2 className="text-xl font-bold">
              {selectedProduct.name}
            </h2>

            <p className="text-gray-500">
              {selectedProduct.category}
            </p>

            <p className="text-blue-600 font-bold">
              {selectedProduct.price}
            </p>

            {/* WhatsApp inside modal */}
            <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                `Hello, I'm interested in ${selectedProduct.name}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 bg-green-500 text-white text-center py-2 rounded"
            >
              Contact via WhatsApp
            </a>

            <button
              onClick={() => setSelectedProduct(null)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}