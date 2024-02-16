import { useEffect } from 'react';

export default function CookiesUpdater({ cookies, setCookies, upgrades }) {
  useEffect(() => {
    const interval = setInterval(() => {
      if (!upgrades) return; 
      const cookiesPerSecond = upgrades.reduce((total, upgrade) => {
        return total + (upgrade.cookiesPerSecondIncrease || 0);
      }, 0);
      setCookies(cookies => cookies + cookiesPerSecond); 
    }, 1000);

    return () => clearInterval(interval);
  }, [setCookies, upgrades]);

  return null; // doesn't render anything
}