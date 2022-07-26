import {LOGIN_SUCCESSFUL, SET_TOKEN, REMOVE_TOKEN, LOGOUT} from "./Actions";

export function login(username, password){
    console.log(username, password)
    return async function sideEffect(dispatch){
        try{
            const response = await fetch(`http://localhost:8080/login?user=${username}&password=${password}`)
            console.log(response)
            if (response.ok){
                const userData = await response.json()
                console.log(userData)
                dispatch({type: LOGIN_SUCCESSFUL})
                dispatch({type: SET_TOKEN, value: userData.token})
            }
        }catch(e){
            console.log(e)
        }
    }
}

export function logout(){
    return async function sideEffect(dispatch, getState){
        console.log(getState().reducer.token)
        try {
            const response = await fetch(`http://localhost:8080/logout?token=${getState().reducer.token}`,{
                method: "GET"
            })
            if (response.ok){
                dispatch({type: REMOVE_TOKEN})
                dispatch({type: LOGOUT})
            }
        } catch (e) {
            console.log(e)
        }
    }
}

export function saveUserInfo(obj){
    return async function sideEffect(dispatch, getState){
        try{
            const response = await fetch ("http://localhost:8080/register", {
                method: "POST",
                headers: {
                    "Accept": 'application/json',
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(obj)
            })
        }catch(e){
            console.log(e)
        }
    }
}

export function setCookie(obj){
    return async function sideEffect(dispatch, getState){
        try{
            const response = await fetch ("http://localhost:8080/", {
                method: "GET"
            })
            const data = await response.json()
            console.log(data)

        }catch(e){
            console.log(e)
        }
    }
}

