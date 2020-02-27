import {GET_PATIENT,ADD_RECORD, GET_ERRORS } from './types'
import axios from 'axios'
import {createMessage,returnErrors} from './messages'
import {tokenConfig} from './auth'

export const addRecord = (patients) => (dispatch,getState) => {
    axios
    .post("/api/history/",patients,tokenConfig(getState))
         .then(res => {
             dispatch(createMessage({recordAdded: "Record Added"}))
             dispatch({
                 type: ADD_RECORD,
                 payload: res.data
             })
         })
         .catch(err =>dispatch(returnErrors(err.response.data,err.response.status)))
}