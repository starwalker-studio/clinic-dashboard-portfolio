// import { type SetStateAction } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faMoon, faSearch, faSun } from '@fortawesome/free-solid-svg-icons';
import style from './Header.module.scss';
import { useTheme } from '../../../components/hooks/useTheme';
import { Notifications } from './Notifications/Notifications';

type HeaderProps = {
    handleOpenCloseSideBar: () => void;
    close?: boolean;
}

export const Header = ({ handleOpenCloseSideBar, close }: HeaderProps) => {

    const { toggleTheme, theme } = useTheme();

    const bars = <FontAwesomeIcon icon={faBars} />
    const user = <FontAwesomeIcon icon={faUser} />
    // const bell = <FontAwesomeIcon icon={faBell} />
    const dark = <FontAwesomeIcon icon={faMoon} />
    const light = <FontAwesomeIcon icon={faSun} />
    const search = <FontAwesomeIcon icon={faSearch} />

    return (
        <header className={`${style.desktop_header}${close ? style.wide_header : ''}`}>
            <div className={style.header_wrapper}>
                <div className={style.search_bar_container}>
                    <div className={style.search_bar_wrapper}>
                        <span style={{ cursor: 'pointer' }} onClick={() => handleOpenCloseSideBar()}>{bars}</span>
                        <div className={style.input_wrapper}>
                            <span>{search}</span>
                            <input type="text" placeholder='Buscar' />
                        </div>
                    </div>
                </div>
                <div className={style.ms_auto}>
                    <ul>
                        <li>
                            <span style={{ cursor: 'pointer' }} onClick={toggleTheme}>
                                {theme === "light" ? dark : light}
                            </span>
                        </li>
                        <li>
                            <div className={style.header_actions}>
                                <Notifications />
                            </div>
                        </li>
                        <li>{user}Usuario</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
