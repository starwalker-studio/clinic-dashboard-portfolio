import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import style from './ActivityPanel.module.scss';
import type { ActivityPanelProps } from "../../../ts/layouts-types";

export const ActivityPanel = ({ activities }: ActivityPanelProps) => {
    return (
        <>
            <div className={style.activity_panel}>
                <h2>Actividad reciente</h2>
                <ul className={style.activity_list}>
                    {activities.map((act) => (
                        <li key={act.id} className={`${style.activity_item} ${style[act.status]}`}>
                            <div className={style.icon_wrapper}>
                                <FontAwesomeIcon icon={act.icon} className={style.icon} />
                            </div>

                            <div className={style.details}>
                                <p className={style.text}>{act.text}</p>
                                <span className={style.time}>{act.time}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
