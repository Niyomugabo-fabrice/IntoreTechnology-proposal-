import { Mail, MessageCircle, Facebook } from 'lucide-react';

export function Contact() {
  const whatsappMessage = encodeURIComponent('Hello IntoreTech');
  const whatsappLink = `https://wa.me/250791905573?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <a
            href="mailto:intoretech@gmail.com"
            className="flex flex-col items-center justify-center p-8 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
          >
            <Mail className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold mb-2">Email</h3>
            <p className="text-sm text-gray-600 text-center break-all">intoretech@gmail.com</p>
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-8 bg-green-50 rounded-lg hover:bg-green-100 transition-colors group"
          >
            <MessageCircle className="w-12 h-12 text-green-600 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold mb-2">WhatsApp</h3>
            <p className="text-sm text-gray-600 text-center">+250 791 905 573</p>
          </a>

          <a
            href="https://twitter.com/intoretech"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-8 bg-sky-50 rounded-lg hover:bg-sky-100 transition-colors group"
          >
            <svg className="w-12 h-12 text-sky-600 mb-4 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <h3 className="font-bold mb-2">X (Twitter)</h3>
            <p className="text-sm text-gray-600 text-center">@intoretech</p>
          </a>

          <a
            href="https://facebook.com/intoretech"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-8 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors group"
          >
            <Facebook className="w-12 h-12 text-indigo-600 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold mb-2">Facebook</h3>
            <p className="text-sm text-gray-600 text-center">IntoreTech</p>
          </a>
        </div>
      </div>
    </section>
  );
}
