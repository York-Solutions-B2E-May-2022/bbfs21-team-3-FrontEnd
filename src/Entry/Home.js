import {useDispatch} from "react-redux";
import {G0_TO_REGISTER} from "../Redux/Actions";

export function Home(){
    const dispatch = useDispatch()
    return(
        <div>
            <h2>Etsyer</h2>
            <button onClick={()=> dispatch({type: G0_TO_REGISTER, register: true})}>Register</button>
            <button>Login</button>
            <button>Continue as Guest</button>
        </div>
    )
}