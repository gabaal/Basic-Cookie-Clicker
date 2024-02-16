import React from'react'
import './resetButton.css'
export default function ResetButton({ handleReset }) {
  return (
  <button className='resetButton' onClick={handleReset}>Reset</button>
  )
}