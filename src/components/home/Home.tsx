import style from './Home.module.scss';

export const Home = () => {

  const getColor = (trend: string) => {
    switch (trend) {
      case "up":
        return "#4caf50"; // verde
      case "down":
        return "#f44336"; // rojo
      default:
        return "#2196f3"; // azul
    }
  };

  return (
    <>
      <div className={style.header_style}>
        <h5>Dashboard</h5>
      </div>
      <div className={style.grid_columns}>
        <div className={style.col_span_6}>
          <div className={style.card}>
            <div className={style.card_header}>
              <h6>Pacientes</h6>
            </div>
            <div className={style.card_body}>
              <div>
                <h1>1245</h1>
              </div>
              <div>
                <h2>78%</h2>
              </div>
            </div>
            <div className={style.progress_bar}>
              <div className={style.fill}
                style={{ width: `${78}%`, backgroundColor: getColor("up") }}>
              </div>
            </div>
          </div>
        </div>
        <div className={style.col_span_6}>
          <div className={style.card}>
            <div className={style.card_header}>
              <h6>Medicos</h6>
            </div>
            <div className={style.card_body}>
              <div>
                <h1>85</h1>
              </div>
              <div>
                <h2>65%</h2>
              </div>
            </div>
            <div className={style.progress_bar}>
              <div className={style.fill}
                style={{ width: `${65}%`, backgroundColor: getColor("neutral") }}>
              </div>
            </div>
          </div>
        </div>
        <div className={style.col_span_6}>
          <div className={style.card}>
            <div className={style.card_header}>
              <h6>Enfermeras</h6>
            </div>
            <div className={style.card_body}>
              <div>
                <h1>150</h1>
              </div>
              <div>
                <h2>80%</h2>
              </div>
            </div>
            <div className={style.progress_bar}>
              <div className={style.fill}
                style={{ width: `${80}%`, backgroundColor: getColor("up") }}>
              </div>
            </div>
          </div>
        </div>
        <div className={style.col_span_6}>
          <div className={style.card}>
            <div className={style.card_header}>
              <h6>Camas disponibles</h6>
            </div>
            <div className={style.card_body}>
              <div>
                <h1>90</h1>
              </div>
              <div>
                <h2>75%</h2>
              </div>
            </div>
            <div className={style.progress_bar}>
              <div className={style.fill}
                style={{ width: `${75}%`, backgroundColor: getColor("down") }}>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.flex_wrap}>        
        <div className={style.col_wide_left}>
          <div className={style.card}>
            <div className={style.table_wrapper}>
              <table>
                <thead>
                  <th>Nombre</th>
                  <th>Especialidad</th>
                  <th>Teléfono</th>
                  <th>Correo</th>
                </thead>
                <tbody>
                  <tr>
                    <td>Dr. Juan Pérez</td>
                    <td>Cardiología</td>
                    <td>555-123-4567</td>
                    <td>juan.perez@clinic.mx</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className={style.col_wide_right}>
          <div className={style.card}>
            <div className={style.table_wrapper}>
              <table>
                <thead>
                  <th>Nombre</th>
                  <th>Especialidad</th>
                  <th>Teléfono</th>
                  <th>Correo</th>
                </thead>
                <tbody>
                  <tr>
                    <td>Dr. Juan Pérez</td>
                    <td>Cardiología</td>
                    <td>555-123-4567</td>
                    <td>juan.perez@clinic.mx</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
