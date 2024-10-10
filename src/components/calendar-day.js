import "./calendar-day.css"

const CalendarDay = (props) => {
    const dayclass = props?.data?.rowindex==0 || props?.data?.rowindex==6 ? 'col daycell m-1 holiday':'col daycell m-1 workingday'
    return (
        <div className={dayclass}>
            <div className="day-label">{props?.data?.date}</div>
            <div className="day-notifications">
                <div className="default-notifications"></div>
                <div className="custom-notifications"></div>
            </div>
        </div>
    )
}

export default CalendarDay;