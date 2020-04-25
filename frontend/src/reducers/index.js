import {combineReducers} from 'redux'
import home from './home'
import patient from './patient'
import record from './record'
import errors from './errors'
import messages from './messages'
import auth from './auth'
import pic from './pic'
import search from './search'
import help from './help'
import about from './about'
import addRecord from './addRecord'
import appoint from './appoint'
export default combineReducers({
    home,
    patient,
    record,
    errors,
    messages,
    auth,
    pic,
    search,
    help,
    about,
    addRecord,
    appoint
})