# React Calendar

![GitHub last commit](https://img.shields.io/github/last-commit/JyothishMB/React-Calendar)
![GitHub issues](https://img.shields.io/github/issues/JyothishMB/React-Calendar)
![GitHub followers](https://img.shields.io/github/followers/JyothishMB?style=social)
![Languages](https://img.shields.io/github/languages/count/JyothishMB/React-Calendar)
![GitHub pull requests](https://img.shields.io/github/issues-pr/JyothishMB/React-Calendar)
![GitHub stars](https://img.shields.io/github/stars/JyothishMB/React-Calendar?style=social)
![GitHub forks](https://img.shields.io/github/forks/JyothishMB/React-Calendar?style=social)









Simple react library (in development) which will work as a plug and play component for managing calendar for any organization.

You can use this as an organizational calendar.

Calendar pages are available through npm.

Installation can be done using npm command.

```
npm i react-calendar-pages
```

Once installed please import the required modules.

```javascript
import CalendarMonth from 'react-calendar-pages'
```

After this the calendar month can be used to render the current month.

```javascript
<CalendarMonth  defaultnotifications={defaultnotifications}  customnotifications={customnotifications} />
```

defaultnotification and customnotifications can be passed as JSON objects. Here is a sample.

```json
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
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

