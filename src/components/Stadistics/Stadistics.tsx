import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
} from "chart.js";
import style from './Stadistics.module.scss';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
);

export const Stadistics = () => {

  const metrics = [
    { title: "Pacientes activos", value: 234 },
    { title: "Citas este mes", value: 120 },
    { title: "Doctores disponibles", value: 15 },
    { title: "Ingresos estimados", value: "$45,000" },
  ];

  const citasData = {
    labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
    datasets: [
      {
        label: "Citas por mes",
        data: [20, 25, 30, 40, 35, 50],
        borderColor: "#4f46e5",
        backgroundColor: "rgba(79, 70, 229, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const especialidadData = {
    labels: ["Cardiología", "Pediatría", "Dermatología", "Odontología"],
    datasets: [
      {
        label: "Especialidad",
        data: [30, 25, 15, 30],
        backgroundColor: ["#4f46e5", "#10b981", "#f59e0b", "#ef4444"],
      },
    ],
  };

  const cancelacionesData = {
    labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
    datasets: [
      {
        label: "Confirmadas",
        data: [18, 22, 28, 35, 30, 45],
        backgroundColor: "#4f46e5",
      },
      {
        label: "Canceladas",
        data: [2, 3, 2, 5, 5, 5],
        backgroundColor: "#ef4444",
      },
    ],
  };

  const ingresosData = {
    labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
    datasets: [
      {
        label: "Ingresos",
        data: [8000, 9500, 10200, 11000, 9500, 12000],
        backgroundColor: "#10b981",
      },
    ],
  };

  return (
    <>
      <div className={style.stadistics_container}>

        <div className={style.header_style}>
          <h5>Estadísticas</h5>
        </div>

        <div className={style.metrics}>
          {metrics.map((m) => (
            <div key={m.title} className={style.metric_card}>
              <h3>{m.title}</h3>
              <p>{m.value}</p>
            </div>
          ))}
        </div>

        <div className={style.charts}>
          <div className={style.chart_card}>
            <h3>Citas por mes</h3>
            <Line data={citasData} />
          </div>

          <div className={style.chart_card}>
            <h3>Distribución por especialidad</h3>
            <Bar data={especialidadData} />
          </div>

          <div className={style.chart_card}>
            <h3>Tasa de cancelaciones</h3>
            <Bar data={cancelacionesData} />
          </div>

          <div className={style.chart_card}>
            <h3>Ingresos mensuales</h3>
            <Bar data={ingresosData} />
          </div>
        </div>
      </div>
    </>
  )
}
