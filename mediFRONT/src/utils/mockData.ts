import type { Doctor } from '../types/doctor';
import type { Clinic } from '../types/clinic';

export const mockDoctors: Doctor[] = [
  {
    id: 'd1',
    name: 'Dr. Alejandro Martínez',
    specialty: 'Cardiología',
    bio: 'Especialista en cardiología preventiva con más de 10 años de experiencia.',
    rating: 4.8,
    price: 80,
    photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200&h=200',
    location: { lat: 19.4326, lng: -99.1332, address: 'Av. Reforma 123, CDMX' },
    availability: ['Lunes', 'Miércoles', 'Viernes'],
    insurance: ['MetLife', 'AXA'],
    titles: ['Médico Cirujano (UNAM)', 'Especialidad en Cardiología (INC)'],
    experience: '15 años',
    services: ['Consulta General', 'Electrocardiograma'],
  },
  {
    id: 'd2',
    name: 'Dra. Sofía Rodríguez',
    specialty: 'Pediatría',
    bio: 'Apasionada por el cuidado de los más pequeños.',
    rating: 4.9,
    price: 60,
    photo: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200&h=200',
    location: { lat: 19.4194, lng: -99.1673, address: 'Colonia Roma Norte, CDMX' },
    availability: ['Martes', 'Jueves', 'Sábado'],
    insurance: ['GNP', 'Seguros Monterrey'],
    titles: ['Médico Cirujano (Anáhuac)', 'Especialidad en Pediatría (Hospital Infantil)'],
    experience: '8 años',
    services: ['Control de niño sano', 'Vacunación'],
  }
];

export const mockClinics: Clinic[] = [
  {
    id: 'c1',
    name: 'Clínica Médica Santa Fe',
    bio: 'Centro hospitalario de alta especialidad.',
    logo: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=200&h=200',
    rating: 4.7,
    location: { lat: 19.3623, lng: -99.2612, address: 'Vasco de Quiroga 3000, CDMX' },
    doctors: ['d1'],
    services: ['Urgencias', 'Laboratorio', 'Rayos X'],
  }
];
