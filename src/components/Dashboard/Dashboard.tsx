import type { ReactNode } from "react";
import { Sidebar } from "../../main/layouts/Sidebar/Sidebar";
import style from './Dashboard.module.scss';
import { Header } from "../../main/layouts/Header/Header";

export const Dashboard = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Sidebar />
      <Header />
      <div className={style.dashboard_container}>
        <div className={style.dashboard_content}>
          {children}
        </div>
      </div>
    </>
  )
}
