
import React from'react'
import { useState} from 'react'
import './App.css'
import CookieClicked from './CookieClicked.jsx'
import CookiesPerSecond from './CookiesPerSecond.jsx'
import CookiesUpdater from './CookiesUpdater.jsx'
import ResetButton from './ResetButton.jsx'
import Upgrades from './Upgrades.jsx'

function App() {
  const [cookies, setCookies] = useState(0);
  const [cookiesPerSecond, setCookiesPerSecond] = useState(1);
  const [upgrades, setUpgrades] = useState([
    { id: 1, name: 'Upgrade 1', cost: 10, cookiesPerSecondIncrease: 1 },
    { id: 2, name: 'Upgrade 2', cost: 20, cookiesPerSecondIncrease: 2 },
    { id: 3, name: 'Upgrade 3', cost: 30, cookiesPerSecondIncrease: 3 },
    { id: 4, name: 'Upgrade 4', cost: 40, cookiesPerSecondIncrease: 4 },
    { id: 5, name: 'Upgrade 5', cost: 50, cookiesPerSecondIncrease: 5 },
  ]);

  // Function to handle clicking on the cookie
  const handleClickCookie = () => {
    setCookies(cookies + 1);
  };

  // Function to reset the number of cookies to zero
  const handleReset = () => {
    setCookies(0);
  };

  // Function to purchase an upgrade
  const purchaseUpgrade = (id, cost, cookiesPerSecondIncrease) => {
    if (cookies >= cost) {
      setCookies(cookies - cost);
      setCookiesPerSecond(cookiesPerSecond + cookiesPerSecondIncrease);
      setUpgrades(upgrades.filter(upgrade => upgrade.id !== id));
    } else {
      alert('Not enough cookies to purchase this upgrade!');
    }
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
            <CookiesPerSecond cookies={cookies} setCookies={setCookies} cookiesPerSecond={cookiesPerSecond} /> {/* Use the CookiesPerSecond component */}
          </div>
          <div>
            <CookieClicked handleClick={handleClickCookie} />
          </div>
          <Upgrades upgrades={upgrades} purchaseUpgrade={purchaseUpgrade} cookies={cookies} />
          <CookiesUpdater cookies={cookies} setCookies={setCookies} cookiesPerSecond={cookiesPerSecond} /> {/* Use the CookiesUpdater component */}
        </div>
      </header>
    </div>
  );
}


export default App;