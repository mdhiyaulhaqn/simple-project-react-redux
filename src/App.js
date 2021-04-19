import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import InputForm from './form/inputForm';
import resultReducer from './reducers';
import showResult from './form/showResult';
// import { Values } from "redux-form-website-template";

function App() {
  const result = useSelector(state => state.result);
  return (
    <div className="App">
      <div>
        How much is value of your money after x years?
      </div>
      <InputForm pnSubmit={showResult}/>
    </div>
  );
}

export default App;
