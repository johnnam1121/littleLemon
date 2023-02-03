import React from 'react'
import logo from '../assets/Logo.svg'

function Nav() {
  return (
    <nav>
      <img src={logo} alt='Main Logo'/>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservations">Reservations</a></li>
        <li><a href="/order">Order</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  )
}

export default Nav