import {GET_RECORDS} from './types'
import axios from 'axios'
import {createMessage,returnErrors} from './messages'
import {tokenConfig} from './auth'
export const getRecords = () => (dispatch,getState) => {
    axios.get('/api/history/',tokenConfig(getState))
         .then(res => {
             dispatch({
                 type:GET_RECORDS,
                 payload:res.data
             })
         })
         .catch(err =>dispatch(returnErrors(err.response.data,err.response.status)))
}