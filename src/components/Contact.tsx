import { useState } from 'react';
import { MessageCircle, Mail, MapPin, Copy, Check, Send, PhoneCall } from 'lucide-react';
import { CONTACT_DATA, SERVICES_DATA } from '../data/clinicData';

export default function Contact() {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [selectedStudy, setSelectedStudy] = useState(SERVICES_DATA[0].name);
  const [patientNotes, setPatientNotes] = useState('');

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    let message = `Hola Dr. René García, deseo solicitar una cita médica en el Centro Doppler Vascular.`;
    if (patientName.trim()) {
      message += `\n- Paciente: ${patientName.trim()}`;
    }
    if (patientPhone.trim()) {
      message += `\n- Teléfono: ${patientPhone.trim()}`;
    }
    if (selectedStudy) {
      message += `\n- Estudio requerido: ${selectedStudy}`;
    }
    if (patientNotes.trim()) {
      message += `\n- Observación: ${patientNotes.trim()}`;
    }

    const url = `https://wa.me/573001736832?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleEmailSend = () => {
    const subject = encodeURIComponent(`Solicitud de Cita Médica - ${patientName || 'Centro Doppler'}`);
    let body = `Estimado Dr. René García Córdoba,\n\nSolicito una cita médica para el Centro Doppler Vascular y Ecografía Especializada.\n\n`;
    if (patientName.trim()) body += `Paciente: ${patientName.trim()}\n`;
    if (patientPhone.trim()) body += `Teléfono de contacto: ${patientPhone.trim()}\n`;
    if (selectedStudy) body += `Estudio requerido: ${selectedStudy}\n`;
    if (patientNotes.trim()) body += `Observaciones adicionales: ${patientNotes.trim()}\n`;

    window.location.href = `mailto:${CONTACT_DATA.email}?subject=${subject}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contacto" className="py-20 md:py-28 bg-slate-50/70 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-[#0284C7] uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
            <span>Canales de Atención</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0F2137]">
            Contacto
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Consulte disponibilidad y agende su estudio diagnóstico directamente a través de nuestros canales oficiales.
          </p>
        </div>

        {/* 3 Main Direct Contact Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: WhatsApp */}
          <div className="bg-white rounded-xl border border-slate-200/90 p-6 flex flex-col justify-between shadow-2xs">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <MessageCircle className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                Mensajería WhatsApp
              </span>
              <p className="text-xl font-bold text-[#0F2137] mt-1">
                {CONTACT_DATA.whatsappDisplay}
              </p>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Canal principal para consulta de horarios y solicitud de citas médicas.
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={CONTACT_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-2xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Abrir chat de WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={() => handleCopy(CONTACT_DATA.whatsappDisplay, 'whatsapp')}
                className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors"
              >
                {copiedType === 'whatsapp' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Número copiado</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar número</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Card 2: Email */}
          <div className="bg-white rounded-xl border border-slate-200/90 p-6 flex flex-col justify-between shadow-2xs">
            <div>
              <div className="w-10 h-10 rounded-lg bg-sky-50 text-[#0284C7] flex items-center justify-center mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                Correo Electrónico
              </span>
              <p className="text-lg font-bold text-[#0F2137] mt-1 break-all">
                {CONTACT_DATA.email}
              </p>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Envío de órdenes médicas, consultas institucionales y correspondencia diagnóstica.
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={`mailto:${CONTACT_DATA.email}`}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#0F2137] hover:bg-[#1E3A8A] rounded-lg transition-colors shadow-2xs"
              >
                <Mail className="w-4 h-4" />
                <span>Enviar correo electrónico</span>
              </a>
              <button
                type="button"
                onClick={() => handleCopy(CONTACT_DATA.email, 'email')}
                className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors"
              >
                {copiedType === 'email' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Correo copiado</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar correo</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Card 3: Address / Physical Office */}
          <div className="bg-white rounded-xl border border-slate-200/90 p-6 flex flex-col justify-between shadow-2xs">
            <div>
              <div className="w-10 h-10 rounded-lg bg-red-50 text-[#DC2626] flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                Dirección del Consultorio
              </span>
              <p className="text-base font-bold text-[#0F2137] mt-1 leading-snug">
                {CONTACT_DATA.addressLine1}
              </p>
              <p className="text-xs font-medium text-slate-700 mt-0.5">
                {CONTACT_DATA.addressBuilding}
              </p>
              <p className="text-xs text-slate-500 mt-1">
                {CONTACT_DATA.addressNeighborhood} · {CONTACT_DATA.city}
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="#ubicacion"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#ubicacion')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#0F2137] bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#0284C7]" />
                <span>Ver mapa de ubicación</span>
              </a>
              <button
                type="button"
                onClick={() =>
                  handleCopy(
                    `${CONTACT_DATA.addressLine1}, ${CONTACT_DATA.addressBuilding}, ${CONTACT_DATA.addressNeighborhood}, ${CONTACT_DATA.city}`,
                    'address'
                  )
                }
                className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors"
              >
                {copiedType === 'address' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Dirección copiada</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar dirección</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </div>

        {/* Interactive Direct Appointment Preparation Form */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-2xs">
          <div className="max-w-2xl">
            <h3 className="text-lg sm:text-xl font-bold text-[#0F2137]">
              Preparar Solicitud de Cita Médica
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Complete los datos del paciente para generar un mensaje directo hacia WhatsApp o correo electrónico.
            </p>
          </div>

          <form onSubmit={handleWhatsAppSend} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="patientName" className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                Nombre del Paciente
              </label>
              <input
                id="patientName"
                type="text"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                placeholder="Nombre y apellido"
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#0284C7] focus:border-[#0284C7]"
              />
            </div>

            <div>
              <label htmlFor="patientPhone" className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                Teléfono de Contacto
              </label>
              <input
                id="patientPhone"
                type="tel"
                value={patientPhone}
                onChange={(e) => setPatientPhone(e.target.value)}
                placeholder="Ej. 300 123 4567"
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#0284C7] focus:border-[#0284C7]"
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="selectedStudy" className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                Estudio o Procedimiento Requerido
              </label>
              <select
                id="selectedStudy"
                value={selectedStudy}
                onChange={(e) => setSelectedStudy(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#0284C7] focus:border-[#0284C7]"
              >
                {SERVICES_DATA.map((service) => (
                  <option key={service.id} value={service.name}>
                    [{service.categoryLabel}] {service.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="patientNotes" className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                Observaciones o disponibilidad de preferencia (Opcional)
              </label>
              <textarea
                id="patientNotes"
                rows={2}
                value={patientNotes}
                onChange={(e) => setPatientNotes(e.target.value)}
                placeholder="Ej. Disponibilidad en horas de la mañana, orden médica adjunta..."
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#0284C7] focus:border-[#0284C7]"
              />
            </div>

            <div className="md:col-span-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-2xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enviar solicitud por WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={handleEmailSend}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#0F2137] bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg transition-colors"
              >
                <Send className="w-4 h-4 text-[#0284C7]" />
                <span>Enviar por Correo Electrónico</span>
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
