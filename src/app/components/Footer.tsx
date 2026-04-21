import { Mail, MessageCircle, Facebook } from 'lucide-react';

export function Footer() {
  const whatsappMessage = encodeURIComponent('Hello IntoreTech');
  const whatsappLink = `https://wa.me/250791905573?text=${whatsappMessage}`;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">IntoreTech</h3>
            <p className="text-gray-400 mb-4">Elevate your digital value</p>
            <p className="text-gray-400 text-sm">
              Building quality websites and mobile applications while providing affordable second-hand electronics.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('products')} className="text-gray-400 hover:text-white transition-colors">
                  Products
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:intoretech@gmail.com" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  intoretech@gmail.com
                </a>
              </li>
              <li>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  +250 791 905 573
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="font-bold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="https://twitter.com/intoretech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://facebook.com/intoretech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} IntoreTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
