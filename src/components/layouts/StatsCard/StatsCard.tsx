import type { StatsCardProps } from '../../ts/layouts-types';
import style from './StatsCard.module.scss';

export const StatsCard = ({ title, value, percentage, trend = "neutral" }: StatsCardProps) => {

    const getColor = () => {
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
            <div className={style.col_span_6}>
                <div className={style.card}>
                    <div className={style.card_header}>
                        <h6>{title}</h6>
                    </div>
                    <div className={style.card_body}>
                        <div>
                            <h1>{value}</h1>
                        </div>
                        <div>
                            <h2>{percentage}%</h2>
                        </div>
                    </div>
                    <div className={style.progress_bar}>
                        <div className={style.fill}
                            style={{ width: `${percentage}%`, backgroundColor: getColor() }}>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
