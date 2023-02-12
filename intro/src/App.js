import logo from "./logo.svg";
import "./App.css";
import Ram from "./Components/RamBhakth";
import Employee from "./Components/Employee";
import ParentComponent from "./Components/ParentComponent";

function App() {
  return (
    <div className="App">
      {/* <Ram /> */}
      {/* <Employee/> */}
      <ParentComponent />
    </div>
  );
}

export default App;
