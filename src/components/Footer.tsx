import { MessageCircle, Mail, MapPin, ArrowUp } from 'lucide-react';
import { CONTACT_DATA, DOCTOR_DATA } from '../data/clinicData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Especialista', href: '#especialista' },
    { label: 'Contacto', href: '#contacto' },
    { label: 'Ubicación', href: '#ubicacion' },
  ];

  return (
    <>
      <footer className="bg-[#0B192C] text-slate-300 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Column 1: Brand & Specialist */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#0284C7] flex items-center justify-center p-1.5 shadow-2xs">
                  <svg viewBox="0 0 24 24" className="w-full h-full fill-none" aria-hidden="true">
                    <path
                      d="M3 13c3 0 4-5 8-5s5 10 10 10"
                      stroke="#FFFFFF"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M3 11c3 0 5 4 8 4s4-8 10-8"
                      stroke="#DC2626"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div>
                  <span className="text-base font-bold text-white tracking-tight">
                    Centro Doppler Vascular
                  </span>
                  <p className="text-[11px] text-sky-300 uppercase tracking-wide">
                    y Ecografía Especializada
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                Servicios médicos de diagnóstico vascular no invasivo y ecografías especializadas de alta resolución dirigidos por el{' '}
                <span className="text-slate-200">{DOCTOR_DATA.name}</span>, {DOCTOR_DATA.title}, {DOCTOR_DATA.subspecialty}.
              </p>

              <div className="pt-2 text-xs text-slate-400">
                <span>San Juan de Pasto, Nariño, Colombia</span>
              </div>
            </div>

            {/* Column 2: Navigation Mirror */}
            <div className="md:col-span-3 space-y-3">
              <span className="text-xs font-semibold text-white uppercase tracking-wider">
                Navegación
              </span>
              <ul className="space-y-2 text-xs">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact & Direct Actions */}
            <div className="md:col-span-4 space-y-3">
              <span className="text-xs font-semibold text-white uppercase tracking-wider">
                Atención y Citas
              </span>
              <div className="space-y-2.5 text-xs text-slate-300">
                <a
                  href={CONTACT_DATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>WhatsApp: {CONTACT_DATA.whatsappDisplay}</span>
                </a>
                <a
                  href={`mailto:${CONTACT_DATA.email}`}
                  className="flex items-center gap-2 hover:text-sky-300 transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>{CONTACT_DATA.email}</span>
                </a>
                <div className="flex items-start gap-2 text-slate-400">
                  <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>
                    {CONTACT_DATA.addressLine1}, {CONTACT_DATA.addressBuilding}, {CONTACT_DATA.addressNeighborhood}
                  </span>
                </div>
              </div>

              <div className="pt-3">
                <a
                  href={CONTACT_DATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-2xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Solicitar cita por WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Bar: Copyright & Back to Top */}
          <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>
              &copy; {new Date().getFullYear()} Centro Doppler Vascular y Ecografía Especializada · Dr. René García Córdoba. Todos los derechos reservados.
            </p>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
              aria-label="Volver arriba"
            >
              <span>Volver arriba</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Action Button for Easy Access */}
      <aside aria-label="Contacto rápido" className="fixed bottom-5 right-5 z-40">
        <a
          href={CONTACT_DATA.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group text-xs font-semibold focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          aria-label="Contactar por WhatsApp para solicitar cita médica"
        >
          <MessageCircle className="w-5 h-5 text-white" />
          <span className="hidden sm:inline">Citas WhatsApp</span>
        </a>
      </aside>
    </>
  );
}
