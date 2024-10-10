import './default-notifications.css'

const DefaultNotifications = (props) => {
    return(
        <div className="default-notifications">
            {
                props?.notifications && props?.notifications?.notifications.map((notification,index)=> {
                    return <div key={index} className="default-notification">{notification}</div>
                })
            }
        </div>
    )
}

export default DefaultNotifications;