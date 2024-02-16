import React from'react'
import initialUpgrades from './upgradesData.js'
import './resetButton.css'

export default function ResetButton({ setCookies, setCookiesPerSecond, setUpgrades }) {
  const handleReset = () => {
    localStorage.clear();
    setCookies(0);
    setCookiesPerSecond(1);
    setUpgrades(initialUpgrades);
  };
  return (
  <button className='resetButton' onClick={handleReset}>Reset</button>
  )
}