import {GET_PATIENT } from './types'
import axios from 'axios'

export const getPatient = () => dispatch => {
    axios.get('/api/patient/')
         .then(res => {
             dispatch({
                 type:GET_PATIENT,
                 payload:res.data
             })
         })
         .catch(err => console.log(err))
}