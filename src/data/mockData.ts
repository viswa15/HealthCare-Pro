import { Doctor } from '@/types';
import drSarahJohnson from '@/assets/doctor-sarah-johnson.jpg';
import drMichaelChen from '@/assets/doctor-michael-chen.jpg';
import drEmilyRodriguez from '@/assets/doctor-emily-rodriguez.jpg';
import drJamesWilson from '@/assets/doctor-james-wilson.jpg';
import drLisaThompson from '@/assets/doctor-lisa-thompson.jpg';
import drRobertKumar from '@/assets/doctor-robert-kumar.jpg';

export const mockDoctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    specialization: 'Cardiologist',
    image: drSarahJohnson,
    availability: 'available',
    rating: 4.8,
    experience: 12,
    education: 'MD from Harvard Medical School',
    about: 'Dr. Sarah Johnson is a board-certified cardiologist with over 12 years of experience in treating heart conditions. She specializes in preventive cardiology and minimally invasive procedures.',
    timeSlots: [
      { id: 's1', date: '2024-08-02', time: '09:00', isAvailable: true },
      { id: 's2', date: '2024-08-02', time: '10:00', isAvailable: true },
      { id: 's3', date: '2024-08-02', time: '11:00', isAvailable: false },
      { id: 's4', date: '2024-08-02', time: '14:00', isAvailable: true },
      { id: 's5', date: '2024-08-03', time: '09:00', isAvailable: true },
      { id: 's6', date: '2024-08-03', time: '10:00', isAvailable: true },
    ]
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    specialization: 'Orthopedic Surgeon',
    image: drMichaelChen,
    availability: 'available',
    rating: 4.9,
    experience: 15,
    education: 'MD from Johns Hopkins University',
    about: 'Dr. Michael Chen is a renowned orthopedic surgeon specializing in sports medicine and joint replacement surgeries. He has helped thousands of patients regain mobility and live pain-free lives.',
    timeSlots: [
      { id: 'm1', date: '2024-08-02', time: '08:00', isAvailable: true },
      { id: 'm2', date: '2024-08-02', time: '09:00', isAvailable: true },
      { id: 'm3', date: '2024-08-02', time: '15:00', isAvailable: true },
      { id: 'm4', date: '2024-08-03', time: '08:00', isAvailable: true },
      { id: 'm5', date: '2024-08-03', time: '16:00', isAvailable: true },
    ]
  },
  {
    id: '3',
    name: 'Dr. Emily Rodriguez',
    specialization: 'Pediatrician',
    image: drEmilyRodriguez,
    availability: 'busy',
    rating: 4.7,
    experience: 8,
    education: 'MD from Stanford Medical School',
    about: 'Dr. Emily Rodriguez is a compassionate pediatrician dedicated to providing comprehensive care for children from infancy through adolescence. She believes in building lasting relationships with families.',
    timeSlots: [
      { id: 'e1', date: '2024-08-04', time: '10:00', isAvailable: true },
      { id: 'e2', date: '2024-08-04', time: '11:00', isAvailable: true },
      { id: 'e3', date: '2024-08-05', time: '09:00', isAvailable: true },
    ]
  },
  {
    id: '4',
    name: 'Dr. James Wilson',
    specialization: 'Neurologist',
    image: drJamesWilson,
    availability: 'available',
    rating: 4.6,
    experience: 18,
    education: 'MD from Mayo Clinic College of Medicine',
    about: 'Dr. James Wilson is a distinguished neurologist with expertise in treating complex neurological disorders including epilepsy, multiple sclerosis, and movement disorders.',
    timeSlots: [
      { id: 'j1', date: '2024-08-02', time: '13:00', isAvailable: true },
      { id: 'j2', date: '2024-08-02', time: '14:00', isAvailable: true },
      { id: 'j3', date: '2024-08-03', time: '13:00', isAvailable: true },
      { id: 'j4', date: '2024-08-03', time: '15:00', isAvailable: true },
    ]
  },
  {
    id: '5',
    name: 'Dr. Lisa Thompson',
    specialization: 'Dermatologist',
    image: drLisaThompson,
    availability: 'on-leave',
    rating: 4.5,
    experience: 10,
    education: 'MD from University of California, San Francisco',
    about: 'Dr. Lisa Thompson is a board-certified dermatologist specializing in both medical and cosmetic dermatology. She is currently on medical leave and will return next month.',
    timeSlots: []
  },
  {
    id: '6',
    name: 'Dr. Robert Kumar',
    specialization: 'General Practitioner',
    image: drRobertKumar,
    availability: 'available',
    rating: 4.4,
    experience: 6,
    education: 'MD from University of Michigan Medical School',
    about: 'Dr. Robert Kumar is a dedicated general practitioner providing comprehensive primary care services. He focuses on preventive medicine and maintaining long-term patient relationships.',
    timeSlots: [
      { id: 'r1', date: '2024-08-02', time: '08:00', isAvailable: true },
      { id: 'r2', date: '2024-08-02', time: '09:00', isAvailable: true },
      { id: 'r3', date: '2024-08-02', time: '10:00', isAvailable: true },
      { id: 'r4', date: '2024-08-02', time: '16:00', isAvailable: true },
      { id: 'r5', date: '2024-08-03', time: '08:00', isAvailable: true },
      { id: 'r6', date: '2024-08-03', time: '09:00', isAvailable: true },
    ]
  },
  {
    id: '7',
    name: 'Dr. Priya Singh',
    specialization: 'Endocrinologist',
    image: drSarahJohnson, // Replace with actual image if available
    availability: 'available',
    rating: 4.3,
    experience: 9,
    education: 'MD from All India Institute of Medical Sciences',
    about: 'Dr. Priya Singh specializes in hormonal disorders and diabetes management, providing patient-centered care for chronic conditions.',
    timeSlots: [
      { id: 'p1', date: '2024-08-04', time: '10:00', isAvailable: true },
      { id: 'p2', date: '2024-08-04', time: '11:00', isAvailable: true },
      { id: 'p3', date: '2024-08-05', time: '09:00', isAvailable: true },
      { id: 'p4', date: '2024-08-05', time: '10:00', isAvailable: false },
    ]
  },
  {
    id: '8',
    name: 'Dr. Ahmed El-Sayed',
    specialization: 'Pulmonologist',
    image: drMichaelChen, // Replace with actual image if available
    availability: 'busy',
    rating: 4.7,
    experience: 14,
    education: 'MD from Cairo University',
    about: 'Dr. Ahmed El-Sayed is an expert in respiratory diseases, including asthma and COPD, with a focus on patient education and preventive care.',
    timeSlots: [
      { id: 'a1', date: '2024-08-06', time: '08:00', isAvailable: true },
      { id: 'a2', date: '2024-08-06', time: '09:00', isAvailable: false },
      { id: 'a3', date: '2024-08-07', time: '10:00', isAvailable: true },
    ]
  },
  {
    id: '9',
    name: 'Dr. Maria Garcia',
    specialization: 'Gastroenterologist',
    image: drEmilyRodriguez, // Replace with actual image if available
    availability: 'available',
    rating: 4.6,
    experience: 11,
    education: 'MD from University of Barcelona',
    about: 'Dr. Maria Garcia provides expert care for digestive disorders, with a special interest in minimally invasive procedures.',
    timeSlots: [
      { id: 'mg1', date: '2024-08-08', time: '13:00', isAvailable: true },
      { id: 'mg2', date: '2024-08-08', time: '14:00', isAvailable: true },
      { id: 'mg3', date: '2024-08-09', time: '15:00', isAvailable: true },
    ]
  },
  {
    id: '10',
    name: 'Dr. John Evans',
    specialization: 'Ophthalmologist',
    image: drJamesWilson, // Replace with actual image if available
    availability: 'on-leave',
    rating: 4.2,
    experience: 7,
    education: 'MD from University of Sydney',
    about: 'Dr. John Evans is a skilled ophthalmologist specializing in cataract and refractive surgeries. He is currently on leave.',
    timeSlots: []
  },
  {
    id: '11',
    name: 'Dr. Mei Lin',
    specialization: 'Rheumatologist',
    image: drLisaThompson, // Replace with actual image if available
    availability: 'available',
    rating: 4.8,
    experience: 13,
    education: 'MD from Peking University Health Science Center',
    about: 'Dr. Mei Lin treats autoimmune and musculoskeletal disorders, focusing on holistic and long-term patient care.',
    timeSlots: [
      { id: 'ml1', date: '2024-08-10', time: '09:00', isAvailable: true },
      { id: 'ml2', date: '2024-08-10', time: '10:00', isAvailable: true },
      { id: 'ml3', date: '2024-08-11', time: '11:00', isAvailable: true },
    ]
  },
  {
    id: '12',
    name: 'Dr. Hannah Müller',
    specialization: 'Psychiatrist',
    image: drSarahJohnson, // Replace with actual image if available
    availability: 'available',
    rating: 4.9,
    experience: 16,
    education: 'MD from Charité – Universitätsmedizin Berlin',
    about: 'Dr. Hannah Müller is a highly experienced psychiatrist specializing in adult mental health, anxiety, and mood disorders. She is known for her empathetic approach and evidence-based treatments.',
    timeSlots: [
      { id: 'hm1', date: '2024-08-12', time: '10:00', isAvailable: true },
      { id: 'hm2', date: '2024-08-12', time: '11:00', isAvailable: true },
      { id: 'hm3', date: '2024-08-13', time: '14:00', isAvailable: true },
      { id: 'hm4', date: '2024-08-13', time: '15:00', isAvailable: false }
    ]
  }
];