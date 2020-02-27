import axios from 'axios'
import {returnErrors} from './messages'
import {REGISTER_SUCCESS,REGISTER_FAIL,USER_LOADED,USER_LOADING,AUTH_ERROR, LOGIN_FAIL,LOGIN_SUCCESS,LOGOUT_SUCCESS} from './types'

export const loadUser = () => (dispatch,getState) => {
    dispatch({type:USER_LOADING})
    axios.get('/ap/api/auth/user/',tokenConfig(getState))
         .then(res => {
             dispatch({
                 type: USER_LOADED,
                 payload: res.data
             })
         })
         .catch(err => {
             dispatch(returnErrors(err.response.data,err.response.status))
             dispatch({
                 type: AUTH_ERROR
             })
         })
}
export const login = (username,password) => (dispatch) => {
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    const body = JSON.stringify({username,password})
    axios.post('/ap/api/auth/login/',body,config)
         .then(res => {
             dispatch({
                 type: LOGIN_SUCCESS,
                 payload: res.data
             })
         })
         .catch(err => {
             dispatch(returnErrors(err.response.data,err.response.status))
             dispatch({
                 type: LOGIN_FAIL
             })
         })
}

export const register = ({username,password,email}) => (dispatch) => {
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    const body = JSON.stringify({username,password,email})
    axios.post('/ap/api/auth/register/',body,config)
         .then(res => {
             dispatch({
                 type: REGISTER_SUCCESS,
                 payload: res.data
             })
         })
         .catch(err => {
             dispatch(returnErrors(err.response.data,err.response.status))
             dispatch({
                 type: REGISTER_FAIL
             })
         })
}

//LOG OUT USER
export const logout = () => (dispatch,getState) => {

    axios.post('/ap/api/auth/logout/',null,tokenConfig(getState))
         .then(res => {
             dispatch({
                 type: LOGOUT_SUCCESS,
             })
         })
         .catch(err => {
             dispatch(returnErrors(err.response.data,err.response.status))
         })
}

//set up config with token --helper function
export const tokenConfig = getState => {
    const token = getState().auth.token;
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    if (token){
        config.headers['Authorization'] = `Token ${token}`
    }

    return config
}  