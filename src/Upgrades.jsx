
import React from'react'
import './Upgrades.css'

export default function Upgrades({ upgrades, setUpgrades, cookies, setCookies, setCookiesPerSecond }) {
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
    <div className="upgrades">
      {upgrades.map(upgrade => (
        <div key={upgrade.id} className="upgrade-item">
          <p className="upgrade-details">Plus {upgrade.cookiesPerSecondIncrease} CPS</p>
          <button className='upgradesButton' onClick={() => purchaseUpgrade(upgrade.id, upgrade.cost, upgrade.cookiesPerSecondIncrease)}>{upgrade.cost} cookies</button>
        </div>
      ))}
    </div>
  );
}