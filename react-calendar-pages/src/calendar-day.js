import React from "react";
import "./calendar-day.css"
import CustomNotifications from "./custom-notifications";
import DefaultNotifications from "./default-notifications";
import Notifications from "./notifications";

const CalendarDay = (props) => {

    const isHoliday = () => {
        return props?.data?.rowindex==0 
            || props?.data?.rowindex==6 
            || props?.data?.defaultnotifications?.isholiday
    }

    const dayclass = isHoliday() ? 'grid-item daycell holiday':'grid-item daycell workingday'
    const todayclass = props?.data?.isToday ?
                        'day-label today text-end pe-1 pt-1':'day-label text-end pe-1 pt-1'

    let allNotifications = props?.data?.defaultnotifications + props?.data?.customnotifications

    return (
        <div className={dayclass}>
            <div className={todayclass}>{props?.data?.date}</div>
            <Notifications 
                defaultnotifications={props?.data?.defaultnotifications} 
                customnotifications={props?.data?.customnotifications}/>
            {/* <div className="day-notifications">
                {
                    props?.data?.defaultnotifications && <DefaultNotifications notifications={props?.data?.defaultnotifications} showall={false} />
                }
                {
                    props?.data?.customnotifications && <CustomNotifications notifications={props?.data?.customnotifications} showall={false} />
                }
            </div> */}
        </div>
    )
}

export default CalendarDay;