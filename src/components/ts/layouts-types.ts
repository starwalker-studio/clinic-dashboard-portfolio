
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
    age: number;
    gender: string;
}
