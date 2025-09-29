import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import style from './Header.module.scss';

export const Header = () => {

    const bars = <FontAwesomeIcon icon={faBars} />
    const user = <FontAwesomeIcon icon={faUser} />
    const bell = <FontAwesomeIcon icon={faBell} />
    const dark = <FontAwesomeIcon icon={faMoon} />
    const search = <FontAwesomeIcon icon={faSearch} />

    return (
        <header className={style.desktop_header}>
            <div className={style.header_wrapper}>
                <div className={style.search_bar_container}>
                    <div className={style.search_bar_wrapper}>
                        <span>{bars}</span>
                        <div className={style.input_wrapper}>
                            <span>{search}</span>
                            <input type="text" placeholder='Buscar'/>
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
