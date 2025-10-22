// import { type SetStateAction } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faBell, faMoon, faSearch } from '@fortawesome/free-solid-svg-icons';
import style from './Header.module.scss';

type HeaderProps = {
    handleOpenCloseSideBar: () => void;
    close?: boolean;
}

export const Header = ({ handleOpenCloseSideBar, close }: HeaderProps) => {

    const bars = <FontAwesomeIcon icon={faBars} />
    const user = <FontAwesomeIcon icon={faUser} />
    const bell = <FontAwesomeIcon icon={faBell} />
    const dark = <FontAwesomeIcon icon={faMoon} />
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
                        <li>{dark}</li>
                        <li className={style.icon_container}>{bell}<span className={style.bagde}>3</span></li>
                        <li>{user}Usuario</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
