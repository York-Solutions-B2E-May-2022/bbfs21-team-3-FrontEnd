import {useDispatch, useSelector} from "react-redux";
import {logout} from "../Redux/ReduxFunctions";

export function Logout({_useDispatch=useDispatch}){
    const dispatch = _useDispatch()
    const token = useSelector(state => state.reducer.token)
    console.log(token)
    return(
        <div>
            <button onClick={()=>dispatch(logout())}>logout</button>
        </div>
    )
}