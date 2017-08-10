import React from 'react'
import { Link } from 'react-router-dom'

require('../../css/Header.scss')

export const Header = () => (
  <header className='header'>
    <Link to='/'>
      <h1>FishRates</h1>
    </Link>
  </header>
)
