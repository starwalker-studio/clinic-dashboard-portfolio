import { StatsCard } from '../layouts/StatsCard/StatsCard';
import { Table } from '../layouts/Table/Table';
import { DOCTORS, PATIENTS, TABLE_DOCTOR_HEADERS, TABLE_PATIENTS_HEADERS } from '../ts/clinic-data';
import type { IDOCTORS, IPATIENTS } from '../ts/layouts-types';
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
          <Table<IDOCTORS> title={TABLE_DOCTOR_HEADERS} data={DOCTORS} excludeKeys={["id"]} itemsPerPage={3} />
        </div>
        <div className={style.col_wide_right}>
          <Table<IPATIENTS> title={TABLE_PATIENTS_HEADERS} data={PATIENTS} excludeKeys={["id"]} itemsPerPage={3} />
        </div>
      </div>
    </>
  )
}
