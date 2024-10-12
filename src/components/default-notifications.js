import './default-notifications.css'

const DefaultNotifications = (props) => {
    return(
        <div className="default-notifications">
            {
                (props?.notifications && props?.notifications?.notifications?.length<2) ? props?.notifications?.notifications.map((notification,index)=> {
                    return <div key={index} className="default-notification text-start">{notification.length>8?notification.substring(0,5)+'...':notification}</div>
                }):props?.notifications?.notifications && <div className='default-notification text-start'>more</div>
            }
        </div>
    )
}

export default DefaultNotifications;