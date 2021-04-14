import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const result = useSelector(state => state.result);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
