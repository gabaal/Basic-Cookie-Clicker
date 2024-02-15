
import React from'react'
import { useState, useEffect} from 'react'
import './App.css'
import CookieClicked from './CookieClicked.jsx'
import CookiesPerSecond from './CookiesPerSecond.jsx'
import ResetButton from './ResetButton.jsx'
function App() {
  const [cookies, setCookies] = useState(0);
  const [cookiesPerSecond, setCookiesPerSecond] = useState(1);

  // Function to handle clicking on the cookie
  const handleClickCookie = () => {
    setCookies(cookies + 1);
  };

  // Function to reset the number of cookies to zero
  const handleReset = () => {
    setCookies(0);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cookie Clicker</h1>
        <div className="cookie-container">
          <div>
            <ResetButton handleReset={handleReset} />
            <p>Cookies: {cookies}</p>
          </div>
          <div>
            <CookiesPerSecond cookies={cookies} setCookies={setCookies} cookiesPerSecond={cookiesPerSecond} />
          </div>
          <div>
            <CookieClicked handleClick={handleClickCookie} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;