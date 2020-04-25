import {GET_APPOINT,POST_APPOINT } from './types'
import axios from 'axios'
import {createMessage,returnErrors} from './messages'
import {tokenConfig} from './auth'

export const addAppoint = (appointment) => (dispatch,getState) => {
    axios
    .post("/api/appoint/",appointment,tokenConfig(getState))
         .then(res => {
            //  dispatch(createMessage({recordAdded: "Record Added"}))
             dispatch({
                 type: POST_APPOINT,
                 payload: res.data
             })
         })
         .catch(err =>dispatch(returnErrors(err.response.data,err.response.status)))
}
export const getAppoint = () => (dispatch,getState) => {
    axios
        .get('/api/appoint/',tokenConfig(getState))
        .then(res => {
            dispatch({
                type:GET_APPOINT,
                payload:res.data
            })
        })
        .catch(err => console.log(err))
}