import { POST_APPOINT, GET_APPOINT } from "../actions/types";

const initialState = {
    appoints:[],
    appoint:[]
}
export default function(state=initialState,action){
    switch(action.type){
        case POST_APPOINT:
            return{
                ...state,
                appoints:action.payload
            }
        case GET_APPOINT:
            return{
                ...state,
                appoint:action.payload
            }
        default:
            return state
    }
}