
import React from'react'
import { useState, useEffect} from 'react'
import './App.css'

function App() {
  const [cookies, setCookies] = useState(0);
  const [cookiesPerSecond, setCookiesPerSecond] = useState(1);

  // Function to handle clicking on the cookie
  const handleClickCookie = () => {
    setCookies(cookies + 1);
  };

  // Function to calculate cookies per second
  useEffect(() => {
    const interval = setInterval(() => {
      // setCookies(cookies + cookiesPerSecond);
      setCookies(cookies + 1);
      
    }, 1000);

    return () => clearInterval(interval);
  }, [cookies, cookiesPerSecond]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Cookie Clicker</h1>
        <div>
          <p>Cookies: {cookies}</p>
          <p>Cookies per second: {cookiesPerSecond}</p>
          <button onClick={handleClickCookie}>Click Me!</button>
        </div>
      </header>
    </div>
  );
}

export default App;