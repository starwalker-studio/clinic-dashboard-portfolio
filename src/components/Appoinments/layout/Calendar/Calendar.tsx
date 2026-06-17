import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useMobileTabletScreen } from "../../../hooks/useMobileTablet";
import { EVENTS_DATA } from "../../../ts/clinic-data";
import style from "./Calendar.module.scss";

export const Calendar = () => {
  const { isMobileScreen } = useMobileTabletScreen();
  const defaultView = isMobileScreen() ? "listWeek" : "dayGridMonth";
  return (
    <>
      <div className={style.calendar_content}>
        <div className={style.calendar_container}>
          <FullCalendar
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            initialView={defaultView}
            headerToolbar={{
              left: "prev,next today",
              center: isMobileScreen() ? "" : "title",
              right: isMobileScreen()
                ? ""
                : "dayGridMonth,timeGridWeek,timeGridDay",
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
  );
};
