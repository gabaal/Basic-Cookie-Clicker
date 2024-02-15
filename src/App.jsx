
import React from'react'
import { useState} from 'react'
import './App.css'
import CookieClicked from './CookieClicked.jsx'
import CookiesPerSecond from './CookiesPerSecond.jsx'
import CookiesUpdater from './CookiesUpdater.jsx'
import ResetButton from './ResetButton.jsx'
import Upgrades from './Upgrades.jsx'

function App() {
  const initialUpgrades = [
    { id: 1, name: 'Upgrade 1', cost: 10, cookiesPerSecondIncrease: 1 },
    { id: 2, name: 'Upgrade 2', cost: 20, cookiesPerSecondIncrease: 2 },
    { id: 3, name: 'Upgrade 3', cost: 30, cookiesPerSecondIncrease: 3 },
    { id: 4, name: 'Upgrade 4', cost: 40, cookiesPerSecondIncrease: 4 },
    { id: 5, name: 'Upgrade 5', cost: 50, cookiesPerSecondIncrease: 5 },
  ];

  const [cookies, setCookies] = useState(0);
  const [cookiesPerSecond, setCookiesPerSecond] = useState(1);
  const [upgrades, setUpgrades] = useState(initialUpgrades);

  // Function to handle clicking on the cookie
  const handleClickCookie = () => {
    setCookies(cookies + 1);
  };

  // Function to reset the number of cookies, cookies per second, and upgrades to their initial values
  const handleReset = () => {
    setCookies(0);
    setCookiesPerSecond(1);
    setUpgrades(initialUpgrades);
  };

  // Function to purchase an upgrade
  const purchaseUpgrade = (id, cost, cookiesPerSecondIncrease) => {
    if (cookies >= cost) {
      setCookies(cookies - cost);
      setCookiesPerSecond(cookiesPerSecond + cookiesPerSecondIncrease);
      const newUpgrades = upgrades.map(upgrade =>
        upgrade.id === id ? { ...upgrade, cost: upgrade.cost * 2 } : upgrade
      );
      setUpgrades(newUpgrades);
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
            <CookiesPerSecond cookiesPerSecond={cookiesPerSecond} />
          </div>
          <div>
            <CookieClicked handleClick={handleClickCookie} />
          </div>
          <Upgrades upgrades={upgrades} purchaseUpgrade={purchaseUpgrade} cookies={cookies} />
          <CookiesUpdater cookies={cookies} setCookies={setCookies} cookiesPerSecond={cookiesPerSecond} />
        </div>
      </header>
    </div>
  );
}
export default App;