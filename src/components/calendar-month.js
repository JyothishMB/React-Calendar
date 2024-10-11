import { useEffect, useState } from "react";
import CalendarDay from "./calendar-day";
import './calendar-month.css'

const CalendarMonth = (props) => {

    const [allDays, setAllDays] = useState([])
    const [month, setMonth] = useState(new Date().getMonth())
    const [year, setYear] = useState(new Date().getFullYear())
    const [monthDisplay, setMonthDisplay] = useState('')
    const [yearDisplay, setYearDisplay] = useState('')

    const weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    
    useEffect(() => {
        getDaysInMonth(month, year)
    }, [month,year])

    const getDaysInMonth = (month, year) => {
        var date = new Date(year, month, 1);
        const dateString = date.toLocaleDateString('en-us', {
            weekday:'long',
            year:'numeric',
            month:'long'
        })

        let datesplitvalues = dateString.split(' ')
        let paddingdays = weekdays.indexOf(datesplitvalues[2])
        let notificationsforthismonth = props.defaultnotifications[datesplitvalues[0]]
        let customnotificationsforthismonth = props.customnotifications[year] ? props.customnotifications[year][datesplitvalues[0]]:null
        setMonthDisplay(datesplitvalues[0])
        setYearDisplay(datesplitvalues[1])
        var days = [];
        while(paddingdays>0){
            days.push({date: null, rowindex: null, defaultnotifications:null,customnotifications:null});
            paddingdays = paddingdays-1;
        }
        while (date.getMonth() === month) {
            let datevalue = new Date(date);
            days.push({
                date: datevalue.getDate(), 
                rowindex: datevalue.getDay(),
                defaultnotifications:notificationsforthismonth?notificationsforthismonth[datevalue.getDate()]:null,
                customnotifications:customnotificationsforthismonth?customnotificationsforthismonth[datevalue.getDate()]:null,
                isToday: datevalue.toDateString() === new Date().toDateString()
            });
            date.setDate(date.getDate() + 1);
        }
        setAllDays(days)
    }

    const gotoPreviousMonth = () => {
        setMonth(()=>{
            setYear(month-1<0?year-1:year)
            return month-1<0?11:month-1
        })
    }
    const gotoNextMonth = () => {
        setMonth(()=>{
            setYear(month+1>11?year+1:year)
            return month+1>11?0:month+1
        })
    }
    const gotoPreviousYear = () => {
        setYear(year-1)
    }
    const gotoNextYear = () => {
        setYear(year+1)
    }


    return (
        <div className="container simple-calendar mt-5">
            <div className="row row-cols-8 month-header">
                <div className="col-1 text-start m-1" onClick={gotoPreviousYear}>{"<<"}</div>
                <div className="col-1 text-start m-1" onClick={gotoPreviousMonth}>{"<"}</div>
                <div className="col-1 text-end m-1">{monthDisplay}</div>
                <div className="col-1 text-end m-1">{yearDisplay}</div>
                <div className="col-1 text-end m-1"></div>
                <div className="col-1 text-end m-1" onClick={gotoNextMonth}>{">"}</div>
                <div className="col-1 text-end m-1" onClick={gotoNextYear}>{">>"}</div>
            </div>
            <div className="row row-cols-8 text-center m-1 week-days-label">
                <div className="col m-1">Sunday</div>
                <div className="col m-1">Monday</div>
                <div className="col m-1">Tuesday</div>
                <div className="col m-1">Wednesday</div>
                <div className="col m-1">Thursday</div>
                <div className="col m-1">Friday</div>
                <div className="col m-1">Saturday</div>
            </div>
            <div className="row row-cols-8">
            {
                allDays.map((day,index) => {
                    return <CalendarDay key={index} data={day} />
                })
            }
            </div>
            
        </div>
    );
}

export default CalendarMonth;