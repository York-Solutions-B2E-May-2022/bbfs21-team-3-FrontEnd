import {useDispatch} from "react-redux";
import {useState} from "react";
import {login} from "../Redux/ReduxFunctions";
import {Logout} from "./logout";

export function Login({_useDispatch = useDispatch, _login = login}){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = _useDispatch()
    return (
        <div>
            <div>
                <label>
                    Username:
                    <input value = {username}
                           onChange = {(e)=>{setUsername(e.target.value)}}/>
                </label>
                <label>
                    Password:
                    <input type={'password'} value = {password}
                           onChange = {(e)=>{setPassword(e.target.value)}}/>
                </label>
                <button onClick = {
                    ()=>dispatch(_login(username, password))
                }>Login</button>
            </div>
    </div>
    )
}