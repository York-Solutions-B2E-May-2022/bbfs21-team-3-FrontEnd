export const G0_TO_REGISTER = "G0_TO_REGISTER"
export const LOGIN_SUCCESSFUL = "ReduxFunctions/LOGIN_SUCCESSFUL"

export const initState ={
isLoggedIn: false
}

export function reducer(state = initState, action){
    switch(action?.type){

        case LOGIN_SUCCESSFUL:
            return {
                ...state,
                isLoggedIn: true
            }

        default:
            return state
    }
}