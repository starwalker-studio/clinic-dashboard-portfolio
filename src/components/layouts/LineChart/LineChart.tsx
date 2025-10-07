import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import style from "./LineChart.module.scss";
import type { LineChartProps } from "../../ts/layouts-types";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const LineChart = ({ title, labels, values, color = "#4caf50" }: LineChartProps) => {
    const data = {
        labels,
        datasets: [
            {
                label: title,
                data: values,
                borderColor: color,
                backgroundColor: `${color}33`, // mismo color con transparencia
                fill: true,
                tension: 0.3,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { display: false },
        },
    };

    return (
        <div className={style.card}>
            <h3 className={style.title}>{title}</h3>
            <Line data={data} options={options} />
        </div>
    );
}
