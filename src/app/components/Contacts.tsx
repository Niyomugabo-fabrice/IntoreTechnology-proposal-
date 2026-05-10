import {
  Mail,
  Phone,
  MessageCircle,
  Facebook,
  ArrowRight,
} from "lucide-react";

export function Contacts() {
  const whatsappMessage = encodeURIComponent("Hello IntoreTech");
  const whatsappLink = `https://wa.me/250791905573?text=${whatsappMessage}`;
  const emailLink =
    "https://mail.google.com/mail/?view=cm&fs=1&to=intoretech@gmail.com";
  const facebookLink = "https://www.facebook.com/IntoreTech";

  const contactItems = [
    {
      name: "WhatsApp",
      description: "Chat with us instantly",
      icon: MessageCircle,
      link: whatsappLink,
      gradient:
        "from-green-500/20 via-green-600/20 to-black border-green-500",
      glow: "hover:shadow-green-500/30",
    },
    {
      name: "intoretech@gmail.com",
      description: "Send us an email",
      icon: Mail,
      link: emailLink,
      gradient:
        "from-blue-500/20 via-cyan-500/20 to-black border-blue-500",
      glow: "hover:shadow-blue-500/30",
    },
    {
      name: "Facebook",
      description: "Follow our latest updates",
      icon: Facebook,
      link: facebookLink,
      gradient:
        "from-indigo-500/20 via-purple-500/20 to-black border-indigo-500",
      glow: "hover:shadow-indigo-500/30",
    },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#001D57] via-[#3b2a12] to-black flex items-center justify-center px-4 py-16"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#B08D57]/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#B08D57]/10 blur-3xl rounded-full"></div>

      {/* MAIN CARD */}
      <div className="relative z-10 w-full max-w-5xl rounded-3xl bg-black/30 backdrop-blur-xl border border-[#B08D57]/40 shadow-[0_0_40px_rgba(176,141,87,0.2)] p-6 sm:p-10">

        {/* TITLE */}
        <div className="text-center mb-12">

          <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
            Contact <span className="text-[#B08D57]">IntoreTech</span>
          </h2>

          <div className="w-28 h-1 bg-[#B08D57] mx-auto mt-4 rounded-full"></div>

          <p className="text-white/60 mt-5 text-sm sm:text-base max-w-2xl mx-auto">
            Let’s build your digital future together. Reach out through any
            platform below.
          </p>

        </div>

        {/* CONTACT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {contactItems.map((item, i) => {
            const Icon = item.icon;

            return (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative overflow-hidden rounded-3xl border bg-gradient-to-br ${item.gradient} p-6 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] shadow-lg ${item.glow}`}
              >

                {/* GLOW EFFECT */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-white/5"></div>

                {/* ICON */}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-5 group-hover:scale-110 transition">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* TEXT */}
                <div className="relative z-10">

                  <h3 className="text-xl font-bold text-white mb-2 break-words">
                    {item.name}
                  </h3>

                  <p className="text-white/60 text-sm leading-relaxed">
                    {item.description}
                  </p>

                </div>

                {/* BUTTON */}
                <div className="relative z-10 mt-6 flex items-center gap-2 text-[#B08D57] font-semibold group-hover:gap-4 transition-all">
                  Connect
                  <ArrowRight className="w-4 h-4" />
                </div>

              </a>
            );
          })}
        </div>

        {/* PHONE SECTION */}
        <div className="mt-10">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-5 hover:bg-white/10 transition-all duration-300">

            <div className="flex items-center gap-4">

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#B08D57] via-[#3b2a12] to-black border border-[#B08D57] flex items-center justify-center shadow-[0_0_20px_rgba(176,141,87,0.3)]">
                <Phone className="w-7 h-7 text-white" />
              </div>

              <div>
                <h3 className="text-white text-lg font-bold">
                  Call Us Directly
                </h3>

                <p className="text-white/60 text-sm">
                  Available for support and business inquiries
                </p>
              </div>

            </div>

            <a
              href="tel:+250791905573"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#B08D57] to-[#6b4d22] text-white font-bold hover:scale-105 transition-all shadow-lg"
            >
              +250 791 905 573
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}