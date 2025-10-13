import type { ISUMMARY, SummaryCardsProps } from '../../../ts/layouts-types';
import { faCalendarDay, faCheckCircle, faTimesCircle, faHourglassHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './SummaryCards.module.scss';

export const SummaryCards = ({ on_day, complete, cancel, on_course }: SummaryCardsProps) => {

    const SUMMARY: ISUMMARY[] = [
        { label: "Citas del día", value: on_day, icon: faCalendarDay, card_style: style.all_appmnts_style },
        { label: "Completadas", value: complete, icon: faCheckCircle, card_style: style.complete_style },
        { label: "Canceladas", value: cancel, icon: faTimesCircle, card_style: style.cancel_style },
        { label: "En curso", value: on_course, icon: faHourglassHalf, card_style: style.on_course_style },
    ];

    return (
        <>
            <div className={style.summary_flex}>
                {SUMMARY.map((item, idx) => (
                    <div key={idx} className={item.card_style}>
                        <div className={style.card_content}>
                            <FontAwesomeIcon icon={item.icon} size="2x" />
                            <h2>{item.label}</h2>
                        </div>
                        <span>{item.value}</span>
                    </div>
                ))}
            </div>
        </>
    )
}
