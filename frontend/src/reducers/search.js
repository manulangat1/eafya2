import {GET_SEARCH} from '../actions/types'

const initialState = {
    details:[]
}
export default function(state=initialState,action) {
    switch(action.type){
        case GET_SEARCH:
            return{
                ...state,
                details:action.payload
            }
        default:
            return state
    }
}