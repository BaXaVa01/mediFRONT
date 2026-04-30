export interface Location {
  lat: number;
  lng: number;
  address: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  rating: number;
  price: number;
  photo: string;
  location: Location;
  availability: string[];
  insurance: string[];
  titles: string[];
  experience: string;
  services: string[];
}
