import { MessageCircle, ArrowRight, ShieldCheck, Activity } from 'lucide-react';
import { CONTACT_DATA, DOCTOR_DATA } from '../data/clinicData';

export default function Hero() {
  const scrollToServices = () => {
    const el = document.querySelector('#servicios');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="pt-28 pb-16 md:pt-36 md:pb-24 bg-white relative overflow-hidden">
      {/* Subtle geometric background line accents */}
      <div className="absolute top-0 right-0 w-1/2 h-96 bg-gradient-to-b from-sky-50/60 to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Institutional Presentation & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Clean, unboxed kicker label with subtle red dot */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-slate-600 uppercase">
              <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
              <span className="text-[#0284C7]">Centro Diagnóstico Especializado</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-500">Pasto, Nariño</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F2137] leading-[1.15] text-balance">
              Centro Doppler Vascular y Ecografía Especializada
            </h1>

            {/* Medical introduction */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Consultorio médico especializado en diagnóstico vascular no invasivo y ecografías de alta resolución diagnóstica, bajo la dirección del{' '}
              <strong className="text-slate-900 font-semibold">{DOCTOR_DATA.name}</strong>,{' '}
              {DOCTOR_DATA.title} y {DOCTOR_DATA.subspecialty}.
            </p>

            {/* Key Clinical Markers (Unboxed clean text) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full pt-2 text-sm text-slate-600">
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-md bg-sky-50 flex items-center justify-center shrink-0 text-[#0284C7]">
                  <Activity className="w-3.5 h-3.5" />
                </div>
                <span>Estudios hemodinámicos arteriales y venosos</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-md bg-sky-50 flex items-center justify-center shrink-0 text-[#0284C7]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <span>Tecnología ecográfica digital de alta definición</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 w-full sm:w-auto">
              <a
                href={CONTACT_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 text-sm font-semibold text-white bg-[#0F2137] hover:bg-[#1E3A8A] rounded-lg transition-all shadow-sm hover:shadow-md whitespace-nowrap group"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>Solicitar cita por WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={scrollToServices}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-[#0F2137] bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors whitespace-nowrap"
              >
                <span>Ver estudios y procedimientos</span>
                <ArrowRight className="w-4 h-4 text-[#0284C7]" />
              </button>
            </div>

            {/* Quick Contact Micro-bar */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-500 border-t border-slate-100 w-full">
              <span>Edificio Office Center, Consultorio 205</span>
              <span aria-hidden="true">·</span>
              <span>Barrio Las Cuadras</span>
              <span aria-hidden="true">·</span>
              <span className="font-medium text-slate-700">WhatsApp: {CONTACT_DATA.whatsappDisplay}</span>
            </div>
          </div>

          {/* Right Column: Professional Medical Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-md bg-slate-100">
              {/* Subtle top indicator bar representing arterial (red) and venous (blue) flow */}
              <div className="h-1 w-full flex">
                <div className="w-1/2 bg-[#DC2626]" />
                <div className="w-1/2 bg-[#0284C7]" />
              </div>
              <img
                src="/src/assets/images/hero_medical_doppler_1794087292422.jpg"
                alt="Consola de ecografía Doppler vascular de alta resolución en el Centro Doppler Vascular"
                className="w-full h-[340px] sm:h-[400px] lg:h-[440px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-medium text-slate-700">Diagnóstico vascular especializado</span>
                <span>Equipamiento de alta definición</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
