import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { EVENTS_DATA } from '../../../ts/clinic-data';
import style from './Calendar.module.scss';

export const Calendar = () => {

    return (
        <>
            <div className={style.calendar_content}>
                <div className={style.calendar_container}>
                    <FullCalendar
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                        initialView="dayGridMonth"
                        headerToolbar={{
                            left: "prev,next today",
                            center: "title",
                            right: "dayGridMonth,timeGridWeek,timeGridDay",
                        }}
                        locale="es" // idioma español
                        events={EVENTS_DATA}
                        height="85vh"
                        eventDisplay="block"
                        editable
                    />
                </div>
            </div>
        </>
    )
}
