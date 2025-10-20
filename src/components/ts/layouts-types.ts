import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import type { ReactNode, SetStateAction } from "react";

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
    setData?: (e: SetStateAction<T | undefined>) => void;
    pagination?: boolean;
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

export type DisplayTableProps<T> = {
    children: ReactNode;
    data?: T;
    dataFilter: T[];
    isDoctor?: boolean;
    setPerson?: (e: SetStateAction<T | undefined>) => void;
}

export type SearchBoxProps<T> = {
    value: string;
    results: T[];
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSelect: (item: T) => void;
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

export interface IPERSON {
    id: number;
    name: string;
    phone: string;
    email: string;
}

export interface IPATIENTS extends IPERSON {
    kind: "patient";
    isActive: boolean;
    edad: number;
    genero: "Masculino" | "Femenino";
    motivoConsulta: string;
    diagnostico: string;
    ultimaVisita: string;
    proximaCita: string;
    status: "activo" | "en_curso" | "inactivo";
}

export interface IDOCTORS extends IPERSON {
    kind: "doctor";
    specialty: string;
}