export function About() {
  return (
    <section
      id="about"
      className="text-[#B08D57] py-16 px-4 sm:px-6 lg:px-10 bg-gradient-to-br from-[#001D57] via-[#3b2a12] to-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* MAIN CONTAINER */}
        <div className="border border-[#B08D57] rounded-3xl p-5 sm:p-8 lg:p-12 bg-black/20 backdrop-blur-md shadow-[0_0_30px_rgba(176,141,87,0.25)]">

          {/* TITLE */}
          <div className="text-center mb-12">

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#B08D57] tracking-wide">
              About IntoreTech
            </h2>

            <div className="w-24 sm:w-32 h-1 bg-[#B08D57] mx-auto mt-4 rounded-full"></div>

            <p className="text-white/60 mt-5 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed px-2">
              Empowering businesses and individuals through modern digital
              solutions and quality technology services.
            </p>

          </div>

          {/* TOP SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

            {/* LEFT */}
            <div className="bg-gradient-to-br from-[#B08D57]/20 via-[#3b2a12]/40 to-black border border-[#B08D57] rounded-3xl p-5 sm:p-7 hover:scale-[1.01] transition duration-300 shadow-[0_0_20px_rgba(176,141,87,0.2)]">

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-5">
                Our Main Objective
              </h3>

              <p className="text-white/80 leading-relaxed text-sm sm:text-base lg:text-lg">
                IntoreTech focuses on delivering high-quality website and mobile
                application development services with modern technologies and
                clean user experiences.
              </p>

              <p className="text-white/70 leading-relaxed mt-5 text-sm sm:text-base">
                We also specialize in buying and selling second-hand electronic
                devices, making technology more accessible and affordable for
                everyone.
              </p>

            </div>

            {/* RIGHT STATS */}
            <div className="grid grid-cols-2 gap-4 sm:gap-5">

              <div className="bg-black/30 border border-[#B08D57] rounded-2xl p-4 sm:p-6 text-center hover:bg-[#B08D57]/10 transition duration-300">
                <h2 className="text-2xl sm:text-2.5xl font-extrabold text-[#B08D57] font-sans">
                  24/7
                </h2>
                <p className="text-white/70 mt-2 text-xs sm:text-sm">
                  Client Support
                </p>
              </div>

              <div className="bg-black/30 border border-[#B08D57] rounded-2xl p-4 sm:p-6 text-center hover:bg-[#B08D57]/10 transition duration-300">
                <h2 className="text-2xl sm:text-2.5xl font-extrabold text-[#B08D57] font-sans">
                  Fast
                </h2>
                <p className="text-white/70 mt-2 text-xs sm:text-sm">
                  System Delivery
                </p>
              </div>

              <div className="bg-black/30 border border-[#B08D57] rounded-2xl p-4 sm:p-6 text-center hover:bg-[#B08D57]/10 transition duration-300">
                <h2 className="text-2xl sm:text-2.5xl font-extrabold text-[#B08D57] font-sans">
                  Secure
                </h2>
                <p className="text-white/70 mt-2 text-xs sm:text-sm">
                  Modern Systems
                </p>
              </div>

              <div className="bg-black/30 border border-[#B08D57] rounded-2xl p-4 sm:p-6 text-center hover:bg-[#B08D57]/10 transition duration-300">
                <h2 className="text-2xl sm:text-2.5xl font-extrabold text-[#B08D57] font-sans">
                  Premium
                </h2>
                <p className="text-white/70 mt-2 text-xs sm:text-sm">
                  UI/UX Design
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}