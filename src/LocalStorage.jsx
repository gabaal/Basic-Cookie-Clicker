
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
  const upgrades = JSON.parse(localStorage.getItem('upgrades')) || [
    { id: 1, name: 'Upgrade 1', cost: 10, cookiesPerSecondIncrease: 1 },
    { id: 2, name: 'Upgrade 2', cost: 20, cookiesPerSecondIncrease: 2 },
    { id: 3, name: 'Upgrade 3', cost: 30, cookiesPerSecondIncrease: 3 },
    { id: 4, name: 'Upgrade 4', cost: 40, cookiesPerSecondIncrease: 4 },
    { id: 5, name: 'Upgrade 5', cost: 50, cookiesPerSecondIncrease: 5 },]; //Hope this works as upgrades not showing on first run

  return { cookies, cookiesPerSecond, upgrades };
};