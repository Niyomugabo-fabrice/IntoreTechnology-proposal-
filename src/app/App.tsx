import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Products } from './components/Products';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Contacts } from './components/Contacts';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Products />
      <Services />
      <About />
      <Contacts />
      <Footer />
    </div>
  );
}
