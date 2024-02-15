
import React from'react'
import { useState, useEffect} from 'react'
import './App.css'
import CookieClicked from './CookieClicked.jsx'
import CookiesPerSecond from './CookiesPerSecond.jsx'

function App() {
  const [cookies, setCookies] = useState(0);
  const [cookiesPerSecond, setCookiesPerSecond] = useState(1);

  // Function to handle clicking on the cookie
  const handleClickCookie = () => {
    setCookies(cookies + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Cookie Clicker</h1>
        <div>
          <p>Cookies: {cookies}</p>
          <CookiesPerSecond cookies={cookies} setCookies={setCookies} cookiesPerSecond={cookiesPerSecond} />
          <CookieClicked handleClick={handleClickCookie} />
        </div>
      </header>
    </div>
  );
}

export default App;