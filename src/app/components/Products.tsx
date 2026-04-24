import { useState } from "react";

type Product = {
  name: string;
  price: string;
  category: string;
  image: string;
};

export function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const products: Product[] = [
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

  const openProduct = (index: number) => {
    setSelectedProduct(products[index]);
    setCurrentIndex(index);
  };

  const nextProduct = () => {
    const nextIndex = (currentIndex + 1) % products.length;
    setSelectedProduct(products[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Products
        </h2>

        {/* PRODUCT LIST */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              onClick={() => openProduct(index)}
              className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-xl cursor-pointer"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-cover"
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
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">

            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-60 object-cover mb-4 rounded"
            />

            <h2 className="text-xl font-bold">
              {selectedProduct.name}
            </h2>

            <p className="text-gray-500">
              {selectedProduct.category}
            </p>

            <p className="text-blue-600 font-bold mb-4">
              {selectedProduct.price}
            </p>

            {/* WhatsApp ONLY inside modal */}
            <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                `Hello, I'm interested in ${selectedProduct.name} (${selectedProduct.price})`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-green-500 text-white text-center py-2 rounded mb-3"
            >
              Buy on WhatsApp
            </a>

            {/* Next Product Button */}
            <button
              onClick={nextProduct}
              className="w-full bg-blue-600 text-white py-2 rounded mb-3"
            >
              Next Product →
            </button>

            <button
              onClick={() => setSelectedProduct(null)}
              className="w-full bg-red-500 text-white py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}