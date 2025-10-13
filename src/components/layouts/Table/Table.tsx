import { useTable } from '../../hooks/useTable';
import type { TableProps } from '../../ts/layouts-types';
import style from './Table.module.scss';

export const Table = <T extends object>({ data, title, excludeKeys = [], itemsPerPage = 5 }: TableProps<T>) => {

    const {
        headers,
        handleNext,
        handlePrev,
        paginatedData,
        renderCell,
        currentPage,
        totalPages
    } = useTable<T>(excludeKeys, data, itemsPerPage);

    return (
        <>
            <div className={style.card}>
                <div>
                    <h3 className={style.title}>Lista de Pacientes</h3>
                </div>
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
                                        <td key={colIndex}>{renderCell(header, row[header])}</td>
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
