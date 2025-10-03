import { useState } from 'react';
import type { TableProps } from '../../ts/layouts-types';
import style from './Table.module.scss';

export const Table = <T extends object>({ data, title, excludeKeys = [], itemsPerPage = 5 }: TableProps<T>) => {

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

    return (
        <>
            <div className={style.card}>
                <div className={style.table_wrapper}>
                    <table>
                        <thead>
                            <tr>
                                {title.map((header, idx) => (
                                    <th key={idx}>{header}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedData.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    {headers.map((header, colIndex) => (
                                        <td key={colIndex}>{String(row[header])}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className={style.pagination}>
                        <button onClick={handlePrev} disabled={currentPage === 1}>
                            Anterior
                        </button>
                        <span>
                            Página {currentPage} de {totalPages}
                        </span>
                        <button onClick={handleNext} disabled={currentPage === totalPages}>
                            Siguiente
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
