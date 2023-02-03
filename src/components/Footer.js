import React from 'react'
import logo from '../assets/Logo.svg'

function Footer() {
  return (
    <>
      <img src={logo} alt='Main Logo' />
      <footer>
        <p>Doormat Navigation</p>
        <p>Contact Info</p>
        <p>Links to Social Media</p>
      </footer>
    </>
  )
}

export default Footer