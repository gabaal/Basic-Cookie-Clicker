import initialUpgrades from './upgradesData.js'

// Utility fuction to save game state to local storage
export const saveGameState = (cookies, cookiesPerSecond, upgrades) => {
  localStorage.setItem('cookies', cookies);
  localStorage.setItem('cookiesPerSecond', cookiesPerSecond);
  localStorage.setItem('upgrades', JSON.stringify(upgrades));
};

// Utility function to retrieve game state from local storage, or || set to default state if it doesnt exist
export const retrieveGameState = () => {
  const cookies = parseInt(localStorage.getItem('cookies')) || 0;
  const cookiesPerSecond = parseInt(localStorage.getItem('cookiesPerSecond')) || 1;
  const upgrades = JSON.parse(localStorage.getItem('upgrades')) || [initialUpgrades]; //Hope this works as upgrades not showing on first run

  return { cookies, cookiesPerSecond, upgrades };
};