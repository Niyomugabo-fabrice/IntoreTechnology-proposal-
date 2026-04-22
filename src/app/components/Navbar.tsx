import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from "../../imports/logo.png";
import logoimg1 from "../../imports/logo1.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#000] shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <button onClick={() => scrollToSection('home')} className="text-[#B08D57] hover:text-white transition-colors">
            <img src={logoImg} alt="IntoreTech Logo" className="h-16 w-16 object-contain" />
             </button>
            <span className="ml-3 font-bold text-2xl text-white"><img src={logoimg1} alt="IntoreTech Logo" className="h-16 w-16 object-contain" /></span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-[#B08D57] hover:text-white transition-colors">
                HOME
              </button>
              <button onClick={() => scrollToSection('services')} className="text-[#B08D57] hover:text-white transition-colors">
                SERVICES
              </button>
              <button onClick={() => scrollToSection('products')} className="text-[#B08D57] hover:text-white transition-colors">
                PRODUCTS
              </button>
              <button onClick={() => scrollToSection('about')} className="text-[#B08D57] hover:text-white transition-colors">
                ABOUT
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-[#B08D57] hover:text-white transition-colors">
                CONTACT
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-700"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0B243B] border-t border-blue-600">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left text-[#B08D57] px-3 py-2 hover:bg-blue-700 rounded-md">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left text-[#B08D57] px-3 py-2 hover:bg-blue-700 rounded-md">
              Services
            </button>
            <button onClick={() => scrollToSection('products')} className="block w-full text-left text-[#B08D57] px-3 py-2 hover:bg-blue-700 rounded-md">
              Products
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-[#B08D57] px-3 py-2 hover:bg-blue-700 rounded-md">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-[#B08D57] px-3 py-2 hover:bg-blue-700 rounded-md">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
