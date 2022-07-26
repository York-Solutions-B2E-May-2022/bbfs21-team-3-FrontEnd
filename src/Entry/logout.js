import {useDispatch} from "react-redux";
import {logout} from "../Redux/ReduxFunctions";

export function Logout({_useDispatch=useDispatch}){
    const dispatch = _useDispatch()
    return(
        <div>
            <button onClick={dispatch(logout())}>logout</button>
        </div>
    )
}