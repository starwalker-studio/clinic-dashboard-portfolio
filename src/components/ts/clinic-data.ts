import type { IDOCTORS, IPATIENTS } from "./layouts-types";

export const TABLE_DOCTOR_HEADERS: string[] = ["Nombre", "Especialidad", "Teléfono", "Correo"];

export const DOCTORS: IDOCTORS[] = [
    { id: 1, name: "Dr. Juan Pérez", specialty: "Cardiología", phone: "555-123-4567", email: "juan.perez@clinic.mx" },
    { id: 2, name: "Dra. María López", specialty: "Pediatría", phone: "555-987-6543", email: "maria.lopez@clinic.mx" },
    { id: 3, name: "Dr. Carlos Ramírez", specialty: "Dermatología", phone: "555-321-7890", email: "carlos.ramirez@clinic.mx" },
    { id: 4, name: "Dra. Fernanda Torres", specialty: "Ginecología", phone: "555-654-9871", email: "fernanda.torres@clinic.mx" },
    { id: 5, name: "Dr. Alberto García", specialty: "Neurología", phone: "555-246-1357", email: "alberto.garcia@clinic.mx" },
    { id: 6, name: "Dra. Ana Castillo", specialty: "Oncología", phone: "555-135-2468", email: "ana.castillo@clinic.mx" },
    { id: 7, name: "Dr. José Martínez", specialty: "Ortopedia", phone: "555-789-1234", email: "jose.martinez@clinic.mx" },
    { id: 8, name: "Dra. Laura Hernández", specialty: "Psiquiatría", phone: "555-456-7891", email: "laura.hernandez@clinic.mx" },
    { id: 9, name: "Dr. Ricardo Flores", specialty: "Medicina Interna", phone: "555-852-9637", email: "ricardo.flores@clinic.mx" },
    { id: 10, name: "Dra. Sofía Domínguez", specialty: "Oftalmología", phone: "555-741-2589", email: "sofia.dominguez@clinic.mx" }
];

export const TABLE_PATIENTS_HEADERS: string[] = ["Nombre", "Edad", "Género", "Teléfono", "Correo"];

export const PATIENTS: IPATIENTS[] = [
  { id: 1, name: "Luis Gómez", age: 32, gender: "Masculino", phone: "555-111-2233", email: "luis.gomez@mail.com" },
  { id: 2, name: "Carmen Ríos", age: 45, gender: "Femenino", phone: "555-222-3344", email: "carmen.rios@mail.com" },
  { id: 3, name: "Pedro Sánchez", age: 29, gender: "Masculino", phone: "555-333-4455", email: "pedro.sanchez@mail.com" },
  { id: 4, name: "Laura Medina", age: 51, gender: "Femenino", phone: "555-444-5566", email: "laura.medina@mail.com" },
  { id: 5, name: "Andrés Torres", age: 38, gender: "Masculino", phone: "555-555-6677", email: "andres.torres@mail.com" },
  { id: 6, name: "Elena Castro", age: 27, gender: "Femenino", phone: "555-666-7788", email: "elena.castro@mail.com" },
  { id: 7, name: "Miguel Herrera", age: 40, gender: "Masculino", phone: "555-777-8899", email: "miguel.herrera@mail.com" },
  { id: 8, name: "Paola Vargas", age: 34, gender: "Femenino", phone: "555-888-9900", email: "paola.vargas@mail.com" },
  { id: 9, name: "Roberto Díaz", age: 55, gender: "Masculino", phone: "555-999-0011", email: "roberto.diaz@mail.com" },
  { id: 10, name: "Marta Jiménez", age: 22, gender: "Femenino", phone: "555-101-1122", email: "marta.jimenez@mail.com" }
];

export const APPOINTMENTS = [
  { id: 1, patientId: 1, doctorId: 2, date: "2025-09-30", time: "10:00", status: "Pendiente" },
  { id: 2, patientId: 3, doctorId: 5, date: "2025-09-30", time: "11:30", status: "Confirmada" },
  { id: 3, patientId: 4, doctorId: 1, date: "2025-10-01", time: "09:00", status: "Completada" },
  { id: 4, patientId: 2, doctorId: 3, date: "2025-10-01", time: "12:00", status: "Pendiente" },
  { id: 5, patientId: 6, doctorId: 8, date: "2025-10-02", time: "15:00", status: "Confirmada" },
  { id: 6, patientId: 7, doctorId: 4, date: "2025-10-02", time: "16:30", status: "Completada" },
  { id: 7, patientId: 8, doctorId: 7, date: "2025-10-03", time: "14:00", status: "Pendiente" },
  { id: 8, patientId: 5, doctorId: 6, date: "2025-10-03", time: "10:30", status: "Confirmada" },
  { id: 9, patientId: 10, doctorId: 9, date: "2025-10-04", time: "09:30", status: "Pendiente" },
  { id: 10, patientId: 9, doctorId: 10, date: "2025-10-04", time: "11:00", status: "Completada" }
];
