import React from'react'
import './cookie.css'


export default function CookieClicked({ handleClick }) {
  return (
    <div>
      <img
      className='cookie'
        src="src/cookie.png"
        alt="Image of a ookie"
        onClick={handleClick}
      />
    </div>
  );
}