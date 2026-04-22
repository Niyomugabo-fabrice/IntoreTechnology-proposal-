export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 text-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-black/90">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white py-4">About IntoreTech</h2>
        <div className="bg-[#B08D57] rounded-lg shadow-lg p-8 md:p-12 text-center text-white-400">
          <div className="space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">
              IntoreTech has the aim of providing the best website and mobile application development
              services with quality systems. We also specialize in buying and selling second-hand
              electronic devices, making technology accessible to everyone.
            </p>

            <div className="border-l-4 border-blue-600 pl-6 my-8">
              <p className="text-2xl font-bold text-gray-900 italic">
                "Elevate your digital value"
              </p>
              <p className="text-sm text-gray-500 mt-2">Our Motto</p>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4">Our Services & Pricing</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Frontend Development</h4>
                  <p className="text-gray-600 mb-2">
                    We develop responsive and modern frontend systems tailored to your needs.
                  </p>
                  <p className="text-blue-600 font-bold text-xl">200,000 - 300,000 RWF</p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Full Stack Development</h4>
                  <p className="text-gray-600 mb-2">
                    Complete solutions with both frontend and backend systems for your business.
                  </p>
                  <p className="text-purple-600 font-bold text-xl">400,000 - 600,000 RWF</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
