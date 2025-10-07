import { BarChart } from '../layouts/BarChart/BarChart';
import { LineChart } from '../layouts/LineChart/LineChart';
import { StatsCard } from '../layouts/StatsCard/StatsCard';
import { Table } from '../layouts/Table/Table';
import { PATIENTS, TABLE_PATIENTS_HEADERS } from '../ts/clinic-data';
import type { IPATIENTS } from '../ts/layouts-types';
import style from './Home.module.scss';

export const Home = () => {
  return (
    <>
      <div className={style.header_style}>
        <h5>Dashboard</h5>
      </div>
      <div className={style.grid_columns}>
        <StatsCard title={'Pacientes'} value={1245} percentage={78} trend='up' />
        <StatsCard title={'Médicos'} value={85} percentage={65} trend='neutral' />
        <StatsCard title={'Enfermeras'} value={150} percentage={80} trend='up' />
        <StatsCard title={'Camas Disponibles'} value={90} percentage={45} trend='down' />
      </div>
      <div className={style.flex_wrap}>
        <div className={style.col_wide_left}>
          <BarChart
            title="Citas por Mes"
            labels={["Enero", "Febrero", "Marzo", "Abril", "Mayo"]}
            values={[12, 19, 8, 15, 22]}
          />
        </div>
        <div className={style.col_wide_right}>
          <LineChart
            title="Crecimiento de Pacientes"
            labels={["Enero", "Febrero", "Marzo", "Abril", "Mayo"]}
            values={[5, 9, 14, 18, 25]}
          />
        </div>
      </div>
      <div className={style.flex_wrap}>
        <div className={style.table_container}>
          <Table<IPATIENTS> title={TABLE_PATIENTS_HEADERS} data={PATIENTS} excludeKeys={["id"]} itemsPerPage={8}/>
        </div>
      </div>
    </>
  )
}
