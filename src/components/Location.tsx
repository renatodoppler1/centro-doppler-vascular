import { MapPin, Navigation, ExternalLink, Building2, Clock } from 'lucide-react';
import { CONTACT_DATA } from '../data/clinicData';

export default function Location() {
  return (
    <section id="ubicacion" className="py-20 md:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-[#0284C7] uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
            <span>Consultorio Médico</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0F2137]">
            Ubicación
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Consulte las indicaciones para llegar a nuestras instalaciones en el sector médico de Las Cuadras.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Institutional Address Details */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-50/80 rounded-2xl border border-slate-200/90 p-6 sm:p-7 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-sky-50 text-[#0284C7] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-[#DC2626]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0F2137]">
                    Centro Doppler Vascular
                  </h3>
                  <p className="text-sm font-semibold text-slate-800 mt-1">
                    {CONTACT_DATA.addressLine1}
                  </p>
                  <p className="text-xs text-slate-600 font-medium mt-0.5">
                    {CONTACT_DATA.addressBuilding}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {CONTACT_DATA.addressNeighborhood} · {CONTACT_DATA.city}
                  </p>
                </div>
              </div>

              {/* Building reference specs */}
              <div className="pt-4 border-t border-slate-200/80 space-y-3 text-xs text-slate-600">
                <div className="flex items-center gap-2.5">
                  <Building2 className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>Edificio Office Center · Piso 2 · Consultorio 205 (Servicio de ascensor)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>Atención médica programada con cita previa</span>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <a
                  href={CONTACT_DATA.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#0F2137] hover:bg-[#1E3A8A] rounded-lg transition-colors shadow-2xs"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Cómo llegar (Google Maps)</span>
                </a>
                <a
                  href={`https://maps.google.com/maps?q=${encodeURIComponent(
                    'Calle 20 No. 31B - 40 Edificio Office Center Pasto'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-medium text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  <span>Abrir mapa completo</span>
                </a>
              </div>
            </div>

            {/* Quick Direction Note */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 leading-relaxed">
              <span className="font-semibold text-slate-800">Referencia de llegada:</span> Ubicado en el Barrio Las Cuadras, zona médica consolidada de San Juan de Pasto con facilidades de acceso y parqueaderos cercanos.
            </div>

          </div>

          {/* Right Column: Google Maps Interactive Embed */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xs bg-slate-100 relative min-h-[380px] h-[440px]">
              <iframe
                title="Mapa de Ubicación - Centro Doppler Vascular, Edificio Office Center"
                src={CONTACT_DATA.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter saturate-90 contrast-95"
              />
              <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-md border border-slate-200 text-[11px] font-medium text-slate-700 shadow-2xs">
                Calle 20 # 31B-40, Edificio Office Center
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
