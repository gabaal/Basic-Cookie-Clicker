import { useEffect } from 'react';

function CookiesUpdater({ cookies, setCookies, cookiesPerSecond }) {
  useEffect(() => {
    const interval = setInterval(() => {
      setCookies(cookies + cookiesPerSecond);
    }, 1000);

    return () => clearInterval(interval);
  }, [cookies, cookiesPerSecond, setCookies]);

  return null; // This component doesn't render anything
}

export default CookiesUpdater;