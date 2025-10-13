import type { UpcomingTableProps } from '../../../ts/layouts-types';
import style from './UpcomingTable.module.scss';

export const UpcomingTable = ({ data }: UpcomingTableProps) => {
    return (
        <>
            <div className={style.table_container}>
                <h2>Próximas citas</h2>
                <table className={style.table}>
                    <thead>
                        <tr>
                            <th>Paciente</th>
                            <th>Médico</th>
                            <th>Fecha</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row) => (
                            <tr key={row.id}>
                                <td>{row.paciente}</td>
                                <td>{row.medico}</td>
                                <td>{row.fecha}</td>
                                <td>
                                    <span className={`${style.badge} ${style[row.estado]}`}>
                                        {row.estado}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
