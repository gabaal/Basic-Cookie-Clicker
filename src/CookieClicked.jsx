import React from'react'
import './cookie.css'
import cookie from './cookie.png'


export default function CookieClicked({ handleClick }) {
  return (
    <div>
      <img
      className='cookie'
        src={cookie}
        alt="Image of a ookie"
        onClick={handleClick}
      />
    </div>
  );
}