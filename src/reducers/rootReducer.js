import {combineReducers} from 'redux';
import dashboardReducer from './dashboardReducer'
import scheduleReducer from './scheduleReducer'

const rootReducer = combineReducers({
    dashboardReducer,
    scheduleReducer
})

export default rootReducer;