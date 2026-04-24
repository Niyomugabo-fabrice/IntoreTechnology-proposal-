import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

  // 🔒 Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProduct]);

  const openProduct = (index: number) => {
    setSelectedProduct(products[index]);
    setCurrentIndex(index);
  };

  const nextProduct = () => {
    const nextIndex = (currentIndex + 1) % products.length;
    setCurrentIndex(nextIndex);
    setSelectedProduct(products[nextIndex]);
  };

  const prevProduct = () => {
    const prevIndex =
      (currentIndex - 1 + products.length) % products.length;
    setCurrentIndex(prevIndex);
    setSelectedProduct(products[prevIndex]);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 bg-gradient-to-br from-[#001D57] via-[#3b2a12] to-black 
                  shadow-[0_0_15px_rgba(176,141,87,0.4)] border border-[#B08D57]  p-2">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#B08D57]">
          Our Products
        </h2>

        {/* GRID */}
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
                <h3 className="font-bold mt-1">{product.name}</h3>
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
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          
          {/* Left arrow */}
          <button
            onClick={prevProduct}
            className="absolute left-5 text-[#ffffff]/60 p-2 bg-gradient-to-br from-[#B08D57] via-[#3b2a12] to-black 
                  shadow-[0_0_15px_rgba(176,141,87,0.4)] border border-[#B08D57] rounded-full hover:text-[#ffffff]/100"
          >
            <ChevronLeft size={40} />
          </button>

          {/* Right arrow */}
          <button
            onClick={nextProduct}
            className="absolute right-5 text-[#ffffff]/60 p-2 bg-gradient-to-br from-[#B08D57] via-[#3b2a12] to-black 
                  shadow-[0_0_15px_rgba(176,141,87,0.4)] border border-[#B08D57] rounded-full hover:text-[#ffffff]/100"
          >
            <ChevronRight size={40} />
          </button>

          {/* CONTENT */}
          <div className="bg-white/80 p-6 rounded-lg max-w-md w-full relative z-10 mt-8">

            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-60 object-cover mb-4 rounded-lg border border-[#B08D57] p-4 bg-white/100"
            />

            <h2 className="text-xl text-[#0B0F07] mb-4 font-sans font-bold">
              {selectedProduct.name}
            </h2>

            <p className="text-[#0B0F07] mb-4 font-sans font-bold">
              {selectedProduct.category}
            </p>

            <p className="text-blue-600 font-bold mb-4">
              {selectedProduct.price}
            </p>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                `Hello, I'm interested in ${selectedProduct.name}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-br from-[#09FF07] via-[#3bba12] to-black 
                  shadow-[0_0_15px_rgba(176,141,87,0.4)] border border-[#B08D57] text-white/70 text-center py-2 rounded hover:text-white font-bold" 
            >
              Buy on WhatsApp
            </a>

            <button
              onClick={() => setSelectedProduct(null)}
              className="mt-3 w-full bg-gradient-to-br from-[#ff0909] via-[#fb2029] to-black 
                  shadow-[0_0_15px_rgba(176,141,87,0.4)] border border-[#B08D57] text-white/70 text-center py-2 rounded hover:text-white font-bold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}