import { useState, useEffect } from "react";

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Products } from './components/Products';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Contacts } from './components/Contacts';

export default function App() {
  const [activeService, setActiveService] = useState<number | null>(null);

  // Listen to Hero clicks (event system bridge)
  useEffect(() => {
    const handler = (e: any) => {
      setActiveService(e.detail);
    };

    window.addEventListener("selectService", handler);

    return () => window.removeEventListener("selectService", handler);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Products />

      {/* 🔥 KEY FIX: pass shared state */}
      <Services activeService={activeService} />

      <About />
      <Contacts />
      <Footer />
    </div>
  );
}