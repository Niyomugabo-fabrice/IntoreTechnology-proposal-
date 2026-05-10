import { X, Check, MessageCircle } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  specs: string[];
  condition: string;
  warranty: string;
}

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export function ProductModal({
  product,
  onClose,
}: ProductModalProps) {

  const handleWhatsAppInquiry = () => {
    const message = encodeURIComponent(
      `Hi! I'm interested in the ${product.name} listed at ${product.price}. Can you provide more details?`
    );

    window.open(
      `https://wa.me/250791905573?text=${message}`,
      "_blank"
    );
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose}
    >

      <div
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >

        {/* HEADER */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center rounded-t-2xl z-10">
          <h2 className="text-2xl font-bold text-gray-900">
            Product Details
          </h2>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* CONTENT */}
        <div className="p-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* IMAGE SECTION */}
            <div>

              <div className="bg-gray-100 rounded-2xl overflow-hidden h-[400px] flex items-center justify-center p-4 border border-gray-200">

                {/* ✅ FIXED IMAGE */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />

              </div>

              {/* TAGS */}
              <div className="mt-4 flex flex-wrap gap-2">

                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    product.condition === "Excellent"
                      ? "bg-green-100 text-green-800"
                      : product.condition === "Like New"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {product.condition}
                </span>

                <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                  {product.warranty}
                </span>

              </div>
            </div>

            {/* DETAILS SECTION */}
            <div>

              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h3>

              <p className="text-3xl font-bold text-blue-600 mb-4">
                {product.price}
              </p>

              {/* DESCRIPTION */}
              <div className="mb-6">

                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Description
                </h4>

                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>

              </div>

              {/* SPECS */}
              <div className="mb-6">

                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Specifications
                </h4>

                <ul className="space-y-2">

                  {product.specs.map((spec, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-gray-600"
                    >
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />

                      <span>{spec}</span>
                    </li>
                  ))}

                </ul>
              </div>

              {/* BUTTONS */}
              <div className="space-y-3">

                <button
                  onClick={handleWhatsAppInquiry}
                  className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 font-semibold hover:scale-[1.02]"
                >
                  <MessageCircle className="w-5 h-5" />

                  Inquire on WhatsApp
                </button>

                <button
                  onClick={onClose}
                  className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-xl transition-all duration-300 font-semibold"
                >
                  Close
                </button>

              </div>

              {/* NOTE */}
              <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">

                <p className="text-sm text-gray-700 leading-relaxed">
                  <span className="font-semibold">Note:</span>{" "}
                  All products are thoroughly tested and come with a warranty.
                  Contact us for more information or to schedule a viewing.
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}