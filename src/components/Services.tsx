import { useState } from 'react';
import { MessageCircle, Search } from 'lucide-react';
import { SERVICES_DATA, CONTACT_DATA } from '../data/clinicData';
import { MedicalService } from '../types';

export default function Services() {
  const [filter, setFilter] = useState<'all' | 'doppler' | 'ecografia'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = SERVICES_DATA.filter((service) => {
    const matchesFilter = filter === 'all' || service.category === filter;
    const matchesSearch =
      searchQuery.trim() === '' ||
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getWhatsAppServiceLink = (serviceName: string) => {
    const text = encodeURIComponent(
      `Hola, deseo solicitar cita en el Centro Doppler Vascular para el estudio: ${serviceName}.`
    );
    return `https://wa.me/573001736832?text=${text}`;
  };

  return (
    <section id="servicios" className="py-20 md:py-28 bg-slate-50/60 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-[#0284C7] uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
            <span>Portafolio Diagnóstico</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0F2137]">
            Estudios y Procedimientos Médicos
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Estudios diagnósticos no invasivos de Doppler vascular y ecografías de alta resolución realizados por médico especialista.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          
          {/* Segmented Filter Control */}
          <div className="inline-flex items-center p-1 bg-white border border-slate-200 rounded-lg shadow-2xs">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-[#0F2137] text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Todos ({SERVICES_DATA.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('doppler')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
                filter === 'doppler'
                  ? 'bg-[#0F2137] text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Doppler Vascular (8)
            </button>
            <button
              type="button"
              onClick={() => setFilter('ecografia')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
                filter === 'ecografia'
                  ? 'bg-[#0F2137] text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Ecografía Especializada (4)
            </button>
          </div>

          {/* Quick search input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar estudio..."
              className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-white border border-slate-200 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-[#0284C7] focus:border-[#0284C7] text-slate-800 placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Limpiar
              </button>
            )}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service: MedicalService) => (
            <div
              key={service.id}
              className="bg-white rounded-xl border border-slate-200/90 p-6 flex flex-col justify-between hover:border-sky-300 transition-colors shadow-2xs group"
            >
              <div>
                {/* Clean unboxed category metadata with red/blue indicator */}
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      service.category === 'doppler' ? 'bg-[#DC2626]' : 'bg-[#0284C7]'
                    }`}
                  />
                  <span className="font-medium text-slate-700">{service.categoryLabel}</span>
                </div>

                {/* Service Name */}
                <h3 className="text-base sm:text-lg font-semibold text-[#0F2137] leading-snug group-hover:text-[#0284C7] transition-colors">
                  {service.name}
                </h3>

                {/* Short Description */}
                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Functional CTA per study to WhatsApp */}
              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={getWhatsAppServiceLink(service.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0284C7] hover:text-[#0F2137] transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Solicitar cita para este estudio</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl border border-slate-200">
            <p className="text-sm text-slate-500">No se encontraron estudios coincidentes con su búsqueda.</p>
            <button
              type="button"
              onClick={() => {
                setFilter('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-semibold text-[#0284C7] hover:underline"
            >
              Restablecer filtros
            </button>
          </div>
        )}

        {/* Institutional Note */}
        <div className="mt-10 p-4 rounded-xl bg-white border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-600">
          <div>
            <span className="font-semibold text-slate-900">Atención personalizada y directa:</span> Todos los estudios son realizados e interpretados por el Dr. René García Córdoba.
          </div>
          <a
            href={CONTACT_DATA.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-[#0F2137] hover:text-[#0284C7] shrink-0"
          >
            <span>Consultar disponibilidad por WhatsApp</span>
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
}
