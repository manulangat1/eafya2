import { GET_HOME } from "../actions/types"

const initialState = {
    home: []
}
export default function(state=initialState,action){
    switch(action.type){
        case GET_HOME:
            return{
                ...state,
                home: action.payload
            }
        default:
            return state
    }
}