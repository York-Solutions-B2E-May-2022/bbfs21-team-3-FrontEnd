
import './App.css';
import {Home} from './Entry/Home'
import {useSelector} from "react-redux";
import {Register} from "./Entry/Register";
import {Login} from "./Entry/Login";
import {Shop} from "./Shop/Shop";
function App() {
    const {register} = useSelector(state=> ({
        register: state.EntryReducer.register
    }))

    const isLogin = useSelector(state => state.EntryReducer.login)
    const isShopping = useSelector(state => state.EntryReducer.isShopping)

    if(register){
        return <Register />
    }

    if(isLogin){return <Login/>}
    if(isShopping){return <Shop />}

  return (
    <div className="AppHeader">
      <Home />
    </div>
  );
}

export default App;
