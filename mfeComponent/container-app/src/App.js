import logo from './logo.svg';
import './App.css';
import MicroFrontend from './MicroFrontend';
import * as React from "react";


function App() {

  React.useEffect(() => {
    window.sessionStorage.setItem('access_token', 'randomToken')
}, [])


  return (
    <div className="App">
     <MicroFrontend host="http://localhost:3001" name="Consumed" accessToken={window.sessionStorage.getItem('access_token')} />
    </div>
  );
}

export default App;
