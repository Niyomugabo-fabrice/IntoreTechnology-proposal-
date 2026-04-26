import { Mail, Phone, MessageCircle, Facebook } from "lucide-react";

export function Contacts() {
  const whatsappMessage = encodeURIComponent("Hello IntoreTech");
  const whatsappLink = `https://wa.me/250791905573?text=${whatsappMessage}`;
  const emailLink = "https://mail.google.com/mail/?view=cm&fs=1&to=intoretech@gmail.com";
  const facebookLink = "https://www.facebook.com/IntoreTech";

  const contactItems = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      link: whatsappLink,
      color: "bg-green-500",
    },
    {
      name: "intoretech@gmail.com",
      icon: Mail,
      link: emailLink,
      color: "bg-blue-500",
    },
    {
      name: "Facebook",
      icon: Facebook,
      link: facebookLink,
      color: "bg-indigo-600",
    },
  ];

  return (
    <div
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#B08D57] via-[#3b2a12] to-black px-4 py-16"
    >
      <div className="w-full max-w-md rounded-2xl bg-black/40 backdrop-blur-md border border-[#B08D57] shadow-xl p-8">

        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Contact Us
        </h2>

        {/* Contact Buttons */}
        <div className="space-y-4">
          {contactItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-white font-semibold transition-all hover:scale-[1.03] hover:shadow-lg ${item.color}`}
              >
                <Icon className="w-5 h-5" />
                {item.name}
              </a>
            );
          })}
        </div>

        {/* Phone */}
        <div className="mt-6 flex items-center justify-center gap-2 bg-white/10 border border-white/20 rounded-xl py-3 text-white font-semibold hover:bg-white/20 transition">
          <Phone className="w-5 h-5" />
          0791905573
        </div>
      </div>
    </div>
  );
}