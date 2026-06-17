import { useState, type ReactNode } from "react";
import { Header } from "../../main/layouts/Header/Header";
import { Sidebar } from "../../main/layouts/Sidebar/Sidebar";
import { useMobileTabletScreen } from "../hooks/useMobileTablet";
import style from "./Dashboard.module.scss";

export const Dashboard = ({ children }: { children: ReactNode }) => {
  const { isMobileOrTablet } = useMobileTabletScreen();

  const [close, setClose] = useState<boolean>(isMobileOrTablet);

  const handleOpenCloseSideBar = () => {
    setClose((prevState) => !prevState);
  };

  return (
    <>
      <Sidebar close={close} />
      <Header handleOpenCloseSideBar={handleOpenCloseSideBar} close={close} />
      <div
        className={`${style.dashboard_container}${close ? style.wide_dashboard : ""}`}
        onClick={() => {
          if (isMobileOrTablet()) {
            setClose(true);
          }
        }}
      >
        <div className={style.dashboard_content}>{children}</div>
      </div>
    </>
  );
};
