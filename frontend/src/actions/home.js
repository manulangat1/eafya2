import {GET_HOME,GET_ERRORS} from './types'
import axios from 'axios'
import {tokenConfig} from './auth'
import {createMessage,returnErrors} from './messages'

export const getHome = () => (dispatch,getState) => {
    axios.get('/api/home/',tokenConfig(getState))
         .then(res => {
             dispatch({
                 type:GET_HOME,
                 payload: res.data
             })
         })
         .catch(err => dispatch(returnErrors(err.response.data,err.response.status)))
}