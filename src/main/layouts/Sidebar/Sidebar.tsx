import { ItemList } from './layout/ItemList';
import style from './Sidebar.module.scss';

type SidebarProps = {
    close?: boolean;
}

export const Sidebar = ({ close }: SidebarProps) => {

    const { clinicIcon, Content } = ItemList();

    return (
        <nav className={`${style.desktop_sidebar} ${close ? style.closed : ''}`}>
            <div className={style.sidebar_wrapper}>
                <div className={style.sidebar_header}>
                    <a href="/" className={style.brand_logo}>
                        <span>{clinicIcon}</span>
                        <h2>Clinic App</h2>
                    </a>
                </div>
                <div className={style.sidebar_content}>
                    <div className={style.simplebar_wrapper}>
                        <div className={style.simplebar_height}>
                            <div className={style.simplebar_auto}></div>
                        </div>
                        <div className={style.simplebar_mask}>
                            <div className={style.simplebar_offset}>
                                <div className={style.simplebar_content_wrapper}>
                                    <Content />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
