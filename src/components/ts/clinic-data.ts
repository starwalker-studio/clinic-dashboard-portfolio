import type { IDOCTORS, IEVENTSDATA, IPATIENTS, IUPCOMINGAPPOINTMENT } from "./layouts-types";
import dayjs from "dayjs";

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

export const TABLE_PATIENTS_HEADERS: string[] = ["Nombre", "Teléfono", "Correo", "Status"];

export const PATIENTS: IPATIENTS[] = [
  { id: 1, name: "Juan Pérez", phone: "555-123-4567", email: "juan.perez@mail.com", isActive: true },
  { id: 2, name: "María López", phone: "555-234-5678", email: "maria.lopez@mail.com", isActive: false },
  { id: 3, name: "Carlos Ramírez", phone: "555-345-6789", email: "carlos.ramirez@mail.com", isActive: true },
  { id: 4, name: "Ana Torres", phone: "555-456-7890", email: "ana.torres@mail.com", isActive: true },
  { id: 5, name: "José Sánchez", phone: "555-567-8901", email: "jose.sanchez@mail.com", isActive: false },
  { id: 6, name: "Laura Gómez", phone: "555-678-9012", email: "laura.gomez@mail.com", isActive: true },
  { id: 7, name: "Ricardo Díaz", phone: "555-789-0123", email: "ricardo.diaz@mail.com", isActive: false },
  { id: 8, name: "Gabriela Reyes", phone: "555-890-1234", email: "carmen.reyes@mail.com", isActive: true },
  { id: 9, name: "Miguel Herrera", phone: "555-901-2345", email: "miguel.herrera@mail.com", isActive: true },
  { id: 10, name: "Paola Vargas", phone: "555-012-3456", email: "paola.vargas@mail.com", isActive: false },
  { id: 11, name: "Jorge Castillo", phone: "555-111-2222", email: "jorge.castillo@mail.com", isActive: true },
  { id: 12, name: "Fernanda Cruz", phone: "555-222-3333", email: "fernanda.cruz@mail.com", isActive: true },
  { id: 13, name: "David Moreno", phone: "555-333-4444", email: "david.moreno@mail.com", isActive: false },
  { id: 14, name: "Sofía Jiménez", phone: "555-444-5555", email: "sofia.jimenez@mail.com", isActive: true },
  { id: 15, name: "Héctor Navarro", phone: "555-555-6666", email: "hector.navarro@mail.com", isActive: false },
  { id: 16, name: "Patricia Flores", phone: "555-666-7777", email: "patricia.flores@mail.com", isActive: true },
  { id: 17, name: "Andrés Silva", phone: "555-777-8888", email: "andres.silva@mail.com", isActive: true },
  { id: 18, name: "Claudia Ramos", phone: "555-888-9999", email: "claudia.ramos@mail.com", isActive: false },
  { id: 19, name: "Gabriel Ortega", phone: "555-999-0000", email: "gabriel.ortega@mail.com", isActive: true },
  { id: 20, name: "Verónica Martínez", phone: "555-000-1111", email: "veronica.martinez@mail.com", isActive: true },
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

const today = dayjs();

export const EVENTS_DATA: IEVENTSDATA[] = [
  {
    id: "1",
    title: "Consulta con Dr. Ramírez",
    start: today.hour(9).minute(0).second(0).toISOString(),
    end: today.hour(10).minute(0).second(0).toISOString(),
    color: "#4caf50",
  },
  {
    id: "2",
    title: "Chequeo general - Paciente Pérez",
    start: today.add(1, "day").hour(11).minute(0).second(0).toISOString(),
    end: today.add(1, "day").hour(12).minute(0).second(0).toISOString(),
    color: "#2196f3",
  },
  {
    id: "3",
    title: "Revisión de laboratorio",
    start: today.add(2, "day").hour(15).minute(0).second(0).toISOString(),
    color: "#f44336",
  },
  {
    id: "4",
    title: "Seguimiento - Paciente López",
    start: today.add(3, "day").hour(10).minute(0).toISOString(),
    end: today.add(3, "day").hour(11).minute(0).toISOString(),
    color: "#9c27b0",
  },
  {
    id: "5",
    title: "Control de presión arterial",
    start: today.add(4, "day").hour(8).minute(30).toISOString(),
    end: today.add(4, "day").hour(9).minute(0).toISOString(),
    color: "#ff9800",
  },
  {
    id: "6",
    title: "Cirujía arterial",
    start: today.add(8, "day").hour(7).minute(40).toISOString(),
    end: today.add(8, "day").hour(10).minute(0).toISOString(),
    color: "#ff00aaff",
  },
  {
    id: "7",
    start: today.set("date", 15).startOf("day").format("YYYY-MM-DD"),
    end: today.set("date", 18).startOf("day").format("YYYY-MM-DD"),
    display: "background",
    backgroundColor: "#c41d2eff",
  },
  {
    id: "8",
    start: today.set("date", 24).startOf("day").format("YYYY-MM-DD"),
    end: today.set("date", 29).startOf("day").format("YYYY-MM-DD"),
    display: "background",
    backgroundColor: "#65abdaff",
  },
  {
    id: "9",
    daysOfWeek: [0, 6], // 0 = domingo, 6 = sábado
    display: "background",
    backgroundColor: "#E0E0E0",
  },
  // puedes duplicar o generar más simulando distintos días/horas
];

export const MOCK_UPCOMING: IUPCOMINGAPPOINTMENT[] = [
  {
    id: 1,
    paciente: "María López",
    medico: "Dr. Hernández",
    fecha: "10 Oct, 08:30 AM",
    estado: "pendiente",
  },
  {
    id: 2,
    paciente: "Carlos Díaz",
    medico: "Dra. Martínez",
    fecha: "10 Oct, 09:15 AM",
    estado: "en_curso",
  },
  {
    id: 3,
    paciente: "Ana Pérez",
    medico: "Dr. Ramírez",
    fecha: "10 Oct, 10:00 AM",
    estado: "completada",
  },
  {
    id: 4,
    paciente: "José Torres",
    medico: "Dra. López",
    fecha: "10 Oct, 10:45 AM",
    estado: "cancelada",
  },
  {
    id: 5,
    paciente: "Laura Gómez",
    medico: "Dr. Castillo",
    fecha: "10 Oct, 11:30 AM",
    estado: "pendiente",
  },
  {
    id: 6,
    paciente: "Miguel Sánchez",
    medico: "Dra. Morales",
    fecha: "10 Oct, 12:15 PM",
    estado: "en_curso",
  },
  {
    id: 7,
    paciente: "Paula Rivera",
    medico: "Dr. Fernández",
    fecha: "10 Oct, 01:00 PM",
    estado: "completada",
  },
  {
    id: 8,
    paciente: "Ricardo Navarro",
    medico: "Dra. Jiménez",
    fecha: "10 Oct, 02:00 PM",
    estado: "pendiente",
  },
];
