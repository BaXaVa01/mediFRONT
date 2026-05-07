export interface Location {
  lat: number;
  lng: number;
  address: string;
}

export interface AvailabilitySlot {
  date: string;
  time: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  rating: number;
  reviewCount: number;
  price: number;
  photo: string;
  location: Location;
  locations: Location[];
  availability: string[];
  availabilityPreview: AvailabilitySlot[];
  consultationTypes: ('Presencial' | 'En línea' | 'A domicilio')[];
  insurance: string[];
  titles: string[];
  experience: string;
  services: string[];
}
