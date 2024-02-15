import React from 'react'
import { useState, useEffect} from 'react'

export default function CookiesPerSecond({ cookiesPerSecond }) {
  return (
    <div>
      <p>Cookies Per Second: {cookiesPerSecond}</p>
    </div>
  );
}

