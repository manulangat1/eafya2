import { GET_RECORDS } from '../actions/types'

const initialState = {
    record:[]
}
export default function(state=initialState,action){
    switch(action.type){
        case GET_RECORDS:
            return {
                ...state,
                record: action.payload
            }
        default:
            return state
    }
}