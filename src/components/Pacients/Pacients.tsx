import { useState } from 'react';
import { Table } from '../layouts/Table/Table';
import { PATIENTS, TABLE_PATIENTS_HEADERS } from '../ts/clinic-data';
import type { IPATIENTS } from '../ts/layouts-types';
import { DisplayTable } from '../layouts/DisplayTable/DisplayTable';

export const Pacients = () => {

  const [patient, setPatient] = useState<IPATIENTS | undefined>();

  return (
    <>
      <DisplayTable<IPATIENTS>
        data={patient}
        dataFilter={PATIENTS}
        setPerson={e => setPatient(e)}>
        <Table<IPATIENTS>
          title={TABLE_PATIENTS_HEADERS}
          data={PATIENTS}
          excludeKeys={["id",
            "motivoConsulta",
            "isActive",
            "diagnostico",
            "ultimaVisita",
            "proximaCita",
            "status",
            "kind"
          ]}
          itemsPerPage={7}
          setData={e => setPatient(e)}
          pagination={true} />
      </DisplayTable>
    </>
  )
}
