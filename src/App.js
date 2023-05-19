import logo from './logo.svg';
import './App.css';
import { compose } from "redux";
import PersonForm from "./components/PersonForm";

function App() {
  return (
    <div className="App">
      <PersonForm />
    </div>
  );
}

export default App;
