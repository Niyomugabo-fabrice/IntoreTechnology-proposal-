export function About() {
  return (
    <section id="about" className="text-[#B08D57]">
      <div className= " bg-gradient-to-br from-[#001D57] via-[#3b2a12] to-black shadow-[0_0_15px_rgba(176,141,87,0.4)]   border-[#B08D57] rounded-lg p-8 md:p-12">
        <div className="border border-[#B08D57] rounded-lg p-6 bg-[#000000]/20">
         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white py-4">About IntoreTech</h2>
          <div className="space-y-6 text-[FFFFFF]/90">
            <p className="text-md leading-relaxed  bg-gradient-to-br from-[#B08D57] via-[#3b2a12] to-black 
                  shadow-[0_0_15px_rgba(176,141,87,0.4)] border border-[#B08D57]   pb-10 rounded-lg text-[#FFFFFF]/90 font-bold px-4">
            <p className="text-2xl leading-relaxed rounded-lg text-[#FFFFFF]/90 font-bold py-4">Our main Objective</p>
              IntoreTech has the aim of providing the best website and mobile application development
              services with quality systems. We also specialize in buying and selling second-hand
              electronic devices, making technology accessible to everyone.
            </p>
            <div className="mt-8 bg-bg-gradient-to-br from-[#B08D57] via-[#3b2a12] to-black 
                  shadow-[0_0_15px_rgba(176,141,87,0.4)] border border-[#B08D57]  p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#FFFFFF">Our Services & Pricing</h3>
              <div className="space-y-4">
                <div className="rounded-lg bg-gradient-to-br from-[#B08D57] via-[#3b2a12] to-black 
                  shadow-[0_0_15px_rgba(176,141,87,0.4)] border border-[#B08D57] rounded-full p-2">
                  <h4 className="text-[#FFFFFF]/70 text-lg mb-2 font-bold p--12">Frontend Development</h4>
                  <p className="text-[#FFFFFF]/70 mb-2">
                    We develop responsive and modern frontend systems tailored to your needs.
                  </p>
                  <p className="text-[#ffffff]/100 font-bold text-xl font-sans">200,000 - 300,000 RWF</p>
                </div>

                <div className="bg-gradient-to-br from-[#B08D57] via-[#3b2a12] to-black 
                  shadow-[0_0_15px_rgba(176,141,87,0.4)] border border-[#B08D57] rounded-full p-2 p-6 rounded-lg">
                  <h4 className="text-[#FFFFFF]/70 text-lg mb-2 font-bold p--12">Full Stack Development</h4>
                  <p className="text-[#FFFFFF]/70 mb-2 font-sans">
                    Complete solutions with both frontend and backend systems for your business.
                  </p>
                  <p className="text-[#ffffff]/100 font-bold text-xl font-sans">400,000 - 600,000 RWF</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
