export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 text-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-black/90">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white py-4">About IntoreTech</h2>
        <div className="bg-[#9AE630]/20 rounded-lg shadow-lg p-8 md:p-12 text-center text-white-400 ">
          <div className="space-y-6 text-[FFFFFF]/90">
          <p className="text-2xl leading-relaxed p-6 rounded-lg text-[#FFFFFF]/90 font-bold">Our main Objective</p>
            <p className="text-md leading-relaxed  bg-[#9AE630]/30 p-3 rounded-lg text-[#FFFFFF]/90 font-bold">
              IntoreTech has the aim of providing the best website and mobile application development
              services with quality systems. We also specialize in buying and selling second-hand
              electronic devices, making technology accessible to everyone.
            </p>
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4 text-[#FFFFFF]/90">Our Services & Pricing</h3>
              <div className="space-y-4">
                <div className="p-6 rounded-lg bg-[#9AE630]/30">
                  <h4 className="text-[#FFFFFF]/90 text-lg mb-2 font-bold ">Frontend Development</h4>
                  <p className="text-[#FFFFFF]/90 mb-2">
                    We develop responsive and modern frontend systems tailored to your needs.
                  </p>
                  <p className="text-[#9AE630]/90 font-bold text-xl font-sans">200,000 - 300,000 RWF</p>
                </div>

                <div className="bg-[#9AE630]/30 p-6 rounded-lg">
                  <h4 className="text-[#FFFFFF]/90 text-lg mb-2 font-bold">Full Stack Development</h4>
                  <p className="text-[#FFFFFF]/90 mb-2 font-sans">
                    Complete solutions with both frontend and backend systems for your business.
                  </p>
                  <p className="text-[#9AE630]/90 font-bold text-xl font-sans">400,000 - 600,000 RWF</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
