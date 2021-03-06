import logo from './logo.svg';
import './App.css';

function App() {
  window.top.postMessage('I am Iframe', '*')
  window.onmessage = (event) => {
      if (event.data === 'GOT_YOU_IFRAME') {
          console.log('Parent received successfully.')
      }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
