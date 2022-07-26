import {useDispatch} from "react-redux";
import {G0_TO_REGISTER, GO_TO_LOGIN} from "../Redux/Actions";
import {GO_TO_GUEST} from "../Redux/Reducers/EntryReducer";
import {setCookie} from "../Redux/ReduxFunctions";

export function Home(){
    const dispatch = useDispatch()

    function handleLoginClick(){
        dispatch({type:GO_TO_LOGIN})
    }

    function handleGuestClick(){
        dispatch({type:GO_TO_GUEST})
    }

    return(
        <div>
            <h2>Etsyer</h2>
            <button onClick={()=> dispatch({type: G0_TO_REGISTER, register: true})}>Register</button>
            <button onClick={handleLoginClick}>Login</button>
            <button onClick={handleGuestClick}>Continue as Guest</button>
        </div>
    )
}