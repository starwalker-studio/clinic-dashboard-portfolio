import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStaffSnake } from '@fortawesome/free-solid-svg-icons';
import { faGauge } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBriefcaseMedical } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import style from './ItemList.module.scss';
import { NavLink } from 'react-router-dom';
import type { ClassValue, MenuItems } from '../../ts/menuItems';

export const ItemList = () => {

    const clinicIcon = <FontAwesomeIcon icon={faStaffSnake} size='2x' />
    const home = <FontAwesomeIcon icon={faGauge} />
    const calendar = <FontAwesomeIcon icon={faCalendar} />
    const person = <FontAwesomeIcon icon={faUser} />
    const briefcase = <FontAwesomeIcon icon={faBriefcaseMedical} />
    const chartline = <FontAwesomeIcon icon={faChartLine} />
    const login = <FontAwesomeIcon icon={faLock} />
    const gear = <FontAwesomeIcon icon={faGear} />    

    const menuItems: MenuItems[] = [
        { id: 1, path: "", label: "Navegación" },
        { id: 2, path: "/", label: "Dashboard", icon: home },
        { id: 3, path: "/pacientes", label: "Pacientes", icon: person },
        { id: 4, path: "/citas", label: "Citas", icon: calendar },
        { id: 5, path: "", label: "Información" },
        { id: 6, path: "/medicos", label: "Médicos", icon: briefcase },
        { id: 7, path: "/estadisticas", label: "Estadísticas", icon: chartline },
        { id: 8, path: "", label: "Autenticación" },
        { id: 9, path: "/login", label: "Login", icon: login },
        { id: 10, path: "/ajustes", label: "Ajustes", icon: gear },
    ];

    function classNames(...classes: ClassValue[]): string {
        return classes.filter(Boolean).join(" ");
    }

    const Content = () => {
        return (
            <div className={style.simplebar_content}>
                <ul>
                    {
                        menuItems.map((item) => (
                            <li key={item.id} className={item.path === "" ? style.simplebar_list : ""}>
                                {
                                    item.path === "" ? (
                                        item.label
                                    ) : (
                                        <NavLink className={({ isActive }) =>
                                            classNames(
                                                isActive && style.item_active,
                                                style.item
                                            )
                                        } to={item.path} end>
                                            <span>{item.icon}</span>
                                            {item.label}
                                        </NavLink>
                                    )
                                }
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }

    return {
        clinicIcon,
        Content
    }
}
