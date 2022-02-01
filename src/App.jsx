import logo from './logo.svg';
import './App.css';
import { Counter } from './components/counter';
import { Userdeatails } from './components/userDetails';

function App() {
  return (
    <div className="App">
      <Counter/>
      {/* <Userdeatails name="Gopala" age="25"/>
      <Userdeatails name="Raja" age="23"/>
      <Userdeatails name="Aman" age="24"/> */}
    
    </div>
  );
}

export default App;
