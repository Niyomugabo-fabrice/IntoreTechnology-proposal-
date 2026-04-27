import { useState } from 'react';
import { Menu, X } from 'lucide-react';


export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', id: 'home' },
    { name: 'SERVICES', id: 'services' },
    { name: 'PRODUCTS', id: 'products' },
    { name: 'ABOUT', id: 'about' },
    { name: 'CONTACT', id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for fixed header height
      const offset = 80; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black shadow-lg z-[100]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0">
            <button 
              onClick={() => scrollToSection('home')} 
              className="flex items-center space-x-3 focus:outline-none"
            >
              <img src={"image/Logo.png"} alt="Logo Icon" className="h-20 w-auto object-contain" />
              <img src={"image/logo1.png"} alt="IntoreTech" className="h-9 w-auto object-contain" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-[#B08D57] hover:text-white font-medium text-sm tracking-wider transition-all duration-300"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden bg-black/f95 backdrop-blur-md border-t border-[#B08D57]/20 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="block w-full text-left text-[#B08D57] px-3 py-3 text-base font-semibold hover:bg-[#B08D57]/10 rounded-lg transition-colors"
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}