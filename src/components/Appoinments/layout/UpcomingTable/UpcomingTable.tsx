import { useMobileTabletScreen } from "../../../hooks/useMobileTablet";
import type { UpcomingTableProps } from "../../../ts/layouts-types";
import style from "./UpcomingTable.module.scss";

export const UpcomingTable = ({ data }: UpcomingTableProps) => {
  const { isMobileScreen } = useMobileTabletScreen();
  return (
    <>
      {isMobileScreen() ? (
        <div className={style.list_container}>
          {data.map((row) => (
            <ul key={row.id}>
              <li>
                <strong>Paciente: </strong>
                {row.paciente}
              </li>
              <li>
                <strong>Medico: </strong>
                {row.medico}
              </li>
              <li>
                <strong>Fecha: </strong>
                {row.fecha}
              </li>
              <li>
                <strong>Estado: </strong>
                <span className={`${style.badge} ${style[row.estado]}`}>
                  {row.estado}
                </span>
              </li>
            </ul>
          ))}
        </div>
      ) : (
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
      )}
    </>
  );
};
