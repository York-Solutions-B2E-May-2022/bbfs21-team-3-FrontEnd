
import './App.css';
import {Home} from './Entry/Home'
import {useSelector} from "react-redux";
import {Register} from "./Entry/Register";
function App() {
    const {register} = useSelector(state=> ({
        register: state.EntryReducer.register
    }))

    if(register){
        return <Register />
    }
  return (
    <div className="AppHeader">
      <Home />
    </div>
  );
}

export default App;
