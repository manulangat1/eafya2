import {GET_SEARCH} from './types'
import axios from 'axios'
import {tokenConfig} from './auth'

export const getSearch = (search) => (dispatch,getState) => {
    axios
    .get(`/api/patient-details/?search=${search}`,tokenConfig(getState))
    .then(res => {
        dispatch({
            type:GET_SEARCH,
            payload:res.data
        })
    })
    .catch(err => console.log(err))

}