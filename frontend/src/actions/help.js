import { GET_HELP } from './types'
import axios from 'axios'

export const getHelp = () => (dispatch,getState) => {
    axios.get('/api/help/')
         .then(res => {
             dispatch({
                 type:GET_HELP,
                 payload:res.data
             })
         })
         .catch(err=> console.log(err))
}