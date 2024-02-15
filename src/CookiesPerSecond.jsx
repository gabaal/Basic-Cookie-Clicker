import React from 'react'
import { useState, useEffect} from 'react'

export default function CookiesPerSecond({ cookies, setCookies, cookiesPerSecond }) {
  useEffect(() => {
    const interval = setInterval(() => {
      setCookies(cookies + cookiesPerSecond);
    }, 1000);

    return () => clearInterval(interval);
  }, [cookies, cookiesPerSecond]);

  return null;
}