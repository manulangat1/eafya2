import axios from 'axios'
import {GET_PIC} from './types'
import {returnErrors} from './messages'
import {tokenConfig} from './auth'
export const getPic = () => (dispatch,getState) => {
    axios.get('/api/homepic/')
          .then(res => {
              dispatch({
                  type: GET_PIC,
                  payload: res.data
              })
          })
          .catch(err => dispatch(returnErrors(err.response.data,err.response.status)))
}