export interface MedicalService {
  id: string;
  category: 'doppler' | 'ecografia';
  categoryLabel: string;
  name: string;
  description: string;
}

export interface DoctorProfile {
  name: string;
  title: string;
  subspecialty: string;
  experienceDescription: string;
  imageSrc: string;
}

export interface ContactInfo {
  whatsappDisplay: string;
  whatsappNumber: string;
  whatsappUrl: string;
  email: string;
  addressLine1: string;
  addressBuilding: string;
  addressNeighborhood: string;
  city: string;
  googleMapsEmbedUrl: string;
  googleMapsDirectionsUrl: string;
}
