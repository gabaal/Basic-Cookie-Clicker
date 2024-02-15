import React from'react'
import cookieImage from './cookie.png'

export default function CookieClicked({ handleClick }) {
  return <img src={cookieImage} onClick={handleClick} style={{ cursor: 'pointer' }} />;
}