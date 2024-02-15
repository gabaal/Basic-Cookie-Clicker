import { useEffect } from 'react';

export default function CookiesUpdater({ cookies, setCookies, upgrades }) {
  useEffect(() => {
    const interval = setInterval(() => {
      const cookiesPerSecond = upgrades.reduce((total, upgrade) => {
        return total + (upgrade.cookiesPerSecondIncrease || 0);
      }, 0);
      setCookies(cookies + cookiesPerSecond);
    }, 1000);

    return () => clearInterval(interval);
  }, [cookies, setCookies, upgrades]);

  return null; // doesn't render anything
}