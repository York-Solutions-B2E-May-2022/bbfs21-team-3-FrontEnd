import {useState} from "react";
import {useDispatch} from "react-redux";
import {saveUserInfo} from "../Redux/ReduxFunctions";

export function Register(){
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })
    function handleUserName(e){
        setUser({
            ...user,
            name: e.target.value
        })
    }
    function handleUserPassword(e){
        setUser({
            ...user,
            password: e.target.value
        })
    }
    function handleUserEmail(e){
        setUser({
            ...user,
            email: e.target.value
        })
    }
    function submitUser(e){
        e.preventDefault()
        console.log(user)
        const userObj = {
            ...user,
            role: 'customer'
        }
        dispatch(saveUserInfo(userObj))
    }


    return(
        <div>
            <form>
                <label>Name:</label>
                <input onChange={(e)=>handleUserName(e)} type='text'/>

                <label>Password:</label>
                <input onChange={(e)=>handleUserPassword(e)} type={'password'} />

                <label>Email:</label>
                <input onChange={(e)=>handleUserEmail(e)} type='text' />
                <button type={'submit'} onClick={(e)=> submitUser(e)}>Submit</button>
            </form>
        </div>
    )
}