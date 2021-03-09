import logo from './logo.svg';
import './App.css';
import * as React from "react";

function App() {
  React.useEffect(() => {
    const sessionStorage = window.sessionStorage.getItem('access_token');
    console.log(sessionStorage)
 }, [])
  return (
    <div className="App">
      This is a second App
    </div>
  );
}

export default App;
