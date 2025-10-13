import {
    faCheckCircle,
    faTimesCircle,
    faHourglassHalf,
    faCalendarPlus,
} from "@fortawesome/free-solid-svg-icons";
import type { IACTIVITYITEM } from "../../../ts/layouts-types";

export const activityData = () => {

    const MOCK_ACTIVITIES: IACTIVITYITEM[] = [
        {
            id: 1,
            icon: faCheckCircle,
            text: "Cita completada con Dr. Ramírez",
            time: "09:00 AM",
            status: "completada",
        },
        {
            id: 2,
            icon: faHourglassHalf,
            text: "Cita en curso con María López",
            time: "10:30 AM",
            status: "en_curso",
        },
        {
            id: 3,
            icon: faTimesCircle,
            text: "Cita cancelada (Jorge Díaz)",
            time: "11:00 AM",
            status: "cancelada",
        },
        {
            id: 4,
            icon: faCalendarPlus,
            text: "Nueva cita agendada para Ana Pérez",
            time: "12:45 PM",
            status: "nueva",
        },
    ];

    return {
        MOCK_ACTIVITIES
    }
}
