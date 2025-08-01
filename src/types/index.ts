export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  image: string;
  availability: 'available' | 'busy' | 'on-leave';
  rating: number;
  experience: number;
  education: string;
  about: string;
  timeSlots: TimeSlot[];
}

export interface TimeSlot {
  id: string;
  date: string;
  time: string;
  isAvailable: boolean;
}

export interface Appointment {
  id: string;
  doctorId: string;
  patientName: string;
  patientEmail: string;
  date: string;
  time: string;
  status: 'confirmed' | 'pending' | 'cancelled';
}

export interface AppointmentForm {
  patientName: string;
  patientEmail: string;
  date: string;
  time: string;
}