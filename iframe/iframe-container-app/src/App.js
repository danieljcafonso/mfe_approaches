import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    // Add event listener
    window.addEventListener("resize", handleResize);
    
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}


function App() {
  const size = useWindowSize();

window.onmessage = (event) => {

  event.source.window.postMessage('GOT_YOU_IFRAME', '*')
}

  return (
    <div className="App">
      <iframe  frameBorder="0" width={size.width} height={size.height} src="http://localhost:3002" title="Child"></iframe>
    </div>
  );
}

export default App;
