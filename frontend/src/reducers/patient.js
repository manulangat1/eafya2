import {GET_PATIENT,ADD_PATIENT} from '../actions/types'

const initialState  = {
    patient:[],
    patiens: {}
}
export default function(state=initialState,action){
    switch(action.type){
        case GET_PATIENT:
            return{
                ...state,
                patient: action.payload
            }
        case ADD_PATIENT:
            return {
                ...state,
                patiens: action.payload
            }
        default:
            return state
    }
    
}