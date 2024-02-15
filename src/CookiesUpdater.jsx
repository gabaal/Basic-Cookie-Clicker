import { useEffect } from 'react';

export default function CookiesUpdater({ cookies, setCookies, upgrades }) {
  useEffect(() => {
    const interval = setInterval(() => {
      if (!upgrades) return; // Guard clause to prevent accessing properties of undefined upgrades
      const cookiesPerSecond = upgrades.reduce((total, upgrade) => {
        return total + (upgrade.cookiesPerSecondIncrease || 0);
      }, 0);
      setCookies(cookies => cookies + cookiesPerSecond); // Update cookies using previous state
    }, 1000);

    return () => clearInterval(interval);
  }, [setCookies, upgrades]);

  return null; // doesn't render anything
}