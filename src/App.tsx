import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Specialist from './components/Specialist';
import Contact from './components/Contact';
import Location from './components/Location';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const sectionIds = ['inicio', 'servicios', 'especialista', 'contacto', 'ubicacion'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans selection:bg-sky-100 selection:text-sky-900">
      {/* Top Fixed Header with 3-Zone Contract */}
      <Header activeSection={activeSection} />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Inicio / Hero */}
        <Hero />

        {/* Servicios */}
        <Services />

        {/* Especialista / Perfil Profesional */}
        <Specialist />

        {/* Contacto */}
        <Contact />

        {/* Ubicación */}
        <Location />
      </main>

      {/* Footer & Floating WhatsApp CTA */}
      <Footer />
    </div>
  );
}
