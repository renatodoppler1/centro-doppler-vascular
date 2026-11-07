import { Award, CheckCircle2, MessageCircle, Mail } from 'lucide-react';
import { DOCTOR_DATA, CONTACT_DATA } from '../data/clinicData';

export default function Specialist() {
  return (
    <section id="especialista" className="py-20 md:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-[#0284C7] uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
            <span>Dirección Médica</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0F2137]">
            Perfil Profesional
          </h2>
        </div>

        {/* Doctor Presentation Card */}
        <div className="bg-slate-50/70 rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 lg:p-10">
            
            {/* Doctor Portrait */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm">
                {/* Subtle red & blue top line indicator */}
                <div className="h-1 w-full flex">
                  <div className="w-1/2 bg-[#DC2626]" />
                  <div className="w-1/2 bg-[#0284C7]" />
                </div>
                <img
                  src={DOCTOR_DATA.imageSrc}
                  alt="Dr. René García Córdoba - Especialista en Radiología e Imágenes Diagnósticas"
                  className="w-full h-auto aspect-3/4 object-cover object-top"
                  referrerPolicy="no-referrer"
                />
                <div className="p-3.5 bg-white border-t border-slate-100 text-center">
                  <span className="text-xs font-semibold text-slate-800">
                    {DOCTOR_DATA.name}
                  </span>
                  <p className="text-[11px] text-slate-500">
                    Médico Especialista
                  </p>
                </div>
              </div>
            </div>

            {/* Doctor Credentials & Profile Content */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0F2137] tracking-tight">
                  {DOCTOR_DATA.name}
                </h3>
                <p className="text-base sm:text-lg font-medium text-[#0284C7] mt-1">
                  {DOCTOR_DATA.title}
                </p>
                <div className="inline-flex items-center gap-2 mt-2 px-3 py-1 rounded-md bg-sky-50 border border-sky-100 text-xs font-semibold text-[#0F2137]">
                  <Award className="w-3.5 h-3.5 text-[#0284C7]" />
                  <span>{DOCTOR_DATA.subspecialty}</span>
                </div>
              </div>

              {/* Verified description strictly as requested */}
              <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  {DOCTOR_DATA.experienceDescription}
                </p>
                <p className="text-slate-600 text-sm">
                  Dedicado a la realización e interpretación directa de estudios de ultrasonido vascular y ecografía general, garantizando precisión diagnóstica con criterio clínico y equipamiento especializado.
                </p>
              </div>

              {/* Formación y competencias clave */}
              <div className="space-y-2.5 pt-2 border-t border-slate-200">
                <div className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                  <span>Especialista en Radiología e Imágenes Diagnósticas</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                  <span>Fellowship especializado en Doppler Vascular</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                  <span>Evaluación hemodinámica arterial, venosa y visceral no invasiva</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                  <span>Ecografías diagnósticas especializadas de alta definición</span>
                </div>
              </div>

              {/* Direct Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <a
                  href={CONTACT_DATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#0F2137] hover:bg-[#1E3A8A] rounded-lg transition-colors shadow-2xs"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Agendar cita con el especialista</span>
                </a>
                <a
                  href={`mailto:${CONTACT_DATA.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg transition-colors"
                >
                  <Mail className="w-4 h-4 text-slate-500" />
                  <span>{CONTACT_DATA.email}</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
