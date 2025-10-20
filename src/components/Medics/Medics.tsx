import { useState } from "react";
import { DisplayTable } from "../layouts/DisplayTable/DisplayTable";
import type { IDOCTORS } from "../ts/layouts-types";
import { Table } from "../layouts/Table/Table";
import { DOCTORS, TABLE_DOCTOR_HEADERS } from "../ts/clinic-data";

export const Medics = () => {

  const [doctor, setDoctor] = useState<IDOCTORS | undefined>();

  return (
    <>
      <DisplayTable<IDOCTORS>
        data={doctor}
        isDoctor={true}
        dataFilter={DOCTORS}
        setPerson={e => setDoctor(e)}>
        <Table<IDOCTORS>
          title={TABLE_DOCTOR_HEADERS}
          data={DOCTORS}
          excludeKeys={["id",
            "kind"
          ]}
          itemsPerPage={5}
          setData={e => setDoctor(e)}
          pagination={true} />
      </DisplayTable>
    </>
  )
}
