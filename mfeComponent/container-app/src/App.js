import logo from './logo.svg';
import './App.css';
import MicroFrontend from './MicroFrontend';


function App() {
  return (
    <div className="App">
     <MicroFrontend host="http://localhost:3001" name="Consumed"/>
    </div>
  );
}

export default App;
