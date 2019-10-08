import {GET_RECORDS} from './types'
import axios from 'axios'

export const getRecords = () => dispatch => {
    axios.get('/api/history/')
         .then(res => {
             dispatch({
                 type:GET_RECORDS,
                 payload:res.data
             })
         })
         .catch(err => console.log(err))
}