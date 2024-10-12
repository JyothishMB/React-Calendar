import './custom-notifications.css'

const CustomNotifications = (props) => {
    return(
        <div className="custom-notifications">
            {
                (props?.notifications && props?.notifications?.notifications?.length<2) ? props?.notifications?.notifications.map((notification,index)=> {
                    return <div key={index} className="custom-notification text-start">{notification.length>8?notification.substring(0,5)+'...':notification}</div>
                }):props?.notifications?.notifications && <div className='custom-notification text-start'>more</div>
            }
        </div>
    )
}

export default CustomNotifications;