import { GET_PIC } from '../actions/types'

const initialState = {
    pic:[]
}

export default function(state=initialState,action){
    switch(action.type){
        case GET_PIC:
            return{
                ...state,
                pic: action.payload
            }
        default:
            return state
    }
}