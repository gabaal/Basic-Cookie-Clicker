
import React from'react'
import { useState, useEffect } from 'react'
import './App.css'
import CookieClicked from './CookieClicked.jsx'
import CookiesPerSecond from './CookiesPerSecond.jsx'
import CookiesUpdater from './CookiesUpdater.jsx'
import ResetButton from './ResetButton.jsx'
import Upgrades from './Upgrades.jsx'
import { saveGameState, retrieveGameState } from './LocalStorage.jsx'
import initialUpgrades from './upgradesData.js'

export default function App() {

  const { cookies: initialCookies, cookiesPerSecond: initialCookiesPerSecond, upgrades: initialUpgradesState } = retrieveGameState();

  const [cookies, setCookies] = useState(initialCookies);
  const [cookiesPerSecond, setCookiesPerSecond] = useState(initialCookiesPerSecond);
  const [upgrades, setUpgrades] = useState(initialUpgradesState);

  useEffect(() => {
    saveGameState(cookies, cookiesPerSecond, upgrades);
  }, [cookies, cookiesPerSecond, upgrades]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCookies(cookies => cookies + cookiesPerSecond);
    }, 1000);

    return () => clearInterval(interval);
  }, [cookiesPerSecond]);

  const handleClickCookie = () => {
    setCookies(cookies => cookies + 1);
  };

  const handleReset = () => {
    localStorage.clear();
    setCookies(0);
    setCookiesPerSecond(1);
    setUpgrades(initialUpgrades);
  };

  const purchaseUpgrade = (id, cost, cookiesPerSecondIncrease) => {
    if (cookies >= cost) {
      setCookies(cookies => cookies - cost);
      setCookiesPerSecond(cookiesPerSecond => cookiesPerSecond + cookiesPerSecondIncrease);
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
        <h1>Cookie Clicker</h1>
        <div className="cookie-container">
          <div>
            <p>Cookies: {cookies}</p>
          </div>
          <div>
            <CookiesPerSecond cookiesPerSecond={cookiesPerSecond} />
          </div>
          <div>
            <CookieClicked handleClick={handleClickCookie} />
          </div>
          <Upgrades upgrades={upgrades} purchaseUpgrade={purchaseUpgrade} cookies={cookies} />
          <CookiesUpdater cookiesPerSecond={cookiesPerSecond} />
          <ResetButton handleReset={handleReset} />
        </div>
    </div>
  );
}

