import React from'react'
import './cookie.css'


export default function CookieClicked({ handleClick }) {
  return (
    <div>
      <img
      className='cookie'
        src="public/cookie.png"
        alt="Image of a ookie"
        onClick={handleClick}
      />
    </div>
  );
}