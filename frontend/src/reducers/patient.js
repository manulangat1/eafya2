import {GET_PATIENT} from '../actions/types'

const initialState  = {
    patient:[]
}
export default function(state=initialState,action){
    switch(action.type){
        case GET_PATIENT:
            return{
                ...state,
                patient: action.payload
            }
        default:
            return state
    }
}