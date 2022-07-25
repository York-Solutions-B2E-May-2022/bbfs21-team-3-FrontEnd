import {G0_TO_REGISTER, GO_TO_LOGIN} from "../Actions";
export const GO_TO_GUEST = "GO_TO_GUEST"

const init = {
    register: false,
    login: false,
    isShopping: false
}
export function EntryReducer(state= init, action){
    switch (action.type) {
        case G0_TO_REGISTER:
            return{
                ...state,
                register: action.register
            }
        case GO_TO_LOGIN:
            return{
                ...state,
                login: true
            }
        case GO_TO_GUEST:
            return{
                ...state,
                isShopping: true
            }
        default:
            return{
                ...state
            }
    }
}