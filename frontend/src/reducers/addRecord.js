import {ADD_RECORD } from '../actions/types'

const initialState = {
    addRecord:{}
}
export default function(state=initialState,action){
    switch(action.type){
        case ADD_RECORD:
            return{
                ...state,
                addRecord:action.payload
            }
        default:
            return state
    }
}