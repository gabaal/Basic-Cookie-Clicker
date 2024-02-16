import initialUpgrades from './upgradesData.js'

// save game state to local storage
export const saveGameState = (cookies, cookiesPerSecond, upgrades) => {
  localStorage.setItem('cookies', cookies);
  localStorage.setItem('cookiesPerSecond', cookiesPerSecond);
  localStorage.setItem('upgrades', JSON.stringify(upgrades));
};

// retrieve game state from local storage, or || set to default state if it doesn't exist
export const retrieveGameState = () => {
  const cookies = parseInt(localStorage.getItem('cookies')) || 0;
  const cookiesPerSecond = parseInt(localStorage.getItem('cookiesPerSecond')) || 1;
  const upgrades = JSON.parse(localStorage.getItem('upgrades')) || initialUpgrades; 

  return { cookies, cookiesPerSecond, upgrades };
};