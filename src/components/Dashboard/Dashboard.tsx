import { useState, type ReactNode } from "react";
import { Sidebar } from "../../main/layouts/Sidebar/Sidebar";
import style from './Dashboard.module.scss';
import { Header } from "../../main/layouts/Header/Header";

export const Dashboard = ({ children }: { children: ReactNode }) => {

  const [close, setClose] = useState<boolean>();

  const handleOpenCloseSideBar = () => {
    setClose(prevState => !prevState);
  }

  return (
    <>
      <Sidebar close={close} />
      <Header handleOpenCloseSideBar={handleOpenCloseSideBar} close={close} />
      <div className={`${style.dashboard_container}${close ? style.wide_dashboard : ''}`}>
        <div className={style.dashboard_content}>
          {children}
        </div>
      </div>
    </>
  )
}
