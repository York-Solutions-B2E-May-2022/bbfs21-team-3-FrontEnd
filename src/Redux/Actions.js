export const G0_TO_REGISTER = "G0_TO_REGISTER"
export const LOGIN_SUCCESSFUL = "ReduxFunctions/LOGIN_SUCCESSFUL"
export const GO_TO_LOGIN = "G0_TO_LOGIN"
export const SET_TOKEN = "SET_TOKEN"
export const REMOVE_TOKEN = "REMOVE_TOKEN"
export const LOGOUT = "LOGOUT"

export const initState ={
    isLoggedIn: false,
    token: null
}

export function reducer(state = initState, action){
    switch(action?.type){

        case LOGIN_SUCCESSFUL:
            return {
                ...state,
                isLoggedIn: true
            }
        case SET_TOKEN:
            return {
                ...state,
                token: action.value
            }
        case REMOVE_TOKEN:
            return {
                ...state,
                token: null
            }
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false
            }
        default:
            return state
    }
}