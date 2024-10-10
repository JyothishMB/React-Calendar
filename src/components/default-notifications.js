import './default-notifications.css'

const DefaultNotifications = (props) => {
    return(
        <div className="default-notifications">
            {
                (props?.notifications && props?.notifications?.notifications?.length<3) ? props?.notifications?.notifications.map((notification,index)=> {
                    return <div key={index} className="default-notification">{notification.length>8?notification.substring(0,5)+'...':notification}</div>
                }):props?.notifications?.notifications && <div className='default-notification'>2+</div>
            }
        </div>
    )
}

export default DefaultNotifications;