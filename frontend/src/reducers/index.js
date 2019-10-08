import {combineReducers} from 'redux'
import home from './home'
import patient from './patient'
import record from './record'
export default combineReducers({
    home,
    patient,
    record
})