import { Table } from '../layouts/Table/Table';
import { PATIENTS, TABLE_PATIENTS_HEADERS } from '../ts/clinic-data';
import type { IPATIENTS } from '../ts/layouts-types';
import style from './Pacients.module.scss';

export const Pacients = () => {
  return (
    <>
      <div className={style.header_style}>
        <h5>Pacientes</h5>
      </div>
      <div className={style.table_container}>
        <Table<IPATIENTS> title={TABLE_PATIENTS_HEADERS} data={PATIENTS} excludeKeys={["id"]} itemsPerPage={8} />
      </div>
    </>
  )
}
