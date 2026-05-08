import type { Doctor } from '../types/doctor';
import type { Clinic } from '../types/clinic';

export const mockDoctors: Doctor[] = [
  {
    id: 'd1',
    name: 'Dr. Alejandro Martínez',
    specialty: 'Cardiología',
    bio: 'Especialista en cardiología preventiva con más de 10 años de experiencia.',
    rating: 4.8,
    reviewCount: 124,
    price: 80,
    photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200&h=200',
    location: { lat: 12.1364, lng: -86.2514, address: 'Bolonia, Managua' },
    locations: [{ lat: 12.1364, lng: -86.2514, address: 'Bolonia, Managua' }],
    availability: ['Lunes', 'Miércoles', 'Viernes'],
    availabilityPreview: [
      { date: 'Hoy', time: '14:00' },
      { date: 'Mañana', time: '09:00' },
      { date: 'Jue, 12', time: '11:30' }
    ],
    consultationTypes: ['Presencial', 'En línea'],
    insurance: ['MetLife', 'AXA'],
    titles: ['Médico Cirujano (UNAM)', 'Especialidad en Cardiología (INC)'],
    experience: '15 años',
    services: ['Consulta General', 'Electrocardiograma'],
    licenseNumber: 'CMP-123456',
    diseasesTreated: ['Hipertensión', 'Arritmias', 'Insuficiencia Cardíaca'],
    patientTypes: ['Adultos', 'Adultos mayores'],
    education: ['Universidad Nacional Autónoma de México (UNAM) - Médico Cirujano', 'Instituto Nacional de Cardiología - Especialidad'],
    certifications: ['Consejo Mexicano de Cardiología'],
    languages: ['Español (Nativo)', 'Inglés (Avanzado)'],
    publications: ['Tratamiento temprano de hipertensión en adultos (Revista Médica, 2021)'],
    awards: ['Premio a la Excelencia Médica 2023'],
    servicesDetails: [
      { name: 'Consulta Cardiológica Inicial', price: 80, duration: '45 min' },
      { name: 'Electrocardiograma', price: 40, duration: '20 min' },
      { name: 'Ecocardiograma', price: 120, duration: '60 min' }
    ],
    careLocations: [
      { name: 'Consultorio Principal', address: 'Bolonia, Managua, Edificio B, Piso 2', phone: '+505 8888 1111', availability: 'Lun - Vie: 09:00 - 18:00' },
      { name: 'Hospital Vivian Pellas', address: 'Km 9.7 Carretera a Masaya', phone: '+505 2255 6666', availability: 'Sábados: 08:00 - 12:00' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400&h=300',
      'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=400&h=300',
      'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=400&h=300'
    ],
    reviews: [
      { patientName: 'Carlos M.', comment: 'Excelente atención y muy claro al explicar el diagnóstico.', rating: 5, date: '12 May 2026' },
      { patientName: 'Ana R.', comment: 'El doctor fue muy puntual y profesional.', rating: 4.5, date: '08 Abr 2026' }
    ],
    appointments: [
      { id: "a1", patientName: "Juan Pérez", time: "09:00", date: "2026-05-07", type: "Consulta", status: "Confirmada" },
      { id: "a2", patientName: "María García", time: "11:30", date: "2026-05-07", type: "Seguimiento", status: "Confirmada" },
      { id: "a3", patientName: "Pedro López", time: "16:00", date: "2026-05-07", type: "Consulta", status: "Pendiente" }
    ],
    schedule: [
      { day: 'Lunes', hours: '09:00 - 14:00, 16:00 - 18:00' },
      { day: 'Miércoles', hours: '09:00 - 14:00' },
      { day: 'Viernes', hours: '10:00 - 18:00' }
    ],
  },
  {
    id: 'd2',
    name: 'Dra. Sofía Rodríguez',
    specialty: 'Pediatría',
    bio: 'Apasionada por el cuidado de los más pequeños.',
    rating: 4.9,
    reviewCount: 89,
    price: 60,
    photo: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200&h=200',
    location: { lat: 12.1481, lng: -86.2721, address: 'Los Robles, Managua' },
    locations: [{ lat: 12.1481, lng: -86.2721, address: 'Los Robles, Managua' }],
    availability: ['Martes', 'Jueves', 'Sábado'],
    availabilityPreview: [
      { date: 'Mañana', time: '10:00' },
      { date: 'Jue, 12', time: '15:00' },
      { date: 'Vie, 13', time: '09:30' }
    ],
    consultationTypes: ['Presencial'],
    insurance: ['GNP', 'Seguros Monterrey'],
    titles: ['Médico Cirujano (Anáhuac)', 'Especialidad en Pediatría (Hospital Infantil)'],
    experience: '8 años',
    services: ['Control de niño sano', 'Vacunación'],
    licenseNumber: 'CMP-789012',
    diseasesTreated: ['Gripe', 'Infecciones estomacales', 'Asma infantil'],
    patientTypes: ['Niños', 'Bebés'],
    education: ['Universidad Anáhuac - Médico Cirujano', 'Hospital Infantil de México - Especialidad'],
    certifications: ['Consejo Mexicano de Pediatría'],
    languages: ['Español (Nativo)', 'Inglés (Intermedio)'],
    publications: [],
    awards: [],
    servicesDetails: [
      { name: 'Consulta Pediátrica', price: 60, duration: '30 min' },
      { name: 'Vacunación', price: 20, duration: '15 min' }
    ],
    careLocations: [
      { name: 'Clínica Infantil Los Robles', address: 'Los Robles, Managua', phone: '+505 8888 2222', availability: 'Mar, Jue, Sáb: 10:00 - 16:00' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1502740479091-635887520276?auto=format&fit=crop&q=80&w=400&h=300'
    ],
    reviews: [
      { patientName: 'Lucía G.', comment: 'Trato increíble con los niños, mi hija se sintió muy cómoda.', rating: 5, date: '20 May 2026' }
    ],
    appointments: [],
    schedule: [
      { day: 'Martes', hours: '10:00 - 16:00' },
      { day: 'Jueves', hours: '10:00 - 16:00' },
      { day: 'Sábado', hours: '09:00 - 13:00' }
    ],
  }
];

export const mockClinics: Clinic[] = [
  {
    id: 'c1',
    name: 'Clínica Médica Santa Fe',
    bio: 'Centro hospitalario de alta especialidad.',
    logo: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=200&h=200',
    rating: 4.7,
    reviewCount: 312,
    location: { lat: 12.1150, lng: -86.2360, address: 'Carretera a Masaya, Managua' },
    locations: [{ lat: 12.1150, lng: -86.2360, address: 'Carretera a Masaya, Managua' }],
    availabilityPreview: [
      { date: 'Hoy', time: '16:00' },
      { date: 'Mañana', time: '08:00' }
    ],
    consultationTypes: ['Presencial'],
    doctors: ['d1'],
    services: ['Urgencias', 'Laboratorio', 'Rayos X'],
  }
];
