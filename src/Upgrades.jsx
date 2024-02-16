


import React from'react'
import './Upgrades.css'

export default function Upgrades({ upgrades, purchaseUpgrade, cookies }) {
  const handlePurchaseUpgrade = (id, cost, cookiesPerSecondIncrease) => {
    if (cookies >= cost) {
      purchaseUpgrade(id, cost, cookiesPerSecondIncrease);
    } else {
      alert('Not enough cookies to purchase this upgrade!');
    }
  };

  return (
    <div className="upgrades">
      {/* <h5>Upgrades Shop</h5> */}
      {upgrades.map(upgrade => (
        <div key={upgrade.id} className="upgrade-item">
          <p className="upgrade-details">Plus {upgrade.cookiesPerSecondIncrease} CPS</p>
          <button className='upgradesButton' onClick={() => handlePurchaseUpgrade(upgrade.id, upgrade.cost, upgrade.cookiesPerSecondIncrease)}>{upgrade.cost} cookies</button>
        </div>
      ))}
    </div>
  );
}