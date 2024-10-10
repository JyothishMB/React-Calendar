import "./calendar-day.css"
import DefaultNotifications from "./default-notifications";

const CalendarDay = (props) => {

    const isHoliday = () => {
        return props?.data?.rowindex==0 
            || props?.data?.rowindex==6 
            || props?.data?.defaultnotifications?.isholiday
    }

    const dayclass = isHoliday() ? 'col daycell m-1 holiday':'col daycell m-1 workingday'
    return (
        <div className={dayclass}>
            <div className="day-label">{props?.data?.date}</div>
            <div className="day-notifications">
                <DefaultNotifications notifications={props?.data?.defaultnotifications} />
                <div className="custom-notifications"></div>
            </div>
        </div>
    )
}

export default CalendarDay;