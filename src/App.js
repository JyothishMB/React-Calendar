import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CalendarMonth from './components/calendar-month';

function App() {

  const defaultnotifications = {
    "January": { 
      "26":{
        "notifications":["Republic Day"],
        "isholiday":true
      }
    },
    "February": { 
      "14":{
        "notifications":["Valentine's day"],
        "isholiday":false
      }
    },
    "October": { 
      "11":{
        "notifications":["Pooja","Pooja 2","Pooja","Pooja 2"],
        "isholiday":true
      }
    },
  }

  return (
    <div>
      <CalendarMonth defaultnotifications={defaultnotifications} />
    </div>
  );
}

export default App;
