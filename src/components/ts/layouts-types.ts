import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type StatsCardProps = {
    title: string;
    value: number;
    percentage: number;
    trend?: "up" | "down" | "neutral"; // dirección de la tendencia
};

export type TableProps<T> = {
    title: string[];
    data: T[];
    excludeKeys?: (keyof T)[];
    itemsPerPage?: number;
}

export type LineChartProps = {
    title: string;
    labels: string[];
    values: number[];
    color?: string;
}

export type BarChartProps = {
    title: string;
    labels: string[];
    values: number[];
    color?: string;
}

export type SummaryCardsProps = {
    on_day: number;
    complete: number;
    cancel: number;
    on_course: number;
}

export interface ActivityPanelProps {
    activities: IACTIVITYITEM[];
}

export interface UpcomingTableProps {
    data: IUPCOMINGAPPOINTMENT[];
}

export interface IACTIVITYITEM {
    id: number;
    icon: IconDefinition;
    text: string;
    time: string;
    status: "completada" | "cancelada" | "en_curso" | "nueva";
}

export interface IUPCOMINGAPPOINTMENT {
    id: number;
    paciente: string;
    medico: string;
    fecha: string;
    estado: "pendiente" | "en_curso" | "completada" | "cancelada";
}

export interface ISUMMARY {
    label: string;
    value: number;
    icon: IconDefinition;
    card_style: string;
}

export interface IEVENTSDATA {
    id: string;
    title?: string;
    start?: string;
    allDay?: boolean;
    end?: string;
    display?: string;
    backgroundColor?: string;
    daysOfWeek?: [number, number];
    color?: string;
}

interface IPERSON {
    id: number;
    name: string;
    phone: string;
    email: string;
}

export interface IDOCTORS extends IPERSON {
    specialty: string;
}

export interface IPATIENTS extends IPERSON {
    isActive: boolean;
}
