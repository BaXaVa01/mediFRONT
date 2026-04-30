import type { Location } from './doctor';

export interface Clinic {
  id: string;
  name: string;
  bio: string;
  logo: string;
  rating: number;
  location: Location;
  doctors: string[];
  services: string[];
}
