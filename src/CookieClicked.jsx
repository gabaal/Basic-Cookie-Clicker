import React from'react'
import cookieImage from './cookie.png'

export default function CookieClicked({ handleClick }) {
  return (
    <div className="cookie-clicked">
      <img
        src="src/cookie.png"
        alt="Cookie"
        onClick={handleClick}
      />
    </div>
  );
}