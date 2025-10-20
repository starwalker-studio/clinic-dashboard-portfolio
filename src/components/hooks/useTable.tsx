import { useState } from 'react';
import style from '../layouts/Table/Table.module.scss';

export const useTable = <T extends object>(excludeKeys: (string | number | symbol)[], data: T[], itemsPerPage: number) => {
    const [currentPage, setCurrentPage] = useState(1);

    const headers = (Object.keys(data[0]) as (keyof T)[]).filter(
        (key) => !excludeKeys.includes(key)
    );

    const totalPages = Math.ceil(data.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);

    const handlePrev = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const handleNext = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    const renderCell = (header: keyof T, value: T[keyof T]) => {
        if (header === "isActive") {
            return value ? (
                <span className={`${style.status_active} ${style.badge}`}>de alta</span>
            ) : (
                <span className={`${style.status_inactive} ${style.badge}`}>En consulta</span>
            );
        }
        return String(value);
    };

    return {
        headers,
        paginatedData,
        handlePrev,
        handleNext,
        renderCell,
        currentPage,
        totalPages
    }
}
