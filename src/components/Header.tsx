import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Phone } from 'lucide-react';
import { CONTACT_DATA } from '../data/clinicData';

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Inicio', href: '#inicio', id: 'inicio' },
    { label: 'Servicios', href: '#servicios', id: 'servicios' },
    { label: 'Especialista', href: '#especialista', id: 'especialista' },
    { label: 'Contacto', href: '#contacto', id: 'contacto' },
    { label: 'Ubicación', href: '#ubicacion', id: 'ubicacion' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-100 py-3'
          : 'bg-white border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Zone 1: Brand Wordmark with subtle dual vascular accent (blue and red) */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#inicio');
            }}
            className="flex items-center gap-3 shrink-0 group"
          >
            {/* Visual Icon Mark: arterial & venous flow motif */}
            <div className="w-9 h-9 rounded-lg bg-[#0F2137] flex items-center justify-center p-1.5 shadow-xs">
              <svg viewBox="0 0 24 24" className="w-full h-full fill-none" aria-hidden="true">
                {/* Blue venous wave */}
                <path
                  d="M3 13c3 0 4-5 8-5s5 10 10 10"
                  stroke="#38BDF8"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                {/* Red arterial wave */}
                <path
                  d="M3 11c3 0 5 4 8 4s4-8 10-8"
                  stroke="#DC2626"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-base sm:text-lg font-bold tracking-tight text-[#0F2137] whitespace-nowrap">
                  Centro Doppler Vascular
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] shrink-0" title="Doppler Arterial y Venoso" />
              </div>
              <span className="text-[11px] font-medium text-slate-500 tracking-wide uppercase">
                y Ecografía Especializada
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Single-line, clear, minimalist) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'text-[#0F2137] font-semibold'
                      : 'hover:text-[#0284C7]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0284C7] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action (WhatsApp button) & Mobile Menu Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={CONTACT_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#0F2137] hover:bg-[#1E3A8A] rounded-lg transition-colors whitespace-nowrap shadow-xs hover:shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span className="hidden sm:inline">Solicitar Cita</span>
              <span className="sm:hidden">Cita</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-5 shadow-lg">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-sky-50 text-[#0284C7] font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={CONTACT_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp: {CONTACT_DATA.whatsappDisplay}
              </a>
              <a
                href={`tel:${CONTACT_DATA.whatsappNumber}`}
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4 text-slate-500" />
                Llamar al consultorio
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
