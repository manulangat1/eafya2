import {GET_PATIENT,ADD_PATIENT, GET_ERRORS } from './types'
import axios from 'axios'
import {createMessage,returnErrors} from './messages'
import {tokenConfig} from './auth'

export const getPatient = () => (dispatch,getState) => {
    axios.get('/api/patient/',tokenConfig(getState))
         .then(res => {
             dispatch({
                 type:GET_PATIENT,
                 payload:res.data
             })
         })
         .catch(err => dispatch(returnErrors(err.response.data,err.response.status)))
}
export const addPatient = (patient) => (dispatch,getState) => {
    axios
    .post("/api/patient/",patient,tokenConfig(getState))
         .then(res => {
             dispatch(createMessage({patientAdded: "patient Added"}))
             dispatch({
                 type: ADD_PATIENT,
                 payload: res.data
             })
         })
         .catch(err =>dispatch(returnErrors(err.response.data,err.response.status)))
}