import {LOGIN_SUCCESSFUL} from "./Actions";

export function login(username, password){
    return async function sideEffect(dispatch){
        try{
            const response = await fetch(`http://localhost:8080/login?username=${username}&password=${password}`)
            if (response.ok){
                dispatch({type:LOGIN_SUCCESSFUL})
            }
        }catch(e){
            console.log(e)
        }
    }
}

export function saveUserInfo(obj){
    return async function sideEffect(dispatch, getState){
        try{
            const response = await fetch ("http://localhost:8080/register", {
                methods: "POST",
                headers: {
                    "Accept": 'application/json',
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(obj)
            })
        }catch(e){

        }
    }
}

