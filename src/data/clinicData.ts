import { MedicalService, DoctorProfile, ContactInfo } from '../types';

export const CLINIC_NAME = 'Centro Doppler Vascular y Ecografía Especializada';
export const CLINIC_SUBTITLE = 'Diagnóstico Vascular No Invasivo & Ecografía de Alta Resolución';

export const DOCTOR_DATA: DoctorProfile = {
  name: 'Dr. René García Córdoba',
  title: 'Especialista en Radiología e Imágenes Diagnósticas',
  subspecialty: 'Fellow en Doppler Vascular',
  experienceDescription: 'Experiencia en diagnóstico vascular no invasivo y ecografías especializadas.',
  imageSrc: '/src/assets/images/doctor_rene_garcia_1794087292504.jpg',
};

export const CONTACT_DATA: ContactInfo = {
  whatsappDisplay: '300 173 6832',
  whatsappNumber: '+573001736832',
  whatsappUrl: 'https://wa.me/573001736832?text=Hola%2C%20deseo%20solicitar%20una%20cita%20m%C3%A9dica%20en%20el%20Centro%20Doppler%20Vascular',
  email: 'renatodoppler@hotmail.com',
  addressLine1: 'Calle 20 No. 31B - 40',
  addressBuilding: 'Edificio Office Center, Consultorio 205',
  addressNeighborhood: 'Barrio Las Cuadras',
  city: 'San Juan de Pasto, Nariño',
  googleMapsEmbedUrl: 'https://maps.google.com/maps?q=Calle%2020%20%23%2031B-40%2C%20Pasto%2C%20Nari%C3%B1o&t=&z=16&ie=UTF8&iwloc=&output=embed',
  googleMapsDirectionsUrl: 'https://www.google.com/maps/search/?api=1&query=Edificio+Office+Center+Calle+20+31B-40+Pasto+Narino',
};

export const SERVICES_DATA: MedicalService[] = [
  {
    id: 'doppler-arterial-miembros-inferiores',
    category: 'doppler',
    categoryLabel: 'Doppler Vascular',
    name: 'Doppler Arterial de Miembros Inferiores',
    description: 'Estudio no invasivo para la evaluación hemodinámica del flujo arterial en piernas y pies, detección de estenosis, calcificaciones y enfermedad arterial oclusiva.',
  },
  {
    id: 'doppler-venoso-miembros-inferiores',
    category: 'doppler',
    categoryLabel: 'Doppler Vascular',
    name: 'Doppler Venoso de Miembros Inferiores',
    description: 'Evaluación del sistema venoso profundo y superficial para el diagnóstico de insuficiencia venosa, reflujo valvular, várices y descarte de trombosis venosa profunda.',
  },
  {
    id: 'doppler-vasos-cuello',
    category: 'doppler',
    categoryLabel: 'Doppler Vascular',
    name: 'Doppler de Vasos de Cuello (Carotídeo y Vertebral)',
    description: 'Análisis ecográfico de las arterias carótidas y vertebrales para valorar la perfusión cerebral, presencia de placas ateromatosas y cuantificación de estenosis.',
  },
  {
    id: 'doppler-arterial-miembros-superiores',
    category: 'doppler',
    categoryLabel: 'Doppler Vascular',
    name: 'Doppler Arterial de Miembros Superiores',
    description: 'Exploración hemodinámica de las arterias subclavias, axilares, braquiales, radiales y cubitales para detección de oclusiones y anomalías del flujo arterial.',
  },
  {
    id: 'doppler-venoso-miembros-superiores',
    category: 'doppler',
    categoryLabel: 'Doppler Vascular',
    name: 'Doppler Venoso de Miembros Superiores',
    description: 'Estudio de las venas de extremidades superiores para diagnóstico de trombosis venosa, compresión vascular y seguimiento de accesos vasculares.',
  },
  {
    id: 'doppler-arterias-renales',
    category: 'doppler',
    categoryLabel: 'Doppler Vascular',
    name: 'Doppler de Arterias Renales',
    description: 'Evaluación vascular de arterias renales principales y parénquima renal, dirigida al estudio diagnóstico de hipertensión renovascular.',
  },
  {
    id: 'doppler-aortoilíaco',
    category: 'doppler',
    categoryLabel: 'Doppler Vascular',
    name: 'Doppler Aortoilíaco',
    description: 'Exploración ecográfica de la aorta abdominal y de los ejes ilíacos para la detección de aneurismas, placas ateromatosas y estenosis arteriales.',
  },
  {
    id: 'doppler-esplenoportal',
    category: 'doppler',
    categoryLabel: 'Doppler Vascular',
    name: 'Doppler Esplenoportal y Hepático',
    description: 'Valoración hemodinámica del eje venoso portal, venas suprahepáticas y arteria hepática para el estudio de hipertensión portal y perfusión hepática.',
  },
  {
    id: 'ecografia-abdominal-especializada',
    category: 'ecografia',
    categoryLabel: 'Ecografía Especializada',
    name: 'Ecografía Abdominal Total',
    description: 'Estudio morfológico detallado de órganos intraabdominales: hígado, vesícula, vías biliares, páncreas, bazo, riñones y retroperitoneo.',
  },
  {
    id: 'ecografia-tiroides-cuello',
    category: 'ecografia',
    categoryLabel: 'Ecografía Especializada',
    name: 'Ecografía de Tiroides y Cuello',
    description: 'Exploración de alta resolución de la glándula tiroides, nódulos tiroideos y cadenas ganglionares cervicales.',
  },
  {
    id: 'ecografia-musculoesqueletica',
    category: 'ecografia',
    categoryLabel: 'Ecografía Especializada',
    name: 'Ecografía Musculoesquelética y Articular',
    description: 'Evaluación ecográfica de tendones, músculos, ligamentos y estructuras articulares para la detección de desgarros, tendinitis y lesiones periarticulares.',
  },
  {
    id: 'ecografia-tejidos-blandos',
    category: 'ecografia',
    categoryLabel: 'Ecografía Especializada',
    name: 'Ecografía de Tejidos Blandos',
    description: 'Caracterización de masas subcutáneas, lipomas, hernias de pared, colecciones líquidas y nódulos palpables superficiales.',
  },
];
