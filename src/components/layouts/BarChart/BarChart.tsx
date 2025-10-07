import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import style from "./BarChart.module.scss";
import type { BarChartProps } from "../../ts/layouts-types";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const BarChart = ({ title, labels, values, color = "#2196f3" }: BarChartProps) => {
    const data = {
        labels,
        datasets: [
            {
                label: title,
                data: values,
                backgroundColor: color,
                borderRadius: 6,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { display: false },
            title: { display: false },
        },
    };

    return (
        <div className={style.card}>
            <h3 className={style.title}>{title}</h3>
            <Bar data={data} options={options} />
        </div>
    )
}
