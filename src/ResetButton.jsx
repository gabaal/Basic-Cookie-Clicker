import React from'react'
import './buttons.css'
export default function ResetButton({ handleReset }) {
  return (
  <button onClick={handleReset}>Reset</button>
  )
}