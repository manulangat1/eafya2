import {GET_HOME} from './types'
import axios from 'axios'

export const getHome = () => dispatch => {
    axios.get('/api/home/')
         .then(res => {
             dispatch({
                 type:GET_HOME,
                 payload: res.data
             })
         })
         .catch(err => console.log(err))
}