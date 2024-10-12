import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CalendarMonth from './components/calendar-month';
import Test from './components/test';

function App() {

  const defaultnotifications = {
    "January": {
      "26": {
        "notifications": ["Republic Day"],
        "isholiday": true
      }
    },
    "February": {
      "14": {
        "notifications": ["Valentine's day"],
        "isholiday": false
      }
    },
    "October": {
      "11": {
        "notifications": ["Pooja", "Pooja 2", "Pooja", "Pooja 2"],
        "isholiday": true
      }
    },
  }

  const customnotifications = {
    "2024": {
      "January": {
        "10": {
          "notifications": ["John's Birthday"],
          "isholiday": false
        }
      },
      "February": {
        "13": {
          "notifications": ["Jack on leave"],
          "isholiday": false
        }
      },
      "October": {
        "11": {
          "notifications": ["Darwy's Birthday","Aby's birthday"],
          "isholiday": false
        },
        "14": {
          "notifications": ["Jim's Birthday","Tom on leave","Harley on leave"],
          "isholiday": false
        },
        "16": {
          "notifications": ["David's Birthday","David on leave"],
          "isholiday": false
        }
      }
    }
  }

  return (
    <div>
      <CalendarMonth 
        defaultnotifications={defaultnotifications} 
        customnotifications={customnotifications} />
    </div>
  );
}

export default App;
