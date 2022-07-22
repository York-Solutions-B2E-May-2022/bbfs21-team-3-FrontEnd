import {G0_TO_REGISTER} from "../Actions";

const init = {
    register: false
}
export function EntryReducer(state= init, action){
    switch (action.type) {
        case G0_TO_REGISTER:
            return{
                ...state,
                register: action.register
            }
        default:
            return{
                ...state
            }
    }
}