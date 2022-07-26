
import './App.css';
import {Home} from './Entry/Home'
import {useSelector} from "react-redux";
import {Register} from "./Entry/Register";
import {Login} from "./Entry/Login";
import {Shop} from "./Shop/Shop";
import {Logout} from "./Entry/logout";
function App() {
    const {register} = useSelector(state=> ({
        register: state.EntryReducer.register
    }))

    const isLogin = useSelector(state => state.EntryReducer.login)
    const isShopping = useSelector(state => state.EntryReducer.isShopping)
    const isLoggedIn = useSelector(state => state.EntryReducer.isLoggedIn)

    if(register){
        return <Register />
    }

    if(isLogin){return <Login/>}
    if(isShopping){return <Shop />}

  return (
    <div className="AppHeader">
      <Home />
        {
            isLoggedIn === true ?
            <div>
                <Logout/>
            </div> :
                <div>
                    {
                        isLogin === true ??
                        <Login/>
                    }
                    {
                        isShopping=== true ??
                        <Shop/>
                    }
                </div>
        }
    </div>
  );
}

export default App;
