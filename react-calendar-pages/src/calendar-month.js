import React, { useEffect, useState } from "react";
import CalendarDay from "./calendar-day";
import './calendar-month.css'

const CalendarMonth = (props) => {

    const [allDays, setAllDays] = useState([])
    const [month, setMonth] = useState(new Date().getMonth())
    const [year, setYear] = useState(new Date().getFullYear())
    const [monthDisplay, setMonthDisplay] = useState('')
    const [yearDisplay, setYearDisplay] = useState('')

    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    useEffect(() => {
        getDaysInMonth(month, year)
    }, [month, year])

    const getDaysInMonth = (month, year) => {
        var date = new Date(year, month, 1);
        const dateString = date.toLocaleDateString('en-us', {
            weekday: 'long',
            year: 'numeric',
            month: 'long'
        })

        let datesplitvalues = dateString.split(' ')
        let paddingdays = weekdays.indexOf(datesplitvalues[2])
        let notificationsforthismonth = props.defaultnotifications[datesplitvalues[0]]
        let customnotificationsforthismonth = props.customnotifications[year] ? props.customnotifications[year][datesplitvalues[0]] : null
        setMonthDisplay(datesplitvalues[0])
        setYearDisplay(datesplitvalues[1])
        var days = [];
        while (paddingdays > 0) {
            days.push({ date: null, rowindex: null, defaultnotifications: null, customnotifications: null });
            paddingdays = paddingdays - 1;
        }
        while (date.getMonth() === month) {
            let datevalue = new Date(date);
            days.push({
                date: datevalue.getDate(),
                rowindex: datevalue.getDay(),
                defaultnotifications: notificationsforthismonth ? notificationsforthismonth[datevalue.getDate()] : null,
                customnotifications: customnotificationsforthismonth ? customnotificationsforthismonth[datevalue.getDate()] : null,
                isToday: datevalue.toDateString() === new Date().toDateString()
            });
            date.setDate(date.getDate() + 1);
        }
        setAllDays(days)
    }

    const gotoPreviousMonth = () => {
        setMonth(() => {
            setYear(month - 1 < 0 ? year - 1 : year)
            return month - 1 < 0 ? 11 : month - 1
        })
    }
    const gotoNextMonth = () => {
        setMonth(() => {
            setYear(month + 1 > 11 ? year + 1 : year)
            return month + 1 > 11 ? 0 : month + 1
        })
    }
    const gotoPreviousYear = () => {
        setYear(year - 1)
    }
    const gotoNextYear = () => {
        setYear(year + 1)
    }


    return (
        <div className="container simple-calendar mt-5">
            <div className="calendar p-3">
                <div className="month-header text-center">
                    <div className="calendar-col" onClick={gotoPreviousYear}>{"<<"}</div>
                    <div className="calendar-col" onClick={gotoPreviousMonth}>{"<"}</div>
                    <div className="calendar-col-3">{monthDisplay} {yearDisplay}</div>
                    <div className="calendar-col" onClick={gotoNextMonth}>{">"}</div>
                    <div className="calendar-col" onClick={gotoNextYear}>{">>"}</div>
                </div>
                <div className="text-center grid-container week-header">
                    <div className='grid-header'>Sunday</div>
                    <div className='grid-header'>Monday</div>
                    <div className='grid-header'>Tuesday</div>
                    <div className='grid-header'>Wednesday</div>
                    <div className='grid-header'>Thursday</div>
                    <div className='grid-header'>Friday</div>
                    <div className='grid-header'>Saturday</div>
                </div>
                <div className="dates grid-container">
                    {
                        allDays.map((day, index) => {
                            return <CalendarDay key={index} data={day} />
                        })
                    }
                </div>
            </div>


        </div>
    );
}

export default CalendarMonth;