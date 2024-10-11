import './custom-notifications.css'

const CustomNotifications = (props) => {
    return(
        <div className="custom-notifications">
            {
                (props?.notifications && props?.notifications?.notifications?.length<3) ? props?.notifications?.notifications.map((notification,index)=> {
                    return <div key={index} className="custom-notification">{notification.length>8?notification.substring(0,5)+'...':notification}</div>
                }):props?.notifications?.notifications && <div className='custom-notification'>2+</div>
            }
        </div>
    )
}

export default CustomNotifications;