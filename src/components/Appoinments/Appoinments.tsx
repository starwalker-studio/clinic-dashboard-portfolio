import { Calendar } from "./layout/Calendar/Calendar"
import { SummaryCards } from "./layout/SummaryCards/SummaryCards"
import style from './Appoinments.module.scss';
import { ActivityPanel } from "./layout/ActivityPanel/ActivityPanel";
import { activityData } from "./layout/ActivityPanel/activityData";
import { MOCK_UPCOMING } from "../ts/clinic-data";
import { UpcomingTable } from "./layout/UpcomingTable/UpcomingTable";

export const Appoinments = () => {

  const { MOCK_ACTIVITIES } = activityData();

  return (
    <>
      <div className={style.header_style}>
        <h5>Citas</h5>
      </div>
      <SummaryCards on_day={20} complete={10} cancel={2} on_course={8} />
      <Calendar />
      <div className={style.activity_container}>
        <UpcomingTable data={MOCK_UPCOMING} />
        <ActivityPanel activities={MOCK_ACTIVITIES} />
      </div>
    </>
  )
}
