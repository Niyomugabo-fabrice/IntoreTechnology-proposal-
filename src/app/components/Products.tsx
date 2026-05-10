import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Product = {
  name: string;
  price: string;
  category: string;
  image: string;
};

export function Products() {
  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const products: Product[] = [
    {
      name: "MacBook Pro 2019",
      price: "450,000 RWF",
      category: "Laptop",
      image: "image/mac.jpg",
    },
    {
      name: "Dell XPS 13",
      price: "380,000 RWF",
      category: "Laptop",
      image: "image/laptop.jpg",
    },
    {
      name: "iPhone 12 Pro",
      price: "480,000 RWF",
      category: "Smartphone",
      image: "image/iphone16.jpg",
    },
    {
      name: "Samsung Galaxy S21",
      price: "420,000 RWF",
      category: "Smartphone",
      image: "image/samsung.jpg",
    },
    {
      name: "Pixel 5",
      price: "300,000 RWF",
      category: "Smartphone",
      image: "image/pixel5.png",
    },
    {
      name: "Google Pixel",
      price: "1,340,000 RWF",
      category: "Smartphone",
      image: "image/pixel.jpg",
    },
  ];

  const phoneNumber = "250791905573";

  // Prevent background scroll when modal is open
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
    <section id="products" className="py-20 bg-white">

      <div
        className="max-w-7xl mx-auto px-4 py-8 
        bg-gradient-to-br from-[#001D57] via-[#3b2a12] to-black
        shadow-[0_0_15px_rgba(176,141,87,0.4)]
        border border-[#B08D57]
        rounded-3xl"
      >

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#B08D57]">
          Our Products
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">

          {products.map((product, index) => (
            <div
              key={index}
              onClick={() => openProduct(index)}
              className="
              group
              bg-white/95
              rounded-2xl
              overflow-hidden
              cursor-pointer
              border border-[#B08D57]/20
              hover:border-[#B08D57]
              transition-all duration-300
              hover:-translate-y-2
              hover:shadow-[0_0_25px_rgba(176,141,87,0.3)]
              "
            >

              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="
                  w-full
                  h-72
                  object-cover
                  group-hover:scale-105
                  transition duration-500
                  "
                />
              </div>

              {/* DETAILS */}
              <div className="p-5 flex flex-col gap-2">

                <span
                  className="
                  text-xs
                  uppercase
                  bg-[#B08D57]/10
                  text-[#B08D57]
                  px-3 py-1
                  rounded-full
                  w-fit
                  font-bold
                  "
                >
                  {product.category}
                </span>

                <h3 className="font-bold text-lg text-[#111]">
                  {product.name}
                </h3>

                <p className="text-[#55AA00] text-lg font-extrabold">
                  {product.price}
                </p>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedProduct && (
        <div
          className="
          fixed inset-0
          bg-black/90
          flex items-center justify-center
          z-50
          p-4
          "
        >

          {/* LEFT BUTTON */}
          <button
            onClick={prevProduct}
            className="
            absolute left-3 sm:left-5
            text-[#ffffff]/60
            p-2
            bg-gradient-to-br from-[#B08D57] via-[#3b2a12] to-black
            shadow-[0_0_15px_rgba(176,141,87,0.4)]
            border border-[#B08D57]
            rounded-full
            hover:text-white
            transition
            "
          >
            <ChevronLeft size={40} />
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={nextProduct}
            className="
            absolute right-3 sm:right-5
            text-[#ffffff]/60
            p-2
            bg-gradient-to-br from-[#B08D57] via-[#3b2a12] to-black
            shadow-[0_0_15px_rgba(176,141,87,0.4)]
            border border-[#B08D57]
            rounded-full
            hover:text-white
            transition
            "
          >
            <ChevronRight size={40} />
          </button>

          {/* MODAL CONTENT */}
          <div
            className="
            bg-white/90
            backdrop-blur-xl
            px-5 sm:p-6
            rounded-3xl
            w-full
            max-w-md
            relative
            z-10
            border border-[#B08D57]
            shadow-[0_0_30px_rgba(176,141,87,0.4)]
            "
          >

            {/* PRODUCT IMAGE */}
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="
              w-100
              h-70
              object-cover
              rounded-2xl
              border border-[#B08D57]/40
              bg-white
              mt-15
              "
            />

            {/* PRODUCT INFO */}
            <h2 className="text-1xl text-[#0B0F07] mb-3 font-bold">
              {selectedProduct.name}
            </h2>

            <p
              className="
              text-[#B08D57]
              mb-3
              font-bold
              uppercase
              tracking-wide
              "
            >
              {selectedProduct.category}
            </p>

            <p className="text-[#55AA00] text-1xl font-extrabold mb-5">
              {selectedProduct.price}
            </p>

            {/* WHATSAPP BUTTON */}
            <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                `Hello, I'm interested in ${selectedProduct.name}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
              block
              bg-gradient-to-br from-[#09FF07] via-[#3bba12] to-black
              shadow-[0_0_15px_rgba(176,141,87,0.4)]
              border border-[#B08D57]
              text-white/80
              text-center
              rounded-xl
              hover:text-white
              h-7
              font-bold
              transition-all duration-300
              hover:scale-[1.02]
              "
            >
              Buy on WhatsApp
            </a>

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="
              mt-2
              w-full
              bg-gradient-to-br from-[#ff0909] via-[#fb2029] to-black
              shadow-[0_0_15px_rgba(176,141,87,0.4)]
              border border-[#B08D57]
              text-white/80
              text-center
              rounded-xl
              hover:text-white
              font-bold
              transition-all duration-300
              h-7
              hover:scale-[1.02]
              "
            >
              Close
            </button>

          </div>
        </div>
      )}
    </section>
  );
}