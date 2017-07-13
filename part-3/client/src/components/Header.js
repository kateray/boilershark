import React from 'react'
import { Link } from 'react-router-dom'

require('../../css/Header.scss')

const Header = () => (
  <header className='header'>
    <Link to='/'>
      <h1>FishRates</h1>
    </Link>
  </header>
)

export default Header
