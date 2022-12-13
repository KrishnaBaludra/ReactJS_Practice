
import './App.css';
import { Comp1, Ram } from './App3_Components/Comp1';
import { Comp2 } from './App3_Components/Comp2';
import Comp3 from './App3_Components/Comp3';
import Comp6 from './App3_Components/Comp6';

function App() {
  return (
    <div className="App">
      <Comp1 />
      <Comp2 />
      <Ram />
      <Comp3 />
      <Comp6/>
    </div>
  );
}

export default App;
