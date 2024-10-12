import "./calendar-day.css"
import CustomNotifications from "./custom-notifications";
import DefaultNotifications from "./default-notifications";

const CalendarDay = (props) => {

    const isHoliday = () => {
        return props?.data?.rowindex==0 
            || props?.data?.rowindex==6 
            || props?.data?.defaultnotifications?.isholiday
    }

    const dayclass = isHoliday() ? 'grid-item daycell holiday':'grid-item daycell workingday'
    const todayclass = props?.data?.isToday ?
                        'day-label today':'day-label'
    return (
        <div className={dayclass}>
            <div className={todayclass}>{props?.data?.date}</div>
            <div className="day-notifications">
                {
                    props?.data?.defaultnotifications && <DefaultNotifications notifications={props?.data?.defaultnotifications} />
                }
                {
                    props?.data?.customnotifications && <CustomNotifications notifications={props?.data?.customnotifications} />
                }
            </div>
        </div>
    )
}

export default CalendarDay;