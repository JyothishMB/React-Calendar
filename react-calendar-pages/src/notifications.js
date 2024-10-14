import React from "react";
import CustomNotifications from "./custom-notifications";
import DefaultNotifications from "./default-notifications";

const Notifications = (props) => {

    let allNotifications = props?.defaultnotifications + props?.customnotifications
    return (
        <div className="day-notifications">
            {
                props?.defaultnotifications && 
                    <DefaultNotifications notifications={props?.defaultnotifications} showall={false} />
            }
            {
                props?.customnotifications 
                    && <CustomNotifications notifications={props?.customnotifications} showall={false} />
            }
        </div>
    )
}

export default Notifications;