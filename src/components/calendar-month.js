import { useEffect, useState } from "react";
import CalendarDay from "./calendar-day";
import './calendar-month.css'

const CalendarMonth = () => {

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

        let paddingdays = weekdays.indexOf(dateString.split(' ')[2])
        setMonthDisplay(dateString.split(' ')[0])
        setYearDisplay(dateString.split(' ')[1])
        var days = [];
        while(paddingdays>0){
            days.push({date: null, rowindex: null});
            paddingdays = paddingdays-1;
        }
        while (date.getMonth() === month) {
            let datevalue = new Date(date);
            days.push({date: datevalue.getDate(), rowindex: datevalue.getDay()});
            date.setDate(date.getDate() + 1);
        }
        setAllDays(days)
    }

    const gotoPreviousMonth = () => {
        setMonth(month-1)
    }
    const gotoNextMonth = () => {
        setMonth(month+1)
    }
    const gotoPreviousYear = () => {
        setYear(year-1)
    }
    const gotoNextYear = () => {
        setYear(year+1)
    }


    return (
        <div className="container simple-calendar mt-5">
            <div className="row row-cols-8">
                <div className="col-1 text-start m-1" onClick={gotoPreviousYear}>{"<<"}</div>
                <div className="col-1 text-start m-1" onClick={gotoPreviousMonth}>{"<"}</div>
                <div className="col-1 text-end m-1">{monthDisplay}</div>
                <div className="col-1 text-end m-1">{yearDisplay}</div>
                <div className="col-1 text-end m-1"></div>
                <div className="col-1 text-end m-1" onClick={gotoNextMonth}>{">"}</div>
                <div className="col-1 text-end m-1" onClick={gotoNextYear}>{">>"}</div>
            </div>
            <div className="row row-cols-8 text-center m-1">
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
                allDays.map((day) => {
                    return <CalendarDay data={day} />
                })
            }
            </div>
            
        </div>
    );
}

export default CalendarMonth;