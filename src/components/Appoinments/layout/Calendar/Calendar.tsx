import { useState } from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import style from './Calendar.module.scss';
import type { EventData } from '../../../ts/layouts-types';

export const Calendar = () => {

    const [events, setEvents] = useState<EventData[]>([
        {
            id: "1",
            title: "Consulta con Dr. Ramírez",
            start: "2025-10-09T09:00:00",
            end: "2025-10-09T10:00:00",
            color: "#4caf50", // verde
        },
        {
            id: "2",
            title: "Chequeo general - Paciente Pérez",
            start: "2025-10-10T12:00:00",
            end: "2025-10-10T13:00:00",
            color: "#2196f3", // azul
        },
        {
            id: "3",
            title: "Revisión de laboratorio",
            start: "2025-10-11T15:30:00",
            color: "#f44336", // rojo
        },
    ]);

    const handleDateClick = (info: any) => {
        alert(`Has hecho clic en: ${info.dateStr}`);
    };

    const handleEventClick = (info: any) => {
        alert(`Evento: ${info.event.title}`);
    };

    return (
        <>
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
                    events={events}
                    dateClick={handleDateClick}
                    eventClick={handleEventClick}
                    height="85vh"
                    eventDisplay="block"
                    editable
                />
            </div>
        </>
    )
}
