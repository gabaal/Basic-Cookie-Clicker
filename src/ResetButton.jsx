import React from'react'
import { useState, useEffect } from 'react'
import { saveGameState, retrieveGameState } from './LocalStorage.jsx';
import './resetButton.css'

export default function ResetButton({ handleReset }) {
  return (
  <button className='resetButton' onClick={handleReset}>Reset</button>
  )
}