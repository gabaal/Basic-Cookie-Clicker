import React from'react'
import { useState, useEffect } from 'react'
import './App.css'
import CookieClicked from './CookieClicked.jsx'
import CookiesPerSecond from './CookiesPerSecond.jsx'
import CookiesUpdater from './CookiesUpdater.jsx'
import ResetButton from './ResetButton.jsx'
import Upgrades from './Upgrades.jsx'
import { saveGameState, retrieveGameState } from './LocalStorage.jsx'


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
          <Upgrades upgrades={upgrades} setUpgrades={setUpgrades} cookies={cookies} setCookies={setCookies} setCookiesPerSecond={setCookiesPerSecond} />
          <CookiesUpdater cookiesPerSecond={cookiesPerSecond} />
          <ResetButton setCookies={setCookies} setCookiesPerSecond={setCookiesPerSecond} setUpgrades={setUpgrades} />
        </div>
    </div>
  );
}


